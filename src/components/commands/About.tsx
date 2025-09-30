import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I&apos;m <HighlightSpan>Sanya Varghese</HighlightSpan>.
      </p>
      <p>
        I&apos;m <HighlightAlt>a systems engineer</HighlightAlt> passionate
        about tackling hard problems in distributed infrastructure,
        storage, and low-level virtualization.
      </p>
      <p>
        Currently, I&apos;m part of Platform9’s vJailbreak team, where I work on
        VM migration from VMware to OpenStack by extending Cinder storage APIs
        for VMware-equivalent observability.
      </p>
      <p>
        Previously, I engineered backend systems at Barclays and developed
        machine learning models as a Research Assistant at DRDO. My work spans
        backend engineering, deep learning, and systems research.
      </p>
      <p>
        I enjoy bridging cloud abstractions with OS-level components, optimizing
        real-time systems, and designing fault-tolerant orchestration layers.
      </p>
    </AboutWrapper>
  );
};

export default About;

