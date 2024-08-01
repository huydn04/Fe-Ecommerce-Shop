import React from 'react'
import Product from '../../components/Products/Product'
import Description from '../../components/Products/Description'
import RelativeProduct from '../../components/Products/RelativeProduct'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'

const MenuDetail = () => {
	return (
		<div>
			<Header />
			<Product/>
			<Description/>
			<RelativeProduct/>
			<Footer />
		</div>
	)
}

export default MenuDetail