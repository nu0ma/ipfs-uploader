import React, { useState } from 'react';
import { Segment, Form, Input, Button, Message } from 'semantic-ui-react';
import { getImageIpfsHash } from '../../utils/getIpfsHash';

const FileUpLoader = () => {
  const [buffer, setBuffer] = useState<ArrayBuffer>(new ArrayBuffer(0));
  const [resultHash, setResultHash] = useState('');
  const [load, setLoad] = useState<boolean>(true);
  const [end, setEnd] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files[0]);
    reader.onloadend = () => {
      const res = reader.result as string;
      setBuffer(Buffer.from(res));
      console.log(reader.result);
    };
    console.log(buffer);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted...');
    setLoad(false);
    const hash: string = await getImageIpfsHash(buffer);
    setResultHash(hash);
    console.log(hash);
    setEnd(true);
  };

  return (
    <>
      <h1>File Uploader</h1>
      <Segment.Group>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Input type="file" onChange={handleChange}></Input>
            </Form.Field>
            <Button>Submit</Button>
          </Form>
        </Segment>
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
      </Segment.Group>
    </>
  );
};

export default FileUpLoader;
