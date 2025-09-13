import React, { useState } from 'react'
import Nav from '../components/Nav'

function Home() {
    const [model, setModel] = useState(false)

    const handleClick = () => {
        setModel((prev) => !prev);
    }

    return (
        <>
            {/* <Nav /> */}
            <div className='bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 h-screen flex flex-col items-center justify-center'>
                <button onClick={handleClick} className='bg-purple-800 text-white px-6 py-4 rounded mb-7'>❤️กดสิคะ❤️</button>
                {model && (
                    <>
                        <div className='bg-white/80 text-pink-800 p-6 rounded shadow-lg'>
                            <h1>
                                ❤️❤️❤️ รักพี่หนิงมากๆเลยน้าาาไม่ได้มาหลอกๆนะคะ รักมากๆเลยยย ❤️❤️❤️
                            </h1>

                        </div>
                        <p className='text-9xl mt-6'>&#128145;</p>
                    </>
                )}
            </div >
        </>
    )
}

export default Home