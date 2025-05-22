import React from "react"
import Sliders from "../components/Slider/Sliders"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaingSingle from "../components/CampaingSingle/CampaingSingle"
import Brands from "../components/Brands/Brands"
const HomePage = () => {
    return (
        <React.Fragment>
            <Sliders />
            <Categories />
            <Products />
            <Campaigns />
            <Products />
            <Blogs />
            <Brands />
            <CampaingSingle />

        </React.Fragment>

    )
}

export default HomePage