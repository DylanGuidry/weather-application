import { ChangeEvent } from "react";
import { optionType } from "../tpyes";

type Props = {
    term: string
    options: []
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onOptionSelect: (option: optionType) => void
    onSubmit: () => void
}

function Search({ term, options, onInputChange, onOptionSelect, onSubmit }: Props): JSX.Element {

    return (
        <main className="flex justify-center items-center bg-gradient-to-br from-sky-300 via-rose-400 h-[100vh] w-full">
        <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] text-zinc-700 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded">
            <h1 className="text-4xl font-thin ">
            Weather <span className="font-black">Forecast</span>
            </h1>
            <p className="text-small mt-2">
            Enter below a place you want to know the weather of and select an option from the dropdown.
            </p>
            <div className="mt-10 md:mt-4 relative">
            <input onChange={onInputChange} type="text" value={term} className="mt-6 px-2 py-1 rounded-l-lg border-2 border-white" />
            <ul className="absolute top-15 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index: number) => (
                <li key={option.name + '-' + index}>
                <button className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer" onClick={() => onOptionSelect(option)}>
                {option.name}
                </button>
                </li>
            ))}
            </ul>
            <button className="rounded-r-lg border-2 border-zinc-100 hover:border-zinc-300 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer" onClick={onSubmit}> 
                Search
            </button>
            </div>
        </section>
        </main>
    );
}

export default Search;
