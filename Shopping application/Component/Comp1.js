import React from 'react'

const Comp1 = () => {

    return (
        <div>
            <style jsx global>
                {`
    .inter{
      color:red;
    }
    `}
            </style>

            <div className='inter'>Comp1</div>
        </div>
    )
}

export default Comp1