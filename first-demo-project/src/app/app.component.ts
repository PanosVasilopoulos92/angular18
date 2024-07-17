import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NgFor,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-demo-project';
  users = DUMMY_USERS;
  // selectedUserId = 'u1';
  selectedUserId?: string;

  onSelectUser(id: string){
    this.selectedUserId = id; 
  }

  get user(){
    return this.users.find((el) => el.id === this.selectedUserId);
  }

}
