import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { FormsComponent } from './forms/forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingdemoComponent } from './routingdemo/routingdemo.component';
import { HomeComponent } from './routingdemo/home/home.component';
import { ProfileComponent } from './routingdemo/profile/profile.component';
import { DashboardComponent } from './routingdemo/dashboard/dashboard.component';

import { NotfoundComponent } from './routingdemo/notfound/notfound.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ObserableComponent } from './obserable/obserable.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { NgModuleComponent } from './ng-module/ng-module.component';

export const routes: Routes = [
    {
        path:'DataBinding', component:DataBindingComponent
    },
    {
        path:'Component Communication', component:ComponentCommunicationComponent
    },
    {
        path:'Forms', component:FormsComponent
    },
    {
        path:'Pipes', component:PipesComponent
    },
    {
        path:'Routing', component:RoutingdemoComponent,
        children:[
            { 
                path: 'home', component: HomeComponent 
            },               // Static
            { 
                path: 'profile/:id', component: ProfileComponent 
            },     // Dynamic
            { 
                path: 'dashboard', component:DashboardComponent,       // Nested
             
    },
    { 
        path: '**', component: NotfoundComponent 
    }]

    },
    {
        path:'Directives', component:DirectivesComponent
    },
    {
        path:'Lifecyclehook', component:LifecyclehookComponent
    },
    {
        path:'Obserable', component:ObserableComponent
    },
    {
        path:'ag-grid', component:AgGridComponent
    },
    {
        path:'ng-module', component:NgModuleComponent
    }
];
