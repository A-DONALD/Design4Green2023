import React from 'react'
import CriteresModel, {Criteres as CritereType} from '../models/CritereModel'
import { FiltersValues, Filters as FiltersType, getStatusKey } from '../models/FilterModel'


interface PropsFilters {
  //item: PlaceCoord
  updater: (filtersValues: FiltersValues[]) => void
}

interface StateFilters {

}

export default class Filters extends React.Component<PropsFilters, StateFilters>{
  private readonly status = ['Conforme', 'Non conforme', 'En cours de déploiement', 'Non applicable']

  private readonly filtersValues: FiltersValues[] = [
    {
      filter: FiltersType.status,
      value: '---'
    }
  ]

  constructor(props: PropsFilters) {
    super(props)
  }

  private readonly update = (idFilter: number, value: string) => {
    this.filtersValues[idFilter].value = value
    this.props.updater(this.filtersValues)
  }

  render = () => {
    return <>
      <FilterItem title={FiltersType.status} values={this.status} updater={value => this.update(0, value)} />
    </>
  }
}

interface PropsFilterItem {
  title: FiltersType
  values: string[]
  updater: (term: string) => void
}

class FilterItem extends React.Component<PropsFilterItem>{
  constructor(props: PropsFilterItem) {
    super(props)
  }

  render = () => {
    return <div className='pt-20'>
      <div className={`pt-2 pb-4 xl:ml-14`}>
        <label htmlFor={this.props.title} className="block mb-2 text-sm font-medium text-gray-900">{this.props.title}</label>
        <select id={this.props.title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={event => this.props.updater(event.currentTarget.value)}>
          <option>---</option>
          {
            this.props.values.map((value, index) => {
              return <option key={index} value={getStatusKey(value)}>{value}</option>
            })
          }
        </select>
      </div>
    </div>
  }
}