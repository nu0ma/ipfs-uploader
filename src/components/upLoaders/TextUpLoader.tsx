import React, { FC, useState } from 'react';
import { Form, Button, Segment } from 'semantic-ui-react';
import { getTextIpfsHash } from './utils/getIpfsHash';

const TextUpLoader: FC = () => {
  const [inputText, setText] = useState('');
  const [resultHash, setResultHash] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await getTextIpfsHash(inputText);
    setResultHash(res);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>Text Uploader</h1>

      <Segment.Group>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                placeholder="Input candicate name"
                value={inputText}
                onChange={handleChange}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
          <Segment>IPFS Hash : {resultHash}</Segment>
          <Segment>
            IPFS Link is <a href={`https://ipfs.io/ipfs/${resultHash}`}>here</a>
          </Segment>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default TextUpLoader;
