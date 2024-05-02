import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ){
    this.userForm = this.formBuilder.group({
      _id: [''],
      userName: [''],
      firstName: [''],
      lastName:[''],
      email: [''],
      phone: [''],
      _roleId: [''],
      roleName: [''],
      permissionId: [''],
      isRead: [''],
      isWrite: [''],
      isDeleted: [''],
    })
  }

  onSubmit(): any {
    this.crudService.AddUser(this.userForm.value)
    .subscribe(() => {
      console.log("Data added successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/home'))
    }, (err) => {
      console.log(err);

    })
  }
}
