import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  ticketDetailsVisible = signal<boolean>(true);
  closeTicket = output();

  onToggleDetails() {
    this.ticketDetailsVisible.set(!this.ticketDetailsVisible());
  }

  onMarkedAsClosed() {
    this.closeTicket.emit();
  }
}
