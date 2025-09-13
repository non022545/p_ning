import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className='bg-pink-900 p-4 text-white flex justify-between items-center'>
                <div className='container mx-auto flex justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-bold'>My App</h1>
                    </div>
                    <div className='space-x-4'>
                        <Link to="/Home">Home</Link>
                        <Link to="/Serprise">Serprise</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav