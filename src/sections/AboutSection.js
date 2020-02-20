import React, {Component} from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import DownIcon from "../components/DownIcon";
import {Element, Link} from "react-scroll";

class AboutSection extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: this.props.bgColor
            }}>
                <Fullpage className="second">
                    <h3>{data.sections[0].title}</h3>
                    <div className="paragraphs">
                        {data.sections[0].items.map(p => {
                            return <p>{p.content}</p>;
                        })}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500}
                      onSetActive={this.handleSetActive}>
                    <DownIcon icon={data.icons.down}/>
                </Link>

                <Element name="Skills" className="element">
                </Element>
            </div>
        );
    }
}

export default AboutSection;
