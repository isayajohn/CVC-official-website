import { bootstrapApplication } from "@angular/platform-browser";
import "./app/shared/webawesome-core.imports";
import { appConfig } from "./app/app.config";
import { App } from "./app/app";

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
