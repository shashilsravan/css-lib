import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function OutlinedButtons() {
    const codeString1 = 
    `<button class="btn btn-primary-outlined m-2">
    primary
</button>
<button class="btn btn-secondary-outlined m-2">
    secondary
</button>
<button class="btn btn-tertiary-outlined m-2">
    tertiary
</button>
<button class="btn btn-success-outlined m-2">
    success
</button>
<button class="btn btn-danger-outlined m-2">
    danger
</button>
<button class="btn btn-warning-outlined m-2">
    warning
</button>
<button class="btn btn-dark-outlined m-2">
    dark
</button>`

    const codeString2 = 
    `<button class="btn btn-primary btn-rounded m-2">
    primary
</button>
<button class="btn btn-secondary btn-rounded m-2">
    secondary
</button>
<button class="btn btn-tertiary btn-rounded m-2">
    tertiary
</button>
<button class="btn btn-success btn-rounded m-2">
    success
</button>
<button class="btn btn-danger btn-rounded m-2">
    danger
</button>
<button class="btn btn-warning btn-rounded m-2">
    warning
</button>
<button class="btn btn-dark btn-rounded m-2">
    dark
</button>`

    return (
        <div>
            <Heading title='Outlined & Rounded' 
                content='Useful to interact with users to clicks'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Outlined Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-primary-outlined m-2">
                            primary
                        </button>
                        <button className="btn btn-secondary-outlined m-2">
                            secondary
                        </button>
                        <button className="btn btn-tertiary-outlined m-2">
                            tertiary
                        </button>
                        <button className="btn btn-success-outlined m-2">
                            success
                        </button>
                        <button className="btn btn-danger-outlined m-2">
                            danger
                        </button>
                        <button className="btn btn-warning-outlined m-2">
                            warning
                        </button>
                        <button className="btn btn-dark-outlined m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6"> 
                <div className="card-header">
                    Rounded Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-rounded btn-primary m-2">
                            primary
                        </button>
                        <button className="btn btn-rounded btn-secondary m-2">
                            secondary
                        </button>
                        <button className="btn btn-rounded btn-tertiary m-2">
                            tertiary
                        </button>
                        <button className="btn btn-rounded btn-success m-2">
                            success
                        </button>
                        <button className="btn btn-rounded btn-danger m-2">
                            danger
                        </button>
                        <button className="btn btn-rounded btn-warning m-2">
                            warning
                        </button>
                        <button className="btn btn-rounded btn-dark m-2">
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
