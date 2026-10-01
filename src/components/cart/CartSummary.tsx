import OrderSummary from "./OrderSummary";
import useAuth from "../../hooks/useAuth";
import isEmptyFields from "../../utils/isEmptyFields";
import { useNavigate } from "react-router-dom";

type ModalProp = {
    showModal : ()=> void
}

const CartSummary = ( { showModal } : ModalProp ) => {
    const { user } = useAuth();
    const navigate  = useNavigate();
     const handleClick = ()=>{
        if( !user){ return }
        
        if( isEmptyFields( user.shippingAddress ) ){
            showModal()
        }else {
            navigate( "/checkout")
        }
    }
    return(
        <div>
            <OrderSummary />
            <div className="mt-6">
                <button type="button" onClick={ handleClick } className="cursor-pointer w-full rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Continuar compra</button>
            </div>
        </div>
    )
};

export default CartSummary;
