import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReminderPassword from './ReminderPassword';
import { gql, useMutation } from '@apollo/client';
import React, {useContext, useState } from 'react';
import { AuthContext } from '../context/auth';

const LOGIN = gql`
mutation tokenAuth(
    $username:String!,
    $password:String!,
){
    tokenAuth(username: $username, password: $password ){
        success,
        errors,
        unarchiving,
        token,
        refreshToken,
        unarchiving,
        user{
            id,
            username,
        }    
    }
}
`;


function SignUp() {
    const context = useContext(AuthContext)
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })


    const [loginUser] = useMutation(LOGIN, {
        update(_,{data:{login:userData}}){
            context.login(userData);
        },
        variables: {
            username: formState.username,
            password: formState.password,
        }
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                loginUser();
            }}>
            <div class="container">
                <h1 class="is-size-1 mt-4 has-text-centered">Logowanie<br /><br /></h1>
                <div class="field">
                    <label class="label">Login</label>
                    <input class="input" type="login" placeholder="Login" value={formState.username}
                        onChange={(e) => setFormState({
                            ...formState,
                            username: e.target.value
                        })} />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
                <div class="field">
                    <label class="label">Hasło</label>
                    <input class="input" type="password" placeholder="Password" value={formState.password}
                        onChange={(e) => setFormState({
                            ...formState,
                            password: e.target.value
                        })} />
                </div>
                <div class="field">
                    <p class="control">
                        <button type="submit" class="button is-success mb-6">
                            Zaloguj
                        </button>
                        <a class="button is-warning mb-6 ml-2" href="/ReminderPassword">
                            Przypomnij hasło
                        </a>
                    </p>
                </div>
            </div>
        </form>
    );
}
export default SignUp