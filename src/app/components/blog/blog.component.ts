import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlogComponent {}