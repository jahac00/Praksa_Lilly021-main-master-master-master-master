import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "../youtube/VideoPlayer";
import AddToFavoritesButton from "../components/AddToFavoritesButton";
import classes from "../css/cocktailDetails.module.css";

function CocktailDetails() {
  const { cocktailId } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
        );
        const [cocktail] = response.data.drinks || [];
        if (!cocktail) {
          setError("Cocktail not found");
          setIsLoading(false);
        } else {
          const ingredients = Object.entries(cocktail || {})
            .filter(([key, value]) => key.startsWith("strIngredient") && value)
            .map(([key, value], index) => ({
              name: value,
              measure: cocktail[`strMeasure${index + 1}`],
              image: `https://www.thecocktaildb.com/images/ingredients/${value}-Small.png`,
            }));
          setCocktail(cocktail);
          setIngredients(ingredients);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchCocktail();
  }, [cocktailId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error && !cocktail) {
    navigate("/cocktail-not-found");
  }

  return (
    <div className={classes["cocktail-details"]}>
      <div className={classes["cocktail-header"]}>
        <h2>{cocktail.strDrink}</h2>
        <AddToFavoritesButton cocktail={cocktail} />
      </div>
      <p>
        {cocktail.strAlcoholic === "Alcoholic"
          ? "This is an ALCOHOLIC drink"
          : "This is a NON-alcoholic drink"}
      </p>
      <p>Category: {cocktail.strCategory}</p>
      <p>Instructions: {cocktail.strInstructions}</p>
      <p>Serve in: {cocktail.strGlass}</p>
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        style={{ width: "400px", height: "auto", paddingBottom: "20px" }}
      />
      <div className={classes["ingredients-wrapper"]}>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <img
                src={ingredient.image}
                alt={ingredient.name}
                style={{ width: "50px" }}
              />
              {ingredient.name} - {ingredient.measure}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className={classes["video-player-wrapper"]}>
        <VideoPlayer
          cocktailName={"how to make " + cocktail.strDrink + " cocktail"}
        />
      </div>
      <div className={classes["footer"]}></div> */}
    </div>
  );
}

export default CocktailDetails;

//Video player zakomentarisan zbog api requesta. Odkomentarisati po potrebi
