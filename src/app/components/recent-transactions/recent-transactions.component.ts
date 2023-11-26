import { Component } from '@angular/core';
import { transactions } from 'src/data/transactions';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';

export interface ITransactions {
  date: string;
  from: string;
  to: string;
  value: number;
  txId: string;
}

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
  providers: [DatePipe],
})
export class RecentTransactionsComponent {
  public transactions: ITransactions[] = transactions;
  public dataSource;
  public displayedColumns = ['date', 'from', 'to', 'value', 'txid'];

  constructor() {
    this.dataSource = this.transactions.map((transaction) => {
      console.log(new Date(transaction.date));
      return {
        ...transaction,
        date: new Date(transaction.date),
      };
    });
  }
}
