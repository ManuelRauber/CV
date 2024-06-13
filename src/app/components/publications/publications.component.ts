import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicationsComponent {}
