// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { 
  products = [
    { id: 1,name:'gold saree',  price: '1000',image: 'assets/sarees/goldsaree1.jpg' },
    { id: 2, name:'cotton saree',    price:'1350', image: '/assets/sarees/blacksaree1.jpg'},
    { id: 3, name:'silk-jacquard', price:'1500', image: '/assets/sarees/purplesaree1.jpg' },
    { id: 4, name:'kanjeevaram saree', price:'1600', image: '/assets/sarees/creamsaree1.jpg' },
    { id: 5, name:'lace-saree',    price:'1800', image: '/assets/sarees/redsaree1.jpg'},
    { id: 6, name:'Chiffon',price:'1200', image: '/assets/sarees/ChiffonSaree1.jpg' },
    { id: 7, name:'floral',   price:'1400', image: '/assets/sarees/rosesaree1.jpg' },
    { id: 8, name:'benarasi-saree',price:'1500', image: '/assets/sarees/bluesaree1.jpg' },
    { id: 9, name:'plain saree',  price: '1000',image: 'assets/sarees/Saree1.jpg' },
    { id: 10, name:'silk-saree',    price:'1200', image: '/assets/sarees/whiteSarees1.jpg' },
    
    // Add more products as needed
  ];

  constructor(private router: Router) {}

  goToDetail(productId: number) {
    this.router.navigate(['/product-detail', productId]);
  }
}
