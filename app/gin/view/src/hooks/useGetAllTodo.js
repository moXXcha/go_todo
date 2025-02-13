import axios from "axios"
import { useEffect, useState } from "react"

export const useGetAllTodo = () => {
    const [todos, setTodos] = useState({})

    useEffect(() => {
       const result = fetchData()
       setTodos(result)
    },[])
    if(todos.data) {

    }else {

        console.log(todos)
    }

    return todos
}

const fetchData = async () => {
    const result = await axios.get("api/get/todos")
    return result
}
