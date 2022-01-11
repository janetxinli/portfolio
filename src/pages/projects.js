import React from "react";
import Head from "next/head";
import ProjectDescription from "../components/ProjectDescription";
import projects from "../../data/projects";

const Projects = ({ projectList }) => (
  <>
    <Head>
      <title>Janet Li | Projects</title>
    </Head>
    <h2 className="text-center">Projects</h2>
    {projectList.map((p) => (
      <ProjectDescription key={p.name} project={p} />
    ))}
  </>
);

export const getStaticProps = () => ({
  props: {
    projectList: projects,
  },
});

export default Projects;
