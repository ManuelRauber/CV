import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {}
