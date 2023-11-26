import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-nft-assets',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './nft-assets.component.html',
  styleUrl: './nft-assets.component.scss',
})
export class NftAssetsComponent {}
