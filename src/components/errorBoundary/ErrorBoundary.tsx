import React, { ReactNode } from 'react';
import { Message } from 'components/message/Message';

type TErrorBoundaryProps = {
    children: ReactNode;
}

type TErrorBoundaryState = {
    isError: boolean;
}

export class ErrorBoundary extends React.PureComponent<TErrorBoundaryProps, TErrorBoundaryState> {
    state = {
        isError: false
    }

    static getDerivedStateFromError() {
        return { isError: true};
    }

    render() {
        if(this.state.isError) {
            return (
                <Message>
                    We are sorry. Our application isn't available now. Please, reload the page.
                </Message>
            );
        }

        return this.props.children;
    }
}
