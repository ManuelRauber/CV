import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tab-bar-router-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-bar-router-button.component.html',
  styleUrl: './tab-bar-router-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarRouterButtonComponent {
  link = input.required<any[]>();

  private elementRef = inject(ElementRef<HTMLElement>);

  protected scrollToSelf() {
    this.elementRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
