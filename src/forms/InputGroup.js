import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function InputGroup() {
    const codeString1 = 
    `<div class="jumbo-form">
    <div class="inp-grp right">
        <input type="text" placeholder='search value'
            class="jumbo-form-control" />
        <button class='btn btn-success'>
            Search
        </button>
    </div>

    <div class="inp-grp left">
        <span class='btn btn-secondary'>
            https://
        </span>
        <input type="text" placeholder='enter URL'
            class="jumbo-form-control" />
    </div>

    <div class="inp-grp middle">
        <input type="text" placeholder='your name'
            class="jumbo-form-control" />
        <span class='btn btn-dark'>
            @
        </span>
        <input type="text" placeholder='domain.com'
            class="jumbo-form-control" />
    </div>

    <div class="inp-grp left">
        <span class='btn btn-primary'>
            With textarea
        </span>
        <textarea rows='3' placeholder='domain.com'
            class="jumbo-form-control" />
    </div>
</div>`
    return (
        <div>
            <Heading title='Inuput Groups' 
                content='Useful to interact with user for his inputs'/>
            <h5>Examples:</h5>

            <div className="card m-y-6">
                <div className="card-header">
                    Inuput Groups Examples
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <div className="inp-grp right m-b-4">
                            <input type="text" placeholder='search value'
                                className="jumbo-form-control" />
                            <button className='btn btn-success'>
                                Search
                            </button>
                        </div>

                        <div className="inp-grp left m-b-4">
                            <span className='btn btn-secondary'>
                                https://
                            </span>
                            <input type="text" placeholder='enter URL'
                                className="jumbo-form-control" />
                        </div>

                        <div className="inp-grp middle m-b-4">
                            <input type="text" placeholder='your name'
                                className="jumbo-form-control" />
                            <span className='btn btn-dark'>
                                @
                            </span>
                            <input type="text" placeholder='domain.com'
                                className="jumbo-form-control" />
                        </div>

                        <div className="inp-grp left m-b-4">
                            <span className='btn btn-primary'>
                                With textarea
                            </span>
                            <textarea rows='3' placeholder='domain.com'
                                className="jumbo-form-control" />
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>
        </div>
    )
}
