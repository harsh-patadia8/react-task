import ProductData from '../../data/ProductData';
import Badge from 'react-bootstrap/Badge';
import ProductComponent from './ProductComponent';

const Product = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 '> List products  <Badge bg="success">New</Badge></h1>
            <div className='row mt-5'>
                {ProductData.map((item, index) => {
                    return (
                        <div className='col-md-4' key={index}>
                            <ProductComponent
                                name={item.name}
                                price={item.price}
                                desc={item.Description}
                                id={item.id}
                            />
                        </div>
                    )
                })
                }
            </div>
        </div>

    );

    // return (
    //     <>
    //       <div className="container">
    //         <ul>
    //           {items.map((item) => (
    //             <li key={item.price}>
    //               <ParticularItem
    //                 name={item.name}
    //                 price={item.price}
    //                 desc={item.desc}
    //                 id={item.id}
    //               />
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   );
}
export default Product;