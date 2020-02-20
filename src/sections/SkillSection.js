import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";

import data from "../data.json";
import "./SkillSection.css";
import DownIcon from "../components/DownIcon";
import { Link } from 'react-scroll';

class SkillSection extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: this.props.bgColor
      }}>
        <Fullpage className="third">
          <h3>{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(eachSkill => {
              return (
                <SkillCard skill={eachSkill} />
              );
            })}
          </div>
        </Fullpage>
        <Link activeClass="active" to="Title" spy={true} smooth={true} offset={50} duration={500}
          onSetActive={this.handleSetActive}>
          <DownIcon icon={data.icons.up} />
        </Link>
      </div>
    );
  }
}
export default SkillSection;
