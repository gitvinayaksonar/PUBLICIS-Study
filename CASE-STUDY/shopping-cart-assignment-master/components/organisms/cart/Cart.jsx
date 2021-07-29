import { useRef } from 'react';
import styled from 'styled-components'
import CartItemsList from './CartItemsList';
import { connect } from 'react-redux';

function Cart(props) {
    const divRef = useRef();
    
    const cartClickHandler = () => {              
        divRef.current.style.display = 'block';        
    }

    const onCloseButtonClick = () => {
        divRef.current.style.display = 'none';
    }
    
    return (
        <div className = 'w3-container' style = {{ padding : 0}}>
            <div style = {{ display : 'flex', height : '44px', overflow : 'hidden', backgroundColor : '#0e0e0e0f', cursor: 'pointer'}} onClick = {cartClickHandler}>
                <UnorderedListContainer>
                    <img src = "../static/images/cart.svg" alt = "cart" width = '25px'/>
                    {`${props.numberOfItemsInCart} items`}
                </UnorderedListContainer>
            </div>

            <div ref = {divRef} className ="w3-modal">
                <OrderDetailsContainer>
                    <BlackStripe>
                        My Cart ( {`${props.numberOfItemsInCart} items`}) <span onClick = {onCloseButtonClick} style ={{ float : 'right', cursor : 'pointer'}}> X </span>
                    </BlackStripe>
                    {
                        props.amountToBePaid === 0 ?
                        <h6 style = {{width : '50%', margin : '10px auto'}}> No items in your cart </h6> :
                        <div>
                            <CartItemsList />
                            <CheckOutContainer>
                                Proceed to Checkout <span style = {{ float : 'right'}}>{`Rs. ${props.amountToBePaid} `}</span>
                            </CheckOutContainer>
                        </div>
                    
                    }
                </OrderDetailsContainer>                
            </div>

            
        </div>  
    )
}

const mapStateToProps = (state) => {
    const amountToBePaid = state.productsBought.reduce((acc, cur) => {
        const curProductValue = cur.price * cur.quantity;
        return acc + curProductValue;
    }, 0)

    return { 
        numberOfItemsInCart : state.productsBought.length,
        amountToBePaid : amountToBePaid
    }
}
export default connect(mapStateToProps)(Cart);


const UnorderedListContainer = styled.div`
    display : flex;     
    width : 100px;
    align-items : center;    
    margin : 2px auto;
    justify-content : center;
    
`

const OrderDetailsContainer = styled.div`
    width : 30%;
    float : right;
    background-color : #fff;
    height : 450px;
    overflow-y : scroll;
`
const BlackStripe = styled.div`
    background-color : #000;
    color : #fff;
    height : 50px;
    padding : 15px;
    position : sticky; 
    z-index : 1; 
    top : 0;
`

const CheckOutContainer = styled.div`
    width : 90%;
    margin : 10px auto;
    background-color : #f31a82;
    height : 35px;
    padding : 9px;
    color : #fff; 
    font-weight : bold;       
`