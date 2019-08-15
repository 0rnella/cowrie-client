import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryCard from "../components/categoryCard";
let categories = ["Restaurants", "Construction", "Fashion", "Arts"]

const Discover = () => (
  <Layout>
    <SEO title="Discover businesses" />
    <h1>Discover businesses</h1>
    <div className="categories">
    {categories.map(cat => <CategoryCard category={cat} />)}
    </div>
  </Layout>
)

export default Discover
