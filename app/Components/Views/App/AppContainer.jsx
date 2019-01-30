import React, { Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import AppContent from 'ViewComponents/App/AppContent';
import Body from 'PresentationalComponents/Body/Body';
import Column from 'PresentationalComponents/Column/Column';
import Header from 'PresentationalComponents/Header/Header';
import InfoModal from 'ViewComponents/App/InfoModal';
import Main from 'PresentationalComponents/Main/Main';
import NavigationButtons from 'ViewComponents/App/NavigationButtons';
import Row from 'PresentationalComponents/Row/Row';

import withIsMobile from 'UtilComponents/withIsMobile';

{
  /* <Column style={isMobile ? { marginTop: '25px', width: '100%' } : { marginTop: '25px' }}>

</Column>
{!isMobile && (
  <Column>

  </Column>
)} */
}
const AppContainer = ({ isMobile, ...otherProps }) => {
  console.log(otherProps);

  let content = null;
  if (isMobile) {
    content = (
      <Column style={{ marginTop: '25px', width: '100%' }}>
        <Switch>
          <Route exact path="/" component={NavigationButtons} />
          <Route path="/:category" component={AppContent} />
        </Switch>
      </Column>
    );
  } else {
    content = (
      <Fragment>
        <Row>
          <Column style={{ marginTop: '25px' }}>
            <NavigationButtons />
          </Column>
          <Route path="/:category" component={AppContent} />
        </Row>
      </Fragment>
    );
  }

  return (
    <Body>
      <Header>
        <div>Climate Change Guide</div>
        <InfoModal />
      </Header>
      <Main>
        <Row style={{ justifyContent: 'center', width: '100%', marginBottom: '25px' }}>
          {content}
        </Row>
      </Main>
    </Body>
  );
};

export default withIsMobile(AppContainer);
