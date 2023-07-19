import SearchBar from "@/components/searchBar"
import Link from "next/link"
import { HiOutlineDocumentAdd } from "react-icons/hi"

const header = () => {
  return (
    <header className="p-3 flex  items-center justify-between pt-5 w-screen">
      <h2>My-Anime</h2>
      <Link href={"/add"}><HiOutlineDocumentAdd size={60}/></Link>
      <SearchBar />
    </header>
  )
}

export default header