import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [FaIconComponent, LinkComponent],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLinkComponent {
  url = input.required<string>();
  icon = input.required<IconDefinition>();
}
