/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses/expenses.controller';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [ExpensesModule],
  controllers: [ ExpensesController],
  providers: [ExpensesService] ,
})
export class AppModule {}
