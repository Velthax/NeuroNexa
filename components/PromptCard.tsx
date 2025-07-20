type Props = {
  title: string;
  description: string;
  price: string;
};

export default function PromptCard({ title, description, price }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <h2 className="text-xl font-bold text-purple-400">{title}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="mt-4 text-green-400 font-semibold">{price}</p>
    </div>
  );
}
