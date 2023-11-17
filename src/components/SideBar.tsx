import React from 'react'
import PDFModel from '../models/PDFModel'


interface PropsSideBar {
    nbCo: number
    nbNc: number
    nbEn: number
    nbNa: number
    isOpen: boolean
    updater: (status: boolean) => void
}

interface StateSideBar {
    //items: List[]
    //searchTerm: string | undefined
}
export default class SideBar extends React.Component<PropsSideBar, StateSideBar>{

    constructor(props: PropsSideBar) {
        super(props)
        this.state = {
            //items: [],
            //searchTerm: ''
        }

    }

    componentDidMount = () => {
        //console.log(this.props.items)
        //this.setState({items: this.props.items})
    }

    getScore = () => {
        return (this.props.nbCo * 100) / (79 - this.props.nbNa);
    }

    getTotal = () => {
        return this.props.nbCo + this.props.nbNc + this.props.nbEn + this.props.nbNa;
    }

    generatePDF = () => {
        PDFModel.generatePDF()
        localStorage.clear();
    }

    render = () => {
        return <aside className="z-50" aria-label="Sidebar">
            {
                this.props.isOpen && <>
                    <div id="drawer-example" className="overflow-x-hidden absolute z-40 h-5/6 p-4 overflow-y-auto w-80 bg-gray-800" tabIndex={-1}>
                        <button aria-label='close-menu' onClick={() => this.props.updater(false)} type="button" data-drawer-dismiss="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center hover:bg-gray-600 hover:text-white" >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                        <div id="result-div" className='w-60 border-4 h-60 rounded-2xl flex flex-col items-center'>
                            <div id="score-div" className={`text-6xl ${this.getScore() > 33 ? (this.getScore() > 66 ? 'text-green-500' : 'text-orange-500') : 'text-red-500'} justify-center p-6`}>{this.getScore().toFixed(1)}%</div>
                            <div id='details-div' className="flex items-center justify-between">
                                <h3 className='text-xl text-slate-500 m-2'>Co:{this.props.nbCo}</h3>
                                <h3 className='text-xl text-slate-500 m-2'>Nc:{this.props.nbNc}</h3>
                                <h3 className='text-xl text-slate-500 m-2'>Dv:{this.props.nbEn}</h3>
                                <h3 className='text-xl text-slate-500 m-2'>Na:{this.props.nbNa}</h3>
                            </div>
                            <div id="total-div" className={`text-2xl ${this.getTotal() > 35 ? (this.getTotal() == 79 ? 'text-blue-500' : 'text-orange-500') : 'text-red-500'} justify-center p-6`}>{this.getTotal()} / 79</div>
                        </div>
                        <div className='mt-10 text-lg text-white'>
                            <button onClick={this.generatePDF}>Exporter en PDF</button>
                        </div>
                    </div>
                </>
            }
        </aside>
    }
}
