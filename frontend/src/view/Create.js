import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PASTES } from "../query/paste/CREATE_PASTES";

function Create() {
  const [formState, setFormState] =
    useState({
      title: "",
      author: "",
      text: "",
      visibility: "",
      expireAfter: "",
    });
  const [createPaste] = useMutation(
    CREATE_PASTES,
    {
      variables: {
        title: formState.title,
        author: formState.author,
        text: formState.text,
        visibility:
          formState.visibility,
        expireAfter:
          formState.expireAfter,
      },
    }
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPaste();
        window.location.reload();
      }}
    >
      <div className="flex flex-column mt3"></div>
      <div class="container">
        <h1 class="is-size-1 mt-4 has-text-centered">
          Utwórz Wklejke
        </h1>
        <div class="field">
          <label class="label">
            Autor:
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Nazwa autora"
              value={formState.author}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author:
                    e.target.value,
                })
              }
            />
          </div>
        </div>

        <div class="field">
          <label class="label">
            Tytuł:{" "}
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Tytuł wklejki"
              value={formState.title}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div class="field">
          <label class="label">
            Usuń po - Kiedy twoja
            wklejka ma wygasnąć?
          </label>
          <div class="select is-fullwidth">
            <select
              value={
                formState.expireAfter
              }
              onChange={(e) =>
                setFormState({
                  ...formState,
                  expireAfter:
                    e.target.value,
                })
              }
              placeholder="expireAfter"
            >
              <option value="dzien">
                Dzień
              </option>
              <option value="tydzien">
                Tydzień
              </option>
              <option value="rok">
                Rok
              </option>
              <option value="Nigdy">
                Nigdy
              </option>
            </select>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Twoja wklejka - Tutaj dodaj
            swoją wklejkę
          </label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Treść wklejki"
              value={formState.text}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  text: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div class="field">
          <label class="label">
            Widoczność wklejki
          </label>
          <label class="radio is-large">
            <div class="control">
              <input
                type="radio"
                name="formState"
                value={
                  formState.visibility
                }
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    visibility:
                      e.target.value,
                  })
                }
                placeholder="visibility"
              />
              - Prywatna
            </div>
          </label>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              type="submit"
              class="button is-link"
            >
              Utwórz
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Create;
