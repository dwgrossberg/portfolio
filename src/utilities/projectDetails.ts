import whereIsWaldo from "../assets/whereIsWaldo.gif";
const projectDetails = (() => {
  return {
    projects: [
      {
        reverse: false,
        title: "Where's Waldo?",
        description: "",
        tech: "",
        img: "",
        gif: whereIsWaldo,
        liveLink: "",
        repo: "",
        i: 1,
      },
      {
        reverse: true,
        title: "",
        description: "",
        tech: "",
        img: "",
        gif: "",
        liveLink: "",
        repo: "",
        i: 2,
      },
      {
        reverse: false,
        title: "",
        description: "",
        tech: "",
        img: "",
        gif: "",
        liveLink: "",
        repo: "",
        i: 3,
      },
    ],
  };
})();

export default projectDetails;
