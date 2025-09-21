import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import { FavoritesList } from "./components/FavoritesList";
import { RecommendationsList } from "./components/RecommendationsList";

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
}

export default App;