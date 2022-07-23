import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { ClientInfo } from "../../components/ClientInfo";
import { DeleteProjectButton } from "../DeleteProjectButton";
import { EditProjectForm } from "../EditprojectForm";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../queries/projectQueries";

export const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <div class="card w-75 mx-auto">
            <div class="card-header d-flex align-items-center justify-content-center">
              <h5>
                Status: <strong>{data.project.status}</strong>
              </h5>
            </div>
            <div class="card-body p-5">
              <h2 class="card-title">{data.project.name}</h2>
              <p class="card-text">{data.project.description}</p>

              <ClientInfo client={data.project.client} />
              <EditProjectForm project={data.project} />
            </div>
            <div className="card-footer p-2 d-flex align-items-center justify-content-end">
              <Link to="/" class="btn btn-dark w-25 d-inline ms-auto mx-2">
                Back to previous page
              </Link>
              <DeleteProjectButton projectId={data.project.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
