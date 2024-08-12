
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const productIdString = this.route.snapshot.paramMap.get('id');
    if (productIdString !== null) {
      const productId = Number(productIdString);
      this.fetchProductDetails(productId);
    } else {
      console.error('Product ID is null');
    }
  }

  fetchProductDetails(id: number) {
    const products: Product[] = [
      {
        id: 1,
        name: 'gold Saree',
        price: 1200,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/goldsaree1.jpg', '/assets/sarees/goldsaree2.jpg', '/assets/sarees/goldsaree3.jpg', '/assets/sarees/goldsaree4.jpg']
      },
      {
        id: 2,
        name: 'Cotton Saree',
        price: 1350,
        description: 'A comfortable cotton saree.',
        images: ['/assets/sarees/blacksaree1.jpg', '/assets/sarees/blacksaree2.jpg', '/assets/sarees/blacksaree3.jpg', '/assets/sarees/blacksaree4.jpg']
      },
      {
        id: 3,
        name: 'Silk-jacquard',
        price: 1500,
        description: 'A beautiful saree.',
        images: ['/assets/sarees/purplesaree1.jpg', '/assets/sarees/purplesaree2.jpg', '/assets/sarees/purplesaree3.jpg', '/assets/sarees/purplesaree4.jpg']
      },
      {
        id: 4,
        name: 'Kanjeevaram Saree',
        price: 1600,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/creamsaree1.jpg', '/assets/sarees/creamsaree2.jpg', '/assets/sarees/creamsaree3.jpg', '/assets/sarees/creamsaree4.jpg']
      },
      {
        id: 5,
        name: 'lace Saree',
        price: 1800,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/redsaree1.jpg', '/assets/sarees/redsaree2.jpg', '/assets/sarees/redsaree3.jpg', '/assets/sarees/redsaree4.jpg']
      },
      {
        id: 6,
        name: 'Chiffon Saree',
        price: 1200,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/ChiffonSaree1.jpg', '/assets/sarees/ChiffonSaree2.jpg', '/assets/sarees/ChiffonSaree3.jpg', '/assets/sarees/ChiffonSaree4.jpg']
      },
      {
        id: 7,
        name: 'floral Saree',
        price: 1400,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/rosesaree1.jpg', '/assets/sarees/rosesaree2.jpg', '/assets/sarees/rosesaree3.jpg', '/assets/sarees/rosesaree4.jpg']
      },
      {
        id: 8,
        name: 'benarasi Saree',
        price: 1500,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/bluesaree1.jpg', '/assets/sarees/bluesaree2.jpg', '/assets/sarees/bluesaree3.jpg', '/assets/sarees/bluesaree4.jpg']
      },
      {
        id: 9,
        name: 'plain Saree',
        price: 1000,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/Saree1.jpg', '/assets/sarees/Saree2.jpg', '/assets/sarees/Saree3.jpg', '/assets/sarees/Saree4.jpg']
      },
      {
        id: 10,
        name: 'Silk Saree',
        price: 1200,
        description: 'A beautiful silk saree.',
        images: ['/assets/sarees/whiteSarees1.jpg', '/assets/sarees/whiteSarees2.jpg', '/assets/sarees/whiteSarees3.jpg', '/assets/sarees/whiteSarees4.jpg']
      },
      // Add more products as needed
    ];
    this.product = products.find(p => p.id === id);
  }
}

