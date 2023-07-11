import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import proj1 from "../assets/1.png";
import proj2 from "../assets/2.png";
import proj3 from "../assets/3.PNG";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, href, desc, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  
  return (
    <motion.div variants={projectVariant} className="relative mt-5">
      <a className="flex justify-center" href={href}>
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {desc}
          </p>
        </div>
        {img ==="3" &&<img src={proj3} alt={projectTitle} />}
        {img ==="1" &&<img src={proj1} alt={projectTitle} />}
        {img ==="2" &&<img src={proj2} alt={projectTitle} />}
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">{"INDEPENDENT "}</span>PROJECTS
          </p>
          <div className="flex justify-center mt-5 mb-10">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-around">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title="Code Chronicles" href="http://ayush.sharma.s3-website.us-east-2.amazonaws.com/" desc="" img="3" />
          <div className="ml-3 mt-5 font-playfair">
            <p className="text-2xl font-playfair text-yellow pb-5">Code Chronicles(Serverless Full stack application)</p>
            <li  className="pb-2">The CodeChroniclesAIBlog application is a full-stack web application built using React.js and AWS services.</li>
            <li> The RESTful API, powered by AWS API Gateway and Lambda functions, handles article CRUD operations, while DynamoDB serves as the NoSQL database for storing article data. Authentication and authorization are implemented using AWS Cognito User Pools, ensuring secure access to the application. </li>
          </div>

          <Project title="Get Your Jab" href="https://ayushshawnfrost.github.io/GetYourJab_2022/" desc="" img="1" />
          <div className="ml-3 mt-5 font-playfair">
            <p className="text-2xl font-playfair text-yellow pb-5">Get Your Jab</p>
            <li className="pb-2">Developed a client-side web application that gives information on Covid-19 vaccination centers and slots availability throughout India.</li>
            <li>Application’s front-end developed using React.js, Redux, and Sass and deployed on the web using GitHub Pages. The application consumes data from Co-WIN Public REST APIs owned and operated by India's Ministry of Health and Family Welfare.</li>
          </div>
          <Project title="Covid-19 Dashboard (India)" desc="" href="https://ayushshawnfrost.github.io/covid19Dashboard/" img="2" />
          <div className=" leading-6 ml-3 mt-5 font-playfair">
            <p className="text-2xl font-playfair text-yellow pb-5">Covid-19 Dashboard (India)</p>
            <li className="pb-2">Covid-19 dashboard for India. Shows the number of Active Cases, Confirmed Cases, Deceased, Migrated, Recovered cases state wise.</li>
            <li>The application consumes data from Public APIs.</li>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
