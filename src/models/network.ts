/**
 * Helper list to keep track of banner list
 */
const banners = {
  'Cosmos Hub': '/images/networks/cosmos.png',
  IRISnet: 'images/networks/IRISnet.png',
  'e-Money': 'images/networks/e-money.png',
  'Starname (IOV)': 'images/networks/iov.png',
  Kava: 'images/networks/kava.png',
  'Band Protocol': 'images/networks/band-protocol.png',
  LikeCoin: 'images/networks/likecoin.png',
  Akash: 'images/networks/akash.png',
  StraightEdge: 'images/networks/straight-edge.png',
  DESMOS: 'images/networks/desmos.png',
  'Fetch.AI': 'images/networks/fetch-ai.png',
  Celo: 'images/networks/celo.png',
};

export type Link = {
  chainId: string;
  url: string;
  name: string;
};

class BigDipperNetwork {
  public logo: string;
  public name: string;
  public mainnet: Link[];
  public testnet: Link[];
  public retired: Link[];
  public other: Link[];
  public banner?: string;

  constructor(payload: any) {
    this.name = payload.name;
    this.logo = payload.logo;
    this.mainnet = payload.mainnet;
    this.testnet = payload.testnet;
    this.retired = payload.retired;
    this.other = payload.other;
    this.banner = payload.banner;
  }

  static fromJson(data: any) {
    const allLinks:Link[] = data?.links?.map((x) => {
      return ({
        chainId: x.chain_id,
        url: x.url,
        name: x.name,
      });
    });
    const mainnet = [];
    const testnet = [];
    const retired = [];
    const other = [];

    allLinks.forEach((x) => {
      // main
      if (x.name.toLowerCase().includes('mainnet')) {
        mainnet.push((x));
      } else if (x.name.toLowerCase().includes('testnet')) {
        testnet.push((x));
      } else if (x.name.toLowerCase().includes('retired')) {
        retired.push((x));
      } else {
        other.push(x);
      }
    });

    return new BigDipperNetwork({
      mainnet,
      testnet,
      retired,
      other,
      name: data.name,
      logo: data.logo,
      banner: banners[data.name],
    });
  }
}

export default BigDipperNetwork;
