import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function FlatButtons() {
    const codeString1 = 
    `<button class="btn btn-square btn-primary m-2">
    primary
</button>
<button class="btn btn-square btn-secondary m-2">
    secondary
</button>
<button class="btn btn-square btn-tertiary m-2">
    tertiary
</button>
<button class="btn btn-square btn-success m-2">
    success
</button>
<button class="btn btn-square btn-danger m-2">
    danger
</button>
<button class="btn btn-square btn-warning m-2">
    warning
</button>
<button class="btn btn-square btn-dark m-2">
    dark
</button>`

    const codeString2 = 
    `<button class="btn btn-square btn-primary-outlined m-2">
    primary
</button>
<button class="btn btn-square btn-secondary-outlined m-2">
    secondary
</button>
<button class="btn btn-square btn-tertiary-outlined m-2">
    tertiary
</button>
<button class="btn btn-square btn-success-outlined m-2">
    success
</button>
<button class="btn btn-square btn-danger-outlined m-2">
    danger
</button>
<button class="btn btn-square btn-warning-outlined m-2">
    warning
</button>
<button class="btn btn-square btn-dark-outlined m-2">
    dark
</button>`
    return (
        <div>
            <Heading title='Outlined Buttons' 
                content='Useful to interact with users to clicks'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Flat buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-primary btn-square m-2">
                            primary
                        </button>
                        <button className="btn btn-secondary btn-square m-2">
                            secondary
                        </button>
                        <button className="btn btn-tertiary btn-square m-2">
                            tertiary
                        </button>
                        <button className="btn btn-success btn-square m-2">
                            success
                        </button>
                        <button className="btn btn-danger btn-square m-2">
                            danger
                        </button>
                        <button className="btn btn-warning btn-square m-2">
                            warning
                        </button>
                        <button className="btn btn-dark btn-square m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Flat Outlined buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-primary-outlined btn-square m-2">
                            primary
                        </button>
                        <button className="btn btn-secondary-outlined btn-square m-2">
                            secondary
                        </button>
                        <button className="btn btn-tertiary-outlined btn-square m-2">
                            tertiary
                        </button>
                        <button className="btn btn-success-outlined btn-square m-2">
                            success
                        </button>
                        <button className="btn btn-danger-outlined btn-square m-2">
                            danger
                        </button>
                        <button className="btn btn-warning-outlined btn-square m-2">
                            warning
                        </button>
                        <button className="btn btn-dark-outlined btn-square m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
