import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function ContentColors() {
    const codeString1 = `.bg-primary {
  background: var(--jumbo-primary-color);
  color: white;
}
.bg-secondary {
  background: var(--jumbo-secondary-color);
  color: white;
}
.bg-tertiary {
  background: var(--jumbo-tertiary-color);
  color: black;
}
.bg-success {
  background: var(--jumbo-success-color);
  color: white;
}
.bg-danger {
  background: var(--jumbo-danger-color);
  color: white;
}
.bg-warning {
  background: var(--jumbo-warning-color);
  color: white;
}
.bg-dark {
  background: var(--jumbo-dark-color);
  color: white;
}`
    return (
        <div>
            <Heading title='Colors' 
                content='Colors used in website'/>

            <div className="card m-y-6">
                <div className="card-header">
                    Colors you can use with JumboCSS:
                </div>
                <div className="card-body">
                    <div className="dflex flex-wrap">
                        <div className="brick bg-primary m-x-3 m-b-3">
                            #7f0799
                        </div>

                        <div className="brick bg-secondary m-x-3 m-b-3">
                            #2b9eb3
                        </div>

                        <div className="brick bg-tertiary m-x-3 m-b-3">
                            #dbd5b5
                        </div>

                        <div className="brick bg-success m-x-3 m-b-3">
                            #44af69
                        </div>

                        <div className="brick bg-danger m-x-3 m-b-3">
                            #f8333c
                        </div>

                        <div className="brick bg-warning m-x-3 m-b-3">
                            #fcab10
                        </div>

                        <div className="brick bg-dark m-x-3 m-b-3">
                            #292e1e
                        </div>
                    </div>
                    <hr className='m-y-6' />

                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>
        </div>
    )
}
