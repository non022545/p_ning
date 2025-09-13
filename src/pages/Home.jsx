import React, { useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [model, setModel] = useState(false)
    const navigate = useNavigate();

    const handleClick = () => {
        setModel((prev) => !prev);
    }
    const handlelogin = () => {
        navigate('/');
    }


    return (
        <>
            {/* <Nav /> */}
            <div className='bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 h-screen p-5'>
                <div className='flex justify-end'>
                    <button onClick={handlelogin} className='bg-pink-800 text-white px-4 py-2 rounded mb-7'>กลับหน้า Login</button>
                </div>
                <div className='flex flex-col items-center justify-center'>
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
                </div>
            </div >
        </>
    )
}

export default Home