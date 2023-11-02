import React from 'react'
import './Home.css'
import route from './images/Group-2195.png'
import beta from './images/Group 33528.png'
import code_editor from './images/Group 2199.png'
import man from './images/image 500.png'
import Terminal from './images/Image.png'
import Neural from "./images/Group 33545.png"
import dashboard from './images/Group 2198.png'
import elogo from './images/Group 33541.png'
import CheckList from './images/Group 33542.png'
import ELearningDescriptionBox from './ELearningDescriptionBox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (

        <>

            <div className='home-container'>
                <div className='left'>
                    <div className='beta'>
                        <img src={beta} alt='' />
                    </div>
                    <div className='heading'>
                        Your Success Journey Begins with E-Learning
                    </div>

                    <div className='tagline'>
                        Learning, Certifications, AI Resume Builder, Mock Interviews <br></br> and Much More..
                    </div>

                    <div className='button'>
                        <button>Request Early Access</button>
                    </div>
                </div>
                <div className='right'>
                    <img src={route} alt='' />
                </div>
            </div>

            <div className='e-learning'>
                <div className='dashboard-img'>
                    <img src={dashboard} alt='dashboard' />
                </div>

                <div className='first-box'></div>

                <div className='second-box'>

                    <div className='e-logo'>
                        <img src={elogo} alt='logo' />
                        <div className='heading'>E-Learning</div>
                        <div className='tagline'>The Most Complete E-learning Platform Available</div>
                    </div>

                    <div className='code-editor'>

                        <div className='box-container'>

                            <div className='box'>
                                <div className='heading'>
                                    <img src={Terminal} /> Coding Env</div>
                                <div className='content'>We offer online coding environments for interactive programming education.</div>
                            </div>

                            <div className='box'>

                                <div className='heading'>                                <img src={Terminal} /> RoadMaps</div>
                                <div className='content'>We offer online coding environments for interactive programming education.</div>
                            </div>

                            <div className='box'>

                                <div className='heading'>                                <img src={Terminal} /> Live Classes</div>
                                <div className='content'>We offer online coding environments for interactive programming education.</div>
                            </div>

                            <div className='box'>

                                <div className='heading'>
                                    <img src={Terminal} /> PBL</div>
                                <div className='content'>We offer online coding environments for interactive programming education.</div>
                            </div>

                        </div>

                        <div className='code-image'>
                            <img src={code_editor} />
                        </div>


                    </div>

                </div>
            </div>


        </>
    )
}
