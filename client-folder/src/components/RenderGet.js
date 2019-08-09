import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RenderGet = () => {
    const [apiState, setApiState] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/restricted/data')
        .then(res => {
            console.log(res)
            setApiState(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
        {apiState.map(recipe => {
            return <div><h1>{recipe.name}</h1><h3>Technique: {recipe.technique}</h3><h4>Ingredients: </h4>{recipe.ingredients.map(ingredient => {
                return <p>{ingredient}</p>
            })}</div>
        })}
        </>
    )
}

export default RenderGet;
