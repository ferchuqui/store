import { Component, Input, Output,EventEmitter, OnChanges,  OnInit, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnDestroy, OnInit, DoCheck {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();
  constructor() {
    console.log('1. constructor');
  }
    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('2. ngOnChanges');
    //   console.log(changes);
    // }
  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck() {
    console.log('4. doCheck');
  };
  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  };

}
