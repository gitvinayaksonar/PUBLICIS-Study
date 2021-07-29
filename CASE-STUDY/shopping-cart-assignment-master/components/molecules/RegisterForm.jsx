
import styled from 'styled-components';
import Input from '../atoms/form/Input';
import { useState } from 'react';
import { useRouter } from 'next/router'

export default function RegisterForm() {
    const router = useRouter()
    const [password, setPassword] = useState('');
    const [confPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if( password !== confPassword ){
            alert('Passwords are not same');
            return false
        }
        router.push('/login')          
    }

    return (
        <div>
            <Form name = "registerFrom" onSubmit= {handleSubmit} method = 'post' >
                <Input type = 'text' placeholder = 'First Name' name = 'firstname'/>
                <Input type = 'text' placeholder = 'Last Name' name = 'lastname'/>  
                <Input type= 'email' placeholder = 'Email' name = 'email' />   
                                
                <LoginCredsInput placeholder = 'Password' value = {password} onChange = {(e) => setPassword(e.target.value)} required/>
                <LoginCredsInput placeholder = 'confirm Password' value = {confPassword} onChange = {(e) => setConfirmPassword(e.target.value)} required/>

                <Button type = "submit"> Submit </Button>
            </Form>
        </div>
    )
}

const Form = styled.form`
     width : 70%;
`

const LoginCredsInput = styled.input.attrs({
    type : 'password'
})`
    margin: 15px;    
    width: 100%;
    border : none;
    border-bottom: 1px solid rgb(212, 208, 208);
`

const Button = styled.button`
    background-color: #cf0768;
    border: none;
    color: #fff;
    height: 35px;
    width: 100%;
    margin: 9px 15px;
`