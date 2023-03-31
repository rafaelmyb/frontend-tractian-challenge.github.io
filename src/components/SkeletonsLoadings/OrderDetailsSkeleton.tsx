import { Divider, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function OrderDetailsSkeleton({ isLoading }: SkeletonLoadingProps) {
  return (
    <div>
      <Skeleton active={isLoading} title={false} />

      <Divider type="horizontal" className="mt-4 mb-6 border" />

      <Skeleton active={isLoading} />
      <Skeleton active={isLoading} title={false} className="mt-4" />
      <Skeleton active={isLoading} title={false} className="mt-4" />
      <Skeleton active={isLoading} title={false} className="mt-4" />
    </div>
  );
}
