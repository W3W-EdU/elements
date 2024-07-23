import React from "react";
import styled from "styled-components";
import { Staking, Dapp } from "figment-elements";

function App() {
  return (
    <>
      <Header>
        <h3>Figment Elements Demo</h3>
      </Header>
      <Container>
        <Left>
          <SectionHeader>Staking Widget</SectionHeader>
          <StakingContainer>
            <Staking />
          </StakingContainer>
        </Left>
        <Right>
          <SectionHeader>Full Dapp</SectionHeader>
          <DappContainer>
            <Dapp />
          </DappContainer>
        </Right>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Left = styled.div`
  width: 43%;
  background-color: #eee;
  border-right: solid #111 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Right = styled.div`
  width: 57%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const StakingContainer = styled.div`
  width: 380px;
  height: 409px;
`;

const DappContainer = styled.div`
  width: 800px;
  height: 800px;
`;

const Header = styled.div`
  font-size: 32px;
  display: flex;
  height: 80px;
  text-align: center;
  border-bottom: solid #111 2px;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 40px;
`;
