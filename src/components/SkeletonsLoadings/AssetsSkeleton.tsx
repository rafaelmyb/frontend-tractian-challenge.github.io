import { Card, Skeleton } from "antd";
import { SkeletonLoadingProps } from "../../types/skeletonsLoading";

export function AssetsSkeleton({isLoading}: SkeletonLoadingProps) {
  return (
    <>
      {[1, 2, 3].map(() => (
        <Card
          hoverable
          className="w-[300px] max-[360px]:w-full"
          cover={
            <Skeleton.Image
              active={isLoading}
              style={{
                width: 300,
                height: 280,
              }}
            />
          }
        >
          <Skeleton active={isLoading} />
        </Card>
      ))}
    </>
  );
}
