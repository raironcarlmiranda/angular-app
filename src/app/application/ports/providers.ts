import { Provider } from '@angular/core';
import { POST_REPOSITORY } from './token-injections';
import { PostRepositoryImpl } from '../../data/repositories/post.repository.impl';
import { GetPostsUseCase } from '../../domain/use-cases/get-posts.use-case';

export const APP_PROVIDERS: Provider[] = [
  GetPostsUseCase,
  {
    provide: POST_REPOSITORY,
    useClass: PostRepositoryImpl
  }
];
