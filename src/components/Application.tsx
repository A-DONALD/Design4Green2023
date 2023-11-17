import React from 'react'
import Header from './Header'
import Criteres from './index/Criteres'
import Filters from './Filters'
import Footer from './Footer'
import GoodPracticesModel, { Filter, Criteres as CriteresType } from '../models/CritereModel'
import { FiltersValues } from '../models/FilterModel'
import CriteresModel from '../models/CritereModel'
import CartModel, { Cart, CartCriteres } from '../models/CartModel'
import SideBar from './SideBar'


interface PropsApplication {

}

interface StateApplication {
	sidebarIsOpen: boolean
	criteres: CriteresType[]
	cartCriteres: Cart[]
	thematiques: string[],
	nbCo: number,
	nbNc: number,
	nbEn: number,
	nbNa: number
}

export default class Application extends React.Component<PropsApplication, StateApplication>{

	constructor(props: PropsApplication) {
		super(props)
		this.state = {
			sidebarIsOpen: true,
			criteres: [],
			cartCriteres: [],
			thematiques: [],
			nbCo: 0,
			nbEn: 0,
			nbNa: 0,
			nbNc: 0
		}
	}

	componentDidMount(): void {
		const cart = CartModel.get()
		if(cart == undefined || cart == null || cart.length == 0){
			CartModel.save()
		}
		this.setState({
			criteres: CriteresModel.getCriteres(),
			cartCriteres: CartModel.get(),
			thematiques: CriteresModel.getThematiques(),
			nbCo: CartModel.getCriteres().filter(value => value.value == 'cn').length,
			nbEn: CartModel.getCriteres().filter(value => value.value == 'en').length,
			nbNc: CartModel.getCriteres().filter(value => value.value == 'nc').length,
			nbNa: CartModel.getCriteres().filter(value => value.value == 'na').length
		})
	}

	componentDidUpdate(): void {
		const carts = CartModel.get()
		if (JSON.stringify(carts) != JSON.stringify(this.state.cartCriteres)) {
			this.setState({
				cartCriteres: carts,
				nbCo: CartModel.getCriteres().filter(value => value.value == 'cn').length,
				nbEn: CartModel.getCriteres().filter(value => value.value == 'en').length,
				nbNc: CartModel.getCriteres().filter(value => value.value == 'nc').length,
				nbNa: CartModel.getCriteres().filter(value => value.value == 'na').length
			})
		}
	}

	update = (values: FiltersValues[]) => {
		console.log(values)
		let criteres: CartCriteres[], thematiques: string[]
		console.log(values[0].value)
		if (values[0].value != '---') {
			criteres = CartModel.getCriteres().filter(value => value.value == values[0].value)
			thematiques = criteres.map(values => values.critere.thematique)
			this.setState({
				criteres: criteres.map(value => value.critere) || [],
				thematiques: thematiques || []
			})
		}else{
			this.setState({
				criteres: CriteresModel.getCriteres(),
				thematiques: CriteresModel.getThematiques()
			}, () => this.forceUpdate())
		}

	}

	render = () => {
		return <>
			<Header updater={status => this.setState({ sidebarIsOpen: status })} />
			<SideBar
				isOpen={this.state.sidebarIsOpen}
				updater={status => this.setState({ sidebarIsOpen: status })}
				nbCo={this.state.nbCo}
				nbNc={this.state.nbNc}
				nbEn={this.state.nbEn}
				nbNa={this.state.nbNa}
			/>
			<Filters updater={(values) => this.update(values)} />
			<Criteres criteres={this.state.criteres} thematiques={this.state.thematiques}
				updateSideBar={() => this.forceUpdate()}
			/>
			<Footer />
		</>
	}
}
