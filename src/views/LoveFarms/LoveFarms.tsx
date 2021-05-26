import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd ,usePriceNaughtyBnB} from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps{
  tokenMode?: boolean
}

const LoveFarms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const naughtyPrice = usePriceNaughtyBnB()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  console.log(account)
  const {tokenMode} = farmsProps;

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  console.log(farmsLP)
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  
  const pastaOnlyFarms = activeFarms.filter(
    (farm) => farm.lpSymbol.startsWith("NGTHY"),

  )
  const busdOnlyFarms = activeFarms.filter(
    (farm) => farm.lpSymbol.includes("BUSD") 
  )

  const bnbOnlyFarms = activeFarms.filter(
    (farm) => farm.lpSymbol.includes("BNB") 
  )

  const stakedBusdOnlyFarms = busdOnlyFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  const stakedBnbOnlyFarms = bnbOnlyFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  const stakedPastaOnlyFarms = pastaOnlyFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
               const cakeRewardPerBlock = new BigNumber(farm.pastaPerBlock || 1).times(new BigNumber(farm.poolWeight)) .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)
        const cakeRewardPerMonth = cakeRewardPerYear.div(12)

        let apy = cakePrice.times(cakeRewardPerYear);
        if (farm.quoteTokenSymbol === QuoteToken.NGTHY) {
          apy = naughtyPrice.times(cakeRewardPerMonth);
        }
        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice);
        }

        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account,naughtyPrice, cakePrice, ethereum],
  )

// stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}
// pastaOnly={pastOnly} setPastaOnly={setPastaOnly}

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        { 
          tokenMode ?
          'Dont waist your Naughty to watch the videos Stake tokens to earn FLIX'
            :
          'Stake your LP tokens to earn FLIX'
        }
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        stake your NAUGHTY and earn FLIX to watch premium content!!!
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}/>
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
          {stakedOnly ? farmsList(stakedPastaOnlyFarms, false) : farmsList(pastaOnlyFarms, false)}
          </Route>
          <Route exact path={`${path}/ngthy`}>
          {stakedOnly ? farmsList(stakedPastaOnlyFarms, false) : farmsList(pastaOnlyFarms, false)}
          </Route>
         
        </FlexLayout>
      </div>
     
    </Page>
  )
}

export default LoveFarms
