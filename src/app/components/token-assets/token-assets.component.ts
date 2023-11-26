import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-token-assets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './token-assets.component.html',
  styleUrl: './token-assets.component.scss',
})
export class TokenAssetsComponent {}
