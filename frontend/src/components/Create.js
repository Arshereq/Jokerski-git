import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";

const CREATE_PASTES = gql`
  mutation createPaste(
    $title: String!
    $author: String!
    $text: String!
    $visibility: Boolean!
    $expireAfter: String!
    ){
    createPaste(
      title: $title
      author: $author
      text: $text
      visibility: $visibility
      expireAfter: $expireAfter
      ){
        paste{
          id
        }
      }
  }
`;

function Create() {
    const [formState, setFormState] = useState({
        title: '',
        author: '',
        text: '',
        visibility: '',
        expireAfter: '',
    });
    const [createPaste] = useMutation(CREATE_PASTES, {
        variables: {
            title: formState.title,
            author: formState.author,
            text: formState.text,
            visibility: formState.visibility,
            expireAfter: formState.expireAfter,
        }
    });

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createPaste();
                window.location.reload();
            }}>
            <div className="flex flex-column mt3"></div>
            <div class="container">
                <h1 class="is-size-1 mt-4 has-text-centered">Utwórz Wklejke</h1>
                <div class="field">
                    <label class="label">Autor:</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="tytuł wklejki"
                            value={formState.author}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    author: e.target.value
                                })}
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Tytuł: </label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="Twoja nazwa"
                            value={formState.title}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    title: e.target.value
                                })}
                        />

                    </div>
                </div>
                <div class="field">
                    <label class="label">Usuń po - Kiedy twoja wklejka ma wygasnąć?</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={formState.expireAfter}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    expireAfter: e.target.value
                                })
                            }
                            placeholder="expireAfter"
                        />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Twoja wklejka - Tutaj dodaj swoją wklejkę</label>
                    <div class="control">
                        <textarea
                            class="textarea"
                            placeholder="Wklejka"
                            value={formState.text}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    text: e.target.value
                                })}
                        />
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={formState.visibility}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    visibility: e.target.value
                                })
                            }
                            placeholder="visibility"
                        />
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button type="submit" class="button is-link">Utwórz</button>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Create