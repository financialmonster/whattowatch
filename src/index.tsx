import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import { PersistGate } from 'redux-persist/integration/react';

import { history } from 'init/rootReducer';
import { persistedStore, store } from 'init/store';
import { App } from 'components/app/App';
import { Spinner } from 'components/spinner/Spinner';

const renderApp = () => ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <PersistGate persistor={persistedStore} loading={<Spinner />}>
                <App />
            </PersistGate>
        </Router>
    </Provider>,
    document.querySelector(`#root`)
);

if(module.hot && process.env.NODE_ENV !== `production`) {
    module.hot.accept(`./components/app/App.tsx`, renderApp);
}

renderApp();
