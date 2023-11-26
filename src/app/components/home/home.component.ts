import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NftAssetsComponent } from '../nft-assets/nft-assets.component';
import { TotalAssetsComponent } from '../total-assets/total-assets.component';
import { TokenAssetsComponent } from '../token-assets/token-assets.component';
import { RecentTransactionsComponent } from '../recent-transactions/recent-transactions.component';
import { WalletsComponent } from '../wallets/wallets.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    NftAssetsComponent,
    TotalAssetsComponent,
    TokenAssetsComponent,
    RecentTransactionsComponent,
    WalletsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
