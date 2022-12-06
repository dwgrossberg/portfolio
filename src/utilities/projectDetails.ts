import whereIsWaldo from "../assets/whereIsWaldo.gif";
import knightsTourW from "../assets/knights-tour-w.gif";
import shoppingCart from "../assets/shoppingCart.gif";

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
        tech: "JavaScript, React, Firebase, MUI, and Jest",
        gif: whereIsWaldo,
        liveLink: "https://www.danielgrossberg.com/where-is-waldo/",
        repo: "https://github.com/dwgrossberg/where-is-waldo",
        i: 1,
      },
      {
        reverse: true,
        title: "Knight's Playground",
        description:
          "A simple app built to demonstrate different algorithmic solutions for two classic chessboard problems: Knight's Travails and Knight's Tour.",
        details:
          "This project was challenging on many levels, pushing me to learn numerous methods for initiating a breadth-first search (BFS) traversal, as well as improving my overall understanding of graph theory and recursion.",
        tech: "JavaScript, SASS, Webpack, Babel, Jest",
        gif: knightsTourW,
        liveLink: "https://www.danielgrossberg.com/knights-travails/",
        repo: "https://github.com/dwgrossberg/knights-travails",
        i: 2,
      },
      {
        reverse: false,
        title: "Shopping Cart",
        description:
          "A shopping cart app built around the Fake Store API that uses React and React-Router-DOM to generate dynamic routes.",
        details:
          "Features a modern and clean e-commerce site with full shopping cart functionality, the ability to filter products by different categories, and a responsive design.",
        tech: "JavaScript, SASS, React, Jest",
        gif: shoppingCart,
        liveLink: "https://www.danielgrossberg.com/shopping-cart/",
        repo: "https://github.com/dwgrossberg/shopping-cart",
        i: 3,
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
        i: 4,
      },
    ],
  };
})();

export default projectDetails;
