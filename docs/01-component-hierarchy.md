# React E-Commerce Component Hierarchy

This hierarchy chart maps out all the major conceptual components in the application, mirroring the visual layout of a traditional organization or hierarchy chart. The props passed into each component are displayed in parentheses.

```text
App ()
 ├── HomePage ({ cart })
 │    ├── Header ({ cart })
 │    └── ProductsGrid ({ products })
 │
 ├── CheckoutPage ({ cart })
 │    ├── CheckoutHeader ({ cart })
 │    ├── OrderSummary ({ cart, deliveryOptions })
 │    │    ├── DeliveryDate ({ selectedDeliveryOption })
 │    │    ├── CartItemDetails ({ cartItem })
 │    │    └── DeliveryOptions ({ deliveryOptions, cartItem })
 │    └── PaymentSummary ({ paymentSummary })
 │
 ├── OrdersPage ({ cart })
 │    ├── Header ({ cart })
 │    └── OrdersGrid ({ orders })
 │         ├── OrderHeader ({ order })
 │         └── OrderDetailsGrid ({ order })
 │
 ├── TrackingPage ({ cart })
 │    └── Header ({ cart })
 │
 └── ErrorPage ()
```
