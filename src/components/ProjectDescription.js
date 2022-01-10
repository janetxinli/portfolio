import React from "react";
import Tag from "./Tag";
import styles from "../styles/components/ProjectDescription.module.scss";

const ProjectDescription = ({ project }) => (
  <article className={`df df-fc df-ai-c ${styles.projectDescription}`}>
    <img src={project.image.src} alt={project.image.alt} />
    <h3>{project.name}</h3>
    <article className={styles.tags}>
      {project.tags.map((t) => (
        <Tag key={t} content={t} />
      ))}
    </article>
    <p>
      <strong>Type:</strong> {project.type}
    </p>
    {project.contribution !== undefined && (
      <p>
        <strong>Contribution:</strong> {project.contribution}
      </p>
    )}
    <p>
      <strong>Description:</strong>{" "}
      {project.description.map((d, i) => (
        <span key={`${project.name}-description-${i}`}>
          {d}
          <br />
        </span>
      ))}
    </p>

    <div className={styles.externalLinks}>
      {project.links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
          {l.name}
        </a>
      ))}
    </div>
  </article>
);

export default ProjectDescription;
