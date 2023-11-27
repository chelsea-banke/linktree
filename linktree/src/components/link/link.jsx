import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Link({name, handle, icon, url}){
    return(
        <a href={url}>
            <div className="bg-white text-center rounded-full py-2 font-medium text-xl border-2 border-gray-800 my-5">
            <FontAwesomeIcon icon={`fa-brands ${icon}`} className='mr-1' />
                {name}
                <span className="text-sm font-normal text-gray-950 ml-1">(<span className=' border-b border-gray-400'>@{handle}</span>)</span>
            </div>
        </a>
    )
}
export default Link