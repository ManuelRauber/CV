import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {}
