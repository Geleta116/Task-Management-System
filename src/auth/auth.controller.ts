import { Body, Controller, Post, HttpCode, HttpStatus, ForbiddenException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: Record<string, any>) {
    const user = await this.usersService.findOne(signInDto.email);
   
    const passwordValid = await bcrypt.compare(signInDto.password, user.password)
    
    
    if (user && passwordValid) {
      const { password, ...result } = user;
      
      
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  else{
    throw new ForbiddenException("wrong credentials");;
  }
}
}