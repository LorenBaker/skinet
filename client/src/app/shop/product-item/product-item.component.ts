import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  // https://bootswatch.com <-- for themes

  @Input() product: IProduct;

  constructor() {}

  ngOnInit(): void {}
}
