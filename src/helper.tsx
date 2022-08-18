import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const getCurrencies = async (baseCurrency: string = '') =>
{
    baseCurrency = baseCurrency.toUpperCase();
    if (baseCurrency)
    {
        return await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&currencies=&base_currency=${baseCurrency}`);
    }
    return await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`);
}

const convert = async (currencyFrom:string, currencyTo:string, value: number) =>
{ // example prop currencyFrom: "usd", currencyTo: "uah", value: 10

    const currencies = await getCurrencies();
    currencyFrom = currencyFrom.toUpperCase();
    currencyTo = currencyTo.toUpperCase();

   return currencies.data.data[currencyTo].value / currencies.data.data[currencyFrom].value * value;
}

export {
    getCurrencies,
    convert
};