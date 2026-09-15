import { Link } from "react-router-dom";
import FormInput from "../components/ui/FormInput";
import useAuth from "../hooks/useAuth";
import getInitial from "../utils/getInitials";
import { useState } from "react";
import { type User } from "../types/user.types";

type UserProps = {
    user: User;
}
const ProfilePage = ( { user } : UserProps) => {
    const { setUser, setAllUsers, userLogout } = useAuth();
    const [ isEditing, setIsEditing ] = useState<boolean>( false );
    const [ editedUser, setEditedUser] = useState<User>( user )
    if( !user ) { return null }
    const perfilImages = getInitial( user.name, user.lastName );
    
    const handleEditing = ()=>{
        if( !isEditing ){
            setIsEditing( true )
        } else {
            setIsEditing( false )
            setEditedUser( user )
        }
    }

    const handleData = ()=>{
        if( isEditing ){
            setIsEditing( false )
            setUser( editedUser )
            setAllUsers( prevUsers => (
                prevUsers.map( userRegistered => 
                    userRegistered.id === editedUser.id ?
                    editedUser : userRegistered
                )
            ) )
        }
    }

    const handleLogout = ()=>{
        userLogout()
    }

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement>, name: string ) =>{
        setEditedUser( prevData => (
            name === "user"?
            ( {
                ...prevData,
                [ e.target.id ] : e.target.value
            })
            :
            ( {
                ...prevData,
                shippingAddress: {
                    ...prevData.shippingAddress,
                    [ e.target.id ] : e.target.value
                }
            })
         ) )
    }
    
    return (
        <main className="mx-auto w-[min(1000px,94%)] space-y-6 py-8">
            <div className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8 md:flex-row md:items-center md:justify-between">
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="relative">
                    <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">Byte Market</p>
                    <h1 className="relative text-3xl font-bold text-slate-100 md:text-4xl">Mi perfil</h1>
                    <p className="relative mt-3 max-w-2xl text-slate-400">Gestiona tu información básica y revisa el estado de tu cuenta.</p>
                </div>
                <div className="relative flex md:justify-end">
                    <div className="grid h-24 w-24 place-content-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-3xl font-bold tracking-wider text-cyan-200 shadow-[0_18px_45px_rgba(34,211,238,0.16)] ring-1 ring-white/5 sm:h-28 sm:w-28">
                        <p>{ perfilImages }</p>
                    </div>
                </div>
            </div>

            <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.3)] sm:p-6">
                <div className="mb-5 border-b border-slate-800 pb-4">
                    <h2 className="text-xl font-semibold text-slate-100">Datos personales</h2>
                    <p className="mt-1 text-sm text-slate-400">Información principal de tu cuenta.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <FormInput
                        labelText="Nombres"
                        id="name"
                        type="text"
                        name= "user"
                        value={ editedUser.name }
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                    <FormInput 
                        labelText="Apellidos"
                        id="lastName"
                        type="text"
                        name= "user"
                        value={ editedUser.lastName }
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                    <FormInput
                        labelText= "Correo"
                        id="email"
                        type="email"
                        name= "user"
                        value={ editedUser.email }
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                    <FormInput
                        labelText="Teléfono"
                        id="phone"
                        type="tel"
                        name= "user"
                        placeholder="Ingresa tu número"
                        value={ editedUser.phone}
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                </div>

            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.3)] sm:p-6">
                <div className="mb-5 border-b border-slate-800 pb-4">
                    <h2 className="text-xl font-semibold text-slate-100">Dirección de envío</h2>
                    <p className="mt-1 text-sm text-slate-400">Guarda una dirección para agilizar tus próximas compras.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <FormInput
                        labelText="Dirección"
                        id="address"
                        type="text"
                        name= "address"
                        placeholder="Ingresa tu dirección"
                        value = { editedUser.shippingAddress.address }
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                    <FormInput
                        labelText="Ciudad"
                        id="city"
                        type="text"
                        name= "address"
                        placeholder="Ingresa tu ciudad"
                        value= { editedUser.shippingAddress.city}
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />

                    <FormInput
                        labelText="País"
                        id="country"
                        type="text"
                        name= "address"
                        placeholder="Ingresa tu país"
                        value= { editedUser.shippingAddress.country }
                        isEditing= { isEditing }
                        onChange={ (event )=>{ handleChange( event, event.target.name) }}
                    />
                </div>
            </section>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button className={`cursor-pointer rounded-xl border px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 ${isEditing ? "border-red-400/50 bg-red-950/25 text-red-300 hover:border-red-300 hover:bg-red-950/45 hover:text-red-200 focus-visible:ring-red-400/60" : "border-cyan-400/35 bg-slate-950/80 text-cyan-300 hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:ring-cyan-400/70"}`} onClick={ handleEditing }>{ !isEditing? "Editar" : "Cancelar" }</button>
                <button className="cursor-pointer rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.18)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" onClick={ handleData }>Guardar cambios</button>
            </div>

            <section className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.3)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-100">Mis compras</h2>
                    <p className="mt-1 text-sm text-slate-400">Revisa tus pedidos recientes y el estado de tus compras.</p>
                </div>

                <Link className="inline-flex justify-center rounded-xl border border-cyan-400/35 bg-slate-950/80 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" to="/cart">Ver pedidos</Link>
            </section>

            <div className="flex justify-end">
                <button className="cursor-pointer rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-red-400/60 hover:bg-red-950/20 hover:text-red-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/50" onClick={ handleLogout }>Cerrar sesión</button>
            </div>
        </main>
    )
}

export default ProfilePage;
