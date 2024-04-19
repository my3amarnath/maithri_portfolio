import React from 'react'
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./slide-up"

const resume = [
  {
    image: "/pdfIcon.gif",
    link: "MaithriAmarnathVijayakumari_Resume.pdf",
  },
]


const ResumeSection = () => {
  return (
    <section id="resume">
      <h1 className="pt-20 my-10 text-center font-bold text-4xl ">
        Resume
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 place-items-center">
        {resume.map((resumes, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-24 ">
                    <Link href={resumes.link} target="_blank">
                      <Image
                        src={resumes.image}
                        alt=""
                        width={250}
                        height={450}
                        className="rounded-xl shadow-xl hover:opacity-70 "
                      />
                    </Link>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  );
};

export default ResumeSection;