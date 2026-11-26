export const prototypes = {
  category: {
    src: "/site/category_landing/code.html",
    title: "IKUZ SHOP category",
  },
  product: {
    src: "/site/product_details/code.html",
    title: "IKUZ SHOP product details",
  },
  cart: {
    src: "/site/cart_page/code.html",
    title: "IKUZ SHOP cart",
  },
  checkout: {
    src: "/site/checkout_page/code.html",
    title: "IKUZ SHOP checkout",
  },
  "order-success": {
    src: "/site/order_success/code.html",
    title: "IKUZ SHOP order confirmed",
  },
  "order-failed": {
    src: "/site/order_failed/code.html",
    title: "IKUZ SHOP payment failed",
  },
} as const;

export type PrototypeSlug = keyof typeof prototypes;

export const pathsByDataPath: Record<string, string> = {
  home: "/",
  category: "/category",
  "product-detail": "/product",
  cart: "/cart",
  checkout: "/checkout",
  "order-success": "/order-success",
  "order-failed": "/order-failed",
};
