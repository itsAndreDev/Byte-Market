import { useEffect, useState } from "react"
import type { CartByUser, Product } from "../types/product.types"
import CartContext from "../context/CartContext"
import getStoredData from "../utils/getStoredData"
import useAuth from "../hooks/useAuth"

type Props = {
    children: React.ReactNode
}

const CartProvider = ( { children } : Props ) =>{

    const USER_CARTS_STORAGE_KEY = "cartsByUser";
    const { user } = useAuth();
    const[ cartByUser, setCartByUser ] = useState<CartByUser>( getStoredData( USER_CARTS_STORAGE_KEY, { } ) )
    
    useEffect( ()=>{
        localStorage.setItem( USER_CARTS_STORAGE_KEY, JSON.stringify( cartByUser ) )
    }, [ cartByUser ] )

    const currentCart = user? cartByUser[ user.id ]?? [] : [];

    //functions
    const addProductCart =( product : Product)=>{
        if( !user ) return
       const newProduct = { ...product, quantity : 1 }
        
       setCartByUser( prev => (
            {
                ...prev,
                [ user.id ] : [ ...prev[ user.id ]?? [], newProduct ]
            }
       ))
    }

    const removeProductCart = ( id: number ) =>{
        if( !user) return
        setCartByUser( prev =>{
            const cart = prev[ user.id  ]
            const updateCart = cart.filter( product => product.id !== id )
            return(
                {
                    ...prev,
                    [ user.id ] : updateCart
                }
            )
        } )

    }

    const increaseQuantity= ( id: number ) =>{
        if( !user) return
        setCartByUser( prev=>{
            const cart= prev[ user.id ]
            const updatedProductQuantity = cart.map( item =>{
                const { stock, quantity } = item
                if( item.id === id && stock>quantity ){
                    return { ...item, quantity: quantity+ 1}
                }
                return item;
            })
            return (
                {
                    ...prev,
                    [ user.id ] : updatedProductQuantity
                }
            )
        })
    }   

    const decreaseQuantity = ( id: number ) =>{
        if( !user) return
        setCartByUser( prev=>{
            const cart= prev[ user.id ]
            const updatedProductQuantity = cart.map( item =>{
                const { quantity } = item
                if( item.id === id && quantity>1 ){
                    return { ...item, quantity: quantity- 1}
                }
                return item;
            })
            return (
                {
                    ...prev,
                    [ user.id ] : updatedProductQuantity
                }
            )
        })
    }

    const getCartSubTotal = ()=>{
        return currentCart.reduce( ( total, product ) =>{
            total = total + product.price * product.quantity
            return total
        }, 0)
    }

    const getDiscount = ()=>{
        const subTotal = getCartSubTotal();
        if( subTotal > 1000){
            return subTotal * ( 10 / 100 )
        }
        return 0
    }

    const getShippingCost = () =>{
        const subTotal = getCartSubTotal();
        if( subTotal>= 2000 ) return 0
        return 50
    }

    const getCartTotal= ()=>{
        const subTotal = getCartSubTotal();
        const discount = getDiscount();
        const shipping = getShippingCost()
        return ( subTotal - discount ) + shipping
    }

    
    return(
        <CartContext.Provider value={{ currentCart, cartByUser, addProductCart, removeProductCart, increaseQuantity, decreaseQuantity, getCartSubTotal, getDiscount, getShippingCost, getCartTotal } }>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;