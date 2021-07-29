import { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchCategoryList, fetchProductsList } from '../../../redux/actions'

function ProductsCategoryList(props) {
    const categoryList = useSelector((state) => state.categoryList) ;  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoryList())     
    }, [])
    
    const onButtonClick = (catId) => {        
        dispatch(fetchProductsList(catId))
    }

    const renderContent = () => {        
        return categoryList.map((categoryObj, i) => {
            return <CategoryTile key = {i}>
                <div onClick = {() => onButtonClick(categoryObj.id)}>{categoryObj.name}</div>
            </CategoryTile>       
        })
    }    

    return (
        <div>
            { renderContent() }
        </div>
    )
}


export default ProductsCategoryList;


const CategoryTile = styled.div`
    height: 35px;
    box-shadow: 0 1px 0 #ada8a863;
    text-align: left;
    padding: 6%;
    color : #3c39397a;
    cursor: pointer;
    font-weight : bold;
`




