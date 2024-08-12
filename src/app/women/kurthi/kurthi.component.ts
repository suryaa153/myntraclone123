import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kurthi',
  templateUrl: './kurthi.component.html',
  styleUrls: ['./kurthi.component.css']
})
export class KurthiComponent implements OnInit {
  kurtas = [
    { name:'kurta',                  price:'₹1100',    image: '/assets/kurta/blueKurta1.jpg' },
    { name:'floral Kurta',           price:'₹1150',     image: '/assets/kurta/floralKurta1.jpg'},
    { name:'kurta with palazzos',    price:'₹1200',     image: '/assets/kurta/redkurta1.jpg' },
    { name:'kurta palazzo with duppata', price:'₹1250', image: '/assets/kurta/KurtaSets1.jpg' },
    { name:'kurta palazzo',           price:'₹1300',    image: '/assets/kurta/whiteKurta1.jpg' },
    { name:'regular kurta',           price:'₹1350',    image: '/assets/kurta/regularkurta1.jpg' },
    { name:'kurta palazzo',           price:'₹1400',    image: '/assets/kurta/pinkKurta1.jpg' },
    { name:'kurta palazzo with duppata', price:'₹1450', image: '/assets/kurta/RoseKurta1.jpg' },
    { name:'kurta palazzo',           price:'₹1500',    image: '/assets/kurta/maroonKurta1.jpg' },
    { name:'kurta palazzo with duppata', price:'₹1550', image: '/assets/kurta/blackkurta1.jpg' },
   
    
    
    // Add more products as needed
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
