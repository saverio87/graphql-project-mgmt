import { FaTrash } from "react-icons/fa";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { useMutation } from "@apollo/client";

export const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // Two ways to refresh the data upon deleting the entry, can either
    // refetch the query (make another request) or update the cache
    // (no need to make another request)
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
    // We are fetching both GET_CLIENTS and GET_PROJECTS again, as
    // we want the projects to update when a client (as well as their
    // projects) are deleted from the back-end
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

// {
//   clients{
//     id,
//     name,email
//   }}
