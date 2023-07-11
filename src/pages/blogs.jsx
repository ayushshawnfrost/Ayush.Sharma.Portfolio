import React, { useState } from "react";
import { styled } from "@mui/system";

// Import the SVG files
import rifleSvg from "../assets/rifle.svg";
import pistolSvg from "../assets/pistol.svg";
import grenadeSvg from "../assets/grenade.svg";

const BigBox = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  border: "2px solid green",
});

const LeftBoxContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: "20px",
});

const RightBox = styled("div")(({ boxCount }) => ({
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  height:"50vh",
  flex: "1",
}));

const BoxItem = styled("div")(({ active, svg }) => ({
  position: "relative",
  width: "200px",
  height: "100px",
  backgroundColor: active ? "green" : "black",
  borderRadius: "10px",
  border: `2px solid ${active ? "blue" : "black"}`,
  marginBottom: "10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? "white" : "inherit",
  overflow: "hidden",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(45deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
    pointerEvents: "none",
  },
  backgroundImage: `url(${svg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
}));

const PrimarySkillsBox = () => (
  <div>
    <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
      Primary Skills
    </p>
    <ul className="mt-5 font-playfair">
      <li>Java</li> <li>JavaScript</li> <li>Python</li> <li>TypeScript</li>{" "}
      <li>ECMAScript</li>
      <li>C#</li>
    </ul>
  </div>
);

const SecondarySkillsBox = () => (
  <div>
    {/* <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
    Secondary Skills
    </p> */}
    <ul className="mt-5 font-playfair">
    <li>Redux</li> <li>Context API</li> <li>Jest</li> <li>Jasmine</li> <li>Git</li><li>TFS</li><li> CI/CD</li><li>MaterialUI</li><li>Webpack</li>
    </ul>
  </div>
);

const TertiarySkillsBox = () => (
  <div>
    <p className="font-playfair font-semibold text-3xl mt-3 text-yellow">
    Utilities
    </p>
    <ul className="mt-5 font-playfair">
    <li>MongoDB</li><li>MySQL</li>
    </ul>
  </div>
  
);

const Blogs = () => {
  const [activeBox, setActiveBox] = useState(null);
  const boxCount = 3;

  const handleClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  const renderRightBox = () => {
    if (activeBox === 1) {
      return <PrimarySkillsBox />;
    } else if (activeBox === 2) {
      return <SecondarySkillsBox />;
    } else if (activeBox === 3) {
      return <TertiarySkillsBox />;
    }
    return null;
  };

  return (
    <BigBox>
      <LeftBoxContainer>
        <BoxItem
          active={activeBox === 1}
          svg={rifleSvg}
          onClick={() => handleClick(1)}
        >
          <p className="mt-5 font-playfair">Primary</p>
        </BoxItem>
        <BoxItem
          active={activeBox === 2}
          svg={pistolSvg}
          onClick={() => handleClick(2)}
        >
          <p className="mt-5 font-playfair">Secondary</p>
        </BoxItem>
        <BoxItem
          active={activeBox === 3}
          svg={grenadeSvg}
          onClick={() => handleClick(3)}
        >
          <p className="mt-5 font-playfair">Utilities</p>
        </BoxItem>
      </LeftBoxContainer>
      <RightBox boxCount={boxCount}>{renderRightBox()}</RightBox>
    </BigBox>
  );
};

export default Blogs;
