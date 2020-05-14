import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Routes } from '../../constants';
import MainPage from '../../pages/mainPage/MainPage';

const App = () => {
    return (
        <Switch>
            <Route path={Routes.MAIN_PAGE} component={ MainPage } exact />
            <Redirect to={Routes.MAIN_PAGE} />
        </Switch>
    );
}

export default App;
