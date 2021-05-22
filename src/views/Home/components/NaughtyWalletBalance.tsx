import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useNaughtyBalance from 'hooks/useNaughtyBalance'
import useI18n from 'hooks/useI18n'
import { getNGHTYAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const NaughtyWalletBalance = ({naughtyBalance}) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={naughtyBalance}  />
}

export default NaughtyWalletBalance
