import React, { useEffect, useReducer } from 'react';

interface AuthState {
    checking: boolean,
    token: string | null,
    username: string,
    name: string,
};

const initialState: AuthState = {
    checking: true,
    token: null,
    username: '',
    name: '',
};

type LoginActionPayload = {
    username: string, 
    name: string
}

type AuthAction = 
    | { type: 'logout' } 
    | { type: 'login', payload: LoginActionPayload }; 

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                checking: false,
                token: null,
                username: '',
                name: '',
            }
        case 'login':
            const { name, username } = action.payload;
            return {
                checking: false,
                token: 'abc123',
                name,
                username,
            }
    
        default:
            return state;
    }
};

export const Login = () => {

    const [{ checking, token, name }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout'})
        }, 1500);
    }, []);

    const login = () => {
        dispatch({
            type: 'login', 
            payload: {
                name: 'Mango',
                username: 'TacoMango'
            }});
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    if(checking){
        return (
            <>
                <h3>Login</h3>

                <div className='alert alert-info'>
                    Checking ...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            { (token)
                ? <div className='alert alert-success'> Success, Welcome { name } </div> 
                : <div className='alert alert-danger'> Incorrect </div>
            }
            { (token) 
                ? <button className='btn btn-danger' onClick={ logout }> Logout </button>
                : <button className='btn btn-primary' onClick={ login }> Login </button>
            }

        </>
    )
}
