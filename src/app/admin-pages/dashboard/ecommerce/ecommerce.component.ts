import { Component, inject } from "@angular/core";
import { EcommerceMetricsComponent } from "../../../admin-shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component";
import { MonthlySalesChartComponent } from "../../../admin-shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component";
import { MonthlyTargetComponent } from "../../../admin-shared/components/ecommerce/monthly-target/monthly-target.component";
import { StatisticsChartComponent } from "../../../admin-shared/components/ecommerce/statics-chart/statics-chart.component";
import { DemographicCardComponent } from "../../../admin-shared/components/ecommerce/demographic-card/demographic-card.component";
import { RecentOrdersComponent } from "../../../admin-shared/components/ecommerce/recent-orders/recent-orders.component";
import { PageBreadcrumbComponent } from "../../../admin-shared/components/common/page-breadcrumb/page-breadcrumb.component";
import { ButtonComponent } from "../../../admin-shared/components/ui/button/button.component";
import { TranslationService } from "../../../core/translation.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-ecommerce",
  imports: [
    EcommerceMetricsComponent,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
    PageBreadcrumbComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: "./ecommerce.component.html",
})
export class EcommerceComponent {
  private readonly translation = inject(TranslationService);

  get newInvoiceLink(): string {
    return this.translation.path("/admin/invoice");
  }
}
