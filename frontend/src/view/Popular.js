import React from "react";
import {
  useQuery,
  useMutation,
} from "@apollo/client";
import { READ_PASTES } from "../query/paste/READ_PASTES";
import { DELETE_PASTES } from "../query/paste/DELETE_PASTES";

function Popular() {
  const { loading, error, data } =
    useQuery(READ_PASTES);
  const [deletePastes] = useMutation(
    DELETE_PASTES
  );
  if (loading)
    return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  return (
    <div class="container has-text-centered ">
      <h1 class="is-size-1 m-4 has-text-centered">
        Popularne Wklejki
      </h1>
      <table class="table is-bordered is-striped is-fullwidth is-narrow is-hoverable m-6">
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Tytuł</th>
            <th>Autor</th>
            <th>Zawrtość</th>
            <th>Wygaśnie</th>
            <th>Usuń</th>
          </tr>
        </thead>
        {data?.pastes?.map(
          (item, i) => (
            <tbody class="has-text-weight-light">
              <th>{i + 1}.</th>
              <th>{item?.title}</th>
              <th>
                {item?.author.username}
              </th>
              <th>{item?.text}</th>
              <th>
                {item?.expireAfter}
              </th>
              <th>
                <button
                  className="button is-danger"
                  onClick={() => {
                    deletePastes({
                      variables: {
                        id: item?.id,
                      },
                    });
                    window.location.reload();
                  }}
                >
                  X
                </button>
              </th>
            </tbody>
          )
        )}
      </table>
    </div>
  );
}
export default Popular;
