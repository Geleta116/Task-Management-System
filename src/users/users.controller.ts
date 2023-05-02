import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
     {
        
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
        createUserDto.password = hashedPassword
        
        const result = await this.usersService.create(
          createUserDto
        );
    return result;
  }}

  @Get(':id')
  findOne(@Param('email') email: string) {
    
    return this.usersService.findOne(email);
  }

  @Get()
  findAll() {
    
    return this.usersService.findAll();

  }

  

  @Patch(':id')
  update(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {

    return this.usersService.update(email, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
