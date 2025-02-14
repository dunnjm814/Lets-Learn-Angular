import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lets-learn-angular';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((u)=> u.id === this.selectedUserId)!;
  }

  onSelectUser(id : string){
    console.log({id})
    this.selectedUserId = id;
  }
}
