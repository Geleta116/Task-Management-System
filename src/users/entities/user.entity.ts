
import { Task } from "src/tasks/entities/task.entity";
import { OneToMany, Column, Entity, PrimaryGeneratedColumn, JoinColumn, BeforeInsert, Unique } from "typeorm";
import * as bcrypt from 'bcryptjs';
 
@Entity('users')
export class User {
      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;
      
      
      @Column()
      email: string;

      @Column()
      password: string;
      
      @OneToMany(() => Task, (task) => task.user, {eager: true})
      task: Task[];

      @BeforeInsert()
      hashPassword(){
            this.password = bcrypt.hashSync(this.password, 10);
      }
      
}
