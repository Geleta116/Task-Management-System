import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(User) private readonly repo: Repository<User>){}
  
  async create(createUserDto: CreateUserDto) {
    let user = await this.repo.findOneBy({email: createUserDto.email});
    
    if (!user){
    return await this.repo.save(createUserDto);
  }
  else{
    throw new ForbiddenException("email already in use");
  }
    
  }



  async findAll() {
    return await this.repo.find();
  }

  async findOne(email:string) {
    const user = await this.repo.findOneBy({email: email});
    if(!user){
      throw new BadRequestException("user not found");
    }
    return user;
  }

  async update(email: string, updateUserDto: UpdateUserDto) {
    return await this.repo.update(email,updateUserDto);
  }

  async remove(id: number) {
    return await this.repo.delete({id: id});
  }
}
