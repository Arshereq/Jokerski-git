function Popular() {
    return (
        <div class="container has-text-centered ">
            <h1 class="is-size-1 m-4 has-text-centered">Popularne Wklejki</h1>
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth m-6">
                <thead>
                    <tr>
                        <th>Tytuł</th>
                        <th>Autor</th>
                        <th>Język</th>
                        <th>Wyświetlenia</th>
                        <th>Dodano</th>
                    </tr>
                </thead>
                <tbody class="has-text-weight-light">
                    <tr>
                        <th>Moja wklejka</th>
                        <th>dmurawski</th>
                        <th>JavaScript</th>
                        <th>1241412</th>
                        <th>2 lata temu</th>
                    </tr>
                    <tr>
                        <th>Moja wklejka2</th>
                        <th>vat332</th>
                        <th>JavaScript</th>
                        <th>122</th>
                        <th>1 rok temu.</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Popular