export default function Badge() {
  if (typeof localStorage !== "undefined") {
    let quantity = localStorage.getItem("quantity");
    return (
      <div className="">
        <div className="flex rounded-full bg-red-500 items-center justify-center h-8 w-8">
          {quantity}
        </div>
      </div>
    );
  } else if (typeof sessionStorage !== "undefined") {
    let quantity = sessionStorage.getItem("quantity");
    return (
      <div className="">
        <div className="flex rounded-full bg-red-500 items-center justify-center h-8 w-8">
          {quantity}
        </div>
      </div>
    );
  } else {
    console.log("Web Storage is not supported in this environment.");
  }
}
