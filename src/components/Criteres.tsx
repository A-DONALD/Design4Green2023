import React from 'react'
import { Criteres as GoodPracticesType } from '../models/CritereModel'
import Accordion from './Accordion'

interface PropsGoodPractices {
  criteres: GoodPracticesType[]
  thematiques: string[]
  updateSideBar?: () => void
}

interface StateGoodPractices {
  criteres: GoodPracticesType[]
}

export default class GoodPractices extends React.Component<PropsGoodPractices, StateGoodPractices> {
  constructor(props: PropsGoodPractices) {
    super(props)
    this.state = {
      criteres: []
    }
  }

  render: () => React.ReactNode = () => {
    return <div className='bg-gray-100 w-full pb-12'>
      <Accordion critere={this.props.criteres} thematiques={this.props.thematiques}
        updateSideBar={this.props.updateSideBar || (() => null)}
      />
    </div>

  }
}