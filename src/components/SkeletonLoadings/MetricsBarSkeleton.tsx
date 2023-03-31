import { Card, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function MetricsBarSkeleton({ isLoading }: SkeletonLoadingProps) {
  return (
    <div className="flex flex-row gap-6 justify-start w-full max-[1440px]:gap-2 max-[1164px]:grid max-[1164px]:grid-cols-2 max-[768px]:grid-cols-1">
      {[1, 2, 3, 4].map((i: number) => (
        <Card key={i} className="w-[300px] max-[1680px]:w-[250px] max-[1400px]:w-[200px] max-[1200px]:w-[150px] max-[1164px]:w-[272px] max-[910px]:w-[376px] max-[820px]:w-[350px]">
          <Skeleton active={isLoading} title={false} />
        </Card>
      ))}
    </div>
  );
}
