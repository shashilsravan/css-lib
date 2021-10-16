import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BreadCrumb() {
    const codeString1 = 
    `<ol class='jumbo-breadcrumb'>
    <li class="each-item">
        <a href="#">C:</a>
    </li>
    <li class="each-item">
        <a href="#">Users</a>
    </li>
    <li class="each-item active" aria-current="page">
        Sravan
    </li>
    </ol>

    <ol class='jumbo-breadcrumb breadcrumb-2'>
    <li class="each-item">
        <a href="#">Desktop</a>
    </li>
    <li class="each-item">
        <a href="#">Projects</a>
    </li>
    <li class="each-item active" aria-current="page">
        JumboCSS
    </li>
</ol>`

    const codeString2 = 
    `<ol class="jumbo-breadcrumb breadcrumb-primary">
    <!-- Primary variant  -->
</ol>
<ol class="jumbo-breadcrumb breadcrumb-success">
    <!-- Success variant  -->
</ol>
<ol class="jumbo-breadcrumb breadcrumb-danger">
    <!-- Danger variant  -->
</ol>
<ol class="jumbo-breadcrumb breadcrumb-dark">
    <!-- Dark variant  -->
</ol>`
    return (
        <div>
            <Heading title='Breadcrumb' 
                content='Useful to show some current page hierarchy with in a navigation'/>
            <h5>Examples:</h5>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Basic Breadcrumb
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='jumbo-breadcrumb'>
                            <li className="each-item">
                                <a href="#">C:</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Users</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                Sravan
                            </li>
                        </ol>

                        <ol className='jumbo-breadcrumb breadcrumb-2'>
                            <li className="each-item">
                                <a href="#">Desktop</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                JumboCSS
                            </li>
                        </ol>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Breadcrumb variants
                </div>
                <div className="card-body">
                    <div className="align-center">
                        <ol className='jumbo-breadcrumb breadcrumb-primary'>
                            <li className="each-item">
                                <a href="#">C:</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Users</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                Sravan
                            </li>
                        </ol>

                        <ol className='jumbo-breadcrumb breadcrumb-success'>
                            <li className="each-item">
                                <a href="#">Desktop</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                JumboCSS
                            </li>
                        </ol>

                        <ol className='jumbo-breadcrumb breadcrumb-danger'>
                            <li className="each-item">
                                <a href="#">Desktop</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                JumboCSS
                            </li>
                        </ol>

                        <ol className='jumbo-breadcrumb breadcrumb-dark'>
                            <li className="each-item">
                                <a href="#">Desktop</a>
                            </li>
                            <li className="each-item">
                                <a href="#">Projects</a>
                            </li>
                            <li className="each-item active" aria-current="page">
                                JumboCSS
                            </li>
                        </ol>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
