import React from 'react'
//import './App.css'
import Recipe from './Recipe'


function App() 
{

    const [search,setSearch] = React.useState("")
    const [recipes,setRecipes] = React.useState([])
    const [query,setQuery] =React.useState("")


    const API_ID = "98b9a98c"
    const API_KEY = "ae4c27ea40ccc5dcec82768f663c7571"


    React.useEffect(()=>{
        getRecipes();
    },[query])


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    };


    function handleChange(event){
        setSearch(event.target.value)
        
    }

    function handleSubmit(event){
        event.preventDefault()
        setQuery(search);
        setSearch("");
    }
    
    return (
        <div>
          <form className="text-gray-400 bg-gray-900 body-font" onSubmit={handleSubmit}>
            <div className="container py-10 mx-auto">
              <div className="flex lg:w-1/2 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                <div className="relative sm:mb-0 flex-grow w-full">
                  <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Search Recipe</label>
                  <input type="text" id="full-name" name="full-name" value={search} onChange={handleChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
              </div>
            </div>
          </form>


          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24">
              <div className="flex flex-wrap -m-4 w-4/5 mx-auto">
                {recipes.map(recipe => (
                  <Recipe
                    key={recipe.recipe.label}
                    recipe={recipe.recipe}
                  />
                ))}
              </div>
            </div>
          </section>


        </div>
      );
}

export default App; 