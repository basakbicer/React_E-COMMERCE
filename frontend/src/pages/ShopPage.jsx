import  { Fragment } from 'react'
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaingSingle from "../components/CampaingSingle/CampaingSingle"


const ShopPage = () => {
  return (
    <Fragment>
      <Categories/>
      <Products/>
      <CampaingSingle/>
      <Products/>
    </Fragment>
  )
}

export default ShopPage