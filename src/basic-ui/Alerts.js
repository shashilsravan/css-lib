import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Alerts() {
    const codeString1 = 
    `<div class='alert alert-primary'>
    This is a Primary alert
</div>

<div class='alert alert-secondary'>
    This is a Secondary alert
</div>

<div class='alert alert-tertiary'>
    This is a Tertiary alert
</div>

<div class='alert alert-success'>
    This is a Success alert
</div>

<div class='alert alert-danger'>
    This is a Danger alert
</div>

<div class='alert alert-warning'>
    This is a warning alert
</div>

<div class='alert alert-dark'>
    This is a dark alert
</div>`

    const codeString2 = 
    `<div class='alert alert-primary-outlined'>
    This is a Primary alert
</div>

<div class='alert alert-secondary-outlined'>
    This is a Secondary alert
</div>

<div class='alert alert-tertiary-outlined'>
    This is a Tertiary alert
</div>

<div class='alert alert-success-outlined'>
    This is a Success alert
</div>

<div class='alert alert-danger-outlined'>
    This is a Danger alert
</div>

<div class='alert alert-warning-outlined'>
    This is a warning alert
</div>

<div class='alert alert-dark-outlined'>
    This is a dark alert
</div>`

    return (
        <div>
            <Heading title='Alerts' 
                content='Useful to show some text to user with effects'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Alert themes
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <div className='alert alert-primary'>
                            This is a Primary alert
                        </div>

                        <div className='alert alert-secondary'>
                            This is a Secondary alert
                        </div>

                        <div className='alert alert-tertiary'>
                            This is a Tertiary alert
                        </div>

                        <div className='alert alert-success'>
                            This is a Success alert
                        </div>

                        <div className='alert alert-danger'>
                            This is a Danger alert
                        </div>

                        <div className='alert alert-warning'>
                            This is a warning alert
                        </div>

                        <div className='alert alert-dark'>
                            This is a dark alert
                        </div>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Alert themes Outlined
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <div className='alert alert-primary-outlined'>
                            This is a Primary alert
                        </div>

                        <div className='alert alert-secondary-outlined'>
                            This is a Secondary alert
                        </div>

                        <div className='alert alert-tertiary-outlined'>
                            This is a Tertiary alert
                        </div>

                        <div className='alert alert-success-outlined'>
                            This is a Success alert
                        </div>

                        <div className='alert alert-danger-outlined'>
                            This is a Danger alert
                        </div>

                        <div className='alert alert-warning-outlined'>
                            This is a warning alert
                        </div>

                        <div className='alert alert-dark-outlined'>
                            This is a dark alert
                        </div>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
