// AppModule.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winner } from './entities/winner.entity';
import { WinnerController } from './controllers/winner.controller';
import { WinnerService } from './services/winner.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // <-- Use the service name defined in docker-compose.yml
      port: 5432, // Default PostgreSQL port
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [Winner],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Winner]),
  ],
  controllers: [WinnerController],
  providers: [WinnerService],
})
export class AppModule {}
