import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}
  async getOne(id: string) {
    const account = await this.accountRepository.getById(id);

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found.`);
    }

    return account;
  }
}
