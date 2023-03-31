import { Card, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function OrdersListSkeleton({ isLoading }: SkeletonLoadingProps) {
  return (
    <Card>
      <Skeleton.Avatar active={isLoading} size={50} shape={'square'} />
      <Skeleton active={isLoading} title={false} className="ml-4" />
    </Card>
  )
}