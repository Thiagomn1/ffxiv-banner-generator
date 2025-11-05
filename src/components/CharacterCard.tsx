interface CharacterResult {
  Avatar: string;
  ID: number;
  Lang: string;
  Name: string;
  RankName: string;
  RankIcon: string;
  World: string;
  DC: string;
}

export default function CharacterCard({ char }: { char: CharacterResult }) {
  return (
    <div
      key={char.ID}
      className="bg-lodestoneBlue/60 rounded-xl p-4 flex flex-col items-center border border-gold/30 hover:border-gold transition-all shadow-md"
    >
      <img
        src={char.Avatar}
        alt={char.Name}
        className="w-24 h-24 rounded-full border-2 border-gold mb-3"
      />
      <h2 className="text-xl font-semibold text-gold">{char.Name}</h2>
      <p className="text-parchment/80 text-sm mb-2">
        {char.World} ({char.DC})
      </p>
      {char.RankName && (
        <div className="flex items-center gap-2">
          <img src={char.RankIcon} alt={char.RankName} className="w-5 h-5" />
          <span className="text-sm text-parchment/80">{char.RankName}</span>
        </div>
      )}
    </div>
  );
}
