import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Renz King Gayacao</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} level={skill.level} color={skill.color} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>

//       <span>
//         {level === "Beginer" && "😵‍💫"}
//         {level === "Intermediate" && "👌"}
//         {level === "Advance" && "💪"}
//       </span>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz" />;
// }

// function Avatar() {
//   return <img className="avatar" src="/pic.jpg" alt="Renz" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Renz King Gayacao</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries
//       </p>
//     </div>
//   );
// }
// function Intro() {
//   return (
//     <div>
//       <h1>Renz King Gayacao</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} level={skill.level} color={skill.color} />
//       ))}
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} level={skill.level} color={skill.color} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skill, level, color }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill} </span>
//       <span>
//         {level === "Beginner" && "👌"}
//         {level === "Intermediate" && "✌️"}
//         {level === "Advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>

//       <span>
//         {level === "Beginer" && "😵‍💫"}
//         {level === "Intermediate" && "👌"}
//         {level === "Advance" && "💪"}
//       </span>
//     </div>
//   );
// }

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/pic.jpg" className="avatar" alt="Renz" />;
}

function Intro() {
  return (
    <div>
      <h1>Renz King Gayacao</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "✌️"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>

//       <span>
//         {level === "Beginer" && "😵‍💫"}
//         {level === "Intermediate" && "👌"}
//         {level === "Advance" && "💪"}
//       </span>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
