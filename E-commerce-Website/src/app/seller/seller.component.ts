import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from 'src/data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor(
    private seller : SellerService,
    private router: Router, 
    private toastr: ToastrService)
    {}

  showLogin = true;
  authError: string = ''
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data:SignUp): void {
    this.seller.userSignUp(data);
  }

  login(data:login): void {
   this.seller.userLogin(data);
   this.seller.isLoginError.subscribe((isError)=>{
    if(isError){
      this.toastr.warning('This is a warning message', 'Warning');
    }
   })
  }

  openLogin(){
    this.showLogin = true;
  }

  openSignUp(){
    this.showLogin=false;
  }

}
