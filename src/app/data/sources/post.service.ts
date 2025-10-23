import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../domain/models/post";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  all(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
