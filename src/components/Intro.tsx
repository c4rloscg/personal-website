import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-scroll';

export const Intro = () => {
    let typed: any;

    useEffect(() => {
        typed = new Typed('#intro-1', {
            strings: [
                'I am a <span class="shadow success">Software Engineer</span> who loves solving problems and exploring <span className="shadow info">new technologies.</span>^3000 <br/><br/> Outside work,^500 I enjoy water activities like kayaking,^300 snorkeling,^300 and traveling every once in a while.',
            ],
            typeSpeed: 25,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section
            className="hero is-fullheight hero-section-picture"
            style={{ backgroundImage: "url('ca-picture-2.jpg')" }}
        >
            <div className="hero-body hero-overlay">
                <div className="intro container">
                    <h1 className="title">Hello, my name is Carlos Camacho</h1>
                    <h2 className="subtitle">
                        <div id="intro-1" style={{ display: 'inline' }}></div>
                    </h2>
                    <p className="learn-more">
                        Learn more about me
                        <Link
                            className="btn-learn-more"
                            style={{ marginLeft: '5px' }}
                            to="skills-section"
                            smooth={true}
                            duration={500}
                        >
                            <i className="fas fa-arrow-down" />
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};
