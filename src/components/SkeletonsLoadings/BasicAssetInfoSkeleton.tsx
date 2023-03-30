import { Card, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function BasicAssetInfoSkeleton({ isLoading }: SkeletonLoadingProps) {
  return (
    <div className="w-[300px]">
      <Skeleton.Image
        active={isLoading}
        style={{
          width: 300,
          height: 200,
        }}
      />
      <div className="flex flex-col gap-4 mt-4 w-full">
        <Skeleton active={isLoading} />
        <Skeleton active={isLoading} />
      </div>
    </div>
  );
}
