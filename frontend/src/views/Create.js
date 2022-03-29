function Create() {
    return (
        <div class="container">
            <h1 class="is-size-1 mt-4 has-text-centered">Utwórz Wklejke</h1>
            <div class="field">
                <label class="label">Autor:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Twoja nazwa" />
                </div>
            </div>

            <div class="field">
                <label class="label">Tytuł: </label>
                <div class="control">
                    <input class="input" type="text" placeholder="tytuł wklejki" />
                </div>
            </div>

            <div class="field">
                <label class="label">Email:</label>
                <div class="control">
                    <input class="input" type="email" placeholder="example@email.pl" />
                </div>
            </div>
            <div class="field">
                <label class="label">Usuń po - Kiedy twoja wklejka ma wygasnąć?</label>
                <div class="control">
                    <div class="select">
                        <select>
                            <option>spal po przeczytaniu</option>
                            <option>nigdy</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Twoja wklejka - Tutaj dodaj swoją wklejkę</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Wklejka"></textarea>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" />
                        Prywatna - Wklejki prywatne nie będą pokazywane publicznie.
                    </label>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Utwórz</button>
                </div>
            </div>
        </div>
    );
}
export default Create