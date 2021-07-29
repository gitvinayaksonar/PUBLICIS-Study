import Link from 'next/link'
import styled from 'styled-components'

export default function Category({ categoryObj, index }) {
    if(!categoryObj){
        return null;
    }
    const order = index % 2 === 0 ? 0 : 1;

    return (
        <CategoryContainer>
            <CategoryFirstColumn style = {{ order : order}}>
                <img src = {categoryObj.imageUrl} alt = {categoryObj.description} />
            </CategoryFirstColumn>

            <CategorySecondColumn>
                <CataHeading>{categoryObj.name}</CataHeading>
                <CataPara>{categoryObj.description}</CataPara>
                <ExploreNow> 
                    <Link href = {`/products?filterby=${categoryObj.id}`}>
                        {categoryObj.name}    
                    </Link>                    
                </ExploreNow>
            </CategorySecondColumn>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    box-shadow: 0 6px 4px -4px #bdbaba;
    display : flex;
    margin : 15px 0;
`

const CategoryFirstColumn = styled.div.attrs({
    className : "col span-1-of-2"    
})` 
    img {
        width : 67%;
        margin : 0 auto;
        height : auto;
    } 
`

const CategorySecondColumn = styled.div.attrs({    
    className : "col span-1-of-2"
})`   
    margin : auto;
    display : flex;
    flex-flow : column;
`

const CataHeading = styled.h4`    
    text-align : center;    
    font-weight : 700;
`
const CataPara = styled.p`    
    text-align : center;
    font-weight : 600;
`
const ExploreNow = styled.div`    
    display : flex;
    overflow : visible;  
    justify-content : center;  
    margin : 20px auto;
    a {
        color : white;
        background-color : #cf0768;
        padding : 7px;
    }
`
