import React from "react";
import Header from "../Header";
import Image from "../Image";

const projectName = 'Project 2';
const data = [
  {
    img: "/images/it-s_all_good_man",
    type: "png",
    alt: "Saul sitting at a desk",
    caption: "On further reflection, I did not have this realization at the time. I did understand about leaving the competition game."
  },
  {
    img: "/images/smarch",
    type: "gif",
    alt: "A gif of Homer wiping snow off of his jacket",
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
          type={item.type}
          alt={item.alt}
          caption={item.caption}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Project2;
