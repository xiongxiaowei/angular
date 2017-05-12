import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl="http://www.placehold.it/320x150";
  constrctor() {}
  ngOnInit() {
     this.products = [
       new Product(1,"第一个商品",1.99,3.5,"这是第一商品，这是我在学习慕课网angular.js时创建的",["电子商品",'图书类']),
       new Product(2,"第二个商品",1.99,2.5,"这是第二商品，这是我在学习慕课网angular.js时创建的",['图书类']),
       new Product(3,"第三个商品",1.99,1.5,"这是第三商品，这是我在学习慕课网angular.js时创建的",["电子商品",'硬盘类']),
       new Product(4,"第四个商品",1.99,1.5,"这是第四商品，这是我在学习慕课网angular.js时创建的",["食品"]),
       new Product(5,"第五个商品",1.99,3.5,"这是第五商品，这是我在学习慕课网angular.js时创建的",["汽车",'食品']),
       new Product(6,"第六个商品",1.99,2.5,"这是第六商品，这是我在学习慕课网angular.js时创建的",["网购",'图书类']),
       new Product(6,"第六个商品",1.99,5.0,"这是第六商品，这是我在学习慕课网angular.js时创建的",["网购",'图书类'])

     ]
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
