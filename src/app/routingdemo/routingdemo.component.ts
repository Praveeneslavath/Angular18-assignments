import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';

@Component({
  selector: 'app-routingdemo',
  standalone: true,
  imports: [RouterLink, RouterOutlet,ProfileComponent,HomeComponent, DashboardComponent, NotfoundComponent],
  templateUrl: './routingdemo.component.html',
  styleUrl: './routingdemo.component.css'
})
export class RoutingdemoComponent {

}
