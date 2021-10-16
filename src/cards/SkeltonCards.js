import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function SkeltonCards() {
    const codeString1 = 
    `<div class="card card-skeleton-1 m-y-4">
    <div class="image-section"> </div>
    <div class="content-section"> </div>
</div>`

    const codeString2 = 
    `<div class="card card-skeleton-2 m-y-4">
    <div class="image-section"> </div>
    <div class="content-section"> </div>
</div>`

    return (
        <div>
            <Heading title='Basic Cards' 
                content='Useful to show some text to user with great UI'/>
            <h5>Examples:</h5>

            <div className="card card-skeleton-1 m-y-4">
                <div className="image-section"> </div>
                <div className="content-section"> </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Skeleton Card-1: (Card Header)
                </div>
                <div className="card-body">
                    <p>Card Skeleton for image-card version1</p>
                    <hr className='m-y-4' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card card-skeleton-2 m-y-4">
                <div className="image-section"> </div>
                <div className="content-section"> </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Skeleton Card-2: (Card Header)
                </div>
                <div className="card-body">
                    <p>Card Skeleton for image-card version1</p>
                    <hr className='m-y-4' />
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
