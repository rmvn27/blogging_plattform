import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { AuthController } from "@/controller/AuthController";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { loginPayloadSchema, registerPayloadSchema } from "@/model/authModels";
import { Router } from "express";

export class AuthRouter implements SiteRouter {
  readonly router: Router;
  readonly path: string = "/auth";

  constructor(controller: AuthController, commonMiddleware: CommonMiddleware) {
    this.router = Router();

    Route.post("/login")
      .use(commonMiddleware.validateBody(loginPayloadSchema))
      .handle(controller.login)
      .apply(this.router);

    Route.post("/register")
      .use(commonMiddleware.validateBody(registerPayloadSchema))
      .handle(controller.register)
      .apply(this.router);
  }
}
