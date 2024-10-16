/* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { Expense, ExpenseStatus } from './expense.model';
// import { v4 as uuidv4 } from 'uuid';
// import { CreateExpenseDto } from './dto/create-expense.dto';

// @Injectable()
// export class ExpensesService {
//     private expenses: Expense[] = [];

//     getAllExpenses(): Expense[]{
//         return this.expenses;
//     }

//     getExpenseById(id: string ): Expense{
//        return this.expenses.find((expense) => expense.id === id);
//     }

//     createExpense(createExpenseDto: CreateExpenseDto): Expense {
//         const {title , description } = createExpenseDto;
//         const expense : Expense = {
//           id: uuidv4(),
//           title,
//           description,
//           amount: ExpenseStatus.OPEN,
//         };
    
//         this.expenses.push(expense); 
//         return expense; 
//       }

//       deleteExpense(id:string): void{
//           this.expenses = this.expenses.filter((expense) => expense.id !== id)
//       }


//       updateExpenseStatus(id: string, amount: ExpenseStatus){
//         const expense = this.getExpenseById(id);
//         expense.amount = amount;
//         return expense;
//       }
// }


/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Expense, ExpenseStatus } from './expense.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Injectable()
export class ExpensesService {
    private expenses: Expense[] = [];

    // Fetch all expenses
    getAllExpenses(): Expense[] {
        return this.expenses;
    }

    // Get an expense by its ID
    getExpenseById(id: string): Expense {
        return this.expenses.find((expense) => expense.id === id);
    }

    // Create a new expense
    createExpense(createExpenseDto: CreateExpenseDto): Expense {
        const { title, description, amount } = createExpenseDto; // Ensure amount is coming from DTO
        const expense: Expense = {
            id: uuidv4(),
            title,
            description,
            amount, // This should be a number, passed from DTO
            status: ExpenseStatus.OPEN, // Initialize with OPEN status
        };

        this.expenses.push(expense);
        return expense;
    }

    // Delete an expense by its ID
    deleteExpense(id: string): void {
        this.expenses = this.expenses.filter((expense) => expense.id !== id);
    }

    // Update the status of an expense
    updateExpenseStatus(id: string, status: ExpenseStatus): Expense {
        const expense = this.getExpenseById(id);
        if (expense) {
            expense.status = status; // Update the status field
        }
        return expense;
    }
}

