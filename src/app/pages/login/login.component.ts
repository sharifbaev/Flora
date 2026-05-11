import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    NgOptimizedImage,
    InputTextModule,
    PasswordModule
  ],
  standalone: true
})
export class LoginComponent {

}
