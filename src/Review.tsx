import { Star } from "lucide-react";
interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}
export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Michael Roberts",
      rating: 5,
      date: "2 days ago",
      text: "Best barbershop in Dubai! The attention to detail is incredible.",
      service: "Signature Haircut",
    },
    {
      name: "Omar Hassan",
      rating: 5,
      date: "1 week ago",
      text: "Ahmed is a true master. My fade is always perfect.",
      service: "Fade Mastery",
    },
    {
      name: "James Wilson",
      rating: 5,
      date: "2 weeks ago",
      text: "Professional service in a luxurious environment. Highly recommend!",
      service: "Executive Package",
    },
    {
      name: "Ali Mohammed",
      rating: 5,
      date: "3 weeks ago",
      text: "The royal shave experience is unmatched. Pure luxury.",
      service: "Royal Shave",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by Dubai's finest gentlemen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-amber-600/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-600 fill-amber-600"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-3">{review.text}</p>
              <div className="inline-block px-3 py-1 bg-amber-600/10 border border-amber-600/30 rounded-full text-xs text-amber-600">
                {review.service}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
            <span className="text-3xl font-bold text-white">4.9</span>
            <span>/ 5.0 average rating from 1,050+ reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};
