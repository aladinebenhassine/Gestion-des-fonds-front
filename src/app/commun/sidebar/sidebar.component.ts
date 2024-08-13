import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../auth/service/auth.service";

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roles:string[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/funds', title: 'Fonds',  icon: 'ni-tv-2 text-primary', class: '',roles: ['Souscripteur', 'Administrateur','Gestionnaire de fonds', 'Investisseur']  },
    { path: '/projects', title: 'Projets',  icon: 'ni-tv-2 text-primary', class: '',roles: ['Souscripteur', 'Administrateur','Investisseur','Gestionnaire de fonds']  },
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '',roles: ['Souscripteur', 'Administrateur','Gestionnaire de fonds', 'Investisseur']  },
  { path: '/users', title: 'Utilisateurs',  icon:'ni-single-02 text-blue', class: '' ,roles: ['Administrateur'] },
  { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' ,roles: ['Souscripteur', 'Administrateur','Gestionnaire de fonds', 'Investisseur'] },
    { path: '/login', title: 'Logout',  icon:'ni-key-25 text-info', class: '' ,roles: ['Souscripteur', 'Administrateur','Gestionnaire de fonds', 'Investisseur'] }

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public userRoles: string = "";

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
    debugger
   this.authService.getThisUser().subscribe(res =>{ this.userRoles = res.role;
    this.authService.role=res.role});
  }
  hasAccess(menuItem: RouteInfo): boolean {
    debugger;
    if (!menuItem.roles || menuItem.roles.length === 0) {
      return true; // No roles specified, allow access
    }
      console.log("role : this.userRoles");
    return menuItem.roles.some((role) => this.userRoles.includes(role));
  }
  logout(title : string) {
    debugger;
    if (title == "Logout") {
    this.authService.isLoggedIn=false;
  }
  }
}
