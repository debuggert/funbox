import React from 'react'

import './cardCat.css';

const CardCat = (props) => {
    const {allEmployess, incEmploess} = props;
    return (
        <div className="card bg__cat">
            <div className='card__wrap'>
                <div className='card__top-info'>Сказочное заморское яство</div>
                <div className='card__name'>Нямушка</div>
                <div className='card__name-with'>с фуа-гра</div>
                <div className='card__more-info'>10 порций<br/>мышь в подарок</div>
                <div className='card__weight'><span>0,5</span> кг</div>
            </div>
            <div className='card__status'>
                <div className='status__default'>
                    Чего сидишь? Порадуй котэ, <a href="">купи</a>.
                </div>
                <div className='status__selected'>
                    Печень утки разварная с артишоками.
                </div>
                <div className='status__disabled'>
                    Печалька, с фуа-гра закончился.
                </div>
            </div>
        </div>
    );
}

export default CardCat;