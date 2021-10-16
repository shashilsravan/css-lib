import React from 'react'
import Heading from '../global-components/Heading'
import logo from '../assets/profile_user.jpg'
import CodeContainer from '../global-components/CodeContainer'

export default function Avatars() {

    const codeString1 = 
    `<img src='logo.png' alt="username" 
    class="img-avatar avatar-25 m-x-2" />

<img src='logo.png' alt="username" 
    class="img-avatar avatar-50 m-x-2" />

<img src='logo.png' alt="username" 
    class="img-avatar avatar-75 m-x-2" />

<img src='logo.png' alt="username" 
    class="img-avatar avatar-100 m-x-2" />`

    const codeString2 = 
    ` <!-- Normal avatar -->
<img src='logo.png' alt="username" 
    class="img-avatar avatar-75 m-2" />
                   
<!-- Rectangular avatar -->
<img src='logo.png' alt="username" 
    class="img-avatar avatar-rect avatar-75 m-2" />

<!-- Avatar with box-shadow -->
<img src='logo.png' alt="username" 
    class="img-avatar avatar-shadow avatar-75 m-2" />
    
<!-- Avatar with border -->
<img src='logo.png' alt="username" 
    class="img-avatar avatar-rect avatar-bordered avatar-75 m-2" />`

    const codeString3 =
    `<div class="avatar-status m-x-2">
    <img src='logo.png' alt="username" 
        class="img-avatar m-2" />
    <div class="status"></div>
</div>
<div class="avatar-status m-x-2">
    <img src='logo.png' alt="username" 
        class="img-avatar m-2" />
    <div class="status status-success"></div>
</div>
<div class="avatar-status m-x-2">
    <img src='logo.png' alt="username" 
        class="img-avatar m-2" />
    <div class="status status-danger"></div>
</div>
<div class="avatar-status m-x-2">
    <img src='logo.png' alt="username" 
        class="img-avatar m-2" />
    <div class="status status-dark"></div>
</div>`

    return (
        <div>
            <Heading title='Avatars' 
                content='Useful for showing user-images in different scenarios'/>
            <h5>Examples:</h5>
            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Based on Sizes
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        <img src={logo} alt="username" 
                            className="img-avatar avatar-25 m-2" />
                        
                        <img src={logo} alt="username" 
                            className="img-avatar avatar-50 m-2" />

                        <img src={logo} alt="username" 
                            className="img-avatar avatar-75 m-2" />

                        <img src={logo} alt="username" 
                            className="img-avatar avatar-100 m-2" />
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Based on Shape
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        
                        <img src={logo} alt="username" 
                            className="img-avatar avatar-75 m-2" />
                        
                        <img src={logo} alt="username" 
                            className="img-avatar avatar-rect avatar-75 m-2" />

                        <img src={logo} alt="username" 
                            className="img-avatar avatar-shadow avatar-75 m-2" />
                        
                        <img src={logo} alt="username" 
                            className="img-avatar avatar-rect avatar-bordered avatar-75 m-2" />
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card w-100 m-y-6">
                <div className="card-header">
                    Based on Status
                </div>
                <div className="card-body">
                    <div className="dflex flex-responsive align-center">
                        <div className="avatar-status m-x-2">
                            <img src={logo} alt="username" 
                                className="img-avatar m-2" />
                            <div className="status"></div>
                        </div>
                        <div className="avatar-status m-x-2">
                            <img src={logo} alt="username" 
                                className="img-avatar m-2" />
                            <div className="status status-success"></div>
                        </div>
                        <div className="avatar-status m-x-2">
                            <img src={logo} alt="username" 
                                className="img-avatar m-2" />
                            <div className="status status-danger"></div>
                        </div>
                        <div className="avatar-status m-x-2">
                            <img src={logo} alt="username" 
                                className="img-avatar m-2" />
                            <div className="status status-dark"></div>
                        </div>
                    </div>

                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString3} />
                </div>
            </div>
        </div>
    )
}
