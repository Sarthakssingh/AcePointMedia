import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-12 top-head d-flex flex-row justify-content-center">
                <img src="https://www.clipartmax.com/png/middle/245-2457473_mcb-camp-lejeune-nc-mcb-camp-lejeune-nc-logo.png" alt="logo" className="logo" />
                <h1 className="header">CAMP LEJEUNE SETTLEMENT</h1>
            </div>
            <div className="col-12 col-md-10 col-lg-8 text-center m-auto">
                <h1 className="main-heading"><span className='font-red'>ATTENTION!</span> Did you serve, live or work at Marine Corps Base Camp Lejenue, North Carolina between <span className='font-red'>August 1953 and December 1987? </span><span className='bg-yellow'>You may be entitled to compensation.</span></h1>
                <img src="https://www.yarboroughapplegate.com/assets/images/camp-lejeune.jpg?v=2" alt="Image" className="image" />
                <p className="main-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut numquam odio eveniet ipsa impedit repudiandae accusamus. Corporis officia amet, autem eligendi tenetur nobis earum fuga aliquam temporibus, doloremque nisi.
                Blanditiis, cumque sncidunt aut aliquid! Illo temporibus iusto numquam veniam hic in odio officiis!
                Tempora placeat sed vel illum quos sunt, laborum veniam pariatur neque earum voluptatibus eius deleniti amet nam aliquam. Voluptatum necessitatibus temporibus impedit. Voluptate, eos beatae. Accusamus similique voluptatem nostrum unde.</p>
            </div>
        </div>
    </div>
  )
}

export default Header