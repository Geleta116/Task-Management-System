import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private readonly repo: Repository<Task>){}
  async create(createTaskDto: CreateTaskDto, user: any) {
    const task = new Task();
    
    
    Object.assign(task, createTaskDto);
    
    task.userId = user
    this.repo.create(task);
    return await this.repo.save(task);
  }
  
  async findAll(query?: string) {  
    return await this.repo.find();
  }

  async findOne(id: number) {
    const task = await this.repo.findBy({userId: id});
    if(!task){
      throw new BadRequestException("Task not found");
    }
    return task;
  }

  async findOneTask(id: number) {
    const task = await this.repo.findBy({id: id});
    if(!task){
      throw new BadRequestException("Task not found");
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
   return this.repo.update(id,updateTaskDto);
  }



  async remove(id: number) {
    return await this.repo.delete({id: id});
  }
}
