import React from 'react'
import { Navbar } from "flowbite-react";

export default function Header() {
    return (
        <div className='shadow-lg sticky top-0'>
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="https://product-listings.vercel.app/static/media/myntra.23d804112ff164fbba64.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Myntra</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar href="#" active>
                        MEN
                    </Navbar>
                    <Navbar href="#">
                        Women
                    </Navbar>
                    <Navbar href="#">KIDS
                    </Navbar>
                    <Navbar href="#">HOME & LIVING
                    </Navbar>
                    <Navbar href="#">BEAUTY
                    </Navbar>
                    <Navbar href="#">StudioNEW
                    </Navbar>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}
