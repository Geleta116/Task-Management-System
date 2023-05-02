import { IsBoolean, IsDate, IsNotEmpty, IsString } from "class-validator";


export class CreateTaskDto {
      @IsNotEmpty({message: "please enter the title"})
      @IsString()
      title: string;

      @IsNotEmpty({message: "please enter the description"})
      @IsString()
      description: string;

      @IsNotEmpty({message: "please enter the due date"})
      @IsString()
      dueDate: Date;

    
      status: Boolean;
     
}
