import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function CSSVars() {
    const codeString1 = 
    `:root {
  --jumbo-blue: #0d6efd;
  --jumbo-indigo: #6610f2;
  --jumbo-purple: #6f42c1;
  --jumbo-pink: #d63384;
  --jumbo-red: #dc3545;
  --jumbo-orange: #fd7e14;
  --jumbo-yellow: #ffc107;
  --jumbo-green: #198754;
  --jumbo-teal: #20c997;
  --jumbo-cyan: #0dcaf0;
  --jumbo-white: #fff;
  --jumbo-gray: #6c757d;
  --jumbo-gray-dark: #343a40;
  --jumbo-primary: #0d6efd;
  --jumbo-secondary: #6c757d;
  --jumbo-success: #198754;
  --jumbo-info: #0dcaf0;
  --jumbo-warning: #ffc107;
  --jumbo-danger: #dc3545;
  --jumbo-light: #f8f9fa;
  --jumbo-dark: #212529;
  --jumbo-table-bg: transparent;
  --jumbo-table-accent-bg: transparent;
  --jumbo-table-striped-color: #212529;
  --jumbo-table-striped-bg: rgba(0, 0, 0, 0.05);
  --jumbo-table-active-color: #212529;
  --jumbo-table-active-bg: rgba(0, 0, 0, 0.1);
  --jumbo-table-hover-color: #212529;
  --jumbo-table-hover-bg: rgba(0, 0, 0, 0.075);
  --jumbo-gradient: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0)
  );
  --jumbo-primary-color: #7f0799;
  --jumbo-secondary-color: #2b9eb3;
  --jumbo-tertiary-color: #dbd5b5;
  --jumbo-danger-color: #f8333c;
  --jumbo-warning-color: #fcab10;
  --jumbo-success-color: #44af69;
  --jumbo-dark-color: #292e1e;
  --jumbo-white-color: #fef;
}`
    const codeString2 = `.bg-primary {
  background: var(--jumbo-primary-color);
  color: var(--jumbo-white);
}`
    return (
        <div>
            <Heading title='CSS Vars' 
                content='CSS root variables used in website'/>

            <div className="card m-y-6">
                <div className="card-header">
                    Root variables
                </div>
                <div className="card-body">
                    <div className="dflex flex-wrap">
                        <p>
                            Here are the variables we include (note that the :root is required) 
                            that can be accessed anywhere Jumbo CSS is loaded.
                        </p>
                    </div>
                    <hr className='m-y-6' />

                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Example Usage
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
