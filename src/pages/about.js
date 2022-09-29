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
        Hi there, I&apos;m Janet (she/her). I&apos;m a developer,
        bioinformatician, coffee lover and crochet enthusiast. I&apos;m
        currently working as a Software Engineer at Deep Genomics, building user
        interfaces and biological data visualizations. I recently graduated with
        my M.Sc. in Bioinformatics from the University of British Columbia,
        where I worked on genome assembly correction and fungal comparative
        genomics.
      </p>
      <h3 className="text-center">Skills</h3>
      <p>
        I have experience with full-stack web development: React and Next.js for
        the front-end and Express.js on the back-end. I also have extensive
        experience writing Python for bioinformatics and data science, as well
        as R for wrangling and plotting data. The software languages and tools
        that I enjoy working with and am strongest in are:
      </p>
      <ToolList toolList={toolList} />
      <p>
        I'm inherently curious and always looking to learn something new. My
        current goal is to learn a Python web framework such as Django or
        FastAPI.
        <br />
        <br />
        You can find a summary of my skills and experience in my{" "}
        <Link href="/LiJanet_Resume.pdf">
          <a target="_blank" href="/LiJanet_Resume.pdf">
            resume
          </a>
        </Link>
        . My contact info is listed there, and can also be found at the bottom
        of this page. Feel free to say hi - I&apos;m always up for a chat!
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
