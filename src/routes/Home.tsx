import { Link } from "react-router-dom";
import { MachineCard } from "../components/MachineCard";

import { useAssets } from "../hooks/useReactQuery";

export function Home() {
  const { data, isLoading } = useAssets();

  return (
    <div className="grid grid-cols-autoFit w-full gap-4 items-center justify-center">
      {!isLoading &&
        data.map((asset: any) => (
          <Link key={asset.id} to={`/asset/${asset.id}`}>
            <MachineCard image={asset.image} name={asset.name} status={asset.status} />
          </Link>
        ))}
    </div>
  );
}
