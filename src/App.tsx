import { useState, ChangeEvent } from "react";

function App(): JSX.Element {
  const [term, setTerm] = useState<string>('');

const getSearchOptions =async (value: string) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  console.log(apiKey)
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}

  const onInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value);

    if (value === '') return
    
    getSearchOptions(value)
  };

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-300 via-rose-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-zinc-700 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded">
        <h1 className="text-4xl font-thin ">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-small mt-2">
          Enter below a place you want to know the weather of and select an option from the dropdown.
        </p>
        <div className="mt-10 md:mt-4">
          <input onChange={onInputChange} type="text" value={term} className="mt-6 px-2 py-1 rounded-l-lg border-2 border-white" />
          <button className="rounded-r-lg border-2 border-zinc-100 hover:border-zinc-300 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"> 
            Search
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
