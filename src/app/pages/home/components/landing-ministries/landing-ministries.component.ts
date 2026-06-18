import { Component, inject } from "@angular/core";
import { MINISTRIES } from "../../../../core/site.data";
import { TranslationService } from "../../../../core/translation.service";

@Component({
  selector: "app-landing-ministries",
  standalone: true,
  templateUrl: "./landing-ministries.component.html",
  styleUrl: "./landing-ministries.component.scss",
})
export class LandingMinistriesComponent {
  private readonly translation = inject(TranslationService);

  readonly ministries = MINISTRIES;

  t(path: string): string {
    return this.translation.t(path);
  }
}
