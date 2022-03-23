function Register() {
    return (
        <div class="container">
            <h1 class="is-size-1 mt-4 has-text-centered">Rejestracja<br /><br /></h1>
            <div class="field">
                <label class="label">Login</label>
                <input class="input" type="login" placeholder="Login" />
            </div>
            <div class="field">
                <label class="label">Hasło</label>
                <input class="input" type="password" placeholder="Password" />
            </div>
            <div class="field">
                <label class="label">Email</label>
                <input class="input" type="email" placeholder="example@email.pl" />
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success mb-6">
                        Zarejestruj
                    </button>
                </p>
            </div>
        </div>
    );
}
export default Register