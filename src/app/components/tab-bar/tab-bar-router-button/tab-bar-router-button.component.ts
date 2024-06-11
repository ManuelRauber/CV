import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab-bar-router-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tab-bar-router-button.component.html',
  styleUrl: './tab-bar-router-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarRouterButtonComponent {
  link = input.required<any[]>();
}
