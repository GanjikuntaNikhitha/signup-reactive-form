import { Component ,OnInit } from '@angular/core';
import {PasswordChecker} from "./custom-validations/password-checker";
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive';
  registerForm : FormGroup;
  submitted =false;
  constructor( private formbuilder : FormBuilder){}
  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName : ['',[Validators.required ,Validators.maxLength(2)]],
      lastName :['',Validators.required],
      email: ['',Validators.required,Validators.email],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword :['',Validators.required],
      acceptTandC:   [false,Validators.requiredTrue]
    }, {
       // <-- Here's how you pass in the custom validator.
      validators :PasswordChecker('password' ,'confirmPassword')
    })
  }
  // get helper method
  get h() {
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted =true;
    // validators working or not
if( this.registerForm.invalid ){
  return;
}
console.table(this.registerForm.value)
console.table(this.registerForm)

alert("Success sign up\n" + JSON.stringify(this.registerForm.value))

  }
  onReset(){
    this.submitted =false;
    this.registerForm.reset()
  }
}
