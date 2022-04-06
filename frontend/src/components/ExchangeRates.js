import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
const READ_PASTES = gql`
query pastes{
  pastes{
    id
    title
    text
    author {
      id
      username
    }
  }
}
`;
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

const DELETE_PASTES = gql`
  mutation deletePaste($id: Int!) {
    deletePaste(id: $id){
    message
    }
  }
`;

const ExchangeRates = () => {
  let input;
  const { loading, error, data } = useQuery(READ_PASTES);
  const [deletePastes] = useMutation(DELETE_PASTES);
  // const [createPaste] = useMutation(CREATE_PASTES);
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
  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>
  return (
    <section>
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
        <tbody class="has-text-weight-light"></tbody>
          {data?.pastes?.map((item, i) => (
            <td>
              {i + 1}. ID-{item?.id} Tytuł {item?.title} Treść {item?.text} Autor_ID {item?.author.id} Autor {item?.author.username}
              <button className="button is-danger" onClick={() => {
                deletePastes({ variables: { id: item?.id } });
                window.location.reload();
              }}>X</button>
            </td>
          ))}
      </table>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPaste();
          }}>
          <div className="flex flex-column mt3">
            <input
              className="mb2"
              value={formState.title}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  title: e.target.value
                })
              }
              type="text"
              placeholder="title"
            />
            <input
              className="mb2"
              value={formState.author}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  author: e.target.value
                })
              }
              type="text"
              placeholder="author"
            />
            <input
              className="mb2"
              value={formState.text}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  text: e.target.value
                })
              }
              type="text"
              placeholder="text"
            />
            <input
              className="mb2"
              value={formState.visibility}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  visibility: e.target.value
                })
              }
              type="text"
              placeholder="visibility"
            />
            <input
              className="mb2"
              value={formState.expireAfter}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  expireAfter: e.target.value
                })
              }
              type="text"
              placeholder="expireAfter"
            />
          </div>
          <button type="submit" class="button is-success">Submit</button>
        </form>
      </div>
    </section >
  );
};
export default ExchangeRates