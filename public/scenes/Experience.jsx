
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const SenorSoftwareEngineer = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Senior Software Engineer</p>
      <li className="pb-2">
        {" "}
        developed UI components using Redux, Typescript, SASS, and drafted unit
        tests using Jest with 90% code coverage. Rest APIs written in.Net Core
        in accordance with the microservice architecture
      </li>
      <li className="pb-2">
        applied optimization techniques to reduce load times by 20%, thereby
        enhancing the user experience
      </li>
      <li className="pb-2">
        decreased bugs by 10% by offering recommendations for Redux.js for
        better troubleshooting support. contributed to the project within Agile
        Scrum project management environments.
      </li>
      <li className="pb-2">
        {" "}
        Independently implemented application-wide localization through i18n,
        enabled the application to be translated into three languages,
        increasing the application's reach internationally by 30%.
      </li>
    </section>
  );
};
const SoftwareEngineer = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Software Engineer</p>
      <li className="pb-2">
        worked on a web-based solution for report generation and visualization
        for auto body. My team was responsible for migrating the existing
        Angular front-end application into React.js
      </li>
      <li className="pb-2">
        Implemented 4 primary UI components, including metric selection,
        hierarchy generation, and crosstab report.
      </li>
      <li className="pb-2">
        Worked in a team of five members. Created React components with
        TypeScript. performed unit testing, designed visualization charts using
        Chartist.js and developed REST APIs using .Net Core.
      </li>
      <li className="pb-2">
        Took the initiative for peer code reviews, which minimized bugs reported
        in the testing phase by 25%
      </li>
    </section>
  );
};
const Intern = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Intern</p>
      <li className="pb-2">
        {" "}
        developed a web application concerned with enterprise customer due
        diligence solutions using Angular, HTML, and Angular Material
      </li>
      <li className="pb-2">
        Contributed as UI team member, responsible for making the application's
        front-end using Angular, TypeScript, and Bootstrap. I was also involved
        in writing unit test cases for the components using the Jasmine test
        framework
      </li>
    </section>
  );
};

const Experience = () => {
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <>
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p> */}
        </motion.div>
      </div>
      <section id="experience" className="experience py-48 ">
        <Tabs
          value={index}
          onChange={handleChange}
          centered
          textColor="inherit"
          variant="fullWidth"
          indicatorColor="secondary"
        >
          <Tab label="Senior Software Engineer"></Tab>
          <Tab label="Software Engineer"></Tab>
          <Tab label="Intern"></Tab>
        </Tabs>
        {index == 0 && <SenorSoftwareEngineer />}
        {index == 1 && <SoftwareEngineer />}
        {index == 2 && <Intern />}
      </section>
    </>
  );
};

export default Experience;
