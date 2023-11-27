import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Link({name, handle, icon, url, theme}){
    return(
        <a href={url}>
            <div className="bg-white text-center rounded-full py-2 font-medium text-xl border border-gray-800 my-5 max-[700px]:my-3 dark:bg-gray-700 dark:text-white dark:border-white">
            <FontAwesomeIcon icon={`fa-brands ${icon}`} className='mr-1'  color={`${theme=="dark" ? "white" : ""}`} />
                {name}
                <span className="text-sm font-normal text-gray-950 ml-1  dark:text-white">(<span className=' border-b border-gray-400'>@{handle}</span>)</span>
            </div>
        </a>
    )
}
export default Link