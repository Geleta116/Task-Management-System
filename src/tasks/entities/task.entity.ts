import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tasks')
export class Task {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      @Column()
      description: string;

      @Column({default: false})
      status: Boolean;

      @Column()
      userId:number;

      @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
      dueDate: Date;

      @ManyToOne(()=>User, (user) => user.task)
      @JoinColumn({name: 'userId' , referencedColumnName:'id'})
      user: User;

}
