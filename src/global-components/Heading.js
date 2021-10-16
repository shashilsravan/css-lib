import React from 'react'

export default function Heading({title, content}) {
    return (
        <>
            <h3 className='heading'>
                {title}
            </h3>
            <h6 className='fw-thin text-center'>
                {content}
            </h6>
        </>
    )
}
