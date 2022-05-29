import { Route } from "@/common/router";
import { SiteRouter } from "@/common/siteRouter";
import { AuthorArticleController } from "@/controller/AuthorArticleController";
import { AuthMiddleware } from "@/middleware/AuthMiddleware";
import { CommonMiddleware } from "@/middleware/CommonMiddleware";
import { articleSchema } from "@/model/authorArticleModels";
import { idParamsSchema } from "@/model/commonModels";
import { Router } from "express";

export class AuthorArticleRouter implements SiteRouter {
  readonly path: string = "/author/articles";
  readonly router: Router;

  constructor(
    controller: AuthorArticleController,
    commonMiddleware: CommonMiddleware,
    authMiddleware: AuthMiddleware,
  ) {
    this.router = Router();

    Route.get("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .handle(controller.readAll)
      .apply(this.router);

    Route.get("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.readSingle)
      .apply(this.router);

    Route.post("/")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateBody(articleSchema))
      .handle(controller.create)
      .apply(this.router);

    Route.delete("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .handle(controller.delete)
      .apply(this.router);

    Route.patch("/:id")
      .use(authMiddleware.userGuard("AUTHOR"))
      .use(commonMiddleware.validateParams(idParamsSchema))
      .use(commonMiddleware.validateBody(articleSchema.partial()))
      .handle(controller.update)
      .apply(this.router);
  }
}
