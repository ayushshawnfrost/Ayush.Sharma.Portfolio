import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import medium from "../assets/medium.png";
import Resume from "../assets/resume.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/ayushsharmasde/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ayushshawnfrost"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={github} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto:ayushsharmasde@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="mail-link" src={mail} />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://medium.com/@ayushjudesharp"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="medium-link" src={medium} />
      </a> */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://drive.google.com/drive/folders/1WCUxwzelbWtuKSYgqwfnWzzB1V1fN7pI?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src={Resume} />
      </a>
      
    </div>
  );
};

export default SocialMediaIcons;
