import { AuthContext } from "../contexts/AuthContext.jsx";
import { useContext } from "react";

export const useAuth = () => {
    return useContext(AuthContext);
}