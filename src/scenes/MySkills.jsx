import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
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
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
                Primary Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-playfair">
            <li>ReactJS</li>
            <li>Spring Boot</li>
            <li>NodeJS</li>
            <li>Angular</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>AWS (S3, Lambda, EC2, API Gateway, Dynamo DB)</li>
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
                Secondary Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-playfair">
            
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Python</li>
            <li>C#</li>
            <li>.Net Core</li>
            <li>Express.js</li>
            <li>Next.js</li>
            <li>Docker</li>
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
                Web Tools
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 font-playfair">
            <li>Redux</li>
            <li>Context API</li>
            <li>Jest</li> <li>Jasmine</li> <li>Git</li>
            <li>TFS</li>
            <li>Jenkins</li>
            <li>MaterialUI</li>
            <li>Webpack</li>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
