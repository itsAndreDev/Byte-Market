import formatPrice from "../../utils/formatPrice";
import useCart from "../../hooks/useCart";

type ModalProp = {
    showModal : ()=> void
}

const CartSummary = ( { showModal } : ModalProp ) => {
    const { getCartTotal, getDiscount, getShippingCost, getCartSubTotal } = useCart(); 
    const shipping = getShippingCost();

    const handleClick = ()=>{
        showModal()
    }

    return (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.35)] sm:p-6">
            <h2 className="text-xl font-semibold text-slate-100">Resumen de compra</h2>

            <div className="mt-5 space-y-3 border-b border-slate-800 pb-5 text-sm text-slate-300">

                <div className="flex items-center justify-between gap-4">
                    <span>Subtotal</span>
                    <span className="font-medium text-slate-100">{ formatPrice( getCartSubTotal() ) }</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <span>Descuentos</span>
                    <span className="font-medium text-slate-100">{ formatPrice( getDiscount() ) }</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <span>Costo de envio</span>
                    <span className="font-medium text-slate-100">{ shipping === 0? "Gratis" : formatPrice( shipping)  }</span>
                </div>

            </div>

            <div className="mt-5">
                <div className="flex items-center justify-between gap-4">
                    <span className="text-base font-semibold text-slate-100">Total</span>
                    <span className="text-lg font-bold text-cyan-300">{ formatPrice( getCartTotal() ) }</span>
                </div>
            </div>

            <div className="mt-6">
                <button type="button" onClick={ handleClick } className="cursor-pointer w-full rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Continuar compra</button>
            </div>
        </section>
    );
};

export default CartSummary;
