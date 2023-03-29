import { Card } from "antd";
import { statusFormatText } from "../utils/commonFunctions";

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
      style={{ width: 240 }}
      cover={<img src={image} alt={name} className="h-[240px] object-cover" />}
    >
      <Meta title={name} description={statusFormatText(status)} />
    </Card>
  );
}
