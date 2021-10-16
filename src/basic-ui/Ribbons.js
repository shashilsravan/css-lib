import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Ribbons() {
    const codeString1 = 
    `<div class="card m-y-5 p-relative" style="width: 300px">
    <div class="card-header">
        <div class="ribbon var-1 p-absolute">
            John Doe
        </div>
    </div>
    <p class='card-body'>...</p>
</div>`

    const codeString2 = 
    `<!-- Just add ribbon-* -->
<div class="ribbon ribbon-primary var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-secondary var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-success var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-warning var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-dark var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-danger var-1 p-absolute">
    John Doe
</div>`

    const codeString3 = 
    `<!-- Just add ribbon-* -->
<div class="ribbon ribbon-left var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-right var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-top-left var-1 p-absolute">
    John Doe
</div>
<div class="ribbon ribbon-top-bottom var-1 p-absolute">
    John Doe
</div>`
    
    return (
        <div>
            <Heading title='Ribbons' 
                content='Useful for Labeling a component in a different way'/>
            <h5>Basic Ribbons:</h5>

            <div className="card m-y-5 p-relative" style={{width: 300}}>
                <div className="card-header">
                    <div className="ribbon var-1 p-absolute">
                        John Doe
                    </div>
                </div>
                <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Example1
                </div>
                <div className="card-body">
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <hr />

            <div className="dflex flex-wrap">
                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-primary var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-secondary var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-success var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-warning var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-dark var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-danger var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Color Variants
                </div>
                <div className="card-body">
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <hr />

            <div className="dflex flex-wrap">
                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-left var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-success ribbon-right var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-dark ribbon-left var-1 p-absolute">
                            John Doe
                        </div>
                        <div className="ribbon ribbon-secondary ribbon-right var-1 p-absolute">
                            John Doe
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-danger ribbon-top-left var-1 p-absolute">
                            John
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-secondary ribbon-top-right var-1 p-absolute">
                            John
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>

                <div className="card m-5 p-relative" style={{width: 300}}>
                    <div className="card-header">
                        <div className="ribbon ribbon-success ribbon-top-left var-1 p-absolute">
                            John
                        </div>
                        <div className="ribbon ribbon-danger ribbon-top-right var-1 p-absolute">
                            Jane
                        </div>
                    </div>
                    <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Placing variants
                </div>
                <div className="card-body">
                    <CodeContainer codeString={codeString3} />
                </div>
            </div>

            <div className="card m-y-5 p-relative" style={{width: 300}}>
                <div className="card-header">
                    <div className="ribbon var-2 p-absolute">
                        John Doe
                    </div>
                </div>
                <p className='card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    dolorem quas suscipit eveniet iusto eligendi harum ipsam possimus!</p>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Varinat 2
                </div>
                <div className="card-body">
                    <p>Only for left placement this variant is added, more will added soon</p>
                    <hr className='m-y-4' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <hr />
        </div>
    )
}
