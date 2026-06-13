import React from 'react'
import {NavLinks} from "../constants/index.js";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src="logo.svg" alt="logo" />
                <ul>
                    {NavLinks.map(({ label }) => (
                        <li key={ label } >{ label }</li>
                    ))
                    }
                </ul>
                <div className="flex-center gap-3" >
                    <button>
                        <a href="/">
                            <img src="search.svg" alt="search" />
                        </a>
                    </button>
                    <button>
                        <a href="/">
                            <img src="cart.svg" alt="cart" />
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
