import Button from "./Button";

export default function SidePanel() {
  return (
    <div className="flex flex-col  gap-2 text-xl">
      <Button type="submit" name="sort" value="def">
        Sort by default
      </Button>
      <Button type="submit" name="sort" value="name">
        Sort by name
      </Button>
      <Button type="submit" name="sort" value="price">
        Sort by price
      </Button>
    </div>
  );
}
