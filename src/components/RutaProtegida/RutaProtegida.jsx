import { useAuthContext } from "../../Context/AuthContext/UseAuthContext"
import { Navigate } from "react-router-dom"

export const RutaProtegida = ({ children }) => {
    const { user } = useAuthContext();

    if (!user) {
        return <Navigate to="/" replace /> ;  
    }

    return children;
};
    