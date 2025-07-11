import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HomeService } from './service';
import { Carousel } from './component/carousel/carousel';
import {
  ProductType,
  ShoppingCartType,
  ShoppingCartItemType,
} from '../types/types';
import { ShoppingCart } from './component/shopping-cart/shopping-cart';
import { AuthService } from '../service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Carousel, ShoppingCart],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  frutas: ProductType[] = [];
  folhosos: ProductType[] = [];
  raizes: ProductType[] = [];
  bulbos: ProductType[] = [];

  shoppingCart: ShoppingCartType = [];

  sidebarIsOpen: boolean = false;

  constructor(
    private homeService: HomeService,
    private cdRef: ChangeDetectorRef,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllFruits();
  }

  get isLogged(): boolean {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  getAllFruits(): void {
    this.homeService.getAllProducts().subscribe((products: ProductType[]) => {
      this.frutas = products.filter((prod) => prod.type.id == 1);
      this.folhosos = products.filter((prod) => prod.type.id == 2);
      this.raizes = products.filter((prod) => prod.type.id == 3);
      this.bulbos = products.filter((prod) => prod.type.id == 4);
      this.cdRef.detectChanges();
    });
  }

  openSidebar(): void {
    this.sidebarIsOpen = !this.sidebarIsOpen;
  }

  closeSidebar(): void {
    this.sidebarIsOpen = false;
  }

  clearShoppingCart(): void {
    this.shoppingCart.length = 0;
  }

  handleAddToCart(item: ShoppingCartItemType) {
    const alreadyInCart = this.shoppingCart.find(
      (cartItem) => cartItem.name === item.name
    );

    if (!!alreadyInCart) {
      alreadyInCart.quantity++;
    } else {
      this.shoppingCart.push(item);
    }
  }

  handleDecrementItem(index: number) {
    this.shoppingCart[index] = {
      ...this.shoppingCart[index],
      quantity: this.shoppingCart[index].quantity - 1,
    };
  }
  handleIncrementItem(index: number) {
    this.shoppingCart[index] = {
      ...this.shoppingCart[index],
      quantity: this.shoppingCart[index].quantity + 1,
    };
  }
  handleRemoveItem(index: number) {
    this.shoppingCart.splice(index, 1);
  }
}
