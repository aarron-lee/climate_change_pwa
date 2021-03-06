import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContent from 'ViewComponents/App/AppContent';
import Body from 'PresentationalComponents/Body/Body';
import Column from 'PresentationalComponents/Column/Column';
import Header from 'PresentationalComponents/Header/Header';
import InfoModal from 'ViewComponents/App/InfoModal';
import Main from 'PresentationalComponents/Main/Main';
import NavigationButtons from 'ViewComponents/App/NavigationButtons';
import Row from 'PresentationalComponents/Row/Row';

import withIsMobile from 'UtilComponents/withIsMobile';

const AppContainer = ({ isMobile }) => {
  let content = null;
  if (isMobile) {
    content = (
      <Column style={{ marginTop: '25px', width: '100%' }}>
        <Switch>
          <Route exact path="/" component={NavigationButtons} />
          <Route path="/:category" render={() => <AppContent isMobile={isMobile} />} />
        </Switch>
      </Column>
    );
  } else {
    content = (
      <Fragment>
        <Row style={{ width: '100%' }}>
          <Column style={{ marginTop: '25px' }}>
            <NavigationButtons />
          </Column>
          <Switch>
            <Route exact path="/" render={() => <AppContent category={'home'} />} />
            <Route path="/:category" component={AppContent} />
          </Switch>
        </Row>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Header>
        <div>Climate Change Guide</div>
        <InfoModal />
      </Header>
      <Body>
        <Main>
          <Row style={{ justifyContent: 'center', width: '100%', marginBottom: '25px' }}>
            {content}
          </Row>
        </Main>
      </Body>
    </Fragment>
  );
};

export default withIsMobile(AppContainer);
