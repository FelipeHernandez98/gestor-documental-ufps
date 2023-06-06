import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DepartmentService {

  private readonly logger = new Logger('DepartmentService');

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    private readonly dataSource: DataSource
  ){}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = await this.departmentRepository.create(createDepartmentDto);
      await this.departmentRepository.save(department);
      return department;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const department = await this.departmentRepository.find();
    if(department.length == 0){
      return "No hay registros en la BD"
    }else {
      return department;
    }
  }

  async findOne(id: number) {
    const department = await this.departmentRepository.findBy({ department_id: id})
    if( !department ) throw new NotFoundException(`El department con id ${id} no existe`); 
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.findOne({ where: {department_id: id}})
    const departmentActualizado = { ...department, ...updateDepartmentDto }
    if( !department ) throw new NotFoundException(`El department con id ${id} no existe`)
    try {
      await this.departmentRepository.save(departmentActualizado);
      return departmentActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    return await this.departmentRepository.remove(department);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
