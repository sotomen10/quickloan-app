import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';


@Controller('loans')
export class LoansController {
    @Post()
    createLoan(@Body() createLoanDto: any): string {
        return `Loan created for ${createLoanDto.userId}`;
    }

    @Get(':id')
    getLoanStatus(@Param('id') id: string): string {
        return `Status of loan ${id}`;
    }

    @Get()
    findLoans(
        @Query('userId') userId?: string,
        @Query('amount') amount?: number
    ): string {
        return `Finding loans for userId =${userId} and amount=${amount}`;
    }
}
