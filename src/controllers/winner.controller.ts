// src/controllers/winner.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { WinnerService } from '../services/winner.service';
import { Winner } from '../entities/winner.entity';

@Controller('winners')
export class WinnerController {
  constructor(private readonly winnerService: WinnerService) {}

  @Post()
  async createWinner(
    @Body() data: { playerName: string; score: number },
  ): Promise<Winner> {
    return await this.winnerService.createWinner(data.playerName, data.score);
  }

  @Get('leaderboard')
  async getLeaderboard(): Promise<Winner[]> {
    return await this.winnerService.getLeaderboard();
  }
}
