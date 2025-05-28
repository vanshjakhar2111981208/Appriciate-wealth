import { useState } from 'react'  
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [convertedRate, setconvertedRate]=useState(0);
  const [amount, setAmount]=useState(1);
  const [from, setFrom]=useState("USD");
  const [to,setTo]=useState("INR");
  const [converted, setConverted] = useState(0);

  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo || {});//from api

  
  const swap=()=>{
    setTo(from);
    setFrom(to);
    setConverted(amount)
    setAmount(converted)
  }
  const convert=()=>{
    setConverted(amount * currencyInfo[to])
    //setconvertedRate(currencyInfo[to]);
  }

  return (
    
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >  
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className="text-4xl font-bold text-wj text-center mb-4 pb-5 shadow-lg">
    Currency Converter
  </h1>
                <h2 className="text-center text-white text-xl font-semibold mb-4">
                    {currencyInfo && currencyInfo[to] && (
  <p className="text-white text-lg font-semibold mt-4 text-center">
    1 {from.toUpperCase()} = {currencyInfo[to].toFixed(2)} {to.toUpperCase()}
  </p>
)}
                </h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                        >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)} //callback
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={converted}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
