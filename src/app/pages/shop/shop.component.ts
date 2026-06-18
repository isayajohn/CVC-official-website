import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PRODUCTS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";

@Component({
  selector: "app-shop-page",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.scss",
})
export class ShopPageComponent {
  readonly products = PRODUCTS;
  readonly categories = ["All", "Albums", "Apparel", "Books"];

  searchQuery = "";
  selectedCategory = "All";

  constructor(private readonly translation: TranslationService) {}

  t(path: string): string {
    return this.translation.t(path);
  }

  filteredProducts() {
    return this.products.filter((product) => {
      const matchesCategory =
        this.selectedCategory === "All" ||
        product.category === this.selectedCategory;
      const query = this.searchQuery.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }

  formatCurrency(value: number): string {
    return `TZS ${value.toLocaleString()}`;
  }
}
