import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useNaughtyBalance'
import useI18n from 'hooks/useI18n'
import { getNGHTYAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBNB,usePriceBnbBusd ,usePriceCakeBusd} from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getNGHTYAddress())
  const farms = useFarms();
  const bnbPrice = usePriceBnbBusd();
  const eggPrice = usePriceCakeBNB();
  const naughtyPrice = eggPrice.times(bnbPrice)
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = naughtyPrice.times(circSupply);

  
  

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Naughty Stats
        </Heading>
        <Row>
          <Text fontSize="14px">Total Naughty Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />

        </Row>
        <Row>
          <Text fontSize="14px"> Total Naughty Burned</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px"> New Naughty/block</Text>
          <Text bold fontSize="14px"> 0</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
