import { Observable } from "rxjs";
import { Post } from "../models/post";

export interface PostRepository {
  getPosts(): Observable<Post[]>;
}
