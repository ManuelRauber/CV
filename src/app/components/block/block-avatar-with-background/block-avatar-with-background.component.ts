import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-block-avatar-with-background',
  standalone: true,
  templateUrl: './block-avatar-with-background.component.html',
  styleUrl: './block-avatar-with-background.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockAvatarWithBackgroundComponent {
  url = input.required<string>();
  alt = input.required<string>();
}
