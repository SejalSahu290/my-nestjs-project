/* eslint-disable prettier/prettier */
import { ExpenseStatus } from "../expense.model";

export class CreateExpenseDto {
    id:'';
    title: string;
    description: string;
    amount:ExpenseStatus;
}