import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { Auth2Service } from 'src/app/core/services/auth2.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  // set the current year
  year: number = new Date().getFullYear();

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserProfileService, private tokenStorage: TokenStorage, private authService: Auth2Service) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      departement: ['', Validators.required],
      numTel: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{3,}$/)]],
      poste: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['1', Validators.required],
      matriculeP: ['001', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
      return;
    } else {
      this.authService.register(this.signupForm.value).subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Le compte existe déjà ' + this.tokenStorage.getUser().role_portail,
            showConfirmButton: false,
            timer: 3000
          });
        }
      );
    }
  }
}