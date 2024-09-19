import React, { Component, ReactNode } from 'react';

type MyProps = {
  children?: ReactNode;
};
type MyState = { hasError: boolean };

export class ErrorBoundaries extends Component<MyProps, MyState> {
  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);
  }

  state = { hasError: false };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          className="text-secondary d-flex flex-column align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <h1>Something went wrong.</h1>
          <p className="text-secondary">Try refreshing the page, or try again later</p>
        </div>
      );
    }

    return this.props.children;
  }
}
