import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { CustomerService } from './customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  menuitem:any[]=[];
  constructor(private userService: UserService, private router: Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerService.getMenu().subscribe((data)=>{
      this.menuitem=data;
    })
  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
