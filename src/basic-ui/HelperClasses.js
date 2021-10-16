import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function HelperClasses() {
    const codeString1 = `
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 6px;
}
.p-2 {
  padding: 12px;
}
.p-3 {
  padding: 18px;
}
.p-4 {
  padding: 24px;
}
.p-5 {
  padding: 30px;
}
.p-6 {
  padding: 36px;
}
.p-7 {
  padding: 42px;
}
.p-8 {
  padding: 48px;
}
.p-9 {
  padding: 54px;
}
.p-10 {
  padding: 60px;
}    
`
    const codeString2 = 
    `.p-y-1 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.p-y-2 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.p-y-3 {
  padding-top: 18px;
  padding-bottom: 18px;
}
.p-y-4 {
  padding-top: 24px;
  padding-bottom: 24px;
}
.p-y-5 {
  padding-top: 30px;
  padding-bottom: 30px;
}
.p-y-6 {
  padding-top: 36px;
  padding-bottom: 36px;
}
.p-y-7 {
  padding-top: 42px;
  padding-bottom: 42px;
}
.p-y-8 {
  padding-top: 48px;
  padding-bottom: 48px;
}
.p-y-9 {
  padding-top: 54px;
  padding-bottom: 54px;
}
.p-y-10 {
  padding-top: 60px;
  padding-bottom: 60px;
}`

    const codeString3 = 
    `.b-r-0 {
  border-radius: 0px;
}
.b-r-1 {
  border-radius: 4px;
}
.b-r-2 {
  border-radius: 8px;
}
.b-r-3 {
  border-radius: 12px;
}
.b-r-4 {
  border-radius: 16px;
}
.b-r-5 {
  border-radius: 20px;
}
.b-r-6 {
  border-radius: 24px;
}
.b-r-7 {
  border-radius: 28px;
}
.b-r-8 {
  border-radius: 32px;
}
.b-r-9 {
  border-radius: 36px;
}
.b-r-10 {
  border-radius: 40px;
}`
    const codeString4 = `.f-left {
    float: left;
}
.f-right {
    float: right;
}
.f-none {
    float: none;
}`
    const codeString5 = `.o-hidden {
  overflow: hidden;
}
.o-visible {
  overflow: visible;
}
.o-auto {
  overflow: auto;
}
.o-x-hidden {
  overflow-x: hidden;
}
.o-x-visible {
  overflow-x: visible;
}
.o-x-auto {
  overflow-x: auto;
}
.o-y-hidden {
  overflow-y: hidden;
}
.o-y-visible {
  overflow-y: visible;
}
.o-y-auto {
  overflow-y: auto;
}`

    const codeString6 = `.p-static {
  position: static;
}
.p-absolute {
  position: absolute;
}
.p-fixed {
  position: fixed;
}
.p-relative {
  position: relative;
}
.p-initial {
  position: initial;
}
.p-inherit {
  position: inherit;
}`
    const codeString7 = 
    `.border-primary {
  border-color: var(--jumbo-primary-color);
}
.border-secondary {
  border-color: var(--jumbo-secondary-color);
}
.border-tertiary {
  border-color: var(--jumbo-tertiary-color);
}
.border-success {
  border-color: var(--jumbo-success-color);
}
.border-danger {
  border-color: var(--jumbo-danger-color);
}
.border-warning {
  border-color: var(--jumbo-warning-color);
}
.border-dark {
  border-color: var(--jumbo-dark-color);
}`
    const codeString8 = 
    `.b-w-0 {
  border-width: 0px;
}
.b-w-1 {
  border-width: 1px;
}
.b-w-2 {
  border-width: 2px;
}
.b-w-3 {
  border-width: 3px;
}
.b-w-4 {
  border-width: 4px;
}
.b-w-5 {
  border-width: 5px;
}
.b-w-6 {
  border-width: 6px;
}
.b-w-7 {
  border-width: 7px;
}
.b-w-8 {
  border-width: 8px;
}
.b-w-9 {
  border-width: 9px;
}
.b-w-10 {
  border-width: 10px;
}`
    return (
        <div>
            <Heading title='Useful Helper classes' 
                content='Classes that can be used with JumboCSS'/>
            <h5>Examples:</h5>
            <div className="card m-y-6">
                <div className="card-header">
                    Padding
                </div>
                <div className="card-body">
                    <p>In the same way you can use it for margins (.m-0, .m-1, .m-2, ..., .m-10)</p>
                    <hr className='m-y-5' />
                    <CodeContainer css codeString={codeString1} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Padding - Y
                </div>
                <div className="card-body">
                    <p>In the same way you can use it for margins (.m-y-1, .m-y-2, .m-y-3, ..., .m-y-10) <br/>
                        and for x-axis as well, you can use <br/>
                        (.p-x-1 to .p-x-10),<br/> (.m-x-1 to .m-x-10), <br/>
                        (.p-l-1 to .p-l-10),<br/> (.m-l-1 to .m-l-10), <br/>
                        (.p-r-1 to .p-r-10),<br/> (.m-r-1 to .m-r-10), <br/>
                        (.p-t-1 to .p-t-10),<br/> (.m-t-1 to .m-t-10), <br/>
                        (.p-b-1 to .p-b-10),<br/> (.m-b-1 to .m-b-10). <br/>
                        Where t - top, r - right, b - bottom and l - left
                    </p>
                    <hr className='m-y-5' />
                    <CodeContainer css codeString={codeString2} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Border radius
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString3} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Float
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString4} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Overflow
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString5} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Positions
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString6} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Border colors
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString7} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Border widths
                </div>
                <div className="card-body">
                    <CodeContainer css codeString={codeString8} />
                </div>
            </div>
        </div>
    )
}
