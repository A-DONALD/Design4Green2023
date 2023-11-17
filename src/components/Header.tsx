import Link from 'next/link'
import React from 'react'

export default class Header extends React.Component<{ updater: (status: boolean) => void }, { isOpen: boolean }> {

	constructor(props: { updater: (status: boolean) => void }) {
		super(props)
		this.state = {
			isOpen: false
		}
	}

	render: () => React.ReactNode = () => {
		return <header className='z-10 fixed w-full bg-gray-800 xl:flex xl:justify-between xl:items-center xl:px-4 xl:py-3'>
			<div className="flex items-center justify-between px-4 py-3 xl:p-0">
				<div className='text-white'>
					<Link href='/'>
						<div className='flex cursor-pointer'>
							<button onClick={() => this.props.updater(true)} className='items-end pt-3 ml-2'>MENU</button>
						</div>
					</Link>
				</div>
				<div className='xl:hidden'>
					<button aria-label='menu' type="button" onClick={() => this.setState({ isOpen: !this.state.isOpen })} className='block text-gray-500 hover:text-white focus:outline-none'>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							{
								!this.state.isOpen && <>
									<line x1={4} y1={6} x2={20} y2={6}></line>
									<line x1={4} y1={12} x2={20} y2={12}></line>
									<line x1={4} y1={18} x2={20} y2={18}></line>
								</>
							}
							{
								this.state.isOpen && <>
									<line x1={18} y1={6} x2={6} y2={18}></line>
									<line x1={6} y1={6} x2={18} y2={18}></line>
								</>
							}
						</svg>
					</button>
				</div>
			</div >
			<div className={`px-3 pt-2 pb-4 ${this.state.isOpen ? 'block' : 'hidden'} xl:flex`}>
				<Link href="strategie"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>STRATEGIE</span></Link>
				<Link href="specifications"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>SPECIFICATIONS</span></Link>
				<Link href="ux-ui"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>UX / UI</span></Link>
				<Link href="contenus"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>CONTENUS</span></Link>
				<Link href="front-end"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>FRONT END</span></Link>
				<Link href="architecture"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>ARCHITECTURE</span></Link>
				<Link href="back-end"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>BACK END</span></Link>
				<Link href="hebergement"><span className='block text-white text-sm font-semibold rounded px-2 py-1 hover:bg-gray-700 cursor-pointer xl:mt-0 xl:ml-2'>HEBERGEMENT</span></Link>
			</div>
		</header>
	}

}