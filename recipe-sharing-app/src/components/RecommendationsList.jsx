import { useMemo } from "react";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const recommendationsIds = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  const recommendations = useMemo(() => {
    return recommendationsIds
      .map((id) => recipes.find((recipe) => recipe.id === id))
      .filter(Boolean);
  }, [recommendationsIds, recipes]);

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={generateRecommendations}>Get Recommendations</button>
      {recommendations.length === 0 ? (
        <p>No recommendations available yet.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;