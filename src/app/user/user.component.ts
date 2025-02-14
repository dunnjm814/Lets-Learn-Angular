import { Component, computed, signal, Input, Output, EventEmitter, input, output } from '@angular/core';
import { User } from './user.model';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // // set path via compute a value with signals
  // imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar)
  // // set path without signals via getter
  // // get imagePath(){
  // //   return 'assets/users/' + this.selectedUser.avatar;
  // // }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // starting section for flexible / reusable component definitions
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar! : string;
  // @Input() name! : string;
  // passing objects as inputs
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // use output() to create the automatic instance of event emitter
  // select = output<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
