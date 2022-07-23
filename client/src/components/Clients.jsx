import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ClientRow } from "./ClientRow";
import Spinner from "./Spinner";
export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading)
    return (
      <h3>
        <Spinner />
      </h3>
    );
  if (error) return <h3>Something went wrong</h3>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
