import { QueryFunctionContext, useQuery } from '@tanstack/react-query';
import api from '../api/github';
import { Repository } from './types';

/// 1 Los parámetros los recibe de esta forma, del context de parámetros re cuerda que esta función se usa en un query de tanstack
const fetchRepos = async (ctx: QueryFunctionContext) => {

    const [_, githubUser] = ctx.queryKey;

    /// Usar la interfaz 
    const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);

    return data;
};

export const useFetchRepositories = (githubUser: string) => {
   return useQuery({
       //- 2 aca le mandamos el parámetro a la función de axios
       queryKey: ['repos', githubUser],
       queryFn: fetchRepos,
   });
}
