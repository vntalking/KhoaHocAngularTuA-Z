import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  template:
    `<h1>{{title}}</h1>
    <products></products>`,
  providers: [ProductService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'VNTALKING xin chào cả nhà';
}
