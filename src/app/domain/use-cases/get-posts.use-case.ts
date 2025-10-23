import { Inject, Injectable } from "@angular/core";
import { Post } from "../models/post";
import { PostRepository } from "../repositories/post-repository";
import { POST_REPOSITORY } from "../../application/ports/token-injections";
import { Observable } from "rxjs";

@Injectable()
export class GetPostsUseCase {
  constructor(
    @Inject(POST_REPOSITORY) private postRepository: PostRepository) {}

  execute(): Observable<Post[]> {
    return this.postRepository.getPosts();
  }
}
