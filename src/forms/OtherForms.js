import React, {useState} from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function OtherForms() {
    const [check, setCheck] = useState(false)
    const [check2, setCheck2] = useState(false)
    const codeString1 = 
    `<div class="jumbo-form-group">
    <label class="jumbo-switch">
        <input class='switch-input' type="checkbox" name='switch' />
        <span class="jumbo-slider"></span>
    </label>
</div>

<div class="jumbo-form-group">
    <label class="jumbo-switch">
        <input class='switch-input' type="checkbox" name='switch' />
        <span class="jumbo-slider rounded"></span>
    </label>
</div>`
    const codeString2 = 
    `<div class="jumbo-form">
    <div class="jumbo-form-file">
        <input type="file" class="d-none" id='file1' />
        <label htmlFor="file1" class='btn btn-primary btn-sm'>
            File upload
        </label>
    </div>
</div>`
    return (
        <div>
            <Heading title='Other form elements' 
                content='Useful to interact with user for his inputs'/>
            <h5>Examples:</h5>

            <div className="card m-y-6">
                <div className="card-header">
                    Switch
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <div className="jumbo-form-group">
                            <label className="jumbo-switch">
                                <input className='switch-input' type="checkbox" 
                                    checked={check} onChange={() => setCheck(curr => !curr)}
                                    name='switch' />
                                <span className="jumbo-slider"></span>
                            </label>
                            <p>{check ? 'Lights on' : 'Lights off'}</p>
                        </div>

                        <div className="jumbo-form-group">
                            <label className="jumbo-switch">
                                <input className='switch-input' type="checkbox" 
                                    checked={check2} onChange={() => setCheck2(curr => !curr)}
                                    name='switch' />
                                <span className="jumbo-slider rounded"></span>
                            </label>
                            <p>{check2 ? 'Lights on' : 'Lights off'}</p>
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    File upload
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <div className="jumbo-form-file">
                            <input type="file" className="d-none" id='file1' />
                            <label htmlFor="file1" className='btn btn-primary btn-sm'>
                                File upload
                            </label>
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
