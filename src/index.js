import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

skillList = [
  { name: "Web Design", level: "beginner", color: "blue" },
  { name: "Java", level: "advanced", color: "red" },
  { name: "HTML+CSS", level: "intermediate", color: "purple" },
  { name: "Javascript", level: "intermediate", color: "orange" },
  { name: "C", level: "advanced", color: "yellow" },
  { name: "Kotlin", level: "beginner", color: "green" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="mayank.jpg" alt="Photo" />;
}

function Intro() {
  return (
    <div>
      <h1>Mayank Chauhan</h1>
      <p>
        I am currently pursuing a degree in Computer Enginerring (B.Tech).
        Excited about what the future holds for me
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map(skill => <Skill skillObject = {skill} key = {skill.name}/>)}
    </div>
  );
}

function Skill({skillObject}) {
  let emoji = "";
  if(skillObject.level === "beginner") emoji = "👶";
  else if(skillObject.level === "intermediate") emoji = "👍";
  else emoji = "💪";
  return (
    <div className="skill" style={{ background: skillObject.color }}>
      <p>{skillObject.name}</p>
      <span>{emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
