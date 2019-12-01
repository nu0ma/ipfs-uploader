const ipfsClient = require('ipfs-api');
const ipfs = new ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

export default ipfs;
