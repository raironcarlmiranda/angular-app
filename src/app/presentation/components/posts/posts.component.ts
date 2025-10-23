import { Component } from '@angular/core';
import { GetPostsUseCase } from '../../../domain/use-cases/get-posts.use-case';
import { Post } from '../../../domain/models/post';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  posts$!: Observable<Post[]>;

  constructor(private getPostsUseCase: GetPostsUseCase) {}

  ngOnInit(){
    this.getPosts();
  }

  async getPosts() {
    this.posts$ = this.getPostsUseCase.execute();
  }
}
