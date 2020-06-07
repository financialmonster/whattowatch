import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router/immutable';
import { PersistGate } from 'redux-persist/integration/react';

import { history } from 'init/rootReducer';
import { persistedStore, store } from 'init/store';
import { App } from 'components/app/App';
import { Spinner } from 'components/spinner/Spinner';
import { ErrorBoundary } from 'components/errorBoundary/ErrorBoundary';

const renderApp = () => ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router history={history}>
                <PersistGate persistor={persistedStore} loading={<Spinner />}>
                    <App />
                </PersistGate>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.querySelector(`#root`)
);

if(module.hot && process.env.NODE_ENV !== `production`) {
    module.hot.accept(`./components/app/App.tsx`, renderApp);
}

renderApp();
