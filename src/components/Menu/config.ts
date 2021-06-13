import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.naughtyflix.club/',
  },
  
  {
    label: 'Finance',
    icon: 'MoonIcon',
    href: '/',
  },
  {
    label: 'NFSW Area',
    icon: 'NftIcon',
    items:[{
      label: 'Content',
      href: 'https://www.naughtyflix.club/nsfw',
    },
    {
      label: 'NFTs',
      href: '/teaser',
    },

    ],
  },
  {
    label: 'NAUGHTY',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy Naughty',
        href: '/buynow',
      },
      {
        label: 'Naughty Chart',
        href: '/buynaughty',
      },
    ],
    
  },
 
  
  {
    label: 'FLIX',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy Flix',
        href: '/teaser',
      },
      {
        label: 'Liquidity',
        href: '/teaser',
      },
      {
        label:'Flix Chart',
        href:'/teaser'
      },
    ],
  },
  {
    label: 'Naughty Pool',
    icon: 'PoolIcon',
    href: '/Pools',
  },
  
  {
    label: 'Flix Farms',
    icon: 'FarmIcon',
    href: '/LoveFarms',
  },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Naughty Contract',
        href: 'https://bscscan.com/address/0x5Ac3786CbE72B1b7B313692a37ac850545B6C749',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/naughtyflix/",
      },
    
      {
        label: 'WhitePaper',
        href: 'https://www.naughtyflix.club/wp-content/uploads/2021/06/NAUGHTY-Official-Whitepaper.pdf',
      },
      
    ],
  },

]

export default config
