export type User = {
  email: string;
};

export type ProductType = {
  name: string;
  image_url: string;
  price: number;
  actual_stock: number;
  measures: { id: number; name: string };
  type: { id: number; name: string };
};

export type ShoppingCartType = ShoppingCartItemType[];

export type ShoppingCartItemType = {
  name: string;
  image_url: string;
  price: number;
  quantity: number;
};
