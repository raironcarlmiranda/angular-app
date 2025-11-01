import { Observable } from "rxjs";
import { Result } from "../../core/model/result";
import { User } from "../entities/user";

export interface UserRepository {
  getUsers(): Observable<Result<User[]>>;
}
