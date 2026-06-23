import { Routes } from "@angular/router";

import { adminGuard } from "./core/admin.guard";
import { AboutPageComponent } from "./pages/about/about.component";
import { ContactPageComponent } from "./pages/contact/contact.component";
import { EventsPageComponent } from "./pages/events/events.component";
import { HomePageComponent } from "./pages/home/home.component";
import { MusicPageComponent } from "./pages/music/music.component";
import { NewsPageComponent } from "./pages/news/news.component";
import { ServicesPageComponent } from "./pages/services/services.component";
import { ShopPageComponent } from "./pages/shop/shop.component";
import { TicketsPageComponent } from "./pages/tickets/tickets.component";
import { AdminShellComponent } from "./shells/admin-shell.component";
import { PublicShellComponent } from "./shells/public-shell.component";

export const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "en" },
  {
    path: "admin/login",
    loadComponent: () =>
      import("./admin-pages/auth-pages/sign-in/sign-in.component").then(
        (m) => m.SignInComponent,
      ),
  },
  { path: ":locale/admin-login", redirectTo: "admin/login" },
  {
    path: ":locale/admin",
    component: AdminShellComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
          import(
            "./admin-pages/dashboard/ecommerce/ecommerce.component"
          ).then((m) => m.EcommerceComponent),
      },
      {
        path: "calendar",
        loadComponent: () =>
          import("./admin-pages/calender/calender.component").then(
            (m) => m.CalenderComponent,
          ),
      },
      {
        path: "profile",
        loadComponent: () =>
          import("./admin-pages/profile/profile.component").then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: "form-elements",
        loadComponent: () =>
          import(
            "./admin-pages/forms/form-elements/form-elements.component"
          ).then((m) => m.FormElementsComponent),
      },
      {
        path: "basic-tables",
        loadComponent: () =>
          import(
            "./admin-pages/tables/basic-tables/basic-tables.component"
          ).then((m) => m.BasicTablesComponent),
      },
      {
        path: "invoice",
        loadComponent: () =>
          import("./admin-pages/invoices/invoices.component").then(
            (m) => m.InvoicesComponent,
          ),
      },
      {
        path: "line-chart",
        loadComponent: () =>
          import(
            "./admin-pages/charts/line-chart/line-chart.component"
          ).then((m) => m.LineChartComponent),
      },
      {
        path: "bar-chart",
        loadComponent: () =>
          import("./admin-pages/charts/bar-chart/bar-chart.component").then(
            (m) => m.BarChartComponent,
          ),
      },
      {
        path: "alerts",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/alerts/alerts.component"
          ).then((m) => m.AlertsComponent),
      },
      {
        path: "avatars",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/avatar-element/avatar-element.component"
          ).then((m) => m.AvatarElementComponent),
      },
      {
        path: "badge",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/badges/badges.component"
          ).then((m) => m.BadgesComponent),
      },
      {
        path: "buttons",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/buttons/buttons.component"
          ).then((m) => m.ButtonsComponent),
      },
      {
        path: "images",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/images/images.component"
          ).then((m) => m.ImagesComponent),
      },
      {
        path: "videos",
        loadComponent: () =>
          import(
            "./admin-pages/ui-elements/videos/videos.component"
          ).then((m) => m.VideosComponent),
      },
      {
        path: "blank",
        loadComponent: () =>
          import("./admin-pages/blank/blank.component").then(
            (m) => m.BlankComponent,
          ),
      },
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
      { path: "news", component: NewsPageComponent },
      { path: "about", component: AboutPageComponent },
      { path: "contact", component: ContactPageComponent },
    ],
  },
  { path: "**", redirectTo: "en" },
];
