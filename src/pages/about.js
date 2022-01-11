import React from "react";
import Head from "next/head";
import Link from "next/link";
import tools from "../../data/tools";
import ToolList from "../components/ToolList";

const About = ({ toolList }) => (
  <>
    <Head>
      <title>Janet Li | About Me</title>
    </Head>
    <h2 className="text-center">About Me</h2>
    <section>
      <p>
        Hi there, I&apos;m Janet (she/her). I&apos;m a software developer,
        bioinformatician, coffee lover and crochet enthusiast. I&apos;m
        currently working towards my MSc. in Bioinformatics at the{" "}
        <a href="https://www.ubc.ca" target="_blank" rel="noopener noreferrer">
          University of British Columbia
        </a>{" "}
        and the{" "}
        <a
          href="https://www.bcgsc.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BC Cancer Michael Smith Genome Sciences Center
        </a>
        . My thesis work focuses on fungal comparative genomics and
        transcriptomics and is co-supervised by{" "}
        <a
          href="http://www.birollab.c/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Inanc Birol
        </a>{" "}
        and{" "}
        <a
          href="https://www.msl.ubc.ca/people/dr-jorg-bohlmann"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Joerg Bohlmann
        </a>
        .
      </p>
      <h3 className="text-center">My Journey</h3>
      <p>
        I studied Applied Biology during my undergrad at UBC and was introduced
        to programming through a third-year computer science course. I was
        immediately hooked, and continued to self-teach after I completed the
        course. I started working in the{" "}
        <a
          href="http://www.birollab.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          BTL
        </a>{" "}
        as a part time research assistant in my final year of undergrad, and
        during this time I developed{" "}
        <a
          href="https://github.com/bcgsc/tigmint/releases/tag/1.2.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          tigmint-long
        </a>
        . Doing hands-on bioinformatics research was a huge learning curve, but
        this position allowed me to apply my programming skills and improve my
        understanding of data structures and algorithms.
        <br />
        <br />I completed my undergrad in the Spring of 2020 and started my
        Masters that fall. During my grad studies I&apos;ve worked on a couple
        of different projects involving genome assembly correction and
        comparative genomics.
        <br />
        <br />
        With extra time on my hands during the pandemic, I started learning full
        stack web development, and have created several{" "}
        <Link href="/projects">
          <a href="/projects">personal projects</a>
        </Link>
        . I&apos;ve also volunteered with the{" "}
        <a
          href="https://www.bio-net.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bioinformatics Research Network
        </a>{" "}
        as a front end developer. I&apos;ve found a new passion in web
        development, and hope to combine my interests and work as a
        bioinformatics software developer when I complete my graduate studies.
        <br />
        <br />
        When I&apos;m not coding, you can probably find me crocheting on my
        couch or cooking a new dish. I also love to spend time outdoors - I
        enjoy biking around the city and hiking in the summer, and spend my
        weekends skiing during the winter.
      </p>
      <h3 className="text-center">Tools</h3>
      <p>
        I have experience with full stack Javascript: React and Next for the
        front end and Express for the back end. For my research, I mostly work
        with command line tools. I do a lot of Python scripting and have become
        familiar with its data science tools. I use a bit of R for wrangling and
        plotting data, as well. The software languages and tools that I enjoy
        working with and am strongest in are:
      </p>
      <ToolList toolList={toolList} />
      <p>
        I have a bit of experience with D3, but would like to work on some more
        projects with it to get better acquainted with the API. The next thing
        on my list to learn is a Python web framework such as Django or FastAPI.
        <br />
        <br />
        You can find a summary of my skills and experience in my{" "}
        <Link href="/">
          <a target="_blank" href="/">
            resume
          </a>
        </Link>
        . My contact info can be found at the bottom of each page. Feel free to
        say hi - I&apos;m always up for a chat!
      </p>
    </section>
  </>
);

export const getStaticProps = async () => ({
  props: {
    toolList: tools,
  },
});

export default About;
