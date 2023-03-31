import { Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function AssetDetailsMobileActionsSkeleton({
  isLoading,
}: SkeletonLoadingProps) {
  return (
    <div className="flex flex-row items-center justify-end gap-2 w-full mb-4">
      <div className="min-[769px]:hidden">
        <Skeleton.Button
          active={isLoading}
          size={"default"}
          shape={"square"}
          style={{
            width: 100,
          }}
        />
      </div>
      <div className="min-[769px]:ml-auto">
        <Skeleton.Button
          active={isLoading}
          size={"default"}
          shape={"square"}
          style={{
            width: 100,
          }}
        />
      </div>
    </div>
  );
}
