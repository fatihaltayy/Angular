import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { sifreValidator } from '../../shared/validator/sifre.validator';
import { AuthService } from '../../shared/service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService)

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)/*,sifreValidator*/]]
    });
  }
  get(name: string) {
    return this.loginForm.get(name) as FormControl;
  }

  login() {
    const username =  this.get('username')?.value;
    const passsword = this.get('password')?.value;
    this.authService.login(username,passsword).subscribe({
      next:() =>{
          //login basarılı
        this.router.navigate(['/menu']);
      },
      error:(err) =>{
        //şifre hatalı Ekrana hata mesajı ver
        this.toastr.error('Kullanıcı Adı/Şifre hatalıdır')
      }
    });
  }

}
