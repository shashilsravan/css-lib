import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'
import logo from '../assets/profile_user.jpg'

export default function ImageCards() {
    const codeString1 = 
    `<div class="card img-card-1 m-y-5">
    <div class="image-section">
        <img src='logo.png' class='card-image' alt="" />
    </div>
    <div class="content-section">
        <h6>
            Content area
        </h6>
        <p>
            Content area
        </p>
        <button class="btn btn-primary m-t-2">
            View Profile
        </button>
    </div>
</div>`

    const codeString2 = 
    `<div class="card img-card-2 m-y-5">
    <div class="image-section">
        <img src='logo.png' class='card-image' alt="" />
    </div>
    <div class="content-section">
        <h6>
            Content area
        </h6>
        <p>
            Content area
        </p>
        <button class="btn btn-primary m-t-2">
            View Profile
        </button>
    </div>
</div>`

    return (
        <div>
            <Heading title='Image Cards' 
                content='Useful to show some text to user with great UI'/>
            <h5>Examples:</h5>

            <div className="card img-card-1 m-y-5">
                <div className="image-section">
                    <img src={logo} className='card-image' alt="" />
                </div>
                <div className="content-section">
                    <h6>
                        This is an example of image card
                    </h6>
                    <p>
                        Lorem ipsum dolor sit adipisicing elit. Itaque dignissimos possimus repellat alias nostrum. Nobis ipsum ad doloribus eius iste ipsam.
                        Expedita, ipsum adipisci quia. Incidunt in nisi esse ex natus odio hic beatae ea.
                    </p>
                    <button className="btn btn-primary m-t-2">
                        View Profile
                    </button>
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Image Card - 1 (Code)
                </div>
                <div className="card-body">
                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card img-card-2 m-y-5">
                <div className="image-section">
                    <img src={logo} className='card-image' alt="" />
                </div>
                <div className="content-section">
                    <h6>
                        This is an example of image card
                    </h6>
                    <p>
                        Lorem ipsum dolor sit adipisicing elit. Itaque dignissimos possimus repellat alias nostrum. Nobis ipsum ad doloribus eius iste ipsam.
                    </p>
                    <button className="btn btn-primary m-t-2">
                        View Profile
                    </button>
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Image Card - 2 (Code)
                </div>
                <div className="card-body">
                    <CodeContainer codeString={codeString2} />
                </div>
            </div>
        </div>
    )
}
