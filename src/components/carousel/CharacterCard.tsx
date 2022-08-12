import { FC } from "react"
export interface CharacterCardProps {
  characterImage: string;
  CharacterName: string;
  CharacterDescription: string;
}

const CharacterCard: FC<CharacterCardProps> = () => {
  return (
    <div className="w-24">wit</div>
  )
}

export default CharacterCard