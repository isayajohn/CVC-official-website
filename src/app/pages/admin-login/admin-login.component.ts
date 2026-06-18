import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AuthService } from "../../core/auth.service";
import { SITE_NAME } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-admin-login-page",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./admin-login.component.html",
  styleUrl: "./admin-login.component.scss",
})
export class AdminLoginPageComponent {
  readonly siteName = SITE_NAME;

  username = "";
  password = "";
  isLoading = false;
  errorMessage = "";

  constructor(
    private readonly translation: TranslationService,
    private readonly auth: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.route.paramMap.subscribe((params) =>
      this.translation.syncLocale(params.get("locale")),
    );
  }

  t(path: string): string {
    return this.translation.t(path);
  }

  link(path = ""): string {
    return this.translation.path(path);
  }

  async submit(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    const redirect = this.route.snapshot.queryParamMap.get("redirect");
    const response = await this.auth.login(this.username, this.password);
    this.isLoading = false;

    if (!response.ok) {
      this.errorMessage =
        response.message ?? this.t("admin.invalidCredentials");
      return;
    }

    await this.router.navigateByUrl(redirect || this.link("/admin"));
  }
}
