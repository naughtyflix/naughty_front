import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0x7c8b60d2b859a38c8B9b5B6CB4565485cb637c7a'
export const PANCAKE_RABBITS_ADDRESS = '0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07'

const Nfts: Nft[] = [

  {
    name: 'Russian Angel',
    description: 'You deserve way more than this after todays shitshow <3',
    originalImage: 'https://gateway.pinata.cloud/ipfs/QmPV5AWMzZV1Pv93RKxjdYErS2tJy58DcYrTCGanydwfuZ',
    previewImage: 'gurl.png',
    blurImage: 'blur1.png',
    sortOrder: 999,
    bunnyId: 0,
  },
    {
    name: 'Joana Marley',
    description: 'The first exclusive content on NaughtyFlix',
    originalImage: 'https://wetransfer.com/downloads/cb14a93da11f0ca946c0278aa750393320210601182948/7477d0201d0c9985e590e156b0e37ea220210601183003/a55721',
    previewImage: 'joana.png',
    blurImage: 'joanablur.png',
    sortOrder: 999,
    bunnyId: 1,
  },
 
]

export default Nfts
