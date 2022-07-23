import { useQuery } from "@apollo/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Spinner from "./Spinner";
import { GET_PROJECTS } from "../queries/projectQueries";
import { ProjectCard } from "./ProjectCard";
export const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading)
    return (
      <h3>
        <Spinner />
      </h3>
    );

  if (error) return <h3>Something went wrong</h3>;

  return (
    <>
      <div className="row my-3">
        {data.projects.length > 0 ? (
          data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p>There are no projects</p>
        )}
      </div>
    </>
  );
};
