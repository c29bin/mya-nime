'use client'

import {useState} from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

type EditProps = {
    id: string;
    title: string;
    description: string;

}

const EditForm = ({id,title,description}: EditProps) => {
    const router = useRouter()
    
    const [newTitle,setNewTitle] = useState(title)
    const [newDescription,setNewDescription] = useState(description)

    const handleEditTopic = async (e: any) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
            method: "PUT",
            headers: {
                "Content-type" : 'application/json'
            },
            body: JSON.stringify({newTitle,newDescription})
        })

        if (!res.ok) {
            throw new Error("Failed to locate topic")
        }

        router.refresh()
        router.push("/")
    
    }
  return (
    <>
        <form onSubmit={handleEditTopic} className="flex flex-col gap-3">
            <input
                value={newTitle}
                onChange={(e)=> setNewTitle(e.target.value)} 
                type='text'
            />
             <input
                value={newDescription}
                onChange={(e)=> setNewDescription(e.target.value)} 
                type='text'
            />
            <button type='submit'>
                <HiPencilAlt size={24}/>
            </button>
        </form>
    </>
  )
}

export default EditForm