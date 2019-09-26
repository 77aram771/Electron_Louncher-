import React, {Fragment} from 'react';
import './style.css';
import img1 from  '../../../assets/image/img1.png'
import img2 from  '../../../assets/image/img2.png'
import img3 from  '../../../assets/image/img3.png'
import img4 from  '../../../assets/image/img4.png'
import img5 from  '../../../assets/image/img5.png'
import img6 from  '../../../assets/image/img6.png'
import img7 from  '../../../assets/image/img7.png'
import img8 from  '../../../assets/image/img8.png'

export const StoreUi = () => {

    const handleClick = () => {
        alert("Don't work now")
    }

    return(
        <Fragment>
            <div className="StoreUi">
                <div className="StoreUi_title">
                    <span>STORE</span>
                </div>
                <div className='StoreUi_items'>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img1} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img2} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img3} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img4} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img5} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img6} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img7} alt="img"/>
                    </div>
                    <div className='StoreUi_item' onClick={() => handleClick()}>
                        <img src={img8} alt="img"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};