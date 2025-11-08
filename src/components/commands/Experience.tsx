import React from "react";
import styled from "styled-components";

const ExperienceWrapper = styled.div`
  margin: 10px 0;
`;

const Job = styled.div`
  margin-bottom: 25px;
  padding-left: 10px;
  border-left: 2px solid #00ffcc;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 5px;
    flex-wrap: wrap;
  }

  .title {
    color: #00ffcc;
    font-size: 1.1rem;
    font-weight: bold;
    font-family: monospace;
  }

  .company {
    color: #fff;
    font-size: 1rem;
  }

  .date {
    color: #888;
    font-size: 0.9rem;
    font-style: italic;
  }

  .description {
    color: #ccc;
    margin-top: 8px;
    line-height: 1.6;
  }

  .highlights {
    margin-top: 8px;
    list-style: none;
    padding-left: 0;

    li {
      color: #aaa;
      margin-bottom: 5px;
      padding-left: 15px;
      position: relative;

      &:before {
        content: "▹";
        color: #00ffcc;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceWrapper data-testid="experience">
      <Job>
        <div className="header">
          <div>
            <div className="title">Systems Software Engineer Intern</div>
            <div className="company">Platform9 Systems · San Jose, CA</div>
          </div>
          <div className="date">Jun 2025 - Present</div>
        </div>
        <ul className="highlights">
          <li>vJailbreak team: migrating VMs from VMware to OpenStack</li>
          <li>Engineered Cinder storage compatibility layer for VMware-equivalent metrics</li>
          <li>Built orchestration tooling for stateful services on spot infrastructure</li>
          <li>Integrated enterprise storage arrays (Pure, NetApp, Huawei) with vCenter</li>
        </ul>
      </Job>

      <Job>
        <div className="header">
          <div>
            <div className="title">Backend Engineer</div>
            <div className="company">Barclays · Pune, India</div>
          </div>
          <div className="date">Aug 2021 - Jul 2024</div>
        </div>
        <ul className="highlights">
          <li>Built real-time transaction authorization at 70 TPS, P95 &lt; 60ms</li>
          <li>Architected cloud state machine for billing/clearing-settlement (1.2M customers)</li>
          <li>Led team building payment processing engine, reducing TTM by 70%</li>
          <li>Awarded BX India Engineering Excellence Award</li>
        </ul>
      </Job>

      <Job>
        <div className="header">
          <div>
            <div className="title">Deep Learning Research Assistant</div>
            <div className="company">Defence Research & Development Organization · Delhi, India</div>
          </div>
          <div className="date">Dec 2020 - Sep 2021</div>
        </div>
        <ul className="highlights">
          <li>Developed brain-computer interface for robotic exoskeletons</li>
          <li>Enhanced knee gait phase & trajectory prediction by 4%</li>
          <li>Achieved 90% accuracy extracting gait cycles from IMU data</li>
        </ul>
      </Job>

      <Job>
        <div className="header">
          <div>
            <div className="title">Junior Machine Learning Intern</div>
            <div className="company">Omdena · Remote</div>
          </div>
          <div className="date">Sep 2020 - Nov 2020</div>
        </div>
        <ul className="highlights">
          <li>Collaborated on Child Growth Monitor ML application</li>
          <li>Used computer vision & 3D modeling for malnutrition detection</li>
        </ul>
      </Job>
    </ExperienceWrapper>
  );
};

export default Experience;
