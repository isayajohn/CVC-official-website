import { inject, Injectable, computed, signal } from "@angular/core";
import { Router } from "@angular/router";
import { MESSAGES } from "./messages";
import { AppLocale, isLocale } from "./types";

@Injectable({ providedIn: "root" })
export class TranslationService {
  private readonly router = inject(Router);
  private readonly localeState = signal<AppLocale>("en");

  readonly locale = computed(() => this.localeState());
  readonly messages = computed(() => MESSAGES[this.locale()]);

  syncLocale(rawLocale: string | null | undefined): AppLocale {
    const locale = isLocale(rawLocale) ? rawLocale : "en";
    this.localeState.set(locale);
    return locale;
  }

  t(path: string): string {
    const result = this.lookup(path);
    return typeof result === "string" ? result : path;
  }

  list(path: string): string[] {
    const result = this.lookup(path);
    return Array.isArray(result)
      ? result.filter((item): item is string => typeof item === "string")
      : [];
  }

  path(suffix = ""): string {
    const normalized =
      suffix === "" || suffix === "/"
        ? ""
        : suffix.startsWith("/")
          ? suffix
          : `/${suffix}`;
    return `/${this.locale()}${normalized}`;
  }

  swapLocale(target: AppLocale): string {
    const [, locale, ...rest] = this.router.url.split("/");
    const remaining = isLocale(locale)
      ? rest
      : [locale, ...rest].filter(Boolean);
    return `/${target}${remaining.length ? `/${remaining.join("/")}` : ""}`;
  }

  private lookup(path: string): unknown {
    return path.split(".").reduce<unknown>((current, segment) => {
      if (current && typeof current === "object" && segment in current) {
        return (current as Record<string, unknown>)[segment];
      }

      return undefined;
    }, this.messages());
  }
}
