import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  url = input.required<string>();
}
