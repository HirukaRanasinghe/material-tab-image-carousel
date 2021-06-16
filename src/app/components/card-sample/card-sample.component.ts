import { Component, OnInit } from '@angular/core';

export interface ProductDetails {
  productId: string;
  productName: string;
  price: number;
  productImages: string[];
}
const PRODUCT_DATA: ProductDetails[] = [
  {
    productId: 'At453',
    productName: 'pen',
    price: 30,
    productImages: [
      'https://i0.wp.com/navalanka.lk/wp-content/uploads/2018/11/5-1.jpg?fit=500%2C600&ssl=1',
      'https://i2.wp.com/www.navalanka.lk/wp-content/uploads/2018/11/6-1.jpg?fit=500%2C600&ssl=1',
      'https://shop.alston.lk/wp-content/uploads/2020/06/3J0A2233-1.jpg',
    ]
  },
  {
    productId: 'Pe453',
    productName: 'pencil',
    price: 20,
    productImages: [
      'https://m.media-amazon.com/images/I/61Y1sHYWsZL._AC_SS450_.jpg',
      'https://m.media-amazon.com/images/I/61nLNah8ZML._AC_SS450_.jpg',
      'https://target.scene7.com/is/image/Target/GUEST_f05b2a8c-6d99-4fb7-b4c5-ce37b1df0fc6?wid=488&hei=488&fmt=pjpeg',
    ]
  },
  {
    productId: 'Er447',
    productName: 'Eraser',
    price: 25,
    productImages: [
      'https://i0.wp.com/navalanka.lk/wp-content/uploads/2018/11/5-1.jpg?fit=500%2C600&ssl=1',
      'https://i2.wp.com/www.navalanka.lk/wp-content/uploads/2018/11/6-1.jpg?fit=500%2C600&ssl=1',
      'https://shop.alston.lk/wp-content/uploads/2020/06/3J0A2233-1.jpg',
    ]
  },
  {
    productId: 'CT603',
    productName: 'Pencil Sharpener',
    price: 30,
    productImages: [
      'https://shopit.shophere.lk/wp-content/uploads/2020/06/Pencil-cutter-.jpeg',
      'https://www.dhresource.com/0x0/f2/albu/g7/M00/1C/31/rBVaSVtvToqAduytAAExzX8Dxv8538.jpg',
      'https://i.stack.imgur.com/aAYL3.jpg',
    ]
  },
  {
    productId: 'Ru773',
    productName: '15cm Ruler',
    price: 45,
    productImages: [
      'https://kidzgifts.co.uk/wp-content/uploads/2017/08/Helix-15cm-Clear-Ruler.jpg',
      'https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SM388520_studymate_plastic_clear_ruler_15cm.jpg',
      'https://www.finetouch.net/media/catalog/product/cache/047d34382ae0243708f06ca9d38e3814/2/1/21054010_B1_1.jpg',
    ]
  },
];

@Component({
  selector: 'app-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrls: ['./card-sample.component.css']
})
export class CardSampleComponent implements OnInit {
  data = PRODUCT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
