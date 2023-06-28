import { useQuery } from '@tanstack/react-query';
import { fetchApiData } from '../utils/api';

type format = "json" | "csv"
type locale = "es" | "en"

interface QueryParams {
    locale?: locale,
    format?: format
}

export const useGetExtendedCatalog = (queryParams?: QueryParams) => {
    return useQuery({ queryKey: ['getcatalog'], queryFn: () => fetchApiData('getcatalog', queryParams) });
};