import { BiCheck } from "react-icons/bi";

interface DropDownItemProps {
  onClick: () => void;
  name: string;
  isChecked: boolean;
  hasBorderTop?: boolean;
}

const DropDownItem = ({
  name,
  onClick,
  isChecked,
  hasBorderTop = false,
}: DropDownItemProps) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 flex justify-between cursor-pointer ${
        hasBorderTop && " border-gray-1 border-t-2"
      }`}
      role="menuitem"
    >
      {name} {isChecked && <BiCheck />}
    </div>
  );
};
export default DropDownItem;
