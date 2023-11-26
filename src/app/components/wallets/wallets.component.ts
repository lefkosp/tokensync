import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-wallets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.scss',
})
export class WalletsComponent {}
