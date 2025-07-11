import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartType } from '../../../types/types';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  @Input() shoppingCartItems: ShoppingCartType = [];
  @Input() sidebarIsOpen: boolean = false;

  @Output() closeSidebar = new EventEmitter<void>();
  @Output() clearShoppingCart = new EventEmitter<void>();
  @Output() decrementItem = new EventEmitter<number>();
  @Output() incrementItem = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<number>();

  constructor(private route: Router, private auth: AuthService) {}

  get totalValue(): number {
    const value = this.shoppingCartItems.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );

    return value;
  }

  onFinalize() {
    if (this.auth.isLoggedIn()) {
      
    }
    this.route.navigate(['/login']);
  }

  onClose(): void {
    this.closeSidebar.emit();
  }

  onClearShoppingCart(): void {
    this.clearShoppingCart.emit();
  }

  onDecrementItem(index: number): void {
    this.decrementItem.emit(index);
  }

  onIncrementItem(index: number): void {
    this.incrementItem.emit(index);
  }

  onRemoveItem(index: number): void {
    this.removeItem.emit(index);
  }
}
