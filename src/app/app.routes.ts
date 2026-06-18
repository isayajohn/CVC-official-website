import { Routes } from "@angular/router";

import { adminGuard } from "./core/admin.guard";
import { AboutPageComponent } from "./pages/about/about.component";
import { AdminContentPageComponent } from "./pages/admin-content/admin-content.component";
import { AdminDashboardPageComponent } from "./pages/admin-dashboard/admin-dashboard.component";
import { AdminLoginPageComponent } from "./pages/admin-login/admin-login.component";
import { EventsPageComponent } from "./pages/events/events.component";
import { HomePageComponent } from "./pages/home/home.component";
import { MusicPageComponent } from "./pages/music/music.component";
import { ServicesPageComponent } from "./pages/services/services.component";
import { ShopPageComponent } from "./pages/shop/shop.component";
import { TicketsPageComponent } from "./pages/tickets/tickets.component";
import { AdminShellComponent } from "./shells/admin-shell.component";
import { PublicShellComponent } from "./shells/public-shell.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "en" },
  { path: ":locale/admin-login", component: AdminLoginPageComponent },
  {
    path: ":locale/admin",
    component: AdminShellComponent,
    canActivate: [adminGuard],
    children: [
      { path: "", component: AdminDashboardPageComponent },
      { path: "content", component: AdminContentPageComponent },
    ],
  },
  {
    path: ":locale",
    component: PublicShellComponent,
    children: [
      { path: "", component: HomePageComponent },
      { path: "music", component: MusicPageComponent },
      { path: "shop", component: ShopPageComponent },
      { path: "tickets", component: TicketsPageComponent },
      { path: "services", component: ServicesPageComponent },
      { path: "events", component: EventsPageComponent },
      { path: "about", component: AboutPageComponent },
    ],
  },
  { path: "**", redirectTo: "en" },
];
