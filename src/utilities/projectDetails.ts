import certifiedConstruction from "../assets/certifiedConstruction.gif";
import whereIsWaldo from "../assets/whereIsWaldo.gif";
import knightsTourW from "../assets/knights-tour-w.gif";
import shoppingCart from "../assets/shoppingCart.gif";
import battleship from "../assets/battleship.gif";

const projectDetails = (() => {
  return {
    projects: [
      {
        reverse: true,
        title: "Certified Construction",
        description:
          "MySQL DBMS web app for a hypothetical construction management company, customized to track certifications and trainings for over 200 employees.",
        details:
          "Representing a step-up in terms of complexity, scale, and design, this project allowed me to dive into the nuts and bolts of developing a fully functional database management system.",
        tech: "Node.js, Express, MySQL, Handlebars.js",
        gif: certifiedConstruction,
        liveLink: "https://certified-construction-5bb6406e9d14.herokuapp.com/",
        repo: "https://github.com/dwgrossberg/Certified_Construction",
        i: 1,
      },
      {
        reverse: false,
        title: "Where's Waldo?",
        description:
          "Photo-tagging app based on the classic children's puzzle book game \"Where's Waldo.\" Players race against the clock and each other to find Waldo and his friend's across 6 challenging levels.",
        details:
          "My goal for this project was to learn to work with a BaaS provider, such as Firebase. As a bonus, I tapped into the MUI React component library to create a full-stack app with a modern feeling.",
        tech: "JavaScript, React, Firebase, MUI, and Jest",
        gif: whereIsWaldo,
        liveLink: "https://dwgrossberg.github.io/where-is-waldo/",
        repo: "https://github.com/dwgrossberg/where-is-waldo",
        i: 2,
      },
      {
        reverse: true,
        title: "Knight's Playground",
        description:
          "Simple app built to demonstrate different algorithmic solutions for two classic chessboard problems: Knight's Travails and Knight's Tour.",
        details:
          "I started this project to improve my overall understanding of graph theory and recursion, with the specific goal of learning new methods for initiating a breadth-first search (BFS) traversal within a graph.",
        tech: "JavaScript, SASS, Webpack, Babel, Jest",
        gif: knightsTourW,
        liveLink: "https://dwgrossberg.github.io/knights-travails/",
        repo: "https://github.com/dwgrossberg/knights-travails",
        i: 3,
      },
      {
        reverse: false,
        title: "Shopping Cart",
        description:
          "Shopping cart app built around the Fake Store API that uses React and React-Router-DOM to generate dynamic routes.",
        details:
          "Features a modern and clean e-commerce site with full shopping cart functionality, a filter bar to sort products by category/price/rating, and a smart responsive design.",
        tech: "JavaScript, SASS, React, Jest",
        gif: shoppingCart,
        liveLink: "https://dwgrossberg.github.io/shopping-cart/",
        repo: "https://github.com/dwgrossberg/shopping-cart",
        i: 4,
      },
      {
        reverse: true,
        title: "Battleship",
        description:
          'Test-driven-development implementation of the classic board game "Battleship."',
        details:
          "This was my first experience with any type of unit testing and it really made me restructure my workflow, especially at the start of the project. Instead of branching out into a dozen different directions at once, unit tests forced me to slow down and focus on writing technically sound code, one module at a time.",
        tech: "JavaScript, SASS, Webpack, Jest",
        gif: battleship,
        liveLink: "https://dwgrossberg.github.io/battleship/",
        repo: "https://github.com/dwgrossberg/battleship",
        i: 5,
      },
    ],
  };
})();

export default projectDetails;
