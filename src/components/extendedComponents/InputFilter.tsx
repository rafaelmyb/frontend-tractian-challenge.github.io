import { useDebounce } from "react-use";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import { useGeneralContext } from "../../contexts";
import { WorkOrder } from "../../types/commonTypes";

type InputFilterProps = {
  orders: WorkOrder[] | undefined;
};

export function InputFilter({ orders }: InputFilterProps) {
  const { searchTerm, setSearchTerm, setFilteredOrders } = useGeneralContext();

  useDebounce(handleFilterPosts, 1000, [searchTerm]);

  async function handleFilterPosts() {
    if (searchTerm === "") {
      setFilteredOrders([]);
      return;
    }

    const filteredOrders =
      orders &&
      orders.filter(
        (order: WorkOrder) =>
          order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.priority.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setFilteredOrders(filteredOrders);
  }

  return (
    <div className="flex flex-row items-center border rounded-2xl pr-3">
      <Input
        placeholder=""
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="inputFilter rounded-2xl border-0 hover:border-0"
      />
      <SearchOutlined className="text-gray-400" />
    </div>
  );
}
