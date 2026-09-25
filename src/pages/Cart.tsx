import useCart from "../hooks/useCart";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import CartItem from "../components/cart/CartItem";
import { Link } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";
import { useState } from "react";
import RequiredAddressModal from "../components/modals/RequiredAddressModal";


//displays the shopping cart content
const Cart = () => {
    const { currentCart } = useCart();
    const [ showRequiredAddressModal, setShowRequiredAddressModal ] = useState<boolean>( false );

    const handleModal = ()=>{
        setShowRequiredAddressModal( !showRequiredAddressModal )
    }

    const totalProducts = currentCart.length;

    return (
        <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
            <section className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8">
                <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">Byte Market</p>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-slate-100 md:text-4xl">Tu carrito</h1>
                        <p className="max-w-2xl text-slate-400">
                            Revisa tus productos seleccionados antes de continuar con la compra.
                        </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                        <span className="font-semibold text-cyan-300">{totalProducts}</span> producto{totalProducts === 1 ? "" : "s"} en tu carrito
                    </div>
                </div>
            </section>

            {
                currentCart.length === 0 ? (
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-[0_0_30px_rgba(15,23,42,0.35)]">
                        <div className="mx-auto grid h-20 w-20 place-content-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-4xl text-cyan-300">
                            <MdOutlineRemoveShoppingCart />
                        </div>

                        <div className="mt-6 space-y-2">
                            <h2 className="text-2xl font-semibold text-slate-100">Carrito vacio</h2>
                            <p className="mx-auto max-w-md text-slate-400">Aun no agregaste productos. Explora el catalogo y encuentra tu proxima mejora gamer.</p>
                        </div>

                        <Link to="/catalog" className="mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Ir al catalogo</Link>
                    </section>
                ) : (
                    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
                        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-4">
                                    <h2 className="text-xl font-semibold text-slate-100">Productos seleccionados</h2>
                                    <p className="text-sm text-slate-400">{totalProducts} item{totalProducts === 1 ? "" : "s"}</p>
                                </div>

                                <div className="space-y-4">
                                    {currentCart.map((item, index) => (
                                        <CartItem
                                            key={`${item.id}-${index}`}
                                            id={ item.id }
                                            name={item.name}
                                            image={item.images}
                                            price={item.price}
                                            quantity= { item.quantity}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="xl:sticky xl:top-15">
                            <CartSummary 
                                showModal={ handleModal }
                            />
                        </div>

                        { 
                            showRequiredAddressModal && <RequiredAddressModal  showModal={ handleModal }/>
                        }
                    </section>
                )
            }
        </main>
    );
}

export default Cart;
