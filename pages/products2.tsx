import React from 'react';
import { useGetCatalog } from '../src/hooks/useGetCatalog';
import { Locale } from '../src/enums/locale';

export default function MyComponent() {
    const { data, isLoading, error } = useGetCatalog();


    return (
        <div>
            {/* Render the API response */}
            <p>{isLoading}</p>
            {data && <pre>{JSON.stringify(data, null, 2)} </pre>}
        </div>
    );
}