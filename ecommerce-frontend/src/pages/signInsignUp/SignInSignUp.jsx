import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import "./SignInSignUp.css"
const SignInSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>
  )
}

export default SignInSignUp
