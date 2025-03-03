import Card from './components/Card';
import { useFetchRepositories } from './hooks/useRepost';
import { useFavoriteReposStore } from './store/favoriteStore';

function App() {
    const { data, isLoading } = useFetchRepositories('JesusCocheroOc');

    /// 1 ) Usar el estado global 
    const { favoriteRepositoriesIds } = useFavoriteReposStore();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            {data?.map((repo) => (
                <Card
                    key={repo.id}
                    repository={repo}
                    /*/// 2 Marcar como favorito  */
                    isFavorite={favoriteRepositoriesIds.includes(repo.id)}
                />
            ))}
        </div>
    );
}

export default App;
