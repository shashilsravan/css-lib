import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BasicButtons() {
    const codeString1 = 
    `<button class="btn btn-primary m-2">
    primary
</button>
<button class="btn btn-secondary m-2">
    secondary
</button>
<button class="btn btn-tertiary m-2">
    tertiary
</button>
<button class="btn btn-success m-2">
    success
</button>
<button class="btn btn-danger m-2">
    danger
</button>
<button class="btn btn-warning m-2">
    warning
</button>
<button class="btn btn-dark m-2">
    dark
</button>`

    const codeString2 = 
    `<button class="btn btn-lg btn-primary m-2">
    primary
</button>
<button class="btn btn-lg btn-secondary m-2">
    secondary
</button>
<button class="btn btn-lg btn-tertiary m-2">
    tertiary
</button>
<button class="btn btn-lg btn-success m-2">
    success
</button>
<button class="btn btn-lg btn-danger m-2">
    danger
</button>
<button class="btn btn-lg btn-warning m-2">
    warning
</button>
<button class="btn btn-lg btn-dark m-2">
    dark
</button>`

        const codeString3 = 
    `<button class="btn btn-sm btn-primary m-2">
    primary
</button>
<button class="btn btn-sm btn-secondary m-2">
    secondary
</button>
<button class="btn btn-sm btn-tertiary m-2">
    tertiary
</button>
<button class="btn btn-sm btn-success m-2">
    success
</button>
<button class="btn btn-sm btn-danger m-2">
    danger
</button>
<button class="btn btn-sm btn-warning m-2">
    warning
</button>
<button class="btn btn-sm btn-dark m-2">
    dark
</button>`

    const codeString4 = 
    `<button class="btn btn-disabled btn-primary m-2">
    primary
</button>
<button class="btn btn-disabled btn-secondary m-2">
    secondary
</button>
<button class="btn btn-disabled btn-tertiary m-2">
    tertiary
</button>
<button class="btn btn-disabled btn-success m-2">
    success
</button>
<button class="btn btn-disabled btn-danger m-2">
    danger
</button>
<button class="btn btn-disabled btn-warning m-2">
    warning
</button>
<button class="btn btn-disabled btn-dark m-2">
    dark
</button>`

    return (
        <div>
            <Heading title='Basic Buttons' 
                content='Useful to interact with users to clicks'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Basic Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-primary m-2">
                            primary
                        </button>
                        <button className="btn btn-secondary m-2">
                            secondary
                        </button>
                        <button className="btn btn-tertiary m-2">
                            tertiary
                        </button>
                        <button className="btn btn-success m-2">
                            success
                        </button>
                        <button className="btn btn-danger m-2">
                            danger
                        </button>
                        <button className="btn btn-warning m-2">
                            warning
                        </button>
                        <button className="btn btn-dark m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Large Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-lg btn-primary m-2">
                            primary
                        </button>
                        <button className="btn btn-lg btn-secondary m-2">
                            secondary
                        </button>
                        <button className="btn btn-lg btn-tertiary m-2">
                            tertiary
                        </button>
                        <button className="btn btn-lg btn-success m-2">
                            success
                        </button>
                        <button className="btn btn-lg btn-danger m-2">
                            danger
                        </button>
                        <button className="btn btn-lg btn-warning m-2">
                            warning
                        </button>
                        <button className="btn btn-lg btn-dark m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Small Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-sm btn-primary m-2">
                            primary
                        </button>
                        <button className="btn btn-sm btn-secondary m-2">
                            secondary
                        </button>
                        <button className="btn btn-sm btn-tertiary m-2">
                            tertiary
                        </button>
                        <button className="btn btn-sm btn-success m-2">
                            success
                        </button>
                        <button className="btn btn-sm btn-danger m-2">
                            danger
                        </button>
                        <button className="btn btn-sm btn-warning m-2">
                            warning
                        </button>
                        <button className="btn btn-sm btn-dark m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString3} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Disabled Buttons
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <button className="btn btn-disabled btn-primary m-x-2">
                            primary
                        </button>
                        <button className="btn btn-disabled btn-secondary m-2">
                            secondary
                        </button>
                        <button className="btn btn-disabled btn-tertiary m-2">
                            tertiary
                        </button>
                        <button className="btn btn-disabled btn-success m-2">
                            success
                        </button>
                        <button className="btn btn-disabled btn-danger m-2">
                            danger
                        </button>
                        <button className="btn btn-disabled btn-warning m-2">
                            warning
                        </button>
                        <button className="btn btn-disabled btn-dark m-2">
                            dark
                        </button>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString4} />
                </div>
            </div>
        </div>
    )
}
