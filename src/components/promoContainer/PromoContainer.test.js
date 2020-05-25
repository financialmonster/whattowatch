import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { PromoContainer } from './PromoContainer';
import { promoActions } from 'domains/promo/promoActions';
import { createStoreMock } from 'mocks';

Enzyme.configure({adapter: new Adapter()});

describe(`PromoContainer:`, () => {
    it(`should dispatch fetchPromoRequest action after mounting`, () => {
        const mockStore = configureStore();
        const store = mockStore(createStoreMock());
        
        mount(
            <Provider store={store}>
                <PromoContainer />
            </Provider>        
        );

        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual(promoActions.fetchPromoRequest());
    });
});
