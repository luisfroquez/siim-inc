import React from 'react';
import { useGetCatalog } from '../src/hooks/useGetCatalog';

export default function MyComponent() {
    const { data, isLoading, error } = useGetCatalog();


    return (
        <div>
            {/* Render the API response */}
            <h1>IWS</h1>
            <p>{isLoading}</p>
            {data && <pre>{JSON.stringify(data, null, 2)} </pre>}
        </div>
    );
}
