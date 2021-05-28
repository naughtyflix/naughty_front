import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy Naughty',
    icon: 'MoonIcon',
    href: '/buynaughty',
  },
  {
    label: 'Trade Flix',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buynow',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'NSFW Exclusive NFT',
    icon: 'NftIcon',
    href: '/teaser',
  },
  {
    label: 'Naughty Pool',
    icon: 'PoolIcon',
    href: '/teaser',
  },
  
  {
    label: 'Flix Farms',
    icon: 'FarmIcon',
    href: '/teaser',
  },
  {
    label: 'Rug Pools',
    icon: 'PoolIcon',
    href: '/rugfarms',
  },

  
  {
    label: 'Lottery (Soon...)',
    icon: 'TicketIcon',
    href: '/teaser',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xAB9D0Fae6eB062F2698C2D429a1BE9185A5D4F6E',
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
        label: 'RoadMap',
        href: 'https://www.naughtyflix.club/',
      },
      {
        label: 'WhitePaper',
        href: 'https://www.naughtyflix.club/wp-content/uploads/2021/05/NAUGHTY-Whitepaper.pdf',
      },
      
    ],
  },

]

export default config
