export {};

declare global {
  namespace Express {
      export interface Response {
        api(body: Record<string, any> | Array<Record<string, any>>): void;
        error(body: Record<string, any> | Array<Record<string, any>>): void;
      }
  }
}
