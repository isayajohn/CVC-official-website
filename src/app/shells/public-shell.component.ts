import { CommonModule } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { ContentService } from "../core/content.service";
import { SITE_ABBREVIATION, SITE_SHORT_NAME } from "../core/site.data";
import { TranslationService } from "../core/translation.service";
import { AppLocale, isLocale } from "../core/types";

@Component({
  selector: "app-public-shell",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="site-shell">

      <!-- ── Utility bar ─────────────────────────────────────────── -->
      <div class="utility-bar">
        <div class="container utility-bar__inner">
          <div class="utility-bar__contact">
            <a [href]="'tel:' + site().phone">
              <span class="material-symbols-outlined utility-bar__icon">phone</span>
              {{ site().phone }}
            </a>
            <a [href]="'mailto:' + site().email">
              <span class="material-symbols-outlined utility-bar__icon">mail</span>
              {{ site().email }}
            </a>
          </div>
          <div class="utility-bar__actions">
            <div class="locale-switch utility-bar__locale">
              <button
                type="button"
                [class.is-selected]="locale() === 'en'"
                (click)="switchLocale('en')"
              >EN</button>
              <button
                type="button"
                [class.is-selected]="locale() === 'sw'"
                (click)="switchLocale('sw')"
              >SW</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Main header ─────────────────────────────────────────── -->
      <header class="site-header">
        <div class="container nav-row">
          <a class="brand-mark" [routerLink]="link()">
            <img src="/logo-cvc.svg" alt="CVC logo" />
            <div>
              <strong>{{ siteName }}</strong>
              <span>{{ abbreviation }}</span>
            </div>
          </a>

          <nav class="desktop-nav">
            @for (item of navItems(); track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="is-active"
                [routerLinkActiveOptions]="{ exact: item.exact }"
              >{{ item.label }}</a>
            }
          </nav>

          <div class="header-actions">
            <a
              class="btn btn-secondary header-cta desktop-admin"
              [routerLink]="link('/tickets')"
            >{{ t("nav.getTickets") }}</a>
            <button
              type="button"
              class="icon-button mobile-toggle"
              (click)="mobileOpen.update((v) => !v)"
            >
              <span class="material-symbols-outlined icon">{{
                mobileOpen() ? "close" : "menu"
              }}</span>
            </button>
          </div>
        </div>

        @if (mobileOpen()) {
          <div class="mobile-nav">
            @for (item of navItems(); track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="is-active"
                [routerLinkActiveOptions]="{ exact: item.exact }"
                (click)="mobileOpen.set(false)"
              >{{ item.label }}</a>
            }
            <a
              class="btn btn-secondary"
              [routerLink]="link('/tickets')"
              (click)="mobileOpen.set(false)"
            >{{ t("nav.getTickets") }}</a>
          </div>
        }
      </header>

      <!-- ── Page content ────────────────────────────────────────── -->
      <main class="site-main">
        <router-outlet />
      </main>

      <!-- ── Footer ──────────────────────────────────────────────── -->
      <footer class="site-footer">

        <!-- Newsletter strip -->
        <div class="footer-newsletter">
          <div class="container footer-newsletter__inner">
            <div>
              <h3>{{ t("footer.newsletter") }}</h3>
              <p>{{ t("footer.newsletterSub") }}</p>
            </div>
            <form
              class="footer-newsletter__form"
              (submit)="$event.preventDefault()"
            >
              <input
                class="footer-newsletter__input"
                type="email"
                [placeholder]="t('footer.emailPlaceholder')"
              />
              <button type="submit" class="btn btn-secondary">
                {{ t("footer.subscribe") }}
              </button>
            </form>
          </div>
        </div>

        <!-- Four-column grid -->
        <div class="container footer-grid">

          <!-- Col 1 – Brand -->
          <div class="footer-column">
            <div class="brand-mark footer-brand">
              <img src="/logo-cvc.svg" alt="CVC logo" />
              <div>
                <strong>{{ siteName }}</strong>
                <span>{{ abbreviation }}</span>
              </div>
            </div>
            <p class="footer-tagline">{{ t("footer.tagline") }}</p>
            <p class="footer-address">{{ site().address }}</p>
            <div class="social-row">
              <a
                [href]="site().socials.facebook"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              ><span class="material-symbols-outlined">groups</span></a>
              <a
                [href]="site().socials.instagram"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              ><span class="material-symbols-outlined">photo_camera</span></a>
              <a
                [href]="site().socials.youtube"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              ><span class="material-symbols-outlined">play_circle</span></a>
            </div>
          </div>

          <!-- Col 2 – Explore -->
          <div class="footer-column">
            <h3>{{ t("footer.quickLinks") }}</h3>
            <div class="footer-links">
              @for (item of navItems(); track item.path) {
                <a [routerLink]="item.path">{{ item.label }}</a>
              }
            </div>
          </div>

          <!-- Col 3 – Services -->
          <div class="footer-column">
            <h3>{{ t("footer.services") }}</h3>
            <div class="footer-links">
              <a [routerLink]="link('/services')">Recording Studio</a>
              <a [routerLink]="link('/services')">Event Hall</a>
              <a [routerLink]="link('/services')">Event Management</a>
              <a [routerLink]="link('/services')">Ticketing Services</a>
            </div>
          </div>

          <!-- Col 4 – Contact -->
          <div class="footer-column">
            <h3>{{ t("footer.contact") }}</h3>
            <div class="footer-links footer-contact">
              <a [href]="'tel:' + site().phone">
                <span class="material-symbols-outlined footer-contact-icon">phone</span>
                {{ site().phone }}
              </a>
              <a [href]="'mailto:' + site().email">
                <span class="material-symbols-outlined footer-contact-icon">mail</span>
                {{ site().email }}
              </a>
              <span>
                <span class="material-symbols-outlined footer-contact-icon">location_on</span>
                {{ site().address }}
              </span>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="container footer-bottom">
          <p>{{ t("footer.copyright") }}</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>

      </footer>
    </div>
  `,
})
export class PublicShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly translation = inject(TranslationService);
  private readonly content = inject(ContentService);

  readonly mobileOpen = signal(false);
  readonly site = this.content.site;
  readonly locale = this.translation.locale;
  readonly navItems = computed(() => [
    { path: this.link(), label: this.t("nav.home"), exact: true },
    { path: this.link("/music"), label: this.t("nav.music"), exact: false },
    { path: this.link("/shop"), label: this.t("nav.shop"), exact: false },
    { path: this.link("/tickets"), label: this.t("nav.tickets"), exact: false },
    { path: this.link("/services"), label: this.t("nav.services"), exact: false },
    { path: this.link("/events"), label: this.t("nav.events"), exact: false },
    { path: this.link("/about"), label: this.t("nav.about"), exact: false },
    { path: this.link("/contact"), label: this.t("nav.contact"), exact: false },
  ]);

  readonly siteName = SITE_SHORT_NAME;
  readonly abbreviation = SITE_ABBREVIATION;

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const rawLocale = params.get("locale");
      const locale = this.translation.syncLocale(rawLocale);
      if (!isLocale(rawLocale)) {
        void this.router.navigateByUrl(`/${locale}`);
      }
    });

    void this.content.loadContent();
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }

  switchLocale(locale: AppLocale): void {
    this.mobileOpen.set(false);
    void this.router.navigateByUrl(this.translation.swapLocale(locale));
  }
}
