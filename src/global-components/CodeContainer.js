import React, {useState} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import copy from 'copy-to-clipboard';

export default function CodeContainer({codeString, css}) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="code-container">
            <SyntaxHighlighter language={css ? 'css': 'javascript'} style={githubGist}>
                {codeString}
            </SyntaxHighlighter>
            <button className={toggle ? 'btn clicked' : 'btn'} 
                onClick={() => {
                    copy(codeString)
                    setToggle(true)
                }}>
                {toggle ? 'copied !' : 'copy'}
            </button>
        </div>
    )
}
