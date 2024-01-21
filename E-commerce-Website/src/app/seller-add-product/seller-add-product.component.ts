import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { product } from 'src/data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  constructor(private product:ProductsService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }

  submit(data:product){
      console.log(data)
      this.product.addProduct(data).subscribe((result) => {
        if(result){
          this.toastr.success('Product added Successfully', 'Success');
        }
      })

  }

}
