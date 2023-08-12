import { createContext, useContext} from "react";

const ApiContext = createContext();

// Hook personlaizado useApiContext
export const useApiContext = () => {
    return useContext(ApiContext) // Se utiliza useContext para ver el valor del contexto ApiContext
}

export default ApiContext