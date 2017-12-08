import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take'; 

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {
    title: 'title',
    price: 20,
    category: '',
    imageUrl: 'https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fstatic.pexels.com%2Fphotos%2F67546%2Fcorvette-racing-car-roadster-sports-car-67546.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fclassic%2520car%2F&docid=k94yMFJP4e0TTM&tbnid=zOtOpiwxdoXZ-M%3A&vet=10ahUKEwjDu6bq8_nXAhVKtY8KHTtXABsQMwjnAihaMFo..i&w=5200&h=3575&bih=636&biw=1206&q=google%20car&ved=0ahUKEwjDu6bq8_nXAhVKtY8KHTtXABsQMwjnAihaMFo&iact=mrc&uact=8'

  };
  id;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
  }

  save(product) { 
    if (this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
    
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
