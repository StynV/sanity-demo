'use client'

import { createCategory } from "@/sanity/sanity.query"
import { useState } from "react"

const Form = () => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const submitForm = async (e: any) => {
        e.preventDefault()

        const result = await createCategory(title, description)
        console.log(result)
    }

    return (
        <form onSubmit={submitForm} className="flex flex-col">

            <label>title</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="border border-black p-1"
            />

            <label>description</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="border border-black p-1"
            />

            <button type="submit" className="bg-blue-700 text-white rounded-md mt-4 p-1">Submit</button>
        </form>
    )
}
export default Form