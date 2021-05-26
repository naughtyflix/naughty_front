import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Flix-BUSD LP', 
    lpAddresses: {
      97: '',
      56: '0xa627d6c409f7d7808bf3377af58954aeda0ca871',
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0x66DC86a960d8bDBD9b74509c6822480d6ab2ff19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Flix-BNB LP',   
    lpAddresses: {
      97: '',
      56: '0x8555e502a5712890d7ef2777dea844bb4b73a407',
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0x66DC86a960d8bDBD9b74509c6822480d6ab2ff19',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'NGTHY',
    lpAddresses: {
      97: '',
      56: '0xb4c3812dc6ecade6cbe08115fb8e08fb094e28bf', // NGHTY
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0x66DC86a960d8bDBD9b74509c6822480d6ab2ff19',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
  
  
]

export default farms
