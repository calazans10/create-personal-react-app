import React from 'react';

const asyncComponent = getComponent => {
  class AsyncComponent extends React.Component {
    state = {
      component: null
    };

    componentDidMount() {
      getComponent().then(component => this.setState({ component: component.default }));
    }

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};

export default asyncComponent;
