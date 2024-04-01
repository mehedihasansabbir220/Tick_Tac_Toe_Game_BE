// src/services/winner.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Winner } from '../entities/winner.entity';

@Injectable()
export class WinnerService {
  constructor(
    @InjectRepository(Winner)
    private readonly winnerRepository: Repository<Winner>,
  ) {}

  async createWinner(playerName: string, score: number): Promise<Winner> {
    const winner = new Winner();
    winner.playerName = playerName;
    winner.score = score;
    return await this.winnerRepository.save(winner);
  }

  async getLeaderboard(): Promise<Winner[]> {
    return await this.winnerRepository.find({
      order: {
        score: 'DESC', // Order by score in descending order
      },
      take: 10, // Get top 10 winners
    });
  }
}
