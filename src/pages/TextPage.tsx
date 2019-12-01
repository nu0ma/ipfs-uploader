import React from 'react';
import TextUpLoader from '../components/upLoaders/TextUpLoader';
import styled from 'styled-components';
const TextPage = () => {
  return (
    <Wrapper>
      <TextUpLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px;
  width: 80%;
`;

export default TextPage;
