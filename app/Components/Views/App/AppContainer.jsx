import React from 'react';

import Body from 'PresentationalComponents/Body/Body';
import Card from 'PresentationalComponents/Card/Card';
import Column from 'PresentationalComponents/Column/Column';
import Header from 'PresentationalComponents/Header/Header';
import InfoModal from 'ViewComponents/App/InfoModal';
import IndexItemCard from 'PresentationalComponents/IndexItemCard/IndexItemCard';
import Main from 'PresentationalComponents/Main/Main';
import Row from 'PresentationalComponents/Row/Row';

import withIsMobile from 'UtilComponents/withIsMobile';

const AppContainer = ({ isMobile }) => {
  let indexItemStyle = {};
  if (isMobile) {
    indexItemStyle.width = '100%';
  }
  return (
    <Body>
      <Header>
        <div>Climate Change Guide</div>
        <InfoModal />
      </Header>
      <Main>
        <Row style={{ justifyContent: 'center', width: '100%' }}>
          <Column style={isMobile ? { width: '100%' } : {}}>
            <IndexItemCard style={{ marginTop: '25px', ...indexItemStyle }}>Food</IndexItemCard>
            <IndexItemCard style={indexItemStyle}>Transport</IndexItemCard>
            <IndexItemCard style={indexItemStyle}>Energy</IndexItemCard>
          </Column>
          {!isMobile && (
            <Column>
              <Card style={{ padding: '16px', marginTop: '25px', width: '800px' }}>
                <h2>Food</h2>
                <img src="/static/food_chart.png" width={450} height={300} />
              </Card>
            </Column>
          )}
        </Row>
      </Main>
    </Body>
  );
};

export default withIsMobile(AppContainer);
