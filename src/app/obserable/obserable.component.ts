import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obserable',
  standalone: true,
  imports: [],
  templateUrl: './obserable.component.html',
  styleUrl: './obserable.component.css'
})
export class ObserableComponent {
  createCustomObservable(): Observable<string> {
    return new Observable<string>((observer) => {
      setTimeout(() => observer.next('⏱️ First value after 1 second'), 1000);
      setTimeout(() => observer.next('⏱️ Second value after 2 seconds'), 2000);
      setTimeout(() => observer.next('⏱️ Third value after 3 seconds'), 3000);
      setTimeout(() => observer.complete(), 4000); // marks observable as complete
    });
  }

  message: string = 'Waiting for data...';

  get() {
    this.createCustomObservable().subscribe({
      next: (value) => {
        console.log('Received:', value);
        this.message = value;
      },
      complete: () => {
        console.log('Observable completed');
        this.message += ' ✅ All data received.';
      }
    });

  }
}
