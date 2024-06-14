import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlockHeadlineComponent } from '../block/block-headline/block-headline.component';
import { BlockContentComponent } from '../block/block-content/block-content.component';
import { ExperienceComponent } from '../experience/experience.component';
import { BlockComponent } from '../block/block.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ChipComponent } from '../chip-list/chip/chip.component';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { faBriefcase, faCalendar, faExternalLink, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { CalculateDurationPipe } from '../../pipes/calculate-duration.pipe';
import { DividerComponent } from '../divider/divider.component';
import { IconLinkComponent } from '../icon-link-list/icon-link/icon-link.component';
import { faAndroid, faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { ChipListComponent } from '../chip-list/chip-list.component';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    BlockHeadlineComponent,
    BlockContentComponent,
    ExperienceComponent,
    BlockComponent,
    AvatarComponent,
    ChipComponent,
    IconTextComponent,
    CalculateDurationPipe,
    DividerComponent,
    IconLinkComponent,
    ChipListComponent,
    LinkComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResumeComponent {
  protected readonly faBriefcase = faBriefcase;
  protected readonly faLocationPin = faLocationPin;
  protected readonly faCalendar = faCalendar;
  protected readonly faApple = faApple;
  protected readonly faAndroid = faAndroid;
  protected readonly faYoutube = faYoutube;
  protected readonly faExternalLink = faExternalLink;
}
