import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-block-headline',
  standalone: true,
  imports: [],
  templateUrl: './block-headline.component.html',
  styleUrl: './block-headline.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockHeadlineComponent {}
