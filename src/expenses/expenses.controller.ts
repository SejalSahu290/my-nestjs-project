/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense, ExpenseStatus } from './expense.model';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Get()
  getAllExpenses(): Expense[] {
    return this.expensesService.getAllExpenses();
  }


 @Get('/:id')
  getExpenseById(@Param('id')id: string): Expense{
   return this.expensesService.getExpenseById(id);
  }

  @Post()
  createExpense(@Body() CreateExpenseDto: CreateExpenseDto): Expense {
      return this.expensesService.createExpense(CreateExpenseDto);
  }

  @Delete('/:id')
  deleteExpense(@Param('id')id:string): void {
    return this.expensesService.deleteExpense(id);
  }
    
   @Patch('/:id')
   updateExpenseStatus(
    @Param('id') id: string,
    @Body('amount') amount: ExpenseStatus,
   ): Expense{
     return this.expensesService.updateExpenseStatus(id , amount)
   }


  }

