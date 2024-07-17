import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // With ViewChild I can access every HTML element that exist in my Component's template.
  // Inside ViewChild() I should pass a template variable or a Component selector if I want access to a Component instance.
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private formSignal = viewChild<ElementRef<HTMLFormElement>>('form'); // v17.3+
  @Output() addTicket = new EventEmitter<{ title: string, request: string }>();
  addTicketSignal = output<{ title: string, request: string }>();

  // onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement, form: HTMLFormElement) {
  onSubmit(title: HTMLInputElement, request: HTMLTextAreaElement) {
    console.dir(title);
    console.log(title.value, request.value);
    this.addTicket.emit({ title: title.value, request: request.value });
    console.log(title.value, request.value);

    // this.form?.nativeElement.reset();
    this.formSignal()?.nativeElement.reset(); // v17.3+
  }
}
