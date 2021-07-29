import styled from 'styled-components';
import PageLayout from '../organisms/PageLayout'
import ProductsList from "../organisms/products/ProductsList";
import ProductsCategoryList from "../organisms/products/ProductsCategoryList";


export default function Products() {
    return (
        <PageLayout>
            <div style = {{ backgroundColor : '#e8e6e6', height : 'auto', display : 'flex' }}>
                <CategoryContainer>
                    <ProductsCategoryList />
                </CategoryContainer>
                
                <ProductsListContainer>
                    <ProductsList />
                </ProductsListContainer>
            </div>
        </PageLayout>
    )
}


const CategoryContainer = styled.div`
    float: left;
    width: 22%;
    height : auto;

`
const ProductsListContainer = styled.div`
    width: 78%;  
    float: right;
    background-color : #fff;
`