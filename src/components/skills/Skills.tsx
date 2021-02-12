import * as React from 'react';

export const Skills = () => {
    return (
        <div>
            <section id="skills-section" className="hero is-medium is-primary is-long is-bold">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">I have over five years experience as a Full-Stack Software Engineer</h1>
                        <h2 className="subtitle">
                            Strategising, designing, and developing applications from end to end.
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section container skills-content has-text-centered">
                <div className="columns box">
                    <div className="column ">
                        <p className="skills-icon">
                            <i className="far fa-file-code" />
                        </p>
                        <h2 className="title is-size-4 is-spaced">Front end</h2>
                        <h4 className="list-title">Frameworks & libraries</h4>
                        <ul>
                            <li>React.js, React Native</li>
                            <li>JavaScript (ES6)</li>
                            <li>Redux</li>
                            <li>SWR Hooks</li>
                            <li>Jest</li>
                            <li>JQuery</li>
                            <li>ASP.Net MVC</li>
                        </ul>
                        <hr />
                        <h4 className="list-title">Responsive design</h4>
                        <ul>
                            <li>HTML 5 & CSS 3 (SASS)</li>
                            <li>Flexbox, Grid Layout</li>
                            <li>Material-UI, Bootstrap, Tailwind</li>
                        </ul>
                    </div>
                    <div className="column ">
                        <p className="skills-icon">
                            <i className="fas fa-code-branch" />
                        </p>
                        <h2 className="title is-size-4 is-spaced">Back end </h2>
                        <h4 className="list-title">OOP languages</h4>
                        <ul>
                            <li>NodeJs</li>
                            <li>PHP</li>
                            <li>Python</li>
                            <li>C#</li>
                        </ul>
                        <hr />
                        <h4 className="list-title">Frameworks</h4>
                        <ul>
                            <li>Next.js</li>
                            <li>ASP.Net Core</li>
                            <li>Django REST</li>
                        </ul>
                        <hr />
                        <h4 className="list-title">Databases</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>MSSQL</li>
                        </ul>
                    </div>
                    <div className="column ">
                        <p className="skills-icon">
                            <i className="fas fa-terminal" />
                        </p>
                        <h2 className="title is-size-4 is-spaced">Tools & others</h2>
                        <ul>
                            <li>Cypress.io</li>
                            <li>Testing Library/React</li>
                            <li>API Design</li>
                            <li>Jira (UI + API)</li>
                            <hr />
                            <li>Adobe Photoshop</li>
                            <li>PLC Programming</li>
                            <li>Raspberry Pi</li>
                        </ul>
                    </div>
                </div>
                <div className="columns box">
                    <div className="column ">
                        <p className="skills-icon">
                            <i className="fas fa-terminal" />
                        </p>
                        <h2 className="title is-size-4 is-spaced">Dev Ops </h2>
                        <ul>
                            <li>Git (Github, Gitlab)</li>
                            <li>AWS</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};
