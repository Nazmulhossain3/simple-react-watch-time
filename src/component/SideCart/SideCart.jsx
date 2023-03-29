import React, { useEffect, useState } from 'react';

const SideCart = ({watchTime}) => {
const [time,setTime] = useState(watchTime)
useEffect(()=>{

    const getFromLocalStorage = localStorage.getItem('watch-time')
    setTime(getFromLocalStorage)

},[watchTime])

    return (
        <div>
           <h1 className='text-center'>My Cart</h1>
         <div className="mt-5 text-center">
            <p>Total Watch Time :</p>
            <input type="text" value={time} id="" disabled />
         </div>
        <h4 className='mt-5 text-center'>Add Break Time</h4>
        <button className='btn btn-info w-25 circle m-1'>15</button>
        <button className='btn btn-primary w-25 circle m-1'>20</button>
        <button className='btn btn-warning w-25 circle m-1'>20</button>
        <input type="text" value={0} id="" disabled className='mt-3' />

        <button className='btn btn-warning w-100 circle m-1 mt-2'>complete</button>
       
        </div>
    );
};

export default SideCart;