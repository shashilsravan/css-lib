import React, {useState} from 'react'

export default function Navbar({sidebar, setSidebar}) {
    return (
        <div>
            <div className="header header-primary p-y-1 bs-bottom dflex justify-between align-center">
                <h5 className='p-x-6'> &lt; JumboCSS / &gt; </h5>
                <button className='btn font-white m-r-5 sidebar-button' 
                    onClick={() => setSidebar(!sidebar)}>
                    <i className="fas fa-bars" 
                    style={{fontSize: 28}}></i>
                </button>
            </div>
            <br />
        </div>
    )
}
