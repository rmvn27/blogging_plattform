import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    extras: unknown;
  }
}

export type RouteMethod = "get" | "post" | "delete" | "patch";

export interface Req<
  Body = unknown,
  Params = unknown,
  Query = unknown,
  Extras = unknown,
> {
  readonly body: Body;
  readonly params: Params;
  readonly query: Query;
  readonly extras: Extras;

  // Kept because sometimes for example the headers need to be accessed
  readonly actualRequest: Request;
}

export type Middleware<PrevRequest extends Req, NextReq extends Req> = (
  res: PrevRequest,
) => Promise<NextReq>;

export class HttpException {
  constructor(readonly message: string, readonly status: number = 400) {}
}