import React from 'react'

export default function about(props) {
  return (
    <div className='container my-4 'style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item  "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
      User-Friendly Interface:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
        <strong>Content:</strong> Our text editor boasts an intuitive and user-friendly interface designed to streamline your writing experience. With a clean layout and easy-to-navigate controls, you can focus on your content without distractions. Whether you're a seasoned writer or new to text editing, our interface ensures a seamless and enjoyable editing process
      </div>
    </div>
  </div>
  <div className="accordion-item "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
      Performance:
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
        <strong>Content:</strong>  Experience unparalleled performance with our text editor. Built with speed and efficiency in mind, our editor delivers lightning-fast responsiveness, allowing you to work with large documents and complex projects without any lag. Say goodbye to waiting times and hello to uninterrupted creativity with our high-performance editing platform.
      </div>
    </div>
  </div>
  <div className="accordion-item "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
      Community and Feedback:
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
        <strong>Content:</strong>Join our vibrant community of writers, developers, and enthusiasts who are passionate about text editing. Share your ideas, seek advice, and connect with like-minded individuals in our online forums and user groups. Your feedback is invaluable to us, and we're committed to continuously improving our editor based on your suggestions. Together, let's shape the future of text editing and empower creators worldwide.






      </div>
    </div>
  </div>
</div>
    </div>
  )
}
