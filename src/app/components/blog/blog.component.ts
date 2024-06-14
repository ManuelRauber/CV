import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { BlogService, GhostApiResult, LatestPost } from './blog.service';
import { BlockComponent } from '../block/block.component';
import { LinkComponent } from '../link/link.component';
import { BlockHeadlineComponent } from '../block/block-headline/block-headline.component';
import { DatePipe, JsonPipe } from '@angular/common';
import { ExperienceComponent } from '../experience/experience.component';
import { BlockContentComponent } from '../block/block-content/block-content.component';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { faCalendar, faClock, faTag } from '@fortawesome/free-solid-svg-icons';
import { DividerComponent } from '../divider/divider.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlockComponent,
    BlockHeadlineComponent,
    LinkComponent,
    JsonPipe,
    ExperienceComponent,
    BlockContentComponent,
    IconTextComponent,
    DatePipe,
    DividerComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlogComponent implements OnInit {
  blogService = inject(BlogService);
  posts = signal<GhostApiResult<LatestPost> | undefined>(undefined);

  async ngOnInit(): Promise<void> {
    const posts = await this.blogService.getLatestPosts();

    this.posts.set(posts);
  }

  protected readonly faCalendar = faCalendar;
  protected readonly faTag = faTag;
  protected readonly faClock = faClock;
}
