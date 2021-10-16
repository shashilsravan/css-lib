import React from 'react'

export default function Accordion({children, title, index}) {
    return (
        <div className='w-100'>
            <div className="tabs">
                <div className="tab">
                    <input type="checkbox" id={`check${index}`} className='d-none'
                        defaultChecked />
                    <label className="tab-label" htmlFor={`check${index}`}>
                        {title} 
                    </label>
                    <div className="tab-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
