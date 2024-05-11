import { createContext, useState } from "react";

export const Productcontext = createContext({
    initialCartNumber: 0,
    UpdatedCartNumber: ()=> 0,

    productData: [],
UpdateProductData: () => []
})


export const ProductProvider = ({children}) =>{
    const [initialCartNumber, UpdatedCartNumber] = useState(0);
    const [productData, UpdateProductData] = useState([])

    const value = {initialCartNumber, UpdatedCartNumber, productData, UpdateProductData}
return(
    <Productcontext.Provider value={value} >{children}</Productcontext.Provider>
)
}
