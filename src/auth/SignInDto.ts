import { IsNotEmpty, IsString } from "class-validator";
import { Unique } from "typeorm";


export class SignInDto {
     
      @IsNotEmpty({message: "please enter your email"})
      @IsString()
      email: string;

      @IsNotEmpty({message: "please enter password"})
      @IsString()
      password: string;
      
}