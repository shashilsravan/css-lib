import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BadgesTags() {
    const codeString1 = 
    `<span class='badge badge-primary'>
    Primary
</span>

<span class='badge badge-secondary'>
    Secondary
</span>

<span class='badge badge-tertiary'>
    Tertiary
</span>

<span class='badge badge-success'>
    Success
</span>

<span class='badge badge-danger'>
    Danger
</span>

<span class='badge badge-warning'>
    Warning
</span>

<span class='badge badge-dark'>
    Dark
</span>`

    const codeString3 = 
    `<span class='badge badge-primary-outlined'>
    Primary
</span>

<span class='badge badge-secondary-outlined'>
    Secondary
</span>

<span class='badge badge-tertiary-outlined'>
    Tertiary
</span>

<span class='badge badge-success-outlined'>
    Success
</span>

<span class='badge badge-danger-outlined'>
    Danger
</span>

<span class='badge badge-warning-outlined'>
    Warning
</span>

<span class='badge badge-dark-outlined'>
    Dark
</span>`

    const codeString2 = 
    `<span class='pill pill-primary'>
    1
</span>

<span class='pill pill-secondary'>
    2
</span>

<span class='pill pill-tertiary'>
    3
</span>

<span class='pill pill-success'>
    4
</span>

<span class='pill pill-danger'>
    5
</span>

<span class='pill pill-warning'>
    6
</span>

<span class='pill pill-dark'>
    7
</span>`

    const codeString4 = 
    `<span class='pill pill-primary-outlined'>
    1
</span>

<span class='pill pill-secondary-outlined'>
    2
</span>

<span class='pill pill-tertiary-outlined'>
    3
</span>

<span class='pill pill-success-outlined'>
    4
</span>

<span class='pill pill-danger-outlined'>
    5
</span>

<span class='pill pill-warning-outlined'>
    6
</span>

<span class='pill pill-dark-outlined'>
    7
</span>`

    return (
        <div>
            <Heading title='Badges & Pills' 
                content='Useful for Labeling a component. Pills are more rounded than badges'/>
            <h5>Examples:</h5>
            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Badges
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        
                        <span className='badge badge-primary'>
                            Primary
                        </span>

                        <span className='badge badge-secondary'>
                            Secondary
                        </span>

                        <span className='badge badge-tertiary'>
                            Tertiary
                        </span>

                        <span className='badge badge-success'>
                            Success
                        </span>

                        <span className='badge badge-danger'>
                            Danger
                        </span>

                        <span className='badge badge-warning'>
                            Warning
                        </span>

                        <span className='badge badge-dark'>
                            Dark
                        </span>

                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Badges Otlined
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        
                        <span className='badge badge-primary-outlined'>
                            Primary
                        </span>

                        <span className='badge badge-secondary-outlined'>
                            Secondary
                        </span>

                        <span className='badge badge-tertiary-outlined'>
                            Tertiary
                        </span>

                        <span className='badge badge-success-outlined'>
                            Success
                        </span>

                        <span className='badge badge-danger-outlined'>
                            Danger
                        </span>

                        <span className='badge badge-warning-outlined'>
                            Warning
                        </span>

                        <span className='badge badge-dark-outlined'>
                            Dark
                        </span>

                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString3} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Pills
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        
                        <span className='pill pill-primary'>
                            1
                        </span>

                        <span className='pill pill-secondary'>
                            2
                        </span>

                        <span className='pill pill-tertiary'>
                            3
                        </span>

                        <span className='pill pill-success'>
                            4
                        </span>

                        <span className='pill pill-danger'>
                            5
                        </span>

                        <span className='pill pill-warning'>
                            6
                        </span>

                        <span className='pill pill-dark'>
                            7
                        </span>

                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Pills Outlined
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        
                        <span className='pill pill-primary-outlined'>
                            1
                        </span>

                        <span className='pill pill-secondary-outlined'>
                            2
                        </span>

                        <span className='pill pill-tertiary-outlined'>
                            3
                        </span>

                        <span className='pill pill-success-outlined'>
                            4
                        </span>

                        <span className='pill pill-danger-outlined'>
                            5
                        </span>

                        <span className='pill pill-warning-outlined'>
                            6
                        </span>

                        <span className='pill pill-dark-outlined'>
                            7
                        </span>

                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
