import React, { useContext } from 'react'
import '../../App.css'
import { Productcontext } from '../../Context/ProductContext/Productcontext'
const Section = () => {
    const {initialCartNumber, UpdatedCartNumber,productData, UpdateProductData}=useContext(Productcontext);
    console.log(productData)
function handleClick(){
    UpdatedCartNumber(initialCartNumber+1);
    UpdateProductData(name)
    
}
let name = "Nike Air max";

    return (
        <div className='section'>
            <h1>Products in Section</h1>

            <div>
                <div class="card" style={{"width": "18rem"}}>
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e4060b19-289e-43b4-8375-c047c1cf6ab6/air-max-pulse-shoes-2bZSZV.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary" onClick={handleClick}>Buy Now</a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Section