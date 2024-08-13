import { Component, OnInit } from '@angular/core';
import {Fonds, Projet, User} from "../../utils/models/models";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  ajout : boolean = false;
  modifier : boolean = false;
userToUpdate : User = new User();
  users: User[];
  filterName="";
  sortField: string = '';
  sortOrder: string = 'asc';
  constructor(private userService : AuthService) { }

  ngOnInit() {
    this.getUsers();
  }
  togglePopup(){
    this.ajout=!this.ajout;
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers().subscribe(res => this.users=res);
  }

  update(user : User){
    console.log("update")
this.userToUpdate=user;
    this.modifier = !this.modifier;

  }
  delete(email){
    console.log("delete")
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
      this.userService.delete(email).subscribe(res => {        this.getUsers()
        console.log('delete')},error => {},()=>{
        this.getUsers()
      })    }
  }
  sort(field: string): void {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }

    this.users.sort((a: User, b: User) => {
      const valueA = a[this.sortField];
      const valueB = b[this.sortField];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortOrder === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return this.sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });
  }

  getSortIndicator(field: string): string {
    if (this.sortField === field) {
      return this.sortOrder === 'asc' ? '▲' : '▼';
    } else {
      return '';
    }
  }

}
