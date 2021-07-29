
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Input from '../atoms/form/Input';


export default function RegisterForm() {
    const router = useRouter();   

    const handleSubmit = (event) => {        
        event.preventDefault();        
        router.push('/products')          
    }

    return (
        <div>
            <Form name = "loginForm" onSubmit= {handleSubmit} method = 'post' >                
                <Input type= 'email' placeholder = 'Email' name = 'email' /> 
                <Input type= 'password' placeholder = 'Password' name = 'password' />           
                <Button type = "submit"> Login </Button>
            </Form>
        </div>
    )
}

const Form = styled.form`
     width : 70%;
`

const Button = styled.button`
    background-color: #cf0768;
    border: none;
    color: #fff;
    height: 35px;
    width: 100%;
    margin: 9px 15px;
`