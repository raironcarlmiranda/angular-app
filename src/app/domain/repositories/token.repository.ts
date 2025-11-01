export interface TokenRepository {
  get access_token(): string | null;
  get refresh_token(): string | null;
  get remember_me(): boolean;
  setTokens(access: string, refresh: string, remember: boolean): void;
  clearTokens(): void;
}
