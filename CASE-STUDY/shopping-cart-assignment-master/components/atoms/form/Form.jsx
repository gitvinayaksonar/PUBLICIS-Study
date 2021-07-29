import { useRef } from 'react';
import styles from './form.module.scss';

export default function Form(props) {
    

    const validateForm = () => {
        console.log("props >>", props);
        return false;
    }

    return (
        <form name = {props.name}  onSubmit= {validateForm} className = {styles.basicform}  method="post">   
            {props.children}         
        </form>
    )
}

// action = {props.targetPage}