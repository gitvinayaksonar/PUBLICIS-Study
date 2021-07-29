import styled from "styled-components"

export default function Footer() {
    return (
        <FooterSection>
            Copyright <span> &copy; </span> 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
        </FooterSection>
    )
}

const FooterSection = styled.footer`   
    height: 40px;
    background-color: #e8e6e6;
    padding: 8px 14% ;
    bottom: 0;
    font-weight : bold;   
    color : #4e4c4c; 
    bottom: 0;
    display: block;
    width : 100%;
    overflow : auto; 
`