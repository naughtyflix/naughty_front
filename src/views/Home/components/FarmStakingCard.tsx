import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js/bignumber'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import NaughtyWalletBalance from './NaughtyWalletBalance'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { usePriceCakeBusd } from '../../../state/hooks'
import { getCakeAddress,getNGHTYAddress } from '../../../utils/addressHelpers'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getBalanceNumber,getBalance9Number } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`
const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-around;
  margin-bottom: 8px;
`
const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 10px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const naughtyBalance = getBalance9Number(useTokenBalance(getNGHTYAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <CardImage src="/images/egg/2.png" alt="cake logo" width={64} height={64} />
        <Block>
        <Label> Naughty in Wallet</Label>
         <NaughtyWalletBalance naughtyBalance={naughtyBalance} />
         <Label>~${(eggPrice * naughtyBalance).toFixed(2)}</Label>
         </Block>
         <Block>
         <Row>
          <Label> Flix in Wallet</Label>
          <Label> Flix to Harvest</Label>
          </Row>
          <Row>
          <CakeWalletBalance cakeBalance={cakeBalance} />
          <CakeHarvestBalance earningsSum={earningsSum}/>
          </Row>
          <Row>
          <Label>~${(eggPrice * cakeBalance).toFixed(2)}</Label>
          <Label>~${(eggPrice * earningsSum).toFixed(2)}</Label>
         </Row>
        </Block>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
