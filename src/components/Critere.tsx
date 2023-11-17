import Link from 'next/link'
import React from 'react'
import CartModel from '../models/CartModel'
import { Criteres as GoodPracticesType } from '../models/CritereModel'
import Buttons from './Buttons'

interface PropsGoodPractices {
  content: GoodPracticesType
  updateSideBar: () => void
}

export default class GoodPractice extends React.Component<PropsGoodPractices> {
  constructor(props: PropsGoodPractices) {
    super(props)
  }

  render: () => React.ReactNode = () => {
    return <div className="py-12 min-h-screen gap-10 flex-wrap flex justify-center font-semibold">
      <div className="">
        <div className='mb-5'>
          <div className='ml-5 text-xl text-gray-50'>
            Controle
          </div>
          <div className='ml-10 text-lg text-gray-50'>
            {this.props.content.controle}
          </div>
        </div>
        <div className='mb-5'>
          <div className='ml-5 text-xl text-gray-50'>
            Objectif
          </div>
          <div className='ml-10 text-lg text-gray-50'>
            {this.props.content.objectif}
          </div>
        </div>
        <Buttons id={this.props.content.id} updater={(value) => {
          CartModel.add({ id: this.props.content.id, value: value })
        }
          
          } updateSideBar={this.props.updateSideBar}/>
      </div>
    </div>
  }
}