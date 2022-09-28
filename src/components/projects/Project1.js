import React from "react";
import Header from "../Header";

// An image component I made to really easily format each of your images
import Image from "../Image";

// You input your images as a variable name
import moon from "../../images/moon.jpg";
import saul from "../../images/it-s_all_good_man.png";
import smarch from "../../images/smarch.gif";

// For screen readers and SEO
const projectName = "Project 1";

/* This is in theory all you'll need to change for each project, and you can copy and paste one of these projects when you make others. The image component checks to see if there is a caption or description, and won't render anything if there in't any. Alt text always recommended for screen readers */
const data = [
  {
    img: moon,
    alt: "The moon",
    caption: "That's no moon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesed leo eu enim consectetur finibus ut et ex. In viverra ex non maurisscelerisque dignissim. Vestibulum nec mi eget quam maximus porta. Maecenas at mauris neque. Ut aliquam interdum commodo. Suspendisse vulputate mi id consequat molestie. Vivamus mattis odio non venenatis ornare. Proin lacinia ut eros a scelerisque. Sed nec orci tortor.Aenean euismod nunc risus, eu varius eros faucibus quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculusmus. Integer a sagittis lacus, non rutrum lacus. Nulla consectetur tortor vitae ex porta laoreet. Suspendisse eu rhoncus nulla.",
  },
  {
    img: saul,
    alt: "Saul sitting at a desk",
    caption:
      "On further reflection, I did not have this realization at the time. I did understand about leaving the competition game.",
  },
  {
    img: smarch,
    alt: "A gif of Homer wiping snow off of his jacket",
    caption: "There's no such thing as bad weather",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissesed leo eu enim consectetur finibus ut et ex. In viverra ex non maurisscelerisque dignissim. Vestibulum nec mi eget quam maximus porta. Maecenas at mauris neque. Ut aliquam interdum commodo.",
  },
];

const Project1 = () => {
  return (
    <div>
      <h1>{projectName}</h1>
      <Header />
      {/* Here is a bit of JavaScript to iterate through each of the data items */}
      {data.map((item) => (
        <Image
          img={item.img}
          alt={item.alt}
          caption={item.caption}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Project1;
