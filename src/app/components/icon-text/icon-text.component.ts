import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaIconComponent, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon-text',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTextComponent {
  icon = input.required<IconDefinition>();
}
