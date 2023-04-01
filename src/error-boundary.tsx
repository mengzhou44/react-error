import { Component, ReactNode } from 'react';

type Props = {
    children:  ReactNode,
    fallback: ReactNode
}
type State = {
    hasError:  boolean
}

class ErrorBoundary extends Component<Props,State> {
    
    state = {hasError: false }

    static getDerivedStateFromError() :State {
         return {hasError: true }
    }

    render() {
         if (this.state.hasError) {
             return this.props.fallback
         }

         return this.props.children
    }
}

export default ErrorBoundary; 