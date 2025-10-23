import { Injectable } from '@angular/core';
import { PostRepository } from '../../domain/repositories/post-repository';
import { Post } from '../../domain/models/post';
import { Observable } from 'rxjs';
import { PostService } from '../sources/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostRepositoryImpl implements PostRepository {

  constructor(private postService: PostService) {}

  getPosts(): Observable<Post[]> {
    return this.postService.all();
  }
}
