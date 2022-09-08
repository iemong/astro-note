import { FC, useCallback } from "react"

type Props = {
    name: string
    url: string
    description?: string
    thumbnail?: string
}

const EmbedCard: FC<Props> = (props: Props) => {
    const { name, description, url, thumbnail = 'https://assets.st-note.com/poc-image/manual/production/note_empty_ogp.svg' } = props
    const handleClick = useCallback(() => {
        alert(`click a embed card of ${name}`)
    }, [])

    return (
        <button className="w-full flex border rounded-[4px] h-[150px]" onClick={handleClick}>
            <span className="h-full p-4 flex flex-col justify-center items-start flex-1">
                <strong className="line-clamp-2 mb-2 font-bold text-[#222]">{name}</strong>
                <span className="line-clamp-2 mb-1 text-xs text-[#6f7372]">{description}</span>
                <span className="text-xs text-[#222]">{url}</span>
            </span>
            <span className="block w-[220px] h-full border-l border-[#f2f2f2]">
                <img src={thumbnail} alt="" loading="lazy" className="w-full h-full object-cover" />
            </span>
        </button>
    )
}

export default EmbedCard