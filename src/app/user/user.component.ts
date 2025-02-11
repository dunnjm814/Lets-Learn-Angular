import { Component, computed, signal, Input } from '@angular/core';

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
  @Input({required: true}) avatar! : string;
  @Input() name! : string;
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  onSelectUser(){}
}
