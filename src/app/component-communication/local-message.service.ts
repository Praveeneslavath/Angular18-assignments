import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalMessageService {

  product = {
    id: 1,
    name: 'Smartphone',
    price: 599.99,
    description: 'A high-quality smartphone with a 6.5-inch display and 128GB storage.',
  };
  
}
