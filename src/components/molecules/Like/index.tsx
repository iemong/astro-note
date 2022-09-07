import { useCallback } from 'react'
import './index.css'

export const Like = () => {
    const handleClickLike = useCallback(() => {
        alert('click like')
    }, [])

    const handleClickLikeCount = useCallback(() => {
        alert('click like count')
    }, [])

    return (
        <div className="flex gap-2 items-center -mt-2 text-[#a8abb1]">
            <button onClick={handleClickLike}>
                <i className="like-icon"></i>
            </button>
            <button onClick={handleClickLikeCount}>
                <span className="leading-none">9</span>
            </button>
        </div>
    )
}