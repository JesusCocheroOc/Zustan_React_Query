import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type favoriteReposState = {
    favoriteRepositoriesIds: number[];
    addFavoriteRepository: (id: number) => void;
    removeFavoriteRepository: (id: number) => void;
};

export const useFavoriteReposStore = create(
    /// 1), enserar en el persist y de ahora en adelante todos lo estado se guardan en el storage
    persist<favoriteReposState>(
        (set) => ({
            favoriteRepositoriesIds: [],

            addFavoriteRepository: (id) => {
                set((state) => ({
                    favoriteRepositoriesIds: [
                        ...state.favoriteRepositoriesIds,
                        id,
                    ],
                }));
            },
            removeFavoriteRepository: (id) => {
                set((state) => ({
                    favoriteRepositoriesIds:
                        state.favoriteRepositoriesIds.filter(
                            (repoId) => repoId !== id
                        ),
                }));
            },
        }),
        {
            name: 'favoriteRepos',
        }
    )
);
