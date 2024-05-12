import React, { useContext } from 'react'
import '../../App.css';
import './Sectionthree.css';
import { Productcontext } from '../../Context/ProductContext/Productcontext'
import { ProductData } from '../../Data/Products/Products';
const Section = () => {
    //product data
    

     
    //importing context variables
    const { initialCartNumber, UpdatedCartNumber, productData, UpdateProductData } = useContext(Productcontext);
    console.log(productData)
    function handleClick(event) {
        console.log(event)
        UpdatedCartNumber(initialCartNumber + 1);
        // UpdateProductData(name)

    }
    // let name = "Nike Air max";

    return (
        <div className='section'>
            <h1>Products in Section</h1>
            <div className='grid-container'>
            {
                ProductData.map((each,id) => {
                    let nameForEachProduct = each.name;
                    return (
                       
                        <div className="card grid-item" key={id} style={{ "width": "18rem" }}>
                            <form onSubmit={handleClick} >
                            <img src={each.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{nameForEachProduct}</h5>
                                <p className="card-text">{each.discription}</p>
                                <p className="card-text">{each.price}</p>
                                <button  className="btn btn-primary" type='submit' >Buy Now</button>
                            </div>
                            </form>
                        </div>
                      
                    )
                }


                )
            }
              </div>
        </div >
    )

}

export default Section