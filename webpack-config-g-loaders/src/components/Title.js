import React from 'react';
import style from './Title.css';

const Title = props =>
<div className={style.container}> 
    <h1 className={style.title}>Lista moich zadań</h1>
    <h5 className={style.left}>Pozostało {props.left} zadań do wykonania</h5>
</div>

export default Title;