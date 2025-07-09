import { Controller, Get, Param } from '@nestjs/common';
import { AccountService } from '../services/account.service';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.accountService.getOne(id);
  }
}
