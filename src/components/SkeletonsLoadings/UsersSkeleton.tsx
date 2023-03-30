import { Card, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function UsersSkeleton({ isLoading }: SkeletonLoadingProps) {
  return (
    <div className="flex flex-row gap-6 justify-center w-full max-[1292px]:grid max-[1292px]:grid-cols-2 max-[647px]:grid-cols-1">
      {[1, 2, 3, 4].map(() => (
        <Card className="w-[300px] max-[335px]:w-[280px]">
          <Skeleton active={isLoading} />
        </Card>
      ))}
    </div>
  );
}
