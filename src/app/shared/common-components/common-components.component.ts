import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MATERIAL_COMMON_IMPORTS } from "../angular-material.imports";
import {
  WEB_AWESOME_CHART_COMPONENTS,
  WEB_AWESOME_CHARTS_AVAILABLE,
} from "../webawesome.imports";

@Component({
  selector: "app-common-components",
  standalone: true,
  imports: [CommonModule, ...MATERIAL_COMMON_IMPORTS],
  templateUrl: "./common-components.component.html",
  styleUrl: "./common-components.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommonComponentsComponent {
  readonly chartComponents = WEB_AWESOME_CHART_COMPONENTS;
  readonly chartsAvailable = WEB_AWESOME_CHARTS_AVAILABLE;
  readonly reportDate = new Date("2026-06-18T12:30:00+03:00").toISOString();
  readonly fileSize = 48234496;
  readonly revenue = 12850000;

  dialogOpen = false;
}
