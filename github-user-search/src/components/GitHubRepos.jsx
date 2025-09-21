import { getMyRepos } from "./services/github.js";
import { useEffect, useState } from "react";

export const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMyRepos()
      .then(setRepos)
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading repositories...</div>;
  if (error) return <div>Error loading repositories: {error}</div>;

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            {repo.description && <p>{repo.description}</p>}
            <small>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};