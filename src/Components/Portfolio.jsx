/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk1.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Air BNB Clone 🎉",
    description:
      "The Airbnb Clone project aims to replicate the functionality of Airbnb, enabling users to discover, book, and manage accommodations seamlessly. Leveraging modern web technologies, I strive to create an intuitive platform with features like property listings, booking management, and user authentication to enhance the travel experience for guests and hosts alike.",
    url: "https://github.com/asenjialvin/AirBnB_clone",
  },
  {
    title: "My Responsive Personal Portfolio Website",
    description:
      "My personal responsive portfolio website showcases my diverse skill set and projects, adapting seamlessly to various devices for optimal user experience. With clean design and intuitive navigation, it aims to impress visitors and highlight my expertise in web development and design.",
    url: "https://github.com/asenjialvin/Responsive_Personal_Portfolio_Website",
  },
  // {
  //   title: "My Resume Site",
  //   description:
  //     "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
  //   url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  // },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
