import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const REGISTER = gql`
mutation register(
      $email: String!,
      $username: String!,
      $password1: String!,
      $password2: String!,
    ){
    register(
        email: $email
        username: $username
        password1: $password1
        password2: $password2
        ){
            success,
            errors,
            token,
            refreshToken
        }
    }
`;

function Register() {

    const [inputs, setInputs] = useState({
        username: "",
        password1: "" ,
        password2:"",
        email: "",
    });

    const [register] = useMutation(REGISTER, {
        variables: {
            username: inputs.username,
            password1: inputs.password1,
            password2: inputs.password2,
            email: inputs.email,
        }
    })
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                register();
                window.location.reload();
            }}>
            <div class="container">
                <h1 class="is-size-1 mt-4 has-text-centered">Rejestracja<br /><br /></h1>
                <div class="field">
                    <label class="label">Login</label>
                    <input class="input" type="login" placeholder="Login" name="username" value={inputs.username}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                username: e.target.value
                            })} />
                </div>
                <div class="field">
                    <label class="label">Hasło</label>
                    <input class="input" type="password" placeholder="Password" name="password" value={inputs.password1}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                password1: e.target.value
                            })} />
                </div>
                <div class="field">
                    <label class="label">Powtórz hasło</label>
                    <input class="input" type="password" placeholder="Powtórz hasło" name="password2" value={inputs.password2}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                password2: e.target.value
                            })} />
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <input class="input" type="email" placeholder="example@email.pl" name="email" value={inputs.email}
                        onChange={(e) =>
                            setInputs({
                                ...inputs,
                                email: e.target.value
                            })} />
                </div>
                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-success mb-6">
                            Zarejestruj
                        </button>
                    </div>
                </div>

            </div>
        </form>
    );
}
export default Register