import categories from "../catergories";

interface Props {
  onSelectCatergory: (catefory: string) => void;
}

const ExpenseFilter = ({ onSelectCatergory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCatergory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
