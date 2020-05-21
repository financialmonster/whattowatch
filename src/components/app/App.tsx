import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Routes }  from 'mainConstants';
import MainPage from 'pages/mainPage/MainPage';

const App: FC = () => {
    return (
        <Switch>
            <Route path={Routes.MAIN_PAGE} component={MainPage} exact />
            <Redirect to={Routes.MAIN_PAGE} />
        </Switch>
    );
}

export default App;
