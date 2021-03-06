import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'
import NftGlobalNotification from './views/Nft/components/NftGlobalNotification'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const LoveFarms = lazy(() => import('./views/LoveFarms'))
const RugFarms = lazy(() => import('./views/RugFarms'))
const Lottery = lazy(() => import('./views/Lottery'))
const Buy = lazy(() => import('./views/Buy'))
const BuyNow = lazy(() => import('./views/BuyNow'))
const BuyNaughty = lazy(() => import('./views/BuyNaughty'))
const Teaser = lazy(() => import('./views/Teaser'))
const Liquidity = lazy(() => import('./views/Liquidity'))
// const Pools = lazy(() => import('./views/Pools'))
// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Nft = lazy(() => import('./views/Nft'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Farms />
            </Route>
            <Route path="/rugfarms">
              <RugFarms />
            </Route>
            {/* <Route path="/pools"> */}
            {/*  <Pools /> */}
            {/* </Route> */}
            <Route path="/lottery"> 
              <Lottery />
           </Route> 
           <Route path="/buy">
             <Buy />
            </Route>
            <Route path="/liquidity">
             <Liquidity />
            </Route>
             <Route path="/buynow">
             <BuyNow />
            </Route>
            <Route path="/buynaughty">
             <BuyNaughty />
            </Route>
            <Route path="/lovefarms">
             <LoveFarms tokenMode/>
            </Route>
             <Route path="/nft"> 
             <Nft /> 
            </Route> 
            <Route path="/teaser"> 
             <Teaser /> 
            </Route> 
            {/* <Route path="/ifo"> */}
            {/*  <Ifos /> */}
            {/* </Route> */}
           
            {/* Redirect */}
            {/* <Route path="/staking"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* <Route path="/syrup"> */}
            {/*  <Redirect to="/pools" /> */}
            {/* </Route> */}
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Menu>
      <NftGlobalNotification />
    </Router>
  )
}

export default React.memo(App)
