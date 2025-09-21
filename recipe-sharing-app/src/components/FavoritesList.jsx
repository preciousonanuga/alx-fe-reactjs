import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favoritesIds = useRecipeStore((state) => state.favorites);

  const favorites = useMemo(() => {
    return favoritesIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean); // remove undefined if recipe not found
  }, [favoritesIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;