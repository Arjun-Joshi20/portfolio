import { FaReact } from 'react-icons/fa';
import {SiNextDotJs} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';
import {SiFirebase} from 'react-icons/si';
import {SiJavascript} from 'react-icons/si';
import {SiHtml5} from 'react-icons/si';
import {DiCss3} from 'react-icons/di'
import TypeWriter from "react-typewriter";

function Skills() {
    return (
        <div>
            <TypeWriter className="courier-header skill-text" typing={0.5}>Skills</TypeWriter>
            <div id="skills" >
                <div className="box" >
                    <div className='content' >
                        <FaReact className='react-icon icon'  />
                        <h3>React.js - React is something I am in love with. All my recent development work is using React.js including this portfolio. This is my speciality and I absolutely love coding in it. I have created projects using it like: Todo List App, Portfolio. </h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <SiNextDotJs className='next-icon icon'  />
                        <h3>Next.js - Next.js is a framework of React.js which is basically used for SSR(Server Side Rendering). I love it because of it's features like a built in router. I have created a couple of projects using it like: E-Commerce Gaming Website, Amazon Clone, Google Clone, Instagram Clone. </h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <SiTailwindcss className='tailwind-icon icon'  />
                        <h3>Tailwind CSS - Tailwind CSS is an amazing framework which helps you build rapid UI. I am personally a big fan of Tailwind CSS and use it literally everywhere. I have also taught a class on Tailwind CSS where I have basically taught how to use it, setup and JIT. </h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <SiFirebase className='firebase-icon icon'  />
                        <h3>Firebase - Firebase is an amazing tool for creating apps. It provides easy-backend intergration and easy implementation of tools like - Authentication and Database. I use Firebase in most of my projects for the authentication.</h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <SiJavascript className='js-icon icon'  />
                        <h3>Javascript - Javascript is an amazing programming language and there a a lot of frameworks for it. A lot of projects can be created with the plain Vanilla Javascript. I have built a Clock in Javascript.  </h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <SiHtml5 className='html-icon icon' />
                        <h3>HTML - HTML is a markup language which is used to build the markup of any basic website you see. HTML was the first text-based-language I learnt. I still use HTML, but with a different sort of syntax which is the HTML I use with React.js. I have build a lot of basic projects, including an e-commerce UI website.</h3>
                    </div>
                </div>
                <div className="box" >
                    <div className='content' >
                        <DiCss3 className='css-icon icon'  />
                        <h3>CSS - CSS is a styling language which deals with all the stylings seen in a website. This is something I learn in the early stage of my Web-Dev journey and have made a lot of projects using it. It includes an e-commerce site and this portfolio site.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
