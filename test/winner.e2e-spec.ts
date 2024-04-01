// Example test using Jest and Supertest
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('WinnerController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/POST winners - Create a new winner', async () => {
    const data = { playerName: 'John', score: 100 };
    const response = await request(app.getHttpServer())
      .post('/winners')
      .send(data)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.playerName).toBe(data.playerName);
    expect(response.body.score).toBe(data.score);
  });

  it('/GET winners/leaderboard - Get leaderboard', async () => {
    const response = await request(app.getHttpServer())
      .get('/winners/leaderboard')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await app.close();
  });
});
