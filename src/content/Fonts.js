import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Fonts() {
    const codeString1 = 
    `<div>
    <p class='font-primary'> .font-primary </p>
    <p class='font-secondary'> .font-secondary </p>
    <p class='font-tertiary'> .font-tertiary </p>
    <p class='font-success'> .font-success </p>
    <p class='font-danger'> .font-danger </p>
    <p class='font-warning'> .font-warning </p>
    <p class='font-dark'> .font-dark </p>
</div>`

    const codeString2 = `<div>
    <p class='text-left'> Left aligned </p>
    <p class='text-center'> Center Aligned </p>
    <p class='text-right'> Right aligned </p>
    <p class='text-lower'> Lowercase text </p>
    <p class='text-upper'> Uppercase text </p>
    <p class='text-capitalize'> Capitalize text </p>
    <p class='text-line-through'> Line through text </p>
    <a href="#" class='text-none'><p>Text decoration none</p></a>
    <p class='text-underlined'> Underlined text </p>
</div>`

    const codeString3 = `<div>
    <p class='font-italic'> Italic text </p>
    <p class='fw-thinner'> Thinner text </p>
    <p class='fw-thin'> Thin text </p>
    <p class='fw-normal'> Normal text </p>
    <p class='fw-bold'> Bold text </p>
    <p class='fw-bolder'> Bolder text </p>
</div>`
    return (
        <div>
            <Heading title='Fonts' 
                content='Font styles available in website'/>

            <div className="card m-y-6">
                <div className="card-header">
                    Font colors
                </div>
                <div className="card-body">
                    <div>
                        <p className='font-primary'> .font-primary </p>
                        <p className='font-secondary'> .font-secondary </p>
                        <p className='font-tertiary'> .font-tertiary </p>
                        <p className='font-success'> .font-success </p>
                        <p className='font-danger'> .font-danger </p>
                        <p className='font-warning'> .font-warning </p>
                        <p className='font-dark'> .font-dark </p>
                    </div>
                    <hr className='m-y-5' />
                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>

            <hr />

            <div className="card m-y-6">
                <div className="card-header">
                    Font styles & weights
                </div>
                <div className="card-body">
                    <div>
                        <p className='font-italic'> Italic text </p>
                        <p className='fw-thinner'> Thinner text </p>
                        <p className='fw-thin'> Thin text </p>
                        <p className='fw-normal'> Normal text </p>
                        <p className='fw-bold'> Bold text </p>
                        <p className='fw-bolder'> Bolder text </p>
                    </div>
                    <hr className='m-y-5' />
                    <CodeContainer css codeString={codeString3} />
                </div>
            </div>

            <hr />

            <div className="card m-y-6">
                <div className="card-header">
                    Text
                </div>
                <div className="card-body">
                    <div>
                        <p className='text-left'> Left aligned </p>
                        <p className='text-center'> Center Aligned </p>
                        <p className='text-right'> Right aligned </p>
                        <p className='text-lower'> Lowercase text </p>
                        <p className='text-upper'> Uppercase text </p>
                        <p className='text-capitalize'> Capitalize text </p>
                        <p className='text-line-through'> Line through text </p>
                        <a href="#" className='text-none'><p>Text decoration none</p></a>
                        <p className='text-underlined'> Underlined text </p>
                    </div>
                    <hr className='m-y-5' />
                    <CodeContainer css codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
