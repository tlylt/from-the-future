import DropDownItem from "./DropDownItem";
interface DropDownProps {
  toggle: boolean;
  sortBy: string;
  orderBy: string;
  onSortByChange: (mySort: string) => void;
  onOrderByChange: (mySort: string) => void;
}

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}: DropDownProps) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <DropDownItem
          name="Owner Name"
          onClick={() => onSortByChange("owner")}
          isChecked={sortBy === "owner"}
        />
        <DropDownItem
          name="Length"
          onClick={() => onSortByChange("length")}
          isChecked={sortBy === "length"}
        />
        <DropDownItem
          name="Date"
          onClick={() => onSortByChange("date")}
          isChecked={sortBy === "date"}
        />
        <DropDownItem
          name="Asc"
          onClick={() => onOrderByChange("asc")}
          isChecked={orderBy === "asc"}
          hasBorderTop={true}
        />
        <DropDownItem
          name="Desc"
          onClick={() => onOrderByChange("desc")}
          isChecked={orderBy === "desc"}
        />
      </div>
    </div>
  );
};

export default DropDown;
