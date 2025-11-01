import { Observable } from "rxjs";
import { Result } from "../../core/model/result";
import { LoginResponse } from "../../data/model/login.response";
import { LoginRequest } from "../../data/model/login.request";

export interface AuthRepository {
  login(body: LoginRequest): Observable<Result<LoginResponse>>;
}
