import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import Category from "./Category"
import { fetchCategoryList } from '../../../redux/actions'


function CategoryList(props) {  
    const categoryList = useSelector((state) => state.categoryList) ;  
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    const renderContent = () => {        
        return categoryList.map((categoryObj, i) => {
            return <Category categoryObj = {categoryObj} key = {categoryObj.id} index = {i}/>            
        })
    }    

    return (
        <div>
            { renderContent() }
        </div>
    )
}
export default CategoryList;