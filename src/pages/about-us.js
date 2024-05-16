import { MemoizedCustomLayOut } from "@/modules/GenericComponents/CustomLayOut";
import { MemoizedWelcomeSection } from "@/modules/Home/WelcomSection";
import { MemoizedOurExpertise } from "@/modules/Home/OurExpertise";

import React from "react";
import { MemoizedCaseStudyCards } from "@/SDK/cards/CaseStudyCards";
import Head from "next/head";

const whoweAreData = [
  {
    id: 1,
    numData: "500+",
    text: "Projects Delivered",
  },
  {
    id: 2,
    numData: "300+",
    text: "Clients",
  },
  {
    id: 3,
    numData: "35",
    text: "Domains",
  },
  {
    id: 4,
    numData: "1M",
    text: "Users Impacted",
  },
];

const aboutUsData = [
  {
    id: 1,
    title: "Cultural Diversity",
    desc: `From varied backgrounds emerge our team's cultural tapestry, woven with unique threads of contribution.`,
    imgUrl: "/images/aboutUs/dummy.svg",
  },
  {
    id: 2,
    title: "Learn and Grow",
    desc: `In our community, participation knows no bounds; it permeates every layer of our work, driving multi-dimensional growth for all.`,
    imgUrl: "/images/aboutUs/dummy.svg",
  },
  {
    id: 3,
    title: "Passion and Respect",
    desc: `We're driven by a deep respect for diverse perspectives, igniting our passion to venture into the realms of the unexplored.`,
    imgUrl: "/images/aboutUs/dummy.svg",
  },
  {
    id: 4,
    title: "Offcourse Fun Fridays",
    desc: `At the end of the week, we unwind and recharge with Fun Fridays, celebrating the week's accomplishments with laughter and cheer.`,
    imgUrl: "/images/aboutUs/dummy.svg",
  },
];

const whatWeDoData = [
  {
    id: 1,
    imgUrl: "/images/aboutUs/design.svg",
    title: "Design",
  },

  {
    id: 2,
    imgUrl: "/images/aboutUs/develop.svg",
    title: "Develop",
  },
  {
    id: 3,
    imgUrl: "/images/aboutUs/deploy.svg",
    title: "Deploy",
  },
];

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us Orange LVT - Digital Innovation and Impact</title>
        <meta
          name="description"
          content="Learn about Orange LVT's vision, mission, and values. Discover how we help businesses thrive with innovative digital solutions and exceptional results. Leading technology company specializing in digital innovation and impact."
        />
        <meta
          name="keywords"
          content="Orange League Venture Technology ,Orange LVT, digital innovation, about us, vision, mission, values, technology company, software development, digital transformation, tech solutions"
        />
        <meta name="url" content="https://www.orangeleague.in/about-us" />
        <meta name="lang" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.orangeleague.in/about-us" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MemoizedCustomLayOut>
        <div className="mx-10 max-w-6xl lg:mx-auto !important px-2 pt-44 md:pt-96">
          <MemoizedWelcomeSection
            title={
              <p>
                Navigate Through Our Legacy of <br /> Innovation and Impact
              </p>
            }
            paragraph={` Uncover the stories behind our successful projects and learn how we've helped businesses like yours achieve their digital goals. Our case studies provide valuable insights and inspiration for your own digital initiatives.`}
          />
          <div className="my-72 sm:my-52">
            <p className="md:max-w-3xl mt-4 mx-auto sm:mx-auto text-center text-lg lg:text-xl font-bold">
              <span className="text-primary-orange font-bold  text-2xl">
                &ldquo;{" "}
              </span>
              Since the beginning our vision is to revolutionize the digital
              landscape, inspiring growth and success for our clients. Together,
              let's embark on a journey of innovation, collaboration, and which
              will have lasting impact.
              <span className="text-primary-orange text-2xl ">&rdquo;</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center max-w-4xl mx-auto mt-14 place-items-center">
              <div className="flex pl-2 my-4">
                <img src="/images/test.svg" alt="" className="mr-1 m" />
                <div className="ml-4">
                  <p className="font-bold sm:text-base">Akshay Biswas</p>
                  <p className="font-normal text-xs text-accent-purple">
                    Founder & Ceo, Wipro
                  </p>
                </div>
              </div>
              <div className="flex sm:mx-10 my-4">
                <img src="/images/test.svg" alt="" className="mr-1" />
                <div className="ml-4">
                  <p className="font-bold text-base">Akshay Biswas</p>
                  <p className="font-normal text-xs text-accent-purple">
                    Founder & Ceo, Wipro
                  </p>
                </div>
              </div>
              <div className="flex my-4">
                <img src="/images/test.svg" alt="" className="mr-1" />
                <div className="ml-4">
                  <p className="font-bold text-base">Akshay Biswas</p>
                  <p className="font-normal text-xs text-accent-purple">
                    Founder & Ceo, Wipro
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MemoizedOurExpertise
            title="Who We Are"
            text={
              <p className="'text-2xl">Your Partner in Digital Innovation </p>
            }
          />
          <div>
            <p className="text-center max-w-4xl mx-2 sm:mx-auto text-base font-normal">
              At <span className="text-primary-orange">Orange League</span>, we
              are passionate about leveraging technology to drive innovation and
              transform businesses. With a focus on creativity, collaboration,
              and client satisfaction, we strive to exceed expectations and
              deliver exceptional results.
            </p>
          </div>

          <div className="mt-40  mx-2 md:mx-auto flex flex-col justify-center order border-accent-purple bg-accent-white shadow-lg rounded-2xl">
            <div className="py-8 px-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 place-items-center">
              {whoweAreData.map((data) => {
                return (
                  <div
                    className="flex flex-col items-center py-2"
                    key={data.id}
                  >
                    <p className="text-xl md:text-3xl lg:text-5xl mb-4 font-bold text-primary-orange">
                      {data.numData}
                    </p>
                    <p className="text-base md:text-xl font-bold">
                      {data.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <MemoizedOurExpertise
            title="What Do We Do"
            text={
              <p className="text-2xl">
                Tailored Solutions for Your Digital Needs
              </p>
            }
          />
          <div>
            <p className="text-center  mx-2 sm:mx-auto text-base font-normal">
              We specialize in providing end-to-end digital solutions, including
              web and mobile development, UI/UX design, digital marketing, and
              more. Our goal is to help businesses thrive in the digital age by
              delivering tailored solutions that align with their goals and
              objectives.
            </p>
          </div>

          <div className="mx-auto flex flex-col justify-center my-2">
            <div className="mt-14 grid  grid-cols-1 md:grid-cols-3 gap-8">
              {whatWeDoData.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="mx-auto md:w-full w-9/12 bg-accent-white border border-accent-white shadow-lg rounded-2xl relative overflow-hidden h-full"
                  >
                    <div className="flex flex-col justify-center">
                      <img
                        src={data.imgUrl}
                        alt={data.title}
                        className={`w-full object-contain`}
                      />

                      <p className="text-primary-orange  text-center font-bold md:text-xl lg:text-2xl text-base my-4">
                        {data.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <MemoizedOurExpertise
            title="Our Culture"
            text={
              <p className="'text-2xl">
                Collaboration, Creativity, Excellence{" "}
              </p>
            }
          />

          <p className="text-center sm:mx-auto text-base font-normal">
            At the heart of
            <span className="text-primary-orange"> Orange League</span> is a
            vibrant and inclusive culture that fosters creativity,
            collaboration, and continuous learning. We believe in empowering our
            team members to take ownership of their work, embrace challenges,
            and strive for excellence. Transparency, open communication, and
            mutual respect are the cornerstones of our culture.
          </p>

          <div className="mx-auto flex flex-col justify-center my-2">
            <div className="mt-14 grid  grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {aboutUsData.map((data) => {
                return (
                  <React.Fragment key={data.id}>
                    <MemoizedCaseStudyCards data={data} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </MemoizedCustomLayOut>
    </>
  );
};

export default AboutUs;
