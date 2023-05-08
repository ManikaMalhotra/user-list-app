import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UserListService } from 'src/app/services/user-list.service';

@Component({
  selector: 'ula-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  // @Output() closeFormEvent = new EventEmitter<boolean>();
  userForm!: FormGroup;
  user: User = {
    id: '',
    name: '',
    dob: new Date(),
    email: '',
    phone: '',
    workEnvironment: 'Hybrid',
    remarks: ''
  };
  isFormVisible: boolean = true;

  constructor(private formBuilder: FormBuilder, private userListService: UserListService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(this.user.id, [Validators.required, Validators.minLength(3)]),
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(3)]),
      dob: new FormControl(this.user.dob, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone, [Validators.required, Validators.minLength(10)]),
      workEnvironment: new FormControl(this.user.workEnvironment, [Validators.required]),
      remarks: new FormControl(this.user.remarks)
    });
  }

  get id() { return this.userForm.get('id'); }
  get name() { return this.userForm.get('name'); }
  get dob() { return this.userForm.get('dob'); }
  get email() { return this.userForm.get('email'); }
  get phone() { return this.userForm.get('phone'); }
  get workEnvironment() { return this.userForm.get('workEnvironment'); }
  get remarks() { return this.userForm.get('remarks'); }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userListService.addUser(this.userForm.value);
      this.userForm.reset();
      this.closeForm();
    }
  }

  closeForm(): void {
    // this.closeFormEvent.emit(false);
    this.isFormVisible = !this.isFormVisible;
  }
}