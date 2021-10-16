import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BasicForm() {
    const codeString1 = 
    `<div class="jumbo-form">
    <div class="jumbo-form-group">
        <label>
            Username:
        </label>
        <input type="text" class="jumbo-form-control"
            placeholder='John Doe'></input>
    </div>
    <div class="jumbo-form-group">
        <label>
            Email id:
        </label>
        <input type="email" class="jumbo-form-control"
            placeholder='johndoe@gmail.com'></input>
    </div>
    <div class="jumbo-form-group">
        <label>
            Select one:
        </label>
        <select class="jumbo-form-control">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </div>
    <div class="jumbo-form-group">
        <label>
            Enter Address:
        </label>
        <textarea rows="4" placeholder='Enter your address details' 
            class="jumbo-form-control"></textarea>
    </div>

    <div class="dflex m-t-4">
        <button class="btn btn-primary m-r-2">
            Submit
        </button>
        <button class="btn m-r-2">
            Cancel
        </button>
    </div>
</div>
    `

    const codeString2 = 
    `<div class="jumbo-form">
    <div class="jumbo-form-group">
        <label>
            Username:
        </label>
        <input type="text" class="jumbo-form-control fg-flat"
            placeholder='John Doe'></input>
    </div>
    <div class="jumbo-form-group">
        <label>
            Email id:
        </label>
        <input type="email" class="jumbo-form-control fg-rounded"
            placeholder='johndoe@gmail.com'></input>
    </div>

    <div class="dflex m-t-4">
        <button class="btn btn-primary m-r-2">
            Submit
        </button>
        <button class="btn m-r-2">
            Cancel
        </button>
    </div>
</div>
    `

    return (
        <div>
            <Heading title='Basic Forms' 
                content='Useful to interact with user for his inputs'/>
            <h5>Examples:</h5>

            <div className="card m-y-6">
                <div className="card-header">
                    Basic Forms
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Username:
                            </label>
                            <input type="text" className="jumbo-form-control" 
                                placeholder='John Doe' />
                        </div>
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Email id:
                            </label>
                            <input type="email" className="jumbo-form-control" 
                                placeholder='johndoe@gmail.com' />
                        </div>
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Select one:
                            </label>
                            <select className="jumbo-form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Enter Address:
                            </label>
                            <textarea rows="4" placeholder='Enter your address details'
                                className="jumbo-form-control"></textarea>
                        </div>

                        <div className="dflex m-t-4">
                            <button className="btn btn-primary m-r-2">
                                Submit
                            </button>
                            <button className="btn m-r-2">
                                Cancel
                            </button>
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Form control variants
                </div>
                <div className="card-body">
                    <div className="jumbo-form">
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Flat Style:
                            </label>
                            <input type="text" className="jumbo-form-control fg-flat" 
                                placeholder='Use .fg-flat' />
                        </div>
                        <div className="jumbo-form-group">
                            <label htmlFor="">
                                Rounded Style:
                            </label>
                            <input type="email" className="jumbo-form-control fg-rounded" 
                                placeholder='Use .fg-rounded' />
                        </div>

                        <div className="dflex m-t-4">
                            <button className="btn btn-primary m-r-2">
                                Submit
                            </button>
                            <button className="btn m-r-2">
                                Cancel
                            </button>
                        </div>
                    </div>
                    
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
