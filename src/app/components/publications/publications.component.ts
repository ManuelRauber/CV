import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { BlockHeadlineComponent } from '../block/block-headline/block-headline.component';
import { TextDividerComponent } from '../text-divider/text-divider.component';
import { LinkComponent } from '../link/link.component';
import { faAndroid, faApple, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faCalendar, faExternalLink, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { AvatarComponent } from '../avatar/avatar.component';
import { CalculateDurationPipe } from '../../pipes/calculate-duration.pipe';
import { ChipComponent } from '../chip-list/chip/chip.component';
import { ChipListComponent } from '../chip-list/chip-list.component';
import { ExperienceComponent } from '../experience/experience.component';
import { IconLinkComponent } from '../icon-link-list/icon-link/icon-link.component';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BlockComponent,
    BlockHeadlineComponent,
    TextDividerComponent,
    LinkComponent,
    AvatarComponent,
    CalculateDurationPipe,
    ChipComponent,
    ChipListComponent,
    ExperienceComponent,
    IconLinkComponent,
    IconTextComponent,
    FaIconComponent,
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PublicationsComponent {
  protected readonly faApple = faApple;
  protected readonly faAndroid = faAndroid;
  protected readonly faBriefcase = faBriefcase;
  protected readonly faLocationPin = faLocationPin;
  protected readonly faCalendar = faCalendar;
  protected readonly faExternalLink = faExternalLink;
  protected readonly faWindows = faWindows;
}
