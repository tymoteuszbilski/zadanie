export default function Message({ message }: MessageProps) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2">
      <p className="text-4xl">{message}</p>
    </div>
  );
}
type MessageProps = {
  message?: string;
};
