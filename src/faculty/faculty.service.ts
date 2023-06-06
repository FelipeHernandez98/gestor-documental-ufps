import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity';

@Injectable()
export class FacultyService {

  private readonly logger = new Logger('FacultyService');

  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepository: Repository<Faculty>,
    private readonly dataSource: DataSource
  ){}

  async create(createFacultyDto: CreateFacultyDto) {
    try {
      const faculty = await this.facultyRepository.create(createFacultyDto);
      await this.facultyRepository.save(faculty);
      return faculty;
    } catch (error) {
      this.handleDBExceptions(error)
    }
  }

  async findAll() {
    const faculty = await this.facultyRepository.find();
    if(faculty.length == 0){
      return "No hay registros en la BD"
    }else {
      return faculty;
    }
  }

  async findOne(id: number) {
    const faculty = await this.facultyRepository.findBy({ faculty_id: id})
    if( !faculty ) throw new NotFoundException(`El faculty con id ${id} no existe`); 
    return faculty;
  }

  async update(id: number, updateFacultyDto: UpdateFacultyDto) {
    const faculty = await this.facultyRepository.findOne({ where: {faculty_id: id}})
    const facultyActualizado = { ...faculty, ...updateFacultyDto }
    if( !faculty ) throw new NotFoundException(`El faculty con id ${id} no existe`)
    try {
      await this.facultyRepository.save(facultyActualizado);
      return facultyActualizado;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const faculty = await this.findOne(id);
    return await this.facultyRepository.remove(faculty);
  }

  private handleDBExceptions ( error: any ){
    if(error.code === '23505'){
      throw new BadRequestException(error.detail);
    }
    
    this.logger.error(error)
    throw new InternalServerErrorException('Error desconocido, revisar logs del servidor');
  }
}
