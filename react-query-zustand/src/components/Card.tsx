import { Repository } from '../hooks/types';
import { useFavoriteReposStore } from '../store/favoriteStore';

///- type e interface es lo mismo, definimos los props aca
type CardProps = {
    repository: Repository;
    isFavorite: boolean;
};
const Card = ({ repository, isFavorite }: CardProps) => {

    /// 1. Importar funciones para usar
    const addFavoriteRepository = useFavoriteReposStore(
        (state) => state.addFavoriteRepository
    );
    const removeFavoriteRepository = useFavoriteReposStore(
        (state) => state.removeFavoriteRepository
    );

    // toggleFavorite es la función que se ejecuta cuando el botón es clickeado.
    const toggleFavorite = () => {

        if (isFavorite) {
            removeFavoriteRepository(repository.id);
        } else {
            addFavoriteRepository(repository.id);
        }
    };

    return (
        <div>
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
        </div>
    );
};

export default Card;
