import { useState, useEffect, useRef } from "react";
import PlayerCard from "./PlayerCard";

export default function SuggestionCarousel({ suggestions, renderStars }) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const visibleCount = 3;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? suggestions.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1));
  };

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [suggestions.length]);

  // Calculate the translateX value for sliding effect
  const translateX = -(index * (100 / visibleCount));

  return (
    <>
      <h2 className="text-xl font-semibold text-center mb-4">
        Sugestões para Você
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-purple-800 p-2 rounded-full z-10"
        >
          ⬅️
        </button>

        <div
          className="w-full max-w-4xl overflow-hidden"
          ref={containerRef}
          style={{ touchAction: "pan-y" }}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${(suggestions.length * 3 * 100) / visibleCount}%`, transform: `translateX(${translateX}%)` }}
          >
            {[...suggestions, ...suggestions, ...suggestions].map((player, idx) => (
              <div
                key={idx}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <PlayerCard player={player} renderStars={renderStars} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-purple-800 p-2 rounded-full z-10"
        >
          ➡️
        </button>
      </div>
    </>
  );
}
