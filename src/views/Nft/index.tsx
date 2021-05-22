import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import HowItWorks from './components/HowItWorks'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'
import Register from './RegisterToWinPage'
import { getNGHTYAddress } from '../../utils/addressHelpers'
import useTokenBalance from '../../hooks/useTokenBalance'
import { getBalanceNumber } from '../../utils/formatBalance'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 32px;
`

const Nft = () => {
  const TranslateString = useI18n()
  const cakeBalance = getBalanceNumber(useTokenBalance(getNGHTYAddress()))
  let show

  if(cakeBalance < 35000000000000000){

    show = <Register />
  }
  else{
    show = <StyledHero><NftInfo /> <NftList /> <HowItWorks /></StyledHero>
       
        
       
  }
 

  return (
    <NftProvider>
      <Page>
        <StyledHero>
          <Heading as="h1" size="xxl" color="secondary" mb="24px">
            Naughty NFT videos 
          </Heading>
          <Heading as="h2" size="lg" color="secondary">
            The most exclusive adult NFTs only for TOP Naughty holders
          </Heading>
          </StyledHero>
       {show}
      </Page>
    </NftProvider>
  )
}

export default Nft
