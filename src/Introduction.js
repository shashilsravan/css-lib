import React from 'react'
import Heading from './global-components/Heading'
import CodeContainer from './global-components/CodeContainer'
import { saveAs } from "file-saver";

export default function Introduction() {
    const codeString1 = ''
    const saveFile = () => {
        saveAs(
        "https://raw.githubusercontent.com/shashilsravan/css-lib/main/src/minified.css",
        "jumbocss-minify.css"
        );
    };
    return (
        <div>
            <Heading title='Introduction' />
            
            <div className="card w-100 m-y-6">
                <div className="card-header">
                    About JumboCSS
                </div>
                <div className="card-body">
                    <p>
                        JumboCSS is a css framework, with initial version consisting all the css goodies needed for web developers.
                        <br />
                        This website is entirely made using JumboCSS. <br />
                        JumboCSS lets you to design your website and to build websites easier and faster using our already built designs. <br />
                        To get started download the css file below and use it in your code
                    </p>
                    <hr className='m-y-6' />

                    {/* <CodeContainer codeString={codeString1} /> */}
                </div>
            </div>
            <button className="btn btn-primary-outlined btn-rounded w-100" onClick={() => saveFile()}>
                Download
            </button>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Next version Targets
                </div>
                <div className="card-body">
                    <p>
                        Including few other componenets.
                        <br />
                        Including componenets which includes js (modal, toasts etc) <br />
                        Developing react components <br />
                    </p>
                    {/* <CodeContainer codeString={codeString1} /> */}
                </div>
            </div>
        </div>
    )
}
