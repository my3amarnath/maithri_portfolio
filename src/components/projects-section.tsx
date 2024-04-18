import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Imapct of recession on Automobile Sale",
    description: "Analyze the historical data of XYZ Automotives and give the company directors insights on how the sales were affected during times of recession.",
    image: "/AutombileSales.png",
    github: "https://github.com/my3amarnath/Analyzing-the-Impact-of-Recession-on-Automobile-Sales",
    link: "",
  },
  {
    name: "SpaceX Falcon 9 first stage Landing Prediction",
    description: "IBM Capstone Data Science project that predicts the success rate of landing SpaceX's Falcon 9 first stage by training a machine learning model and use public information to predict if SpaceX will reuse the first stage",
    image: "/SpaceXFalcon9.png",
    github: "https://github.com/my3amarnath/SpaceX-Falcon-9-first-stage-Landing-Prediction",
    link: "",
  },
  {
    name: "Analyzing wildfire activities in Australia",
    description:"Visualization libraries such as Matplotlib, Pandas, Seaborn and Folium to create informative plots and charts for wildfire activities in Australia",
    image: "/wildfire.png",
    github: "https://github.com/my3amarnath/Analyzing-wildfire-activities-in-Australia",
    link: "",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link}>
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
