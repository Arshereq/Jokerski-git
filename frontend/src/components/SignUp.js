function SignUp() {
    return (
        <div class="container">
            <h1 class="is-size-1 mt-4 has-text-centered">Logowanie<br /><br /></h1>
            <div class="field">
                <label class="label">Login</label>
                <input class="input" type="login" placeholder="Login" />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
            <div class="field">
                <label class="label">Hasło</label>
                <input class="input" type="password" placeholder="Password" />
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success mb-6">
                        Zaloguj
                    </button>
                </p>
            </div>
        </div>
    );
}
export default SignUp