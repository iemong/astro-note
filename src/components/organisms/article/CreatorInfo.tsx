import './CreatorInfo.css'

export const CreatorInfo = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <picture className="rounded-full overflow-hidden">
                    <img
                        width="32"
                        height="32"
                        src="https://assets.st-note.com/production/uploads/images/9189472/profile_85e618bad16b2574294d3e382dc589f3.jpeg?fit=bounds&format=jpeg&quality=85&width=330"
                        alt=""
                    />
                </picture>
                <div className="text-xs">
                    <span className="block mb-[2px]">いえもん</span>
                    <time className="text-[#a8abb1]">2022年7月26日 23:00</time>
                </div>
            </div>
            <div className='flex items-center text-[#a8abb1] ml-4'>
                <button className='flex items-center justify-center w-9 h-9'>
                    <i className='icon twitter-icon' />
                </button>
                <button className='flex items-center justify-center w-9 h-9'>
                    <i className='icon facebook-icon' />
                </button>
                <button className='flex items-center justify-center w-9 h-9'>
                    <i className='icon line-icon' />
                </button>
                <button className='flex items-center justify-center ml-4'>
                    <i className='icon more-icon' />
                </button>
            </div>
        </div>
    )
}