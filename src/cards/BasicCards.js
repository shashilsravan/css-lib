import React from 'react'
import Heading from '../global-components/Heading'
import CodeContainer from '../global-components/CodeContainer'

export default function BasicCards() {
    const codeString1 = 
    `<div class="card">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString2 = 
    `<div class="card card-2">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString3 = 
    `<div class="card card-3">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
</div>`

    const codeString4 = 
    `<div class="card">
    <div class="card-header">
        <!-- Card Header section -->
    </div>
    <div class="card-body">
        <!-- Card Body section -->
    </div>
    <div class="card-footer">
        <!-- Card Footer section -->
    </div>
</div>`

    return (
        <div>
            <Heading title='Basic Cards' 
                content='Useful to show some text to user with great UI'/>
            <h5>Examples:</h5>

            <div className="card m-y-6">
                <div className="card-header">
                    Basic Card: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        <b>Card Body starts here:</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore alias incidunt labore et odio cumque commodi tenetur. Quam error reiciendis officia dolor, expedita reprehenderit. Dolor sequi deleniti earum officiis debitis!
                        Facilis impedit quam voluptas nemo dolore quas nulla itaque, quo, ipsam dignissimos fugiat doloremque atque hic cum quod? Ad commodi amet ea delectus voluptate aspernatur eum quia accusantium officiis labore?
                        Atque repudiandae harum, quasi provident id repellat? Sapiente cum distinctio odio maiores! Voluptatibus voluptatum dolores rerum nostrum maxime, illum eum quisquam cumque iste harum veritatis officiis adipisci reprehenderit aliquam minus!
                        Voluptatem, enim quae quo modi maiores nam aliquam distinctio tempora voluptate eveniet iure iusto reprehenderit numquam voluptatum quidem molestiae nobis eius necessitatibus ratione voluptates quibusdam dicta, sed officiis. Architecto, reprehenderit?
                        Illum corporis architecto ipsa reiciendis, ad dicta ipsam atque totam cumque obcaecati molestias nemo omnis mollitia sunt adipisci numquam veritatis et cupiditate? Quam, molestias! Porro velit facere alias nisi voluptate.
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString1} />
                </div>
            </div>

            <div className="card card-2 m-y-6">
                <div className="card-header">
                    Card 2: (Card Header)
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sed.
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString2} />
                </div>
            </div>

            <div className="card card-3 m-y-6">
                <div className="card-header">
                    Card 3: (Flat Card)
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sed.
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString3} />
                </div>
            </div>

            <div className="card m-y-6">
                <div className="card-header">
                    Card 4: (Card with Footer)
                </div>
                <div className="card-body">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sed.
                    </p>
                    <hr className='m-y-6' />

                    <CodeContainer codeString={codeString4} />
                </div>
                <div className="card-footer">
                    This is card footer
                </div>
            </div>
        </div>
    )
}
