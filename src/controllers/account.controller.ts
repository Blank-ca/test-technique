import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get account by id.' })
  @ApiParam({
    name: 'id',
    description: 'ID of the account to fetch, UUID format.',
    example: '0197efd0-fda2-7954-979e-ddd14fbe51dd',
  })
  @ApiResponse({
    status: 200,
    description: 'The account is successfully returned.',
  })
  @ApiResponse({
    status: 404,
    description: 'The account is not found.',
  })
  @ApiResponse({
    status: 400,
    description: "The 'id' parameter is not a UUID.",
  })
  async getOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.accountService.getOne(id);
  }
}
