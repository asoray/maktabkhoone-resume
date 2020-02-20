import React, {Component} from "react";
import Fullpage from "../components/Fullpage";
import {SocialIcon} from "react-social-icons";
import DownIcon from '../components/DownIcon'
import {Link, Element} from 'react-scroll'

import data from "../data.json";
import "./TitleSection.css";

class TitleSection extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: this.props.bgColor
            }}>
                <Element name="Title" className="element">
                </Element>
                <Fullpage className="first">
                    <h1 className="title" >{data.title}</h1>
                    <div>
                        <h2>{data.subtitle}</h2>
                    </div>
                    <div className="icons-wrapper">
                        {Object.keys(data.links).map(key => {
                            return (
                                <div className="icon">
                                    <SocialIcon url={data.links[key]}/>
                                </div>
                            );
                        })}
                    </div>
                </Fullpage>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500}
                      onSetActive={this.handleSetActive}>
                    <DownIcon icon={data.icons.down}/>
                </Link>

                <Element name="About" className="element">
                </Element>
            </div>
        );
    }
}

export default TitleSection;
