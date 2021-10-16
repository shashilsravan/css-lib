import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function ListGroup() {
    const codeString1 = 
    `<ol class='list-group'>
    <li class='list-item'>
        First item
    </li>
    <li class='list-item'>
        Second item
    </li>
    <li class='list-item'>
        Third item 
    </li>
    <li class='list-item'>
        Fourth item
    </li>
    <li class='list-item'>
        Fifth item
    </li>
</ol>`

    const codeString2 = 
    `<ol class='list-group'>
    <li class='list-item active'>
        First item
    </li>
    <li class='list-item'>
        Second item
    </li>
    <li class='list-item'>
        Third item 
    </li>
    <li class='list-item'>
        Fourth item
    </li>
    <li class='list-item disabled'>
        Fifth item
    </li>
</ol>`

    const codeString3 = 
    `<ol class='list-group'>
    <li class='list-item primary'>
        First item
    </li>
    <li class='list-item secondary'>
        Second item
    </li>
    <li class='list-item tertiary'>
        Third item
    </li>
    <li class='list-item success'>
        Fourth item 
    </li>
    <li class='list-item danger'>
        Fifth item
    </li>
    <li class='list-item dark'>
        Sixth item
    </li>
</ol>`

    const codeString4 = 
    `<ol class='list-group'>
    <li class='list-item'>
        <span class='pill pill-primary'>1</span>
        First item
    </li>
    <li class='list-item'>
        <span class='pill pill-secondary'>2</span>
        Second item
    </li>
    <li class='list-item'>
        <span class='pill pill-tertiary'>3</span>
        Third item 
    </li>
    <li class='list-item'>
        <span class='pill pill-success'>4</span>
        Fourth item
    </li>
    <li class='list-item'>
        <span class='pill pill-danger'>5</span>
        Fifth item
    </li>
    <li class='list-item'>
        <span class='pill pill-warning'>6</span>
        Sixth item
    </li>
    <li class='list-item'>
        <span class='pill pill-danger'>7</span>
        Seventh item
    </li>
</ol>`

    return (
        <div>
            <Heading title='List Groups' 
                content='Useful to for displaying a series of content'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    List Group Basic
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='list-group'>
                            <li className='list-item'>
                                First item
                            </li>
                            <li className='list-item'>
                                Second item
                            </li>
                            <li className='list-item'>
                                Third item 
                            </li>
                            <li className='list-item'>
                                Fourth item
                            </li>
                            <li className='list-item'>
                                Fifth item
                            </li>
                        </ol>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    List Group - Active / Disabled
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='list-group'>
                            <li className='list-item active'>
                                First item
                            </li>
                            <li className='list-item'>
                                Second item
                            </li>
                            <li className='list-item'>
                                Third item 
                            </li>
                            <li className='list-item'>
                                Fourth item
                            </li>
                            <li className='list-item disabled'>
                                Fifth item
                            </li>
                        </ol>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    List Group with pills
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='list-group'>
                            <li className='list-item'>
                                <span class='pill pill-primary'>1</span>
                                First item
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-secondary'>2</span>
                                Second item
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-tertiary'>3</span>
                                Third item 
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-success'>4</span>
                                Fourth item
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-danger'>5</span>
                                Fifth item
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-warning'>6</span>
                                Sixth item
                            </li>
                            <li className='list-item'>
                                <span class='pill pill-danger'>7</span>
                                Seventh item
                            </li>
                        </ol>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString4} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    List Group - Active / Disabled
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='list-group'>
                            <li className='list-item primary'>
                                First item
                            </li>
                            <li className='list-item secondary'>
                                Second item
                            </li>
                            <li className='list-item tertiary'>
                                Third item
                            </li>
                            <li className='list-item success'>
                                Fourth item 
                            </li>
                            <li className='list-item danger'>
                                Fifth item
                            </li>
                            <li className='list-item dark'>
                                Sixth item
                            </li>
                            <li className='list-item warning'>
                                Seventh item
                            </li>
                        </ol>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString3} />
                </div>
            </div>
        </div>
    )
}
