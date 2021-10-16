import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BasicTable() {
    const codeString1 = 
    `<div class="o-x-auto">
    <table class="jumbo-table m-t-4">
        <thead>
            <tr> ... </tr>
        </thead>
        <tbody>
            <tr> ... </tr>
            <tr> ... </tr>
            <tr> ... </tr>
        </tbody>
    </table>
</div>`

    const codeString2 = 
    `<div class="o-x-auto">
    <table class="jumbo-table jumbo-table-striped m-t-4">
        <thead>
            <tr> ... </tr>
        </thead>
        <tbody>
            <tr> ... </tr>
            <tr> ... </tr>
            <tr> ... </tr>
        </tbody>
    </table>
</div>`

    
    return (
        <div>
            <Heading title='Basic Tables' 
                content='Useful to show data in specific way'/>
            <h5>Examples:</h5>

            <div className="o-x-auto">
                <table className="jumbo-table m-t-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>28</td>
                            <td>Facebook</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jane</td>
                            <td>Doe</td>
                            <td>26</td>
                            <td>Amazon</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Adam</td>
                            <td>Smith</td>
                            <td>29</td>
                            <td>Netflix</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Will</td>
                            <td>Brick</td>
                            <td>25</td>
                            <td>Google</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Basic Table
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <p>Code for above example</p>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <hr />

            <div className="o-x-auto">
                <table className="jumbo-table jumbo-table-striped m-t-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John</td>
                            <td>Doe</td>
                            <td>28</td>
                            <td>Facebook</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jane</td>
                            <td>Doe</td>
                            <td>26</td>
                            <td>Amazon</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Adam</td>
                            <td>Smith</td>
                            <td>29</td>
                            <td>Netflix</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Will</td>
                            <td>Brick</td>
                            <td>25</td>
                            <td>Google</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Striped Table
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <p>Code for above example</p>
                    </div>
                    <hr className='m-y-6' />
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
