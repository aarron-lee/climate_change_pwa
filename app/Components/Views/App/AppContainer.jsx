import React from 'react';

import Body from 'PresentationalComponents/Body/Body';
import Card from 'PresentationalComponents/Card/Card';
import Header from 'PresentationalComponents/Header/Header';
import Main from 'PresentationalComponents/Main/Main';
import InfoModal from 'ViewComponents/App/InfoModal';

import withIsMobile from 'UtilComponents/withIsMobile';

const AppContainer = ({ isMobile }) => {
  return (
    <Body>
      <Header>
        <div>Climate Change Guide</div>
        <InfoModal />
      </Header>
      <Main>
        <Card style={{ padding: '16px', marginTop: '25px' }}>
          <img src="/static/food_chart.png" width={450} height={300} />
        </Card>
      </Main>
    </Body>
  );
};

export default withIsMobile(AppContainer);
