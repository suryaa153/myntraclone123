

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kurthi-details',
    templateUrl: './kurthi-details.component.html',
    styleUrls: ['./kurthi-details.component.css']
})
export class KurthiDetailsComponent {
   product = {
    id:1,
    name: 'Women Blue Striped Straight Kurta',
    rating: 4,
    totalRatings: 3700,
    discountedPrice: 428,
    originalPrice: 1299,
    discount: 67,
    images:['assets/kurta/blueKurta1.jpg','assets/kurta/blueKurta2.jpg', 'assets/kurta/blueKurta3.jpg', 'assets/kurta/blueKurta4.jpg']
  };
  


  

  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
  selectedSize!: string;
  router: any;
 

  selectSize(size: string) {
    this.selectedSize = size;
  }

  addToBag() {
     console.log('Added to bag:', this.product.name, this.selectedSize);
   }

  addToWishlist() {
     console.log('Added to wishlist:', this.product.name);
  }
  goToDetail(productId: number) {
    this.router.navigate(['/kurthidetails', productId]);
  }
}
