import { Injectable } from '@angular/core';

import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/cama.png',
      title: 'Cama',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/baño.png',
      title: 'Baño',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/casa.png',
      title: 'Casa',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/collar.png',
      title: 'Collar',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/comedero.png',
      title: 'Comedero',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: '../assets/images/comida-perro.png',
      title: 'Comida',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: '../assets/images/pañoleta.png',
      title: 'Pañoleta',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
