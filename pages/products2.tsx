import React from "react";
import { useGetCatalog } from "../src/hooks/useGetCatalog";

export default function MyComponent() {
  const { data, isLoading, error } = useGetCatalog();

  return (
    <div>
      {/* Render the API response */}
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <h1>IWS</h1>
      <p>{isLoading ? "Cargando..." : "listo"}</p>
      {data && <pre>{JSON.stringify(data, null, 2)} </pre>}
    </div>
  );
}
