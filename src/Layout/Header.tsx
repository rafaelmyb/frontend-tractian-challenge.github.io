import { Dropdown } from "antd";

export function Header() {
  return (
    <header className="flex flex-row items-center bg-blue-600 h-14 px-8">
      <h1 className="text-white font-extrabold text-4xl">TRACTIAN</h1>
      {/* <Dropdown /> */}
      <div className="ml-8">Unidade ||</div>
    </header>
  )
}