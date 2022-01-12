const projects = [
  {
    name: "biru",
    image: {
      src: "/biru.png",
      alt: "A screenshot of demo user's biru profile page",
    },
    tags: [
      "full stack",
      "React",
      "Next",
      "SCSS",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    type: "Personal project",
    description: [
      "biru is a beer journal app with CRUD functionality and session-based \
        user authentication. Once a user creates a profile, they can keep track \
        of new beers that they try by adding them to to their journal. They can \
        also search for, view and follow other users. The Sequelize ORM is used \
        to interface with a Postgres database, and images uploads are managed by \
        Cloudinary.",
      "This project greatly improved my skills with SQL and back end \
        development. I explored different authentication patterns, learning more \
        about cookies and CORS during development and deployment.",
    ],
    links: [
      {
        name: "live demo",
        url: "https://journal.biru.cool/",
      },
      {
        name: "source code",
        url: "https://github.com/janetxinli/biru",
      },
    ],
  },
  {
    name: "vibe check",
    image: {
      src: "/vibe_check.png",
      alt: "A screenshot of vibe check 'Your Vibe' page",
    },
    tags: ["full stack", "React", "Next", "Express", "SCSS"],
    type: "Personal project",
    description: [
      "vibe check is a web app that determines your mood from your Spotify \
        listening history. Users log in to their Spotify account using \
        Spotify's OAuth 2.0 framework, and their vibe is detected for \
        different time scales from their recent listening history or top played \
        songs. Users can save these songs to playlists for future listening.",
      "This was my first big personal web development project, and I learned a \
        lot from it. I greatly improved my front end skills with Next and SCSS \
        and became more familiar with back end development, calling external \
        APIs, and OAuth 2.0.",
    ],
    links: [
      {
        name: "live demo",
        url: "https://vibecheck.vercel.app/",
      },
      {
        name: "source code",
        url: "https://github.com/janetxinli/vibe-check",
      },
    ],
  },
  {
    name: "Structural Variant Pathogenicity Visualization",
    image: {
      src: "/sv_teaser.png",
      alt: "Teaser image of visualization panel",
    },
    tags: ["front end", "data visualization", "React", "D3", "Gosling"],
    type: "Course project, collaboration",
    contribution:
      "Design, writing and implementation (stacked bar charts, data selection & filtering, interactions, table)",
    description: [
      "For my Information Visualization course's final project, my group \
        created a multi-scale visualization panel of HG002 structural variants. \
        The HG002 variants were annotated with pathogenicity information by \
        identifying matches to ClinVar, and these matches are presented in \
        several linked views.",
      "Users can explore and navigate the dataset in a genomic context using a \
        Circos plot and linear view, both implemented with Gosling. The HG002 \
        and ClinVar datasets are summarized in stacked bar charts implemented \
        using D3. An interactive table displays the attributes of matching \
        variants with some visual encodings. Users can filter and select data to \
        reduce the number of items shown.",
    ],
    links: [
      {
        name: "source code",
        url: "https://github.com/neerapatadia/CPSC_547_Structural_Variants",
      },
      {
        name: "report",
        url: "https://www.cs.ubc.ca/~tmm/courses/547-21/projects/armita-janet-neera/report.pdf",
      },
    ],
  },
  {
    name: "Portfolio",
    image: {
      src: "/portfolio.png",
      alt: "Home page of my portfolio site"
    },
    tags: ["front end", "React", "Next.js", "SCSS"],
    type: "Personal project",
    description: [
      "This is the site you're looking at right now! I created my portfolio using React and Next.js \
        to take advantage of Next's static generation, route pre-fetching and SCSS module compatibility."
    ],
    links: [
      {
        name: "source code",
        url: "https://github.com/janetxinli/portfolio"
      },
      {
        name: "live demo",
        url: "https://www.janetxinli.com"
      }
    ]
  }
];

export default projects;
