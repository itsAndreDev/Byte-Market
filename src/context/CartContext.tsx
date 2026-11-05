import { createContext } from "react";
import type { CartByUser, CartItem, Product } from "../types/product.types";

type CartContextType = {
    cartByUser: CartByUser;
    currentCart: CartItem[];
    addProductCart: ( product: Product )=> void;
    removeProductCart : ( id: number )=> void;
    increaseQuantity: ( id: number ) => void;
    decreaseQuantity: ( id: number ) => void;
    getCartSubTotal : ( ) => number;
    getDiscount: ( ) => number;
    getShippingCost: ()=> number;
    getCartTotal: ()=> number;
    totalItems: number
}

const CartContext = createContext<CartContextType | null>( null );

export default CartContext;