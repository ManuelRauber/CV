import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  FaIconComponent,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkComponent {
  url = input.required();
  icon = input.required<IconDefinition>();
}
