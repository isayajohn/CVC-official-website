import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { AuthService } from "../core/auth.service";
import { TranslationService } from "../core/translation.service";
import { isLocale } from "../core/types";

@Component({
  selector: "app-admin-shell",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div>
          <p class="eyebrow">CVC Admin</p>
          <h1>{{ t("admin.dashboard") }}</h1>
          <p class="admin-copy">{{ t("admin.welcomeSubtitle") }}</p>
        </div>

        <nav class="admin-nav">
          <a
            [routerLink]="link('/admin')"
            routerLinkActive="is-active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            {{ t("admin.dashboard") }}
          </a>
          <a [routerLink]="link('/admin/content')" routerLinkActive="is-active">
            {{ t("admin.contentManager") }}
          </a>
          <a [routerLink]="link()" class="back-link">{{
            t("common.backToSite")
          }}</a>
        </nav>

        <button type="button" class="btn btn-ghost" (click)="logout()">
          {{ t("admin.signOut") }}
        </button>
      </aside>

      <section class="admin-main">
        <router-outlet />
      </section>
    </div>
  `,
})
export class AdminShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translation = inject(TranslationService);
  private readonly auth = inject(AuthService);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const rawLocale = params.get("locale");
      const locale = this.translation.syncLocale(rawLocale);
      if (!isLocale(rawLocale)) {
        void this.router.navigateByUrl(`/${locale}/admin`);
      }
    });
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }

  async logout(): Promise<void> {
    await this.auth.logout();
    await this.router.navigateByUrl(this.link("/admin-login"));
  }
}
