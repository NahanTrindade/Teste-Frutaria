import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { ProductType, ShoppingCartItemType } from '../../../types/types';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @Input() items: ProductType[] = [];
  @Input() type!: string;
  @Output() addToCart = new EventEmitter<ShoppingCartItemType>();

  currentIndex = 0;
  screenWidth = 1024;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.screenWidth = window.innerWidth;
    }
  }

  get itemsPerPage(): number {
    return this.screenWidth < 768 ? 3 : 5;
  }

  get visibleItems(): ProductType[] {
    return this.items.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isBrowser) {
      this.screenWidth = event.target.innerWidth;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex + this.itemsPerPage < this.items.length) {
      this.currentIndex++;
    }
  }

  onAddToCart(item: ProductType) {
    const cartItem: ShoppingCartItemType = {
      name: item.name,
      image_url: item.image_url,
      price: item.price,
      quantity: 1,
    };
    this.addToCart.emit(cartItem);
  }
}
