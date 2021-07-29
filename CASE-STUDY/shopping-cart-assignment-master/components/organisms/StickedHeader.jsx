import styled from 'styled-components';
import Link from 'next/link';
import Cart from  './cart/Cart';

import styles from './stickedBar.module.scss'

export default function StickedHeader() {
    return (
        <div>
            <StickedBar>
                <Header>
                    <img className = "logo" src = "../static/images/logo.png" alt = "logo" width = '150px'/>
                    <MenuNavContainer className = "menuNavContainer">
                        <ul>
                            <li><Link href = '/'>Home</Link></li>
                            <li><Link href = '/products'>Products</Link> </li>  
                        </ul> 
                    </MenuNavContainer>
                    <FormCartContainerDiv>
                        <FormNavContainer>
                                <ul>
                                    <li><Link href = '/login'>Sign In</Link></li>
                                    <li><Link href = '/register'>Register</Link></li>  
                                </ul> 
                        </FormNavContainer>
                        <AddToCartContainer>
                            <Cart />                
                        </AddToCartContainer>
                    </FormCartContainerDiv>
                </Header>
            </StickedBar>
        </div>
    )
}


const StickedBar = styled.div.attrs({
    className : styles.stickedBar
})`
    box-shadow: 0 3px 2px #e6e3e3;
   
`

const Header = styled.header`
    display : flex;
    width : 90%;
    margin : 0 auto;
`
const MenuNavContainer = styled.div`
    ul {
        margin-top: 3%; 
        li {    
        padding : 0 10px; 
       }
    }
    
    margin : 0 20px;
`

const FormCartContainerDiv = styled.div`    
    margin-left: auto;
    order: 2;
`
const FormNavContainer = styled.div`  
    margin : 5px auto;
    display : flex;
    ul {
        margin : 0;
    }
    li {
        padding : 0 5px;
        font-weight : bold;
        font-size : 10px;
    }
`
const AddToCartContainer = styled.div`
`


