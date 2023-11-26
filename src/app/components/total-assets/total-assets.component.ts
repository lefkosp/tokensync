import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-total-assets',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './total-assets.component.html',
  styleUrl: './total-assets.component.scss',
})
export class TotalAssetsComponent {}
