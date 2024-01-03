import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import medium from "../assets/medium.png";

const Blog = () => {
  return (
    <section id="blog" className="pt-32 pb-16">
      {/* HEADING */}
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
            BLOG <span className="text-yellow">POSTS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 text-xl font-playfair">
          I'm thrilled to share my journey and expertise in website development
          through my Medium blog. On my blog, I delve into the exciting world of
          new technologies and explore various aspects of website development,
          with a particular focus on cloud infrastructure.
        </p>
        </motion.div>
      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        > <a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@ayushjudesharp/ai-blog-full-stack-application-leveraging-serverless-architecture-95ed11c317e7"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="medium-link" src={medium} />
      </a>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          Building a Serverless REST API with AWS Lambda(Node.js) and DynamoDB.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        ><a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@ayushjudesharp/building-a-serverless-rest-api-with-aws-lambda-node-js-and-dynamodb-dd87d3ac90a2"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="medium-link" src={medium} />
      </a>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          “AI blog” full-stack application leveraging Serverless Architecture.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        ><a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@ayushjudesharp/american-sign-language-asl-recognition-system-using-deep-learning-e0b937a9378f"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="medium-link" src={medium} />
      </a>
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          American Sign Language(ASL) recognition System using Deep Learning
          </p>
        </motion.div>

        {/* <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Blog;
