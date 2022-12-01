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
          "alrightalrightalrightalrightalrightalrightalrightalright alrightalrightalright",
        tech: "tech",
        gif: whereIsWaldo,
        liveLink: "liveLink",
        repo: "repo",
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
