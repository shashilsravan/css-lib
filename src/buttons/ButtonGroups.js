import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function ButtonGroups() {
    const codeString1 = 
    `<div class="button-group m-y-3">
    <button class="btn btn-primary">
        Left
    </button>
    <button class="btn btn-primary">
        Middle
    </button>
    <button class="btn btn-primary">
        Right
    </button>
</div>

<div class="button-group m-y-3">
    <button class="btn btn-success">
        Left
    </button>
    <button class="btn btn-success">
        Middle
    </button>
    <button class="btn btn-success">
        Right
    </button>
</div>`

    const codeString2 = 
    `<div class="button-group m-y-3">
    <button class="btn btn-success">
        Left
    </button>
    <button class="btn btn-primary">
        Middle
    </button>
    <button class="btn btn-danger">
        Right
    </button>
</div>

<div class="button-group m-y-3">
    <button class="btn btn-primary">
        Left
    </button>
    <button class="btn btn-secondary">
        Middle
    </button>
    <button class="btn btn-warning">
        Right
    </button>
</div>`

    const codeString3 =
    `<div class="button-group m-y-3">
    <button class="btn btn-success-outlined">
        Left
    </button>
    <button class="btn btn-primary-outlined">
        Middle
    </button>
    <button class="btn btn-danger-outlined">
        Right
    </button>
</div>`

    return (
        <div>
            <Heading title='Button groups' 
                content='Useful to interact with users to clicks'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Basic button group
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <div className="button-group m-y-3">
                            <button className="btn btn-primary">
                                Left
                            </button>
                            <button className="btn btn-primary">
                                Middle
                            </button>
                            <button className="btn btn-primary">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-secondary">
                                Left
                            </button>
                            <button className="btn btn-secondary">
                                Middle
                            </button>
                            <button className="btn btn-secondary">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-success">
                                Left
                            </button>
                            <button className="btn btn-success">
                                Middle
                            </button>
                            <button className="btn btn-success">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-danger">
                                Left
                            </button>
                            <button className="btn btn-danger">
                                Middle
                            </button>
                            <button className="btn btn-danger">
                                Right
                            </button>
                        </div>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Mixed button group
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <div className="button-group m-y-3">
                            <button className="btn btn-success">
                                Left
                            </button>
                            <button className="btn btn-primary">
                                Middle
                            </button>
                            <button className="btn btn-danger">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-primary">
                                Left
                            </button>
                            <button className="btn btn-secondary">
                                Middle
                            </button>
                            <button className="btn btn-warning">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-tertiary">
                                Left
                            </button>
                            <button className="btn btn-danger">
                                Middle
                            </button>
                            <button className="btn btn-tertiary">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-success">
                                Left
                            </button>
                            <button className="btn btn-primary">
                                Middle
                            </button>
                            <button className="btn btn-success">
                                Right
                            </button>
                        </div>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Outlined button group
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <div className="button-group m-y-3">
                            <button className="btn btn-success-outlined">
                                Left
                            </button>
                            <button className="btn btn-primary-outlined">
                                Middle
                            </button>
                            <button className="btn btn-danger-outlined">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-primary-outlined">
                                Left
                            </button>
                            <button className="btn btn-secondary-outlined">
                                Middle
                            </button>
                            <button className="btn btn-warning-outlined">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-dark-outlined">
                                Left
                            </button>
                            <button className="btn btn-danger-outlined">
                                Middle
                            </button>
                            <button className="btn btn-dark-outlined">
                                Right
                            </button>
                        </div>

                        <div className="button-group m-y-3">
                            <button className="btn btn-success-outlined">
                                Left
                            </button>
                            <button className="btn btn-primary-outlined">
                                Middle
                            </button>
                            <button className="btn btn-success-outlined">
                                Right
                            </button>
                        </div>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString3} />
                </div>
            </div>
        </div>
    )
}
