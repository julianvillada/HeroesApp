import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


export const LoginScreen = ({ history }) => {

    
const   { dispatch } = useContext(AuthContext) 

const handleLogin = () =>{

    const lastPath = localStorage.getItem('lastPath') || '/';
   
    const action = {
        type: types.login,
        payload: {
            name:'Julian'
        }
    }
     dispatch( action );
       history.replace( lastPath );
    
}

    return (
        <div className='container my-5'>
            <h1>Login</h1>

            <button
                className='btn btn-primary'
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
