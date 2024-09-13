import React from 'react'



const Recipe = ({ recipe }) => {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={recipe.image}
                    alt="blog"
                />
                <div className="p-6">
                    <h5 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{recipe.dishType[0]}</h5>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{recipe.label}</h1>
                    <p className="leading-relaxed mb-3">
                        <b>Ingredients: </b>
                        {recipe.ingredientLines.map((ingredient) =>(
                            <p>{ingredient}</p>
                        ))}
                    </p>
                    <div className="flex items-center flex-wrap">
                        <a href={recipe.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">View Recipe</a>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Recipe;






















