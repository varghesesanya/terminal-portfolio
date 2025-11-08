import React from "react";
import styled from "styled-components";

const StackWrapper = styled.div`
  margin: 10px 0;
`;

const Category = styled.div`
  margin-bottom: 20px;

  h3 {
    color: #00ffcc;
    font-size: 1.1rem;
    margin-bottom: 8px;
    font-family: monospace;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 20px;
`;

const TechBadge = styled.span`
  background: rgba(0, 255, 204, 0.1);
  border: 1px solid #00ffcc;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #00ffcc;
  font-family: monospace;

  &:hover {
    background: rgba(0, 255, 204, 0.2);
  }
`;

const Stack: React.FC = () => {
  return (
    <StackWrapper data-testid="stack">
      <Category>
        <h3>Systems & Infrastructure</h3>
        <TechList>
          <TechBadge>Linux</TechBadge>
          <TechBadge>Bash</TechBadge>
          <TechBadge>Kubernetes</TechBadge>
          <TechBadge>OpenStack</TechBadge>
          <TechBadge>Distributed Storage</TechBadge>
          <TechBadge>Virtualization</TechBadge>
          <TechBadge>CUDA</TechBadge>
          <TechBadge>OpenMP</TechBadge>
        </TechList>
      </Category>

      <Category>
        <h3>Programming Languages</h3>
        <TechList>
          <TechBadge>Go</TechBadge>
          <TechBadge>C++</TechBadge>
          <TechBadge>C</TechBadge>
          <TechBadge>Python</TechBadge>
          <TechBadge>Java</TechBadge>
        </TechList>
      </Category>

      <Category>
        <h3>Cloud & DevOps</h3>
        <TechList>
          <TechBadge>AWS</TechBadge>
          <TechBadge>Azure</TechBadge>
          <TechBadge>Prometheus</TechBadge>
          <TechBadge>Grafana</TechBadge>
          <TechBadge>Jenkins</TechBadge>
        </TechList>
      </Category>

      <Category>
        <h3>Backend & Frameworks</h3>
        <TechList>
          <TechBadge>Spring Boot</TechBadge>
          <TechBadge>Node.js</TechBadge>
          <TechBadge>REST APIs</TechBadge>
        </TechList>
      </Category>

      <Category>
        <h3>Machine Learning & AI</h3>
        <TechList>
          <TechBadge>TensorFlow</TechBadge>
          <TechBadge>PyTorch</TechBadge>
          <TechBadge>Keras</TechBadge>
          <TechBadge>scikit-learn</TechBadge>
        </TechList>
      </Category>

      <Category>
        <h3>Storage Technologies</h3>
        <TechList>
          <TechBadge>Cinder</TechBadge>
          <TechBadge>Pure Storage</TechBadge>
          <TechBadge>NetApp</TechBadge>
          <TechBadge>VMware vSphere</TechBadge>
        </TechList>
      </Category>
    </StackWrapper>
  );
};

export default Stack;
