// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text as UIKitText, ArrowForwardIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const StyledHowItWorks = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding: 24px 0;
`

const Section = styled.div`
  margin-bottom: 24px;
`

const Icon = styled.div`
  text-align: center;
`

const Text = styled(UIKitText)`
  flex: 1;
  padding: 0 8px;
`

const Row = styled.div`
  align-items: start;
  display: flex;
  margin-bottom: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <Container>
     
        <Section>
          <Heading id="how-it-works" color="secondary" size="lg" mb="16px">
            {TranslateString(632, 'How it works')}
          </Heading>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              You must get a minumum of 69 naughty tokens to have access to the videos
            </Text>
          </Row>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              You can choose to spend your naughties to have the video immidiatly
            </Text>
          </Row>
          <Row>
            <Icon>
              <ArrowForwardIcon />
            </Icon>
            <Text>
              Or you can stake your NGTHY to receive FLIX and gain access to the NFTs
            </Text>
          </Row>
        </Section>
      
       
      
    </Container>
  )
}

export default HowItWorks
