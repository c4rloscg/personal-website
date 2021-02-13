import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TRootState as RootState } from '../src/store';
import { getProjectList } from '../src/store/project/state';
// @ts-ignore
import { action as toggleMenu } from 'redux-burger-menu';

import { MainContainer } from '../src/containers/MainContainer';
import { Intro } from '../src/components/Intro';
import { ProjectList } from '../src/components/project/ProjectList';
import { Skills } from '../src/components/skills/Skills';

type ReduxActionProps = {};
class Index extends React.PureComponent {
    // second to be called
    constructor(props: any) {
        super(props);
    }

    public componentWillUnmount() {
        /* */
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
    public static async getInitialProps({ req, store, pathname, params, query }: any) {
        await store.dispatch(toggleMenu(false));
        await store.dispatch(getProjectList(3));

        return {};
    }

    // third to be called
    //
    public render() {
        const { project }: any = this.props;

        return (
            <MainContainer>
                <Intro />
                <Skills />
                {/* <ProjectList indexPage={true} projects={project.projectList} /> */}
            </MainContainer>
        );
    }
}
const mapStateToProps = (state: RootState) => ({
    project: state.project,
});
const mapDispatchToProps = (dispatch: Dispatch<any>): ReduxActionProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
