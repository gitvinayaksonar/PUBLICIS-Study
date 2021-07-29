import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { buyNow } from '../../../redux/actions'

function ProductCard(props) {
    const dispatch = useDispatch();
    const productObj = props.product;

    const buyNowClickHandler = (productObj) => {              
        dispatch(buyNow(productObj))
    }

    return (
        <ProductContainer>
            <ProductHeading> {productObj.name} </ProductHeading>
            <img src = {productObj.imageURL} alt = 'pic' />
            <ProductDetails> {productObj.description} </ProductDetails>
            <MrpBuyNowContainer>
                <MRP> {`MRP Rs.${productObj.price}`} </MRP>
                <div onClick = { () => buyNowClickHandler(productObj)}>
                    <BuyNow> Buy Now </BuyNow>
                </div>
            </MrpBuyNowContainer>
        </ProductContainer>
    )
}

export default ProductCard;


const ProductContainer = styled.div.attrs({
    className : 'col span-1-of-4 box'
})` 
    margin : 0 2px;
    padding: 10px;
    height: 340px;
    border-bottom: 2px dashed #cec8c85c;
    background-color : #fff;
    box-shadow : 2px 0 1px #cec8c85c;
`

const ProductHeading =  styled.h6`
    height : 15px;
    font-size : 15px;
    font-weight : bold;
`

const ProductDetails = styled.p`    
    height : 68px; 
    background-color : #f3efefbf;
    overflow: hidden;   
    -webkit-line-clamp: 4;  
    font-weight : 600;   
    font-size : 11px;
`

const MrpBuyNowContainer = styled.div`
    height : 20px;
`

const MRP =  styled.p`
    width : 50%;
    float : left;
    font-size : 12px; 
    display :flex;
    align-items : center;   
    font-weight : bold;
`

const BuyNow = styled.p`
    color : #fff;
    float : right; 
    width : 50%;
    justify-content : center;
    background-color : #cf0768;
    cursor: pointer;
    height : 30px;
    display :flex;
    align-items : center;
    a {
        color : #fff;
    }
`
