import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CustomerService {

  private readonly logger = new Logger('CustomerService');

  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
    private readonly dataSource: DataSource
  ){}

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const customer = await this.customerRepository.create(createCustomerDto);
      await this.customerRepository.save(customer);
      return customer;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const customer = await this.customerRepository.find();
    if(customer.length == 0){
      return "No hay registros en la BD"
    }else {
      return customer;
    }
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findBy({ customer_id: id})
    if( !customer ) throw new NotFoundException(`El customer con id ${id} no existe`); 
    return customer;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.findOne({ where: {customer_id: id}})
    const customerActualizado = { ...customer, ...updateCustomerDto }
    if( !customer ) throw new NotFoundException(`El customer con id ${id} no existe`)
    try {
      await this.customerRepository.save(customerActualizado);
      return customerActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const customer = await this.findOne(id);
    return await this.customerRepository.remove(customer);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
