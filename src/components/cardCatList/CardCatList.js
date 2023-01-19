import React, { PureComponent } from 'react'
import CardCat from '../cardCat/CardCat';

import './cardCatList.css';

const data = [];

const CardCatList = (props) => {
    const {allEmployess, incEmploess} = props;
    return (
        <div className="card_list">
          <CardCat />
          <CardCat />
          <CardCat />
        </div>
    );
}

export default CardCatList;