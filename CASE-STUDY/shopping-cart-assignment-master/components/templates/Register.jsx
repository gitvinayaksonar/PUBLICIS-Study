import styled from 'styled-components'
import RegisterForm from "../molecules/RegisterForm";
import PageLayout from '../organisms/PageLayout'

export default function Register() {
    return (
        <PageLayout>
            <SignupContainer>
                <LeftDivContainer>
                    <h3 style = {{ fontWeight : 'bold'}}> Signup</h3>
                    <p>We do not share your personal details with anyone</p>
                </LeftDivContainer>
                <RegisterForm />
            </SignupContainer>            
        </PageLayout>
    )
}

const SignupContainer = styled.div`
    margin: 0 auto;
    max-width: 80%;
    margin-top : 55px;
    display: flex;
`

const LeftDivContainer = styled.div`
    width : 65%;
`