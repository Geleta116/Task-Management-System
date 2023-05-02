import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { TasksController } from './tasks/tasks.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'yeneta',
            entities: [],
            autoLoadEntities: true,
            synchronize: true,}
          ), 
   UsersModule,
   AuthModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
