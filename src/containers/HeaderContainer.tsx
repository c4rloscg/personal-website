import Head from 'next/head';
// @ts-ignore
import NProgress from 'nprogress';
import * as React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { Link as LinkScroll } from 'react-scroll';
import { Dispatch } from 'redux';
// @ts-ignore
import { action as toggleMenu } from 'redux-burger-menu';
import { Socials } from '../components/Socials';
import { modifyWordpressObject } from '../helpers/helper';
import { RootState } from '../store';
import { RootAction } from '../store/root-action';

import Link from 'next/link';
import Router from 'next/router';

Router.onRouteChangeStart = (url: string) => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

type HeaderProps = {};
type ReduxProps = {};
type ReduxActionProps = {
    toggleMenu?: (isOpen: boolean) => any;
};
type Props = HeaderProps & ReduxProps & ReduxActionProps;
class HeaderContainer extends React.Component<Props> {
    private isMounted: boolean = false;

    constructor(props: any) {
        super(props);
        this.state = {
            showBurgerMenu: false,
            showUpButton: false,
            showTestLinks: false,
            isHome: false,
        };
        this.bmChangeState = this.bmChangeState.bind(this);
    }

    private isHome = () => document?.location.pathname == '/';

    public bmChangeState(state: any) {
        this.props.toggleMenu!(state.isOpen);
        return state.isOpen;
    }

    public componentDidMount() {
        this.isMounted = true;
        this.setState({ isHome: this.isHome() });
        if (window.location && window.location.search.indexOf('?qwe') > -1) {
            this.setState({
                showTestLinks: true,
            });
        }
        document.addEventListener('scroll', () => {
            if (!this.isMounted) {
                return;
            }
            const windowPosition = window.pageYOffset;
            if (windowPosition >= 300) {
                this.setState({
                    showBurgerMenu: true,
                });
            } else {
                this.setState({
                    showBurgerMenu: false,
                });
            }
            if (windowPosition >= 1200) {
                this.setState({
                    showUpButton: true,
                });
            } else {
                this.setState({
                    showUpButton: false,
                });
            }
        });
    }

    public componentWillUnmount() {
        this.isMounted = false;
        document.removeEventListener('scroll', () => {
            /* */
        });
    }

    public render() {
        const { burgerMenu }: any = this.props;
        const { showBurgerMenu, showUpButton, isHome }: any = this.state;
        const menuHasFadeIn = showBurgerMenu ? 'show-background' : ''; // - enable during production
        const upButtonHasFadeIn = showUpButton ? '' : 'hide'; // - enable during production

        return (
            <div>
                <HeadCustom key="header-1" />
                <MenuSidebar bmChangeState={this.bmChangeState} burgerMenu={burgerMenu} />
                <section
                    className={`${menuHasFadeIn} fade-in top-nav-container`}
                    style={isHome ? {} : { color: '#1a2234' }}
                >
                    <p className="btn-burger-menu pointer" onClick={() => this.props.toggleMenu!(true)}>
                        <i className="fa fas fa-bars" />
                    </p>
                </section>
                <LinkScroll to="main-wrapper" className={`${upButtonHasFadeIn}`} smooth={true} duration={750}>
                    <p className="btn-up">
                        <i className="fas fa-arrow-up" />
                    </p>
                </LinkScroll>
            </div>
        );
    }
}

const HeadCustom = () => {
    let metaDescription =
        'Carlos Camacho is a Software Engineer who loves kayaking, traveling and cooking! He loves to challenge himself everyday.';
    let metaTitle = 'Carlos Camacho';

    let ogType = 'blog';
    let ogImg = '';
    let ogUpdatedTime = '';

    return (
        <Head>
            <title>{metaTitle}</title>

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="dc.language" content="en-US" />

            <meta name="description" content={metaDescription} />
            <meta property="og:locale" content="en_AU" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImg} />
            <meta property="og:site_name" content="carlos camacho" />
            <meta property="og:updated_time" content={ogUpdatedTime} />

            <meta name="twitter:site" content="felixnoriel.com" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:image" itemProp="image" content={ogImg} />
            <meta name="twitter:card" content="summary_large_image" />

            <link href="//fonts.googleapis.com/css?family=Oxygen|Raleway" rel="stylesheet" />
        </Head>
    );
};

const MenuSidebar = ({ burgerMenu, bmChangeState }: any) => {
    return (
        <Menu right isOpen={burgerMenu.isOpen} customBurgerIcon={false} onStateChange={bmChangeState}>
            <div className="menu-links">
                <Link href="/">
                    <a>Home</a>
                </Link>
                {/* <Link as="/projects" href="/page?name=projects">
                    <a>Projects</a>
                </Link> */}
                <Link href="/page?name=about">
                    <a>About</a>
                </Link>
            </div>
            <div className="menu-socials">
                <Socials />
            </div>
        </Menu>
    );
};

const mapStateToProps = (state: RootState) => ({
    ...state,
});
const mapDispatchToProps = (dispatch: Dispatch<RootAction>): ReduxActionProps => ({
    toggleMenu: (isOpen: boolean) => dispatch(toggleMenu(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
