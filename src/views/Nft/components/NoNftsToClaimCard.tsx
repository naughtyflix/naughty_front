import React from 'react'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SecondaryCard from './SecondaryCard'
import CardContent from './CardContent'

const NoNftsToClaimCard = () => {
  const TranslateString = useI18n()

  return (
    <SecondaryCard>
      <CardContent imgSrc="/images/present-disabled.svg">
        <Heading mb="8px">{TranslateString(999, 'No NFTs to claim')}</Heading>
        <Text>
          Please register so you can have a chance to be whitelisted for the exclusive NFT video content
        </Text>
      </CardContent>
    </SecondaryCard>
  )
}

export default NoNftsToClaimCard
