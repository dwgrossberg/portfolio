import whereIsWaldo from "../assets/whereIsWaldo.gif";
const projectDetails = (() => {
  return {
    projects: [
      {
        reverse: false,
        title: "Where's Waldo?",
        description:
          "A photo-tagging app based on the classic children's puzzle book game \"Where's Waldo.\" Players race against the clock and each other to find Waldo and his friend's across 6 challenging levels.",
        details:
          "My goal for this project was to learn to work with a BaaS provider, such as Firebase. As a bonus, I tapped into the MUI React component library to create a full-stack app with a modern feeling.",
        tech: "JavaScript, React, Firebase, MUI, Jest",
        gif: whereIsWaldo,
        liveLink: "https://www.danielgrossberg.com/where-is-waldo/",
        repo: "https://github.com/dwgrossberg/where-is-waldo",
        i: 1,
      },
      {
        reverse: true,
        title: "",
        description: "",
        details: "",
        tech: "",
        gif: "",
        liveLink: "",
        repo: "",
        i: 2,
      },
      {
        reverse: false,
        title: "",
        description: "",
        details: "",
        tech: "",
        gif: "",
        liveLink: "",
        repo: "",
        i: 3,
      },
    ],
  };
})();

export default projectDetails;
