import React from 'react';
import { Link } from 'react-router-dom';
import { List, Segment, Header } from 'semantic-ui-react';
import { Wrapper } from '../components/styles/Wrapper';

const Home = () => {
  return (
    <Wrapper>
      <Header as="h1">IPFS Uploader</Header>
      <Segment>
        <List divided relaxed>
          <List.Item>
            <Link to="/text">Upload Text</Link>
          </List.Item>
          <List.Item>
            <Link to="/file">Upload File</Link>
          </List.Item>
        </List>
      </Segment>
    </Wrapper>
  );
};

export default Home;
