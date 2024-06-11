import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block-navigation',
  standalone: true,
  imports: [],
  templateUrl: './block-navigation.component.html',
  styleUrl: './block-navigation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockNavigationComponent {}
