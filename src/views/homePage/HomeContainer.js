import { Route, Switch, useRouteMatch } from "react-router-dom"
import BottomNav from '../../components/BottomNav'
import Posts from './posts/Posts'

const HomeContainer = () => {
    let { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={`${path}/posts`}>
                    <Posts />
                </Route >
            </Switch >
            <BottomNav />
        </>
    )
}

export default HomeContainer
