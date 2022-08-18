import React, {useEffect, useState} from 'react';
import styles from './Currencies.module.scss'
import Layout from '../../Components/Layout/Layout';
import { getCurrencies } from '../../helper';
import Select, { SingleValue } from 'react-select';
import { AxiosResponse } from 'axios';

import cryptocurrencies from 'cryptocurrencies';

type currenciesType = [string, { code: string, value: number }]

interface iOption {
    label: string | null
}

const Currencies = (): JSX.Element  => {
    const [currencies, setCurrencies] = useState<currenciesType[]>([]);
    const [baseCurrency, setBaseCurrency] = useState('UAH');
    const crypto = cryptocurrencies.symbols();

      useEffect(() =>
      {
          getCurrencies(baseCurrency).then(async (res:AxiosResponse) =>
          {
              let data:currenciesType[] = Object.entries(res.data.data);
              setCurrencies(data);

          });
      }, [baseCurrency]);

    const options:iOption[] = currencies.map((_el: currenciesType) =>
    {
        return { label: _el[1].code.toUpperCase(), value: _el[1].code }
    });

    const onSelectChange = (option: SingleValue<iOption>) =>
    {
        let selectedValue = option as iOption;
        setBaseCurrency(selectedValue.label as string);
    }

    return (
        <Layout>
            <div className={styles.currencies}>
                <div className={styles.currencies__items}>
                    {
                        currencies.map((_el: any):JSX.Element => {
                            return (
                                <div className={styles.item} key={_el[1].code}>
                                    <p>1</p>
                                    <p>{_el[1].code}</p> =
                                    <p>{(1 / _el[1].value).toFixed(crypto.includes(_el[1].code) ? 6 : 2)}</p>
                                    <p>{baseCurrency}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.select}>
                    <p>You can choose your base currency</p>
                    <Select
                        onChange={ onSelectChange }
                        options={ options }
                        isMulti={ false }
                        openMenuOnClick={ true }
                        placeholder={`Current currency is ${baseCurrency}`}
                        captureMenuScroll={ false }
                    />
                </div>
            </div>
        </Layout>
    )
}

export default React.memo(Currencies);