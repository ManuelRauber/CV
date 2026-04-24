import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  imports: [],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent {}
