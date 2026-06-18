import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TICKET_EVENTS } from "../../core/site.data";
import { TranslationService } from "../../core/translation.service";
import { TicketEvent } from "../../core/types";

@Component({
  selector: "app-tickets-page",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.scss",
})
export class TicketsPageComponent {
  readonly ticketEvents = TICKET_EVENTS;
  readonly categories = ["All", "Concert", "Service", "Festival"];

  searchQuery = "";
  selectedCategory = "All";
  selectedEvent: TicketEvent | null = null;
  ticketQuantity = 1;
  statusMessage = "";

  constructor(private readonly translation: TranslationService) {}

  t(path: string): string {
    return this.translation.t(path);
  }

  filteredEvents() {
    return this.ticketEvents.filter((event) => {
      const matchesCategory =
        this.selectedCategory === "All" ||
        event.category === this.selectedCategory;
      const query = this.searchQuery.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        event.name.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }

  selectEvent(event: TicketEvent): void {
    this.selectedEvent = event;
    this.ticketQuantity = 1;
    this.statusMessage = "";
  }

  confirmPurchase(): void {
    if (!this.selectedEvent) return;
    this.statusMessage = `Booked ${this.ticketQuantity} ticket(s) for ${this.selectedEvent.name}.`;
    this.selectedEvent = null;
  }

  ticketTotal(): number {
    if (!this.selectedEvent) return 0;
    return (
      this.selectedEvent.price *
      (this.ticketQuantity < 1 ? 1 : this.ticketQuantity)
    );
  }

  formatDate(value: string): string {
    return new Intl.DateTimeFormat(this.translation.locale(), {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(value));
  }

  formatCurrency(value: number): string {
    return `TZS ${value.toLocaleString()}`;
  }
}
