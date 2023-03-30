import { Card } from "antd";
import { statusFormatText } from "../../utils/commonFunctions";

const { Meta } = Card;

type MachineCardProps = {
  image: string;
  name: string;
  status: string;
};

export function MachineCard({ image, name, status }: MachineCardProps) {
  return (
    <Card
      hoverable
      className="w-[300px] max-[360px]:w-full"
      cover={<img src={image} alt={name} className="h-[280px] object-cover" />}
    >
      <Meta title={name} description={statusFormatText(status)} />
    </Card>
  );
}
