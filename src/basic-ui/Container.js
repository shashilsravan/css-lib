import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Container() {
    const codeString1 = `<div class="jumbo-container bg-tertiary">
    ........
</div>`
    return (
        <div>
            <Heading title='Containers' 
                content='Useful to place content'/>
            
            <div className="jumbo-container bg-tertiary brick2 m-t-4">
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Container
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <p>Code for above example</p>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>
        </div>
    )
}
