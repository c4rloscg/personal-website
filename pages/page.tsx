import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../src/store';
// @ts-ignore
import { action as toggleMenu } from 'redux-burger-menu';
import { getProjectList, getProject } from '../src/store/project/state';

import { MainContainer } from '../src/containers/MainContainer';
import { ProjectList } from '../src/components/project/ProjectList';
import { ProjectView } from '../src/components/project/ProjectView';
import { AboutWebsite } from '../src/components/about/AboutWebsite';

class Page extends React.Component {
    // second to be called
    constructor(props: any) {
        super(props);
        console.log('paage container');
    }

    public componentWillUnmount() {
        console.log('list.js unmount');
    }
    // first to be called
    /*
    params pathname = url
    query - quer string section of url
    asPath - string of actual path
    req - http request (server only)
    res - http response (server only)
    jsonPageRes - fetch response ( client only)
    err - error object
  */
    public static async getInitialProps({ req, store, pathname, params, query, asPath }: any) {
        await store.dispatch(toggleMenu(false));
        const PostTypeName = query.name;
        const slug = query.slug;

        if (PostTypeName === 'projects') {
            if (slug) {
                await store.dispatch(getProject(slug));
            } else {
                await store.dispatch(getProjectList(99));
            }
        }

        return { PostTypeName, slug };
    }

    public render() {
        const { PostTypeName }: any = this.props;

        // Dynamic Component
        const Component = components[PostTypeName];
        return (
            <MainContainer>
                <Component {...this.props} />
            </MainContainer>
        );
    }
}

const components: any = {
    projects: ({ project, slug }: any) => {
        if (slug) {
            return <ProjectView project={project.project} />;
        }
        return <ProjectList indexPage={false} projects={project.projectList} />;
    },
    about: () => <AboutWebsite />,
};

const mapStateToProps = (state: RootState) => ({
    ...state,
});
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
