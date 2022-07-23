export const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6">
      <div class="card mb-3">
        <div class="card-header">
          Status: <b>{project.status}</b>
        </div>
        <div class="card-body">
          <h5 class="card-title">{project.name}</h5>
          <p class="card-text">-</p>
          <a href={`/projects/${project.id}`} class="btn btn-primary">
            View project
          </a>
        </div>
      </div>
    </div>
  );
};
