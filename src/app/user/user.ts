import { Component, EventEmitter, Input, Output, /*computed, signal, WritableSignal, input, output*/} from '@angular/core';
import { USER } from './user.model';
//import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: USER;
  @Input({required: true}) selected!: boolean;

  @Output() currentUserSelected = new EventEmitter<string>();
  
  get imagePath(): string { return 'assets/' + this.user.avatar; }

  onSelectUser(): void {
    this.currentUserSelected.emit(this.user.id);
  }

}







  /*** Example using SIGNALS (new way) ***/
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  // Signals for inputs (readonly means it cannot be changed, only from the outside)
  // readonly avatar = input.required<string>();
  // readonly name = input.required<string>();

  // Signals for outputs
  // currentUserSelected = output<string>();

  // Signals for selected user
  // selectedUser: WritableSignal<USER> = signal(DUMMY_USERS[randomIndex]);

  // Computed value for image path
  // imagePath = computed(() => 'assets/' + this.avatar());

  // For signal values use the set method to update the value
  /* onSelectUser(): void {
    this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
  }*/