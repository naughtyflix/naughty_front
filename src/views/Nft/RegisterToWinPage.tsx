// @ts-nocheck
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Heading, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useNaughty } from 'hooks/useContract'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import HowItWorks from './components/HowItWorks'
import NftPreview from './components/NftPreview'
import NftList from './components/NftList'
import NftProvider from './contexts/NftProvider'
import NftInfo from './components/NftInfo'




const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding-bottom: 32px;
  padding-top: 32px;
  margin-bottom: 24px;
`

const Cta = styled.div`
  align-items: center;
  display: flex;

  & > a + a {
    margin-left: 16px;
  }
`

const RegisterToWinPage = (allow) => {
  const TranslateString = useI18n()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [accepted, setAccepted] = useState(false)
  const { account } = useWallet()
  const NaughtyContract = useNaughty()
  const handleConfirm = async () => {
    try {
      

      await NaughtyContract.methods
        .transfer('0xac2C913Cac37D0f3B9335AFf22127A8b006810B8', 69000000000)
        .send({ from: account })
        .on('sending', () => {
          setIsLoading(true)
        })
        .on('receipt', () => {
          setAccepted(true)
        })
        .on('error', () => {
          console.error(error)
          setError('Unable to send Tx')
          setIsLoading(false)
          
        })
    } catch (err) {
      console.error('Unable to send Tx', err)
      
    }
  }

  let show
   if(accepted && account ){
     show =<StyledHero> <NftList /> <HowItWorks /></StyledHero>
   }
   else{
    show =   <Container>
    <StyledHero>
      <Heading as="h1" size="xxl" color="secondary" mb="24px">
        NFTs
      </Heading>
      <Heading as="h2" size="lg" color="secondary" mb="16px">
        You must hold at least 69 Naughty to enter the Naughty Area
      </Heading>
      <Text mb="24px"> We are deeply sorry for the shitshow but we are trying our best: </Text>
      <Cta>
        <Button onClick={handleConfirm}>
          Gain access with Naughty
        </Button>
        <Button as="a" href="#how-it-works" variant="secondary">
          {TranslateString(620, 'Learn more')}
        </Button>
      </Cta>
    </StyledHero>
    <NftPreview />
  <HowItWorks />
  </Container>
   }
  return (
    <Page>
    {show}
      
    </Page>
  )
}

export default RegisterToWinPage
