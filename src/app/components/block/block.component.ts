import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block',
  imports: [],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {}
