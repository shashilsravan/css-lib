import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BoxShadows() {
    const codeString1 = 
    `<div class="shadow p-4 m-x-6">
    No Shadow
</div>

<div class="shadow shadow-small p-4 m-x-6">
    Small Shadow
</div>

<div class="shadow shadow-medium p-4 m-x-6">
    Medium Shadow
</div>

<div class="shadow shadow-large p-4 m-x-6">
    Large Shadow
</div>`
    return (
        <div>
            <Heading title='Box Shadows' 
                content='Useful to apply shadow effect'/>
            <h5>Examples:</h5>
            <div className="card w-100 m-y-6">
                <div className="card-header">
                    box shadow examples
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center p-y-6">
                        <div className="shadow p-4 m-x-6">
                            No Shadow
                        </div>

                        <div className="shadow shadow-small p-4 m-x-6">
                            Small Shadow
                        </div>

                        <div className="shadow shadow-medium p-4 m-x-6">
                            Medium Shadow
                        </div>

                        <div className="shadow shadow-large p-4 m-x-6">
                            Large Shadow
                        </div>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>
        </div>
    )
}
