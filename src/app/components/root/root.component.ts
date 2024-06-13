import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlockComponent } from '../block/block.component';
import { BlockHeadlineComponent } from '../block/block-headline/block-headline.component';
import { BlockContentComponent } from '../block/block-content/block-content.component';
import { BlockNameComponent } from '../block/block-name/block-name.component';
import { BlockAvatarWithBackgroundComponent } from '../block/block-avatar-with-background/block-avatar-with-background.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ChipListComponent } from '../chip-list/chip-list.component';
import { ChipComponent } from '../chip-list/chip/chip.component';
import { DividerComponent } from '../divider/divider.component';
import { IconLinkListComponent } from '../icon-link-list/icon-link-list.component';
import { IconLinkComponent } from '../icon-link-list/icon-link/icon-link.component';
import { faEnvelope, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { KeyValueListComponent } from '../key-value-list/key-value-list.component';
import { BlockNavigationComponent } from '../block/block-navigation/block-navigation.component';
import { TabBarComponent } from '../tab-bar/tab-bar.component';
import { TabBarRouterButtonComponent } from '../tab-bar/tab-bar-router-button/tab-bar-router-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BlockComponent,
    BlockHeadlineComponent,
    BlockContentComponent,
    BlockNameComponent,
    BlockAvatarWithBackgroundComponent,
    AvatarComponent,
    ChipListComponent,
    ChipComponent,
    DividerComponent,
    IconLinkListComponent,
    IconLinkComponent,
    KeyValueListComponent,
    BlockNavigationComponent,
    TabBarComponent,
    TabBarRouterButtonComponent,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent {
  yearsOfExperience = signal(new Date().getFullYear() - 2012);
  protected readonly faExternalLink = faExternalLink;
  protected readonly faGithub = faGithub;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faEnvelope = faEnvelope;
}
