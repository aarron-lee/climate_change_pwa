import React from 'react';

export const MAX_MOBILE_WIDTH = 768;

const withIsMobile = Component => {
  return class IsMobileProvider extends React.Component {
    state = { isMobile: window.innerWidth <= MAX_MOBILE_WIDTH };

    resizeListener = () => {
      const { isMobile } = this.state;
      if (isMobile && window.innerWidth > MAX_MOBILE_WIDTH) {
        this.setState({ isMobile: false });
      } else if (!isMobile && window.innerWidth < MAX_MOBILE_WIDTH) {
        this.setState({ isMobile: true });
      }
    };

    componentDidMount() {
      window.addEventListener('resize', this.resizeListener);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeListener);
    }

    render() {
      return <Component isMobile={this.state.isMobile} {...this.props} />;
    }
  };
};

export default withIsMobile;
