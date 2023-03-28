import { Link } from "react-router-dom";

import { useAssets } from "../hooks/useReactQuery";

export function Home() {
  const { data, isLoading } = useAssets({});

  return (
    <div className="flex flex-col">
      {!isLoading && data.map((asset: any) => (
        <Link key={asset.id} to={`/asset/${asset.id}`}>{asset.name}</Link>
      ))}
    </div>
  );
}
