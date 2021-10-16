import React, {useState} from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function CheckRadio() {
    const [check, setCheck] = useState(true)
    const [check2, setCheck2] = useState(true)
    const codeString1 = 
    `<div class="jumbo-form-check">
    <label class='jumbo-check-label'>
        Checked
        <input type="checkbox" class='jumbo-check-input'>
        <span class="checkmark"></span>
    </label>
</div>
<div class="jumbo-form-check">
    <label class='jumbo-check-label'>
        Unchecked
        <input type="checkbox" class='jumbo-check-input'>
        <span class="checkmark"></span>
    </label>
</div>

<!-- -->

<div class="jumbo-form-radio">
    <label class="jumbo-radio-label">One
        <input type="radio" name="radio" class='jumbo-radio-input'>
        <span class="checkmark2"></span>
    </label>
    <label class="jumbo-radio-label">Two
        <input type="radio" name="radio" class='jumbo-radio-input'>
        <span class="checkmark2"></span>
    </label>
    <label class="jumbo-radio-label">Three
        <input type="radio" name="radio" class='jumbo-radio-input'>
        <span class="checkmark2"></span>
    </label>
    <label class="jumbo-radio-label">Four
        <input type="radio" name="radio" class='jumbo-radio-input'>
        <span class="checkmark2"></span>
    </label>
</div>`

    const codeString2 = 
    `<input type="checkbox" class='jumbo-check-input check-success' />
<input type="checkbox" class='jumbo-check-input check-danger' />
<input type="checkbox" class='jumbo-check-input check-dark' />
<input type="checkbox" class='jumbo-check-input check-secondary' />

<!-- -->

<input type="radio" name="radio" class='jumbo-radio-input radio-success'/>
<input type="radio" name="radio" class='jumbo-radio-input radio-danger'/>
<input type="radio" name="radio" class='jumbo-radio-input radio-dark'/>
<input type="radio" name="radio" class='jumbo-radio-input radio-secondary'/>`

    return (
        <div>
            <Heading title='Checks & Radios' 
                content='Useful to interact with user for his inputs'/>
            <h5>Examples:</h5>

            <div className="card m-y-6">
                <div className="card-header">
                    Check boxes
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <p>Check boxes: </p>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Checked
                                <input type="checkbox" className='jumbo-check-input' checked={check} 
                                    onChange={() => setCheck(curr => !curr)}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Unchecked
                                <input type="checkbox" className='jumbo-check-input' />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <p className='m-t-4'>Radio button: </p>
                        <div className="jumbo-form-radio">
                            <label className="jumbo-radio-label">One
                                <input type="radio" name="radio" className='jumbo-radio-input' />
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Two
                                <input type="radio" name="radio" className='jumbo-radio-input'/>
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Three
                                <input type="radio" name="radio" className='jumbo-radio-input'/>
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Four
                                <input type="radio" name="radio" className='jumbo-radio-input'/>
                                <span className="checkmark2"></span>
                            </label>
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Variants
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <p>Check boxes: </p>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Success
                                <input type="checkbox" className='jumbo-check-input check-success' checked={check2} 
                                    onChange={() => setCheck2(curr => !curr)}/>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Danger
                                <input type="checkbox" className='jumbo-check-input check-danger' />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Dark
                                <input type="checkbox" className='jumbo-check-input check-dark' />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="jumbo-form-check">
                            <label className='jumbo-check-label'>
                                Secondary
                                <input type="checkbox" className='jumbo-check-input check-secondary' />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        <p className='m-t-4'>Radio button: </p>
                        <div className="jumbo-form-radio">
                            <label className="jumbo-radio-label">Success
                                <input type="radio" name="radio" className='jumbo-radio-input radio-success' />
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Danger
                                <input type="radio" name="radio" className='jumbo-radio-input radio-danger'/>
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Dark
                                <input type="radio" name="radio" className='jumbo-radio-input radio-dark'/>
                                <span className="checkmark2"></span>
                            </label>
                            <label className="jumbo-radio-label">Secondary
                                <input type="radio" name="radio" className='jumbo-radio-input radio-secondary'/>
                                <span className="checkmark2"></span>
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
