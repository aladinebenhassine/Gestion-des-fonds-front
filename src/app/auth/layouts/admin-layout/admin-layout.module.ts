import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { IconsComponent } from '../../../components/icons/icons.component';
import { MapsComponent } from '../../../components/maps/maps.component';
import { UserProfileComponent } from '../../../components/user-profile/user-profile.component';
import { TablesComponent } from '../../../components/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundsComponent } from 'src/app/components/funds/funds.component';
import { PopupAjoutFundsComponent } from 'src/app/components/funds/popupAjout/popupAjout.component';
import { popupUpdateFundsComponent } from 'src/app/components/funds/popupUpdate/popupUpdate.component';
import { popupDeleteFundsComponent } from 'src/app/components/funds/popupDelete/popupDelete.component';

import { ProjectsComponent } from 'src/app/components/projects/projects.component';
import { popupAjoutProjectsComponent } from 'src/app/components/projects/popupAjout/popupAjout.component';
import { popupUpdateProjectsComponent } from 'src/app/components/projects/popupUpdate/popupUpdate.component';
import { popupDeleteProjectsComponent } from 'src/app/components/projects/popupDelete/popupDelete.component';

import { UsersComponent} from "../../../components/users/users.component";
import {popupAjoutUserComponent} from "../../../components/users/popupAjout/popupAjout.component";
import {popupUpdateUserComponent} from "../../../components/users/popupUpdate/popupUpdate.component";
import {popupDeleteUserComponent} from "../../../components/users/popupDelete/popupDelete.component";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FilterPipe} from '../../../utils/pipes/FilterPipe.pipe'
import { QRCodeModule } from 'angularx-qrcode';

//import {AppModule} from "../../../app.module";

// import { ToastrModule } from 'ngx-toastr';

@NgModule({providers:[],
    imports: [QRCodeModule,
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        HttpClientModule,
        NgbModule,
        ClipboardModule,
        MatFormFieldModule,
        MatInputModule, ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    FundsComponent,popupUpdateFundsComponent,PopupAjoutFundsComponent,popupDeleteFundsComponent,
    ProjectsComponent,popupUpdateProjectsComponent,popupAjoutProjectsComponent,popupDeleteProjectsComponent,
    UsersComponent,popupAjoutUserComponent,popupUpdateUserComponent,popupDeleteUserComponent,FilterPipe
  ]
})

export class AdminLayoutModule {}
