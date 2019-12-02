import React, { FC, useState } from 'react';
import { Form, Button, Segment, Message } from 'semantic-ui-react';
import { getTextIpfsHash } from './utils/getIpfsHash';

const TextUpLoader: FC = () => {
  const [inputText, setText] = useState('');
  const [resultHash, setResultHash] = useState('');
  const [load, setLoad] = useState<boolean>(true);
  const [end, setEnd] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoad(false);
    const res = await getTextIpfsHash(inputText);
    setResultHash(res);
    setEnd(true);
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
                placeholder="Input data"
                value={inputText}
                onChange={handleChange}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
          {load ? <></> : <Message as="h3">Uploading...</Message>}
          {end ? <Message positive>End</Message> : <></>}
          <Segment>IPFS Hash : {resultHash}</Segment>
          <Segment>
            IPFS Link is{' '}
            <a
              href={`https://ipfs.io/ipfs/${resultHash}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
          </Segment>
        </Segment>
      </Segment.Group>
    </>
  );
};

export default TextUpLoader;
