import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "M.S. in Computer Engineering",
    desc: "Stony Brook University, NY | Aug 2024 – May 2026 | GPA: 3.89",
  },
  {
    title: "B.E. in Information Technology",
    desc: "Pune Institute of Computer Technology, IN | Aug 2017 – May 2021 | GPA: 3.7",
  },
];

export default Education;

