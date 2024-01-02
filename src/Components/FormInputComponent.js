import React from 'react';

const FormInputComponent = (props) => {
    return (
        <div className=''>
            <input {...props} className=' p-3 border mb-3 w-[70%] outline-none'/>
        </div>
    );
};

export default FormInputComponent;