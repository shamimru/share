import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P7_3_24';
 //  countries=[
  //   "Bangladesh","Japan","America","London","New Zeland"
  //  ];
  isActive:boolean=false;


 
   products=[
    {id:100,name:"Shirt", stock:4,price:5000,photos:"assets/images/man-5179976_640.jpg"},

    {id:101,name:"Mouse", stock:5,price:6000,photos:"assets/images/mouse.jpg"},
    {id:103,name:"ComheadPhone", stock:41,price:6700,photos:"assets/images/head-1.jpg"},

    {id:104,name:"Mouse", stock:35,price:4500,photos:"assets/images/mouse.jpg"},
    {id:100,name:"Computer", stock:14,price:5600,photos:"assets/images/head4.jpg"},

    {id:105,name:"Mouse", stock:45,price:45600,photos:"assets/images/headphone.jpg"},
    {id:106,name:"Computer", stock:43,price:6700,photos:"assets/images/mouse.jpg"},

    {id:107,name:"Mouse", stock:435,price:5643,photos:"assets/images/mouse.jpg"},
    {id:108,name:"Computer", stock:554,price:4455,photos:"assets/images/head-1.jpg"},

    {id:109,name:"Mouse", stock:675,price:5454,photos:"assets/images/mouse.jpg"},
    {id:110,name:"computer", stock:775,price:678,photos:"assets/images/head4.jpg"},

    {id:111,name:"Mouse", stock:567,price:1000,photos:"assets/images/mouse.jpg"},
    {id:112,name:"Computer", stock:46,price:5000,photos:"assets/images/man-5179976_640.jpg"},
   ];


   product:any={id:100,name:"Shirt", stock:4,price:5000,photos:"assets/images/man-5179976_640.jpg"}

m1(i:any){
  this.product=new Object();
  this.product.id=this.products[i].id;
  this.product.name=this.products[i].name;

  this.product.stock=this.products[i].stock;

  this.product.photos=this.products[i].photos;

}

   mouseOver(){
    alert("Hello shamim");
   }
}
