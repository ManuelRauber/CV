import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-icon-link-list',
  standalone: true,
  imports: [],
  templateUrl: './icon-link-list.component.html',
  styleUrl: './icon-link-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkListComponent {}
