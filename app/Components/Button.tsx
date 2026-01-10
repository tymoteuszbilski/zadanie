export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      type="submit"
      className=" flex items-center justify-center text-black p-3 border-b border-black cursor-pointer bg-transparent hover:bg-gradient-to-t hover:from-gray-300 hover:to-transparent transition-all duration-300"
    >
      {children}
    </button>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
