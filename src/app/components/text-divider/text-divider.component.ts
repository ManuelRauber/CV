import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-text-divider',
  imports: [DividerComponent],
  templateUrl: './text-divider.component.html',
  styleUrl: './text-divider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextDividerComponent {}
