import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { PInfoComponent } from './p-info/p-info.component';

const routes: Routes = [
{ path: '', redirectTo: '/index', pathMatch: 'full' },
{ path: 'index', component: IndexComponent },
{ path: 'about', component: AboutComponent },
{ path: 'p-info', component: PInfoComponent },
{ path: '**', redirectTo:''},
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
