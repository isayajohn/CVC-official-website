import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslationService } from "../core/translation.service";
import { isLocale } from "../core/types";
import { AppLayoutComponent } from "../admin-shared/layout/app-layout/app-layout.component";

@Component({
  selector: "app-admin-shell",
  standalone: true,
  imports: [AppLayoutComponent],
  template: `<app-layout />`,
})
export class AdminShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translation = inject(TranslationService);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const rawLocale = params.get("locale");
      const locale = this.translation.syncLocale(rawLocale);
      if (!isLocale(rawLocale)) {
        void this.router.navigateByUrl(`/${locale}/admin`);
      }
    });
  }
}
