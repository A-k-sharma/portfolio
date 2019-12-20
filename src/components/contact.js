import React from 'react';

function Contact() {
    return (
        <div className='contact'>
            <div className='heading'>
                <h3>CONTACT</h3>
            </div>
            <form className="contact-form">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group">
                    <textarea class="form-control" aria-label="With textarea" placeholder='Message' rows='5'></textarea>
                </div>
                <div className="form-button mt-2">
                    <button className="btn">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact