
import BestSell from "../../Components/BestSell/BestSell"
import HeaderBanner from "../../Components/HeaderBanner/HeaderBanner"
import Service from "../../Components/Service/Service"
import Subscription from "./Subscription"

function Home() {
  return (
    <div>
      <HeaderBanner></HeaderBanner>
      <BestSell></BestSell>
      <Service/>
      <Subscription /> 

    </div>
  )
} 

export default Home