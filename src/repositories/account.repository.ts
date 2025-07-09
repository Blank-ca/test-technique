import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';

@Injectable()
export class AccountRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string) {
    return this.prisma.accounts.findUnique({
      where: { id },
    });
  }
}
