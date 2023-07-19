'use client'

import { useRouter } from "next/navigation"
import { HiOutlineTrash } from "react-icons/hi"

const removeButton = ({id}:{id:string}) => {
  const router = useRouter()


  const RemoveTopic = async () => {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      method: "DELETE"
    })
   
    if (!res.ok){
      throw new Error("Dellete not Succesfull")
    }
    else{
      router.refresh()
    }
  }
  return (
    <>
      <button onClick={RemoveTopic}><HiOutlineTrash size={24}/></button>
    </>
  )
}

export default removeButton