import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        <span>“Talk is cheap. Show me the code.”</span> <br />
        Here are some of my selected projects and research.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "VMware → OpenStack Migration Toolkit",
    desc: "Engineered storage compatibility tooling as part of Platform9’s vJailbreak team. Extended Cinder APIs to expose VMware-equivalent metrics, enabling seamless VM migrations.",
    url: "https://platform9.com/", // placeholder, swap with blog/post if you write one
  },
  {
    id: 2,
    title: "High-Performance Payments Engine",
    desc: "Built a real-time transaction authorization system at Barclays using Java, Python, Spring, and AWS. Achieved 70 TPS with P95 latency under 60ms.",
    url: "https://home.barclays/", // placeholder
  },
  {
    id: 3,
    title: "Brain-Computer Interface for Exoskeletons",
    desc: "Research at DRDO integrating ML and signal processing to enhance knee gait phase prediction accuracy by 4% for robotic exoskeleton control.",
    url: "https://www.drdo.gov.in/", // placeholder
  },
  {
    id: 4,
    title: "Child Growth Monitor (Omdena)",
    desc: "Contributed to an open-source ML system using CV + 3D modeling to detect malnutrition in children under 5. Leveraged TensorFlow and PyTorch.",
    url: "https://omdena.com/projects/", // relevant project link
  },
];

export default Projects;

