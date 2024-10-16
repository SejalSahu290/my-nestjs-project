/* eslint-disable prettier/prettier */
export interface Expense {
    status: ExpenseStatus;
    id: string;
    title: string;
    description: string;
    amount: ExpenseStatus;
}

// export enum ExpenseStatus{
//     ID = 'id',
//   TITLE = 'title',
//   DESCRIPTION = 'description',
//   AMOUNT = 'amount',
// }

export enum ExpenseStatus{
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}