import { Injectable } from '@angular/core';
import { TSGhostContentAPI } from '@ts-ghost/content-api';

export interface Meta {
  pagination: {
    limit: number;
    total: number;
  };
}

export interface LatestPost {
  title: string;
  url: string;
  excerpt: string;
  published_at: string;
  primary_tag: {
    name: string;
  };
  reading_time: number;
}

export interface GhostApiResult<TPostModel> {
  meta: Meta;
  data: TPostModel[];
}

const latestPostCacheKey = 'latest-posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private cache: { [key: string]: GhostApiResult<unknown> } = {};

  async preloadLatestPosts(): Promise<void> {
    const latestPosts = await this.getLatestPosts();

    if (!latestPosts) {
      return;
    }

    this.cache[latestPostCacheKey] = latestPosts;
  }

  async getLatestPosts(limit: number = 8, force: boolean = false): Promise<GhostApiResult<LatestPost> | undefined> {
    if (force) {
      delete this.cache[latestPostCacheKey];
    }

    if (this.cache[latestPostCacheKey]) {
      return this.cache[latestPostCacheKey] as GhostApiResult<LatestPost>;
    }

    const api = new TSGhostContentAPI(
      'https://manus-techblog.ghost.io',
      'fb456f9ef15b05b791f001a3e7', // this ends up on the website anyway, so we can set it here directly.
      'v5.47.0',
    );

    const posts = await api.posts
      .browse({
        limit,
      })
      .include({
        tags: true,
      })
      .fields({
        url: true,
        title: true,
        excerpt: true,
        published_at: true,
        primary_tag: true,
        reading_time: true,
        html: true, // required for reading time to work...
      })
      .fetch();

    if (!posts.success) {
      return;
    }

    const result = {
      meta: {
        ...posts.meta,
        pagination: {
          ...posts.meta.pagination,
          limit: posts.meta.pagination.limit === 'all' ? posts.meta.pagination.total : posts.meta.pagination.limit,
        },
      },
      data: posts.data as LatestPost[],
    };

    this.cache[latestPostCacheKey] = result;

    return result;
  }
}
