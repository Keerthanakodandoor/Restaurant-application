import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  selectedMenu!: Menu;
  menus!: Menu[];
  readonly baseURL = 'http://localhost:3000/menus';
  constructor(private http: HttpClient) { }
  postMenu(men: Menu) {
    return this.http.post(this.baseURL, men);
  }

  getMenuList() {
    return this.http.get(this.baseURL);
  }

  putMenu(men: Menu) {
    return this.http.put(this.baseURL + `/${men._id}`, men);
  }

  deleteMenu(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
