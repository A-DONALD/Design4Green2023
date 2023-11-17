import React from 'react'
import { Criteres as CritereType } from '../models/CritereModel'
import Accordion from './Accordion'
import CartModel from '../models/Cart'

interface PropsButtons {
    id: string
    updater: (value: string) => void
}

interface StateButtons {

}

export default class Buttons extends React.Component<PropsButtons, StateButtons> {
    constructor(props: PropsButtons) {
        super(props)
        this.state = {
            Buttons: []
        }
    }

    isChecked = (value: string) => {
        let cartItems = CartModel.get()
        if (cartItems && cartItems.length > 0) {
            cartItems = cartItems.filter(value => value.id == this.props.id)
            if (cartItems && cartItems.length > 0) {
                return cartItems[0].value == value
            }
        }
    }


    render: () => React.ReactNode = () => {
        return <div className='bg-gray-100 w-full pb-12'>
            <ul className="grid w-full gap-2 md:grid-cols-4">
                <li>
                    <input type="radio" id={this.props.id + "cn"} name={this.props.id} value="cn" className="hidden peer" onClick={() => {
                        this.props.updater('cn')
                        this.forceUpdate()
                    }}
                        checked={this.isChecked('cn')} />
                    <label htmlFor={this.props.id + "cn"} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            Conforme
                        </div>
                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id={this.props.id + "nc"} name={this.props.id} value="nc" className="hidden peer" onClick={() => {
                        this.props.updater('nc')
                        this.forceUpdate()
                    }} checked={this.isChecked('nc')} />
                    <label htmlFor={this.props.id + "nc"} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            Non conforme
                        </div>
                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id={this.props.id + "en"} name={this.props.id} value="en" className="hidden peer" onClick={() => {
                        this.props.updater('en')
                        this.forceUpdate()
                    }}
                        checked={this.isChecked('en')} />
                    <label htmlFor={this.props.id + "en"} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            En cour de déploiement
                        </div>
                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id={this.props.id + "na"} name={this.props.id} value="na" className="hidden peer" onClick={() => {
                        this.props.updater('na')
                        this.forceUpdate()
                    }}
                        checked={this.isChecked('na')} />
                    <label htmlFor={this.props.id + "na"} className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            Non applicable
                        </div>
                        <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
            </ul>
        </div>

    }
}