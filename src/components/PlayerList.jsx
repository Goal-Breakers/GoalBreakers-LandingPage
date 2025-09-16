import PlayerCard from "./PlayerCard";

export default function PlayerList({ players, renderStars }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} renderStars={renderStars} />
      ))}
    </div>
  );
}
