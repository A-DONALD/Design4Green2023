import { NextComponentType } from 'next'
import Link from 'next/link'


const Footer: NextComponentType = () => {
    return <footer className="bg-gray-900 text-white">
        <div className="flex items-center justify-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <span>© 2023 Design for green 30. All rights reserved.</span>
        </div>
    </footer>
}

export default Footer