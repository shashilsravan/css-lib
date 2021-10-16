import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Typography() {
    const codeString1 = 
    `<div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</div>`

    const codeString2 = `<div>
    <p>
        Normal paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <p class="text-light">
        text-light paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
</div>
    `

    const codeString3 = `<div>
    <h1 class='fw-thin'>Heading 1</h1>
    <h2 class='fw-thin'>Heading 2</h2>
    <h3 class='fw-thin'>Heading 3</h3>
    <h4 class='fw-thin'>Heading 4</h4>
    <h5 class='fw-thin'>Heading 5</h5>
    <h6 class='fw-thin'>Heading 6</h6>
</div>
    `
    return (
        <div>
            <Heading title='Typography' 
                content='Typography used in website'/>

            <div className="card m-y-6">
                <div className="card-header">
                    Headings
                </div>
                <div className="card-body">
                    <div>
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                    </div>
                    <hr className='m-y-6' />

                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>

            <hr />

            <div className="card m-y-6">
                <div className="card-header">
                    Paragraphs
                </div>
                <div className="card-body">
                    <div>
                        <p>
                            Normal paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="text-light">
                            text-light paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <hr />

            <div className="card m-y-6">
                <div className="card-header">
                    Thin Headings
                </div>
                <div className="card-body">
                    <div>
                        <h1 className='fw-thin'>Heading 1</h1>
                        <h2 className='fw-thin'>Heading 2</h2>
                        <h3 className='fw-thin'>Heading 3</h3>
                        <h4 className='fw-thin'>Heading 4</h4>
                        <h5 className='fw-thin'>Heading 5</h5>
                        <h6 className='fw-thin'>Heading 6</h6>
                    </div>
                    <hr className='m-y-6' />

                    <CodeContainer css codeString={codeString3} />
                </div>
            </div>
        </div>
    )
}
