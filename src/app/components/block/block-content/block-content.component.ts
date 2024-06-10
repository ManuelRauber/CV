import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block-content',
  standalone: true,
  imports: [],
  templateUrl: './block-content.component.html',
  styleUrl: './block-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockContentComponent {}
