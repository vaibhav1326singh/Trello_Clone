import { Link } from "react-router-dom"

const Sidebar = () =>{
    return (
        <aside className="w-64 bg-pink-600 text-white flex flex-col">
        <div className="p-4 text-lg font-bold">
          Trello Workspace
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Link to="#" className="block py-2 px-4 bg-pink-500 rounded-lg hover:bg-pink-400">Boards</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-pink-500 rounded-lg">Members</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-pink-500 rounded-lg">Workspace Settings</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-pink-500 rounded-lg">Table View</Link>
            </li>
            <li>
              <Link to="#" className="block py-2 px-4 hover:bg-pink-500 rounded-lg">Calendar View</Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
}

export default Sidebar