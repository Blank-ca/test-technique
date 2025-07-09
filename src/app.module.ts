import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma.module';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { AccountRepository } from './repositories/account.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
})
export class AppModule {}
