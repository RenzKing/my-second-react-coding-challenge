import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML",
    level: "Intermediate",
    color: "red",
  },
  {
    skill: "CSS",
    level: "Intermediate",
    color: "gree",
  },
  {
    skill: "JAVASCRIPT",
    level: "Intermediate",
    color: "yellow",
  },
  {
    skill: "REACT",
    level: "Intermediate",
    color: "blue",
  },
];

function App() {
  return (
    <React.Fragment>
      <div className="card">
        <Avatar />

        <Intro />
        {/* <SkillList /> */}
      </div>
    </React.Fragment>
  );
}

function Avatar() {
  return <img src="/pic.jpg" className="avatar" alt="" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Renz King Gayacao</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

// function SkillList (){
//     return (

//     )
// }

// function Skill(){
//     return (

//     )
// }

//RENDER ROOT//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
