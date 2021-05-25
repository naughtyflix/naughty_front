import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Flix-BUSD LP', 
    lpAddresses: {
      97: '',
      56: '0xfb8eebdbf12bbeb289ef5030e82e6cf898cc3f00',
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0xcf225f8961839cd587211dee112cb2622f9227d7',
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
      56: '0xe3aDE2ff1d125b290DC3928f07e31FC2Efd7A6D3',
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0xcF225F8961839CD587211DEE112cb2622f9227D7',
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
      56: '0xfb8eebdbf12bbeb289ef5030e82e6cf898cc3f00', // NGHTY
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0xcf225f8961839cd587211dee112cb2622f9227d7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'RUG(Forestry)-NGTHY',
    lpAddresses: {
      97: '',
      56: '0xfb8eebdbf12bbeb289ef5030e82e6cf898cc3f00', // NGHTY
    },
    tokenSymbol: 'Flix',
    tokenAddresses: {
      97: '',
      56: '0xcf225f8961839cd587211dee112cb2622f9227d7',
    },
    quoteTokenSymbol: QuoteToken.RUG,
    quoteTokenAdresses: contracts.ngthy,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Naughty-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfb8eebdbf12bbeb289ef5030e82e6cf898cc3f00', // Nayghty-BUSD LP
    },
    tokenSymbol: 'NGTHY',
    tokenAddresses: {
      97: '',
      56: '0xcf225f8961839cd587211dee112cb2622f9227d7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Naughty-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfb8eebdbf12bbeb289ef5030e82e6cf898cc3f00', // Naughty-BUSD LP
    },
    tokenSymbol: 'NGTHY',
    tokenAddresses: {
      97: '',
      56: '0xcf225f8961839cd587211dee112cb2622f9227d7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  
  
  
]

export default farms
