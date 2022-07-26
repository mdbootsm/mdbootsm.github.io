import React from "react";
import Header from "../Header";
import Image from "../Image";

const projectName = 'Project 3';
const data = [
  {
    img: "/images/smarch",
    type: "gif",
    alt: "A gif of Homer wiping snow off of his jacket",
    caption: "There's no such thing as bad weather",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesed leo eu enim consectetur finibus ut et ex. In viverra ex non maurisscelerisque dignissim. Vestibulum nec mi eget quam maximus porta. Maecenas at mauris neque. Ut aliquam interdum commodo."
  },
  {
    img: "/images/moon",
    type: "jpg",
    alt: "The moon",
    caption: "That's no moon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesed leo eu enim consectetur finibus ut et ex. In viverra ex non maurisscelerisque dignissim. Vestibulum nec mi eget quam maximus porta. Maecenas at mauris neque. Ut aliquam interdum commodo. Suspendisse vulputate mi id consequat molestie. Vivamus mattis odio non venenatis ornare. Proin lacinia ut eros a scelerisque. Sed nec orci tortor.Aenean euismod nunc risus, eu varius eros faucibus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Integer a sagittis lacus, non rutrum lacus. Nulla consectetur tortor vitae ex porta laoreet. Suspendisse eu rhoncus nulla.",
  }
];

const Project3 = () => {
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

export default Project3;
