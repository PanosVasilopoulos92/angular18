import { Component, EventEmitter, Input, computed, input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input({required: true}) userId!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({ required: true}) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get ImagePath() {
    return 'assets/images/users/' + this.user.avatar;
  }

  // using signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  // ImagePath = computed(()=> 'assets/images/users/' + this.avatar());

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
