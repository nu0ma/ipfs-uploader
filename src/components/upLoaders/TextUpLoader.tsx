import React, { FC, useState } from 'react';
import { Form, Button, Segment, Message } from 'semantic-ui-react';
import { getTextIpfsHash } from '../../utils/getIpfsHash';
import henkakuBaseSVG from '../../resources/henkaku_membership';

const TextUpLoader: FC = () => {
  const [inputText, setText] = useState('');
  const [resultHash, setResultHash] = useState('');
  const [load, setLoad] = useState<boolean>(true);
  const [end, setEnd] = useState(false);
  const [user, setUser] = useState({ name: "", address: "", point: "", rank: "", profileUrl: "", role: ""});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoad(false);

    const domParser = new DOMParser();
    const parsedSVGDoc = domParser.parseFromString(henkakuBaseSVG, 'image/svg+xml');
    
    parsedSVGDoc.getElementById("jip_member_name")!.textContent = user.name
    parsedSVGDoc.getElementById("jip_member_wallet")!.textContent = user.address
    parsedSVGDoc.getElementById("jip_published_date")!.textContent = new Date().toDateString();
    parsedSVGDoc.getElementById("jip_point")!.textContent = "$" + user.point + "henkaku"
    parsedSVGDoc.getElementById("jip_role")!.textContent = user.role
    parsedSVGDoc.getElementById("jip_rank")!.textContent = user.rank + "/100"

    parsedSVGDoc.getElementById('profile_pic')!.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', user.profileUrl);
    const svg = new XMLSerializer().serializeToString(parsedSVGDoc)
    const res = await getTextIpfsHash(svg);
    setResultHash(res);
    setEnd(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h1>Text Uploader</h1>
      <Segment.Group>
        <Segment>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="name" onChange={handleChange} />
            <label htmlFor="address">Wallet Address</label>
            <input type="text" name="address" onChange={handleChange} />
            <label htmlFor="profileUrl">Profile Pic URL</label>
            <input type="text" name="profileUrl" onChange={handleChange} />
            <label htmlFor="role">Role</label>
            <input type="text" name="role" onChange={handleChange} />
            <label htmlFor="point">Point</label>
            <input type="number" name="point" onChange={handleChange}/>
            <label htmlFor="rank">Rank</label>
            <input type="number" name="point" onChange={handleChange}/>
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
