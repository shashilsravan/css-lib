import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function ColouredCards() {
    const codeString1 = 
    `<div class="card card-primary">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`
    
    const codeString2 = 
    `<div class="card card-secondary">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString3 = 
    `<div class="card card-success">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString4 = 
    `<div class="card card-tertiary">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString5 = 
    `<div class="card card-danger">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString6 = 
    `<div class="card card-warning">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString7 = 
    `<div class="card card-dark">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`


    return (
        <div>
            <Heading title='Coloured Cards' 
                content='Useful to show some text to user with great UI'/>
            <h5>Examples:</h5>

            <div className="card card-primary m-y-6">
                <div className="card-header">
                    Primary Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>
            <div className="card card-secondary m-y-6">
                <div className="card-header">
                    Secondary Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
            <div className="card card-success m-y-6">
                <div className="card-header">
                    Success Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString3} />
                </div>
            </div>
            <div className="card card-tertiary m-y-6">
                <div className="card-header">
                    Tertiary Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString4} />
                </div>
            </div>
            <div className="card card-danger m-y-6">
                <div className="card-header">
                    Danger Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString5} />
                </div>
            </div>
            <div className="card card-warning m-y-6">
                <div className="card-header">
                    Warning Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString6} />
                </div>
            </div>
            <div className="card card-dark m-y-6">
                <div className="card-header">
                    Dark Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString7} />
                </div>
            </div>
        </div>
    )
}
