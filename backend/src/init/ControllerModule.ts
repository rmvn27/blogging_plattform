import { AuthController } from "@/controller/AuthController";
import { RegisterCodeController } from "@/controller/RegisterCodeController";
import { EnvironmentModule } from "./EnvironmentModule";
import { ServiceModule } from "./ServiceModule";

export class ControllerModule {
  readonly authController: AuthController;
  readonly registerCodeController: RegisterCodeController;

  constructor(services: ServiceModule, environment: EnvironmentModule) {
    this.authController = new AuthController(
      services.databaseService,
      environment.jwtSecret,
      environment.adminRegisterCode,
    );

    this.registerCodeController = new RegisterCodeController(
      services.databaseService,
    );
  }
}
