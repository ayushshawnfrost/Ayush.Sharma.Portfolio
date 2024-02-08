
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
        Successfully Orchestrated login/registration via Google accounts using Spring Boot, Spring Security, OAuth2.0, JPA, PostgreSQL, which notably amplified the influx of users from various domains. Deployed RESTful APIs adhering to a distributed microservices architecture.
      </li>
      <li className="pb-2">
        Leveraged React, Redux, Thunk, TypeScript, to deliver high-quality UI components. Worked on triggering client-specific emails for various flows (registration, forgot password, login) using Kafka queues, significantly enhancing the user experience.
      </li>
      <li className="pb-2">
        Implemented Spring Boot caching using Redis effectively, decreasing database load by a substantial 30%. Ensured application quality by developing comprehensive JUnit test cases, enhancing test coverage by 30%. Utilized Docker, Kubernetes and Jenkins for efficient CI/CD.
      </li>
      {/* <li className="pb-2">
        {" "}
        Independently implemented application-wide localization through i18n,
        enabled the application to be translated into three languages,
        increasing the application's reach internationally by 30%.
      </li> */}
    </section>
  );
};
const SoftwareEngineer = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Software Engineer</p>
      <li className="pb-2">
        Engineered cutting-edge analytical web applications for the insurance auto physical damage industry. Collaborated in cross-functional teams of varying sizes, utilizing React, Redux, TypeScript, C#, .NET Core, and Angular to deliver UI components.
      </li>
      {/* <li className="pb-2">
        Implemented 4 primary UI components, including metric selection,
        hierarchy generation, and crosstab report.
      </li> */}
      <li className="pb-2">
        Architected RESTful APIs conforming to microservice architecture, leveraging .NET Core for CRUD operations on the database. Implemented unit tests using Jest, ensuring code quality, and minimizing bugs in the testing phase.
      </li>
      <li className="pb-2">
        Led initiatives such as application-wide localization through i18n, expanding the application's international reach by 20%. Conducted peer code reviews, improving overall code quality, and reducing the number of reported bugs. Practiced Agile (Scrum) methodology.
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
const InternBrave = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">BraveSpaces</p>
      <p className="mt-1 mb-6 text-red text-2xl">Software Engineer Intern</p>
      <li className="pb-2">
        {" "}
        Employed AWS S3, Cognito, API Gateway, Lambda, NodeJS and ExpressJS to architect serverless web applications, achieving a 40% cost reduction over traditional server-based setups. Orchestrated token-based authentication via Cognito user pool.
      </li>
      <li className="pb-2">
        Ensured scalability, high availability, and data durability using AWS RDS with PostgreSQL, incorporating automated backups and multi-AZ deployment. Leveraged ElastiCache for caching frequently accessed data, optimizing application performance and reducing database load.
      </li>
      <li className="pb-2">
        Developed the application's front-end using ReactJS, featuring over 20 interactive components, including charts and forms. Efficiently managed state using Context API, resulting in a 30% reduction in unnecessary renders.
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
          <Tab label="Software Engineer Intern"></Tab>
          <Tab label="Senior Software Engineer"></Tab>
          <Tab label="Software Engineer"></Tab>
          <Tab label="Software Engineer Intern"></Tab>
        </Tabs>
        {index == 1 && <SenorSoftwareEngineer />}
        {index == 2 && <SoftwareEngineer />}
        {index == 3 && <Intern />}
        {index == 0 && <InternBrave />}
      </section>
    </>
  );
};

export default Experience;
