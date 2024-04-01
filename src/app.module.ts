import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winner } from './entities/winner.entity';
import { WinnerController } from './controllers/winner.controller';
import { WinnerService } from './services/winner.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'tick-tack',
      password: 'tick-tack2024',
      database: 'tick-tack-DB',
      entities: [Winner], // Change this to just the entity class itself, not the file path
      synchronize: true, // Make sure to set this to false in production
    }),
    TypeOrmModule.forFeature([Winner]),
  ],
  controllers: [WinnerController],
  providers: [WinnerService],
})
export class AppModule {}
