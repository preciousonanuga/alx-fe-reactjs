const token = import.meta.env.VITE_GITHUB_API_TOKEN;

export const getMyRepos = async () => {
  const response = await fetch('https://api.github.com/user/repos', {
    headers: token ? { 'Authorization': `Bearer ${token}` } : {}
  });
  return response.json();
};