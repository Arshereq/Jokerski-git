function ReminderPassword(){
    return(
        <div class="container">
            <h1 class="is-size-1 mt-4 has-text-centered">Przypomnij Hasło<br /><br /></h1>
            <div class="field">
                <label class="label">E-mail</label>
                <input class="input" type="E-mail" placeholder="E-mail" />
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success mb-6">
                        Przypomnij Hasło
                    </button>
                </p>
            </div>
        </div>
    )
}
export default ReminderPassword