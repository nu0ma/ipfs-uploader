import React from 'react';
import FileUpLoader from '../components/upLoaders/FileUpLoader';
import styled from 'styled-components';
const FilePage = () => {
  return (
    <Wrapper>
      <FileUpLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px;
  width: 80%;
`;

export default FilePage;
