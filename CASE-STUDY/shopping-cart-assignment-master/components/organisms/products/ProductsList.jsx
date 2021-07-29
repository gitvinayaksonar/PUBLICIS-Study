import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { fetchProductsList } from '../../../redux/actions'
import ProductCard from './ProductCard'

function ProductsList() {       
    const products = useSelector((state) => state.products) ;  
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchProductsList(router.query.filterby))
    }, [])

    const renderContent = () => {        
        return products.map((eachProduct, i) => {
            return <ProductCard product = {eachProduct} key = {i}/>
        })
    }
    return (
        <div>             
            { renderContent() }
        </div>
    )
}


export default ProductsList;