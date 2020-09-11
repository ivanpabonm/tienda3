import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
      image: 'assets/images/comedero.png',
      title: 'comedero',
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
      image: 'assets/images/pañoleta.png',
      title: 'pañoleta',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/collar.png',
      title: 'Collar',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/baño.png',
      title: 'Baño',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/comida-perro.png',
      title: 'Comida',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
