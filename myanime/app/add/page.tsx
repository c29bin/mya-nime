'use client'

import React from 'react'
import { useState} from 'react'
import { useRouter } from 'next/navigation'



const AddTopic = () => {
    const [title,setTitle] = useState<string>('')
    const [description,setDescription] = useState<string>('')

    
    const router = useRouter();

    const handleSubmit = async(e: any) => {
        e.preventDefault()

        
        if (!title || !description){
            alert('title and decription require')
            return;
        }

        const res = await fetch('http://localhost:3000/api/topics', {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({title,description})
        })

        if (res.ok){
            router.push('/')
            console.log("component is rendered")
        } else {
            throw new Error("Failed to create")
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                className='border border-slate-500 px-8 py-2'
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
            <input
                className='border border-slate-500 px-8 py-2'
                type='text'
                placeholder='description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />

            <button
                type='submit'
                className='bg-green-600 font-bold text-white py-3 px-6 w-fit'
            >Add</button>
        </form>
    </>
  )
}

export default AddTopic