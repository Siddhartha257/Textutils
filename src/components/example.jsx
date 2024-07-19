import React from 'react'

export default function example(props) {
  return (
    <div className='container my-4 'style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item  "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
      Text with white spaces
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
            <pre>
        This    is   an   example   text   with     lots   of   white   spaces.  
        This    is   an   example   text   with     lots   of        white   spaces.
        This    is   an    example </pre>
            </div>
    </div>
  </div>
  <div className="accordion-item "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
       LowerCase text
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
       lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate nihil quas ea magnam assumenda? Vitae aspernatur veniam voluptas nihil facilis eaque exercitationem reprehenderit, laboriosam dolores, natus excepturi impedit saepe nesciunt.
      </div>
    </div>
  </div>
  <div className="accordion-item "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor: props.mode==='dark'?'#6c757d':'white',color:props.mode==='dark'?'white':'black'}}>
      UpperCase text
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body "style={{backgroundColor: props.mode==='dark'?'#343a40':'white'}}>
    LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SUSCIPIT DICTA PARIATUR NOSTRUM NEQUE, SAPIENTE REM SEQUI MOLLITIA NECESSITATIBUS EUM ULLAM ILLO PERSPICIATIS TENETUR. ACCUSAMUS PLACEAT MOLLITIA NECESSITATIBUS SINT, REPREHENDERIT MOLESTIAE?
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
