import React from 'react'
import CriteresModel, { Criteres as CritereType } from '../../models/CritereModel'
import GoodPractice from '../Critere'
import Accordion from '../Accordion'
import CartModel from '../../models/CartModel'

interface PropsCriteres {
  criteres: CritereType[]
  thematiques: string[]
  updateSideBar: () => void
}

interface StateCriteres {
  currentItems: CritereType[]
}

export default class Criteres extends React.Component<PropsCriteres, StateCriteres> {
  constructor(props: PropsCriteres) {
    super(props)
    this.state = {
      currentItems: []
    }
  }

  componentDidMount(): void {
    CartModel.updateCart()
  }

  componentDidUpdate = () => {
    const currentItems = CriteresModel.getCriteres()
    if (JSON.stringify(this.state.currentItems) != JSON.stringify(currentItems)) this.setState({ currentItems: currentItems })
  }

  render: () => React.ReactNode = () => {
    return <div className='bg-gray-100 w-full pt-28'>
      {
        this.props.thematiques.map((thematique, key) => {

          return <>
            <div>
              {thematique}
            </div>
            <Accordion thematiques={this.props.criteres.filter(value => value.thematique == thematique).map(value => value.critere)} critere={this.props.criteres.filter(value => value.thematique == thematique)} 
            updateSideBar={this.props.updateSideBar}
            />
          </>
        })
      }
    </div>

  }
}