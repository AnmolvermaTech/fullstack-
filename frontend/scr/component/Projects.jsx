import { useEffect, useState } from "react";
import { API } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Our Projects</h2>

      {projects.length === 0 && <p>No projects found</p>}

      {projects.map(project => (
        <div
          key={project._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px"
          }}
        >
          <img
            src={`http://localhost:5000/uploads/${project.image}`}
            alt={project.name}
            width="300"
          />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}
