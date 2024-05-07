import React from 'react'

const DefaultLayout = (props) => {
  return (
    <div>
        <div className="header">

            <div className='d-flex justify-content-between'>
                <h1>VROOM</h1>
                <button>user</button>
            </div>
        </div>
        <div className="content">
            {props.children}
        </div>
      
    </div>

  )
}

export default DefaultLayout
