import { Link } from "react-router-dom";

type ModalProps = {
    showModal : ()=> void;
}
const RequiredAddressModal = ( { showModal } : ModalProps )=>{
    const handleCancel = ()=>{
        showModal()
    }
    return (
        <main className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
            <div className="w-full max-w-md overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 text-center shadow-[0_24px_70px_rgba(2,6,23,0.65)] ring-1 ring-white/5 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:leading-tight [&>h1]:text-slate-100 [&>p]:mt-3 [&>p]:text-sm [&>p]:leading-6 [&>p]:text-slate-400">
                <h1>Dirección de envío requerida</h1>
                <p>Para continuar con tu compra, necesitas agregar una dirección de envío a tu perfil.</p>
            </div>

            <div className="mt-4 grid w-full max-w-md gap-3 sm:grid-cols-2">
                <Link to= "/profile" state={ { foccusAddress: true} }  className="cursor-pointer rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.2)] transition hover:bg-cyan-300 hover:shadow-[0_18px_34px_rgba(34,211,238,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Agregar direccion</Link>
                <button onClick={ handleCancel } className="cursor-pointer rounded-xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/50 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">Cancelar</button>
            </div>
        </main>
    )
}

export default RequiredAddressModal;
