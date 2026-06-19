import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs";
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
        <div class="admin-sidebar__brand">
          <img src="/logo-cvc.svg" alt="CVC logo" />
          <div>
            <p class="eyebrow">CVC Admin</p>
            <h1>CMS</h1>
          </div>
        </div>

        <div class="admin-sidebar__scroll">
          <p class="admin-nav-label">Workspace</p>
          <nav class="admin-nav">
            <a
              [routerLink]="link('/admin')"
              routerLinkActive="is-active"
              [routerLinkActiveOptions]="{ exact: true }"
            >
              <span class="material-icons">dashboard</span>
              {{ t("admin.dashboard") }}
            </a>
            <a
              [routerLink]="link('/admin/content')"
              routerLinkActive="is-active"
            >
              <span class="material-icons">article</span>
              {{ t("admin.contentManager") }}
            </a>
            <a
              [routerLink]="link('/admin/components')"
              routerLinkActive="is-active"
            >
              <span class="material-icons">widgets</span>
              Components
            </a>
          </nav>

          <p class="admin-nav-label">Website</p>
          <nav class="admin-nav">
            <a [routerLink]="link()" class="back-link">
              <span class="material-icons">open_in_new</span>
              {{ t("common.backToSite") }}
            </a>
          </nav>
        </div>

        <div class="admin-sidebar__footer">
          <span class="admin-user-avatar">{{ userInitial }}</span>
          <div>
            <strong>{{ username }}</strong>
            <button type="button" (click)="logout()">
              {{ t("admin.signOut") }}
            </button>
          </div>
        </div>
      </aside>

      <section class="admin-workspace">
        <header class="admin-topbar">
          <div>
            <p class="eyebrow">Admin CMS</p>
            <h2>{{ pageTitle }}</h2>
          </div>

          <div class="admin-topbar__actions">
            <label class="admin-search">
              <span class="material-icons">search</span>
              <input type="search" placeholder="Search content" />
            </label>
            <a class="btn btn-secondary" [routerLink]="link('/admin/content')">
              <span class="material-icons button-icon">add</span>
              New Content
            </a>
          </div>
        </header>

        <main class="admin-main">
          <router-outlet />
        </main>
      </section>
    </div>
  `,
})
export class AdminShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translation = inject(TranslationService);
  private readonly auth = inject(AuthService);
  pageTitle = this.t("admin.dashboard");

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const rawLocale = params.get("locale");
      const locale = this.translation.syncLocale(rawLocale);
      if (!isLocale(rawLocale)) {
        void this.router.navigateByUrl(`/${locale}/admin`);
      }
    });

    this.setPageTitle(this.router.url);
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event) => this.setPageTitle(event.urlAfterRedirects));
  }

  get username(): string {
    return this.auth.username() ?? "Admin";
  }

  get userInitial(): string {
    return this.username.slice(0, 1).toUpperCase();
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

  private setPageTitle(url: string): void {
    if (url.includes("/admin/content")) {
      this.pageTitle = this.t("admin.contentManager");
      return;
    }

    if (url.includes("/admin/components")) {
      this.pageTitle = "Components";
      return;
    }

    this.pageTitle = this.t("admin.dashboard");
  }
}
