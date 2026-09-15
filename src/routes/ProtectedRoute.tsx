//este componente protege la ruta para que no se pueda entrar a /profile mientras no hay usuario logeado
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ProfilePage from "../pages/ProfilePage";

const ProtectedRoute = ( ) => {
    const { user } = useAuth();

    if( !user){
        return <Navigate to={ "/account" } />
    }

    return (
        <ProfilePage user={ user }/>
    )
}

export default ProtectedRoute;