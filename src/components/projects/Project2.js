import React from "react";
import Header from "../Header";
import Image from "../Image";

import saul from "../../images/it-s_all_good_man.png";
import smarch from "../../images/smarch.gif";

const projectName = 'Project 2';
const data = [
  {
    img: saul,
    caption: "On further reflection, I did not have this realization at the time. I did understand about leaving the competition game."
  },
  {
    img: smarch,
    caption: "There's no such thing as bad weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesed leo eu enim consectetur finibus ut et ex. In viverra ex non maurisscelerisque dignissim. Vestibulum nec mi eget quam maximus porta. Maecenas at mauris neque. Ut aliquam interdum commodo."
  }
];

const Project2 = () => {
  return (
    <div>
      <h1>{projectName}</h1>
      <Header />
      {data.map((item) => (
        <Image
          img={item.img}
          caption={item.caption}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Project2;
