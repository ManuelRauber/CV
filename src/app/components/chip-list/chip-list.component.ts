import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  standalone: true,
  imports: [],
  templateUrl: './chip-list.component.html',
  styleUrl: './chip-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipListComponent {}
