import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TrustHtmlPipe } from '../../pipes/trust-html.pipe';

@Component({
  selector: 'app-key-value-list',
  standalone: true,
  imports: [TrustHtmlPipe],
  templateUrl: './key-value-list.component.html',
  styleUrl: './key-value-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyValueListComponent {
  data = input.required<[string, string][]>();
}
