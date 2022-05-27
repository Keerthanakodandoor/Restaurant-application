import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

import { MenuService } from '../shared/menu.service';
import { Menu } from '../shared/menu.model';

declare var M: any;
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router,public menuService: MenuService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshMenuList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.menuService.selectedMenu = {
      _id: "",
      name: "",
      category:" ",
      quantity:0,
      orderStatus:0,
      availableStatus:0,
      price:0
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.menuService.postMenu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMenuList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.menuService.putMenu(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMenuList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshMenuList() {
    this.menuService.getMenuList().subscribe((res) => {
      this.menuService.menus = res as Menu[];
    });
  }

  onEdit(men: Menu) {
    this.menuService.selectedMenu = men;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.menuService.deleteMenu(_id).subscribe((res) => {
        this.refreshMenuList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
