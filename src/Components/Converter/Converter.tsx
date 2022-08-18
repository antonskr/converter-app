import React, { useState } from 'react';
import styles from './Converter.module.scss'

import { convert } from "../../helper";

const Converter = ():JSX.Element => {
    const [value, setValue] = useState('');
    const [resValue, setResValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        setValue(e.currentTarget.value);
    }

    const convertValue = async () =>
    {
        const inputValue: Array<string> = value.split(' ');
        const _value:number = +inputValue[0];
        const from:string = inputValue[1];
        const to:string = inputValue[3];

        if (_value && from && to)
        {
            const response = await convert(from, to, _value);
            const _resValue = response.toFixed(2);
            setResValue(`${_resValue} - ${to}`);
        } else {
            setValue('incorrect format');
        }
    }

    return (
        <div className={styles.converter}>
            <p className={styles.title}>Convert currencies</p>
            <p className={styles.description}>Example: 10 usd in uah</p>
            <div className={styles.group}>
                <input type="text"
                       placeholder={'from - to'}
                       value={ value }
                       onChange={ onChange }
                />
                <input type="text" value={ resValue } />
                <button className={'buttonClassic'} onClick={ convertValue } type={'button'}>
                    Result
                </button>
            </div>
        </div>
    )
}

export default Converter
