import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'ula-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  @Input() userList: Array<User> = [];
  // @Output() closeFormEvent = new EventEmitter<boolean>();
  @Input() isFormVisible: boolean = false;
  _users = this.userListService.users$;

  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    // console.log('ngOnInit');
    this.userList = this.userListService.getUsers();
  }

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
    // this.closeFormEvent.emit(this.isFormVisible);
  }
}