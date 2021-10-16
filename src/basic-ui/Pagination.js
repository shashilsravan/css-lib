import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function Pagination() {
    const codeString1 = 
    `<ul class="jumbo-pagination">
    <li class="each-page disabled">
        <a href="#" class='page-link'>
            Prev
        </a>
    </li>
    <li class="each-page active">
        <a href="#" class='page-link'>
            1
        </a>
    </li>
    <li class="each-page">
        <a href="#" class='page-link'>
            2
        </a>
    </li>
    <li class="each-page">
        <a href="#" class='page-link'>
            3
        </a>
    </li>
    <li class="each-page">
        <a href="#" class='page-link'>
            Next
        </a>
    </li>
</ul>`

    const codeString2 = 
    `<ul class="jumbo-pagination pagination-lg">
    <!-- Large pagination  -->
</ul>
<ul class="jumbo-pagination">
    <!-- Normal pagination  -->
</ul>
<ul class="jumbo-pagination pagination-sm">
    <!-- Small pagination  -->
</ul>`
    return (
        <div>
            <Heading title='Pagination' 
                content='Useful to show a series of related content exists across multiple pages.'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Pagination
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ul className="jumbo-pagination">
                            <li className="each-page disabled">
                                <a href="#" className='page-link'>
                                    Prev
                                </a>
                            </li>
                            <li className="each-page active">
                                <a href="#" className='page-link'>
                                    1
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    2
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    3
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Pagination sizes
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ul className="jumbo-pagination pagination-lg">
                            <li className="each-page disabled">
                                <a href="#" className='page-link'>
                                    Prev
                                </a>
                            </li>
                            <li className="each-page active">
                                <a href="#" className='page-link'>
                                    1
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    2
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    3
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    Next
                                </a>
                            </li>
                        </ul>

                        <ul className="jumbo-pagination">
                            <li className="each-page disabled">
                                <a href="#" className='page-link'>
                                    Prev
                                </a>
                            </li>
                            <li className="each-page active">
                                <a href="#" className='page-link'>
                                    1
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    2
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    3
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    Next
                                </a>
                            </li>
                        </ul>

                        <ul className="jumbo-pagination pagination-sm">
                            <li className="each-page disabled">
                                <a href="#" className='page-link'>
                                    Prev
                                </a>
                            </li>
                            <li className="each-page active">
                                <a href="#" className='page-link'>
                                    1
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    2
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    3
                                </a>
                            </li>
                            <li className="each-page">
                                <a href="#" className='page-link'>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
