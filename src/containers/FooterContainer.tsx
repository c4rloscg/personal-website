import Link from 'next/link';
import * as React from 'react';
import { Socials } from '../components/Socials';

export const FooterContainer = () => {
    return (
        <div style={{ marginTop: 'auto' }}>
            <section className="section container contact-container has-text-centered">
                <div className="box hero is-dark2">
                    <div className="columns level">
                        <div className="column level-item">
                            <h2 className="title">Connect with me</h2>
                        </div>
                        <div className="column level-item">
                            <h2 className="subtitle">You can follow me or just send a message and say Hello!</h2>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="hero footer section is-primary is-small">
                <div className="container has-text-centered">
                    <div className="content">
                        <Socials />
                        <p className="made-with">
                            <Link href={`/page?name=about`}>
                                <a>About this website</a>
                            </Link>
                        </p>
                    </div>
                </div>
                <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
            </footer>
        </div>
    );
};
