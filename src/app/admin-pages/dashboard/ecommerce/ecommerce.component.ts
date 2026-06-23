import { Component } from "@angular/core";
import { EcommerceMetricsComponent } from "../../../admin-shared/components/ecommerce/ecommerce-metrics/ecommerce-metrics.component";
import { MonthlySalesChartComponent } from "../../../admin-shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component";
import { MonthlyTargetComponent } from "../../../admin-shared/components/ecommerce/monthly-target/monthly-target.component";
import { StatisticsChartComponent } from "../../../admin-shared/components/ecommerce/statics-chart/statics-chart.component";
import { DemographicCardComponent } from "../../../admin-shared/components/ecommerce/demographic-card/demographic-card.component";
import { RecentOrdersComponent } from "../../../admin-shared/components/ecommerce/recent-orders/recent-orders.component";

@Component({
  selector: "app-ecommerce",
  imports: [
    EcommerceMetricsComponent,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
  ],
  templateUrl: "./ecommerce.component.html",
})
export class EcommerceComponent {}
