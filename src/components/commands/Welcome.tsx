import React from "react";
import styled from "styled-components";
import {
  Cmd,
  HeroContainer,
  Link,
} from "../styles/Welcome.styled";

const TerminalOutput = styled.div`
  font-family: monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #e0e0e0;

  .status-ok {
    color: #00ff00;
    font-weight: bold;
  }

  .prompt {
    color: #00ff00;
    font-weight: bold;
  }

  .command {
    color: #fff;
  }

  .output-key {
    color: #888;
  }

  .output-value {
    color: #00ffcc;
  }

  .comment {
    color: #888;
    font-style: italic;
  }

  .separator {
    color: #555;
    margin: 8px 0;
  }

  .link {
    color: #00ffcc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <TerminalOutput>
          <div className="boot-line">[<span className="status-ok">  OK  </span>] Loading svarghese profile...</div>
          <div className="boot-line">[<span className="status-ok">  OK  </span>] Mounting /sys/storage/virtualization</div>
          <div className="boot-line">[<span className="status-ok">  OK  </span>] Initializing distributed-systems.service</div>
          <div className="boot-line">[<span className="status-ok">  OK  </span>] Starting openstack-migration.target</div>
          <div className="boot-line separator">─────────────────────────────────────────────────────────────</div>
          <div className="boot-line"><span className="prompt">svarghese</span>:<span className="output-value">~</span>$ <span className="command">whoami</span></div>
          <div className="boot-line">svarghese</div>
          <div className="boot-line"></div>
          <div className="boot-line"><span className="prompt">svarghese</span>:<span className="output-value">~</span>$ <span className="command">cat /etc/profile.d/role.sh</span></div>
          <div className="boot-line"><span className="comment"># Systems Engineer</span></div>
          <div className="boot-line"><span className="comment"># Specialization: distributed storage & virtualization</span></div>
          <div className="boot-line"><span className="comment"># Focus: openstack · kubernetes · vmware · go · c++</span></div>
          <div className="boot-line"></div>
          <div className="boot-line"><span className="prompt">svarghese</span>:<span className="output-value">~</span>$ <span className="command">cat ~/.contact</span></div>
          <div className="boot-line">
            <Link className="link" href="https://github.com/varghesesanya" target="_blank">github.com/varghesesanya</Link>
            {' · '}
            <Link className="link" href="https://www.linkedin.com/in/sanyavarghese/" target="_blank">linkedin.com/in/sanyavarghese</Link>
            {' · '}
            <Link className="link" href="mailto:sanya.varghese@stonybrook.edu">sanya.varghese@stonybrook.edu</Link>
          </div>
          <div className="boot-line"></div>
          <div className="boot-line"><span className="prompt">svarghese</span>:<span className="output-value">~</span>$ <span className="command">help</span></div>
          <div className="boot-line">Type <Cmd>help</Cmd> to see available commands.</div>
        </TerminalOutput>
      </div>
    </HeroContainer>
  );
};

export default Welcome;

