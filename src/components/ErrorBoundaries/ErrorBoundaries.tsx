import React, { Component, ReactNode } from 'react';

type ErrorBoundariesProps = {
  children?: ReactNode;
};
type ErrorState = { hasError: boolean };

export class ErrorBoundaries extends Component<ErrorBoundariesProps, ErrorState> {
  constructor(props: ErrorBoundariesProps | Readonly<ErrorBoundariesProps>) {
    super(props);
  }

  state = { hasError: false };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="text-secondary d-flex flex-column align-items-center justify-content-center h-lvh"
        >
          <h1>Something went wrong.</h1>
          <p className="text-secondary">Try refreshing the page, or try again later</p>
        </div>
      );
    }

    return this.props.children;
  }
}
