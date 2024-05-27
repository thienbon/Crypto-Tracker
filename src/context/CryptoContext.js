import { createContext, useState ,useLayoutEffect} from "react";
import { json } from "react-router-dom";

export const CryptoContext = createContext({});

export const CryptoProvider = ({children}) => {
const [CryptoData, setCryptoData] = useState();
const [SearchData, setSearchData] = useState();

const getCryptoData = async () => {
    try {
        const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&x_cg_demo_api_key=CG-e3hvJspdeGqAeEKt5LtwNSjC'

        ).then(res => res.json()).then(json => json);
        console.log(data);
        setCryptoData(data);
        
    } catch (error) {
        console.log(error);
    }
};

const getSearchResult = async (query) => {
    try {
        const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=CG-e3hvJspdeGqAeEKt5LtwNSjC`

        ).then(res => res.json()).then(json => json);


        console.log(data);
        setSearchData(data);
        
    } catch (error) {
        console.log(error);
    }
};

useLayoutEffect(() => {
    getCryptoData();
  
}, [])

    return(
        <CryptoContext.Provider value={{CryptoData, SearchData, getSearchResult}}>
        {children}    


        </CryptoContext.Provider>
    )
}