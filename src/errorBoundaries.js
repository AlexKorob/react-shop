import React from 'react';

export class ErrorBoundaryDefault extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return (<div style={{color: '#a33', fontSize: '20px'}}>Something was wrong</div>);
    }
    return this.props.children;
  }
}

