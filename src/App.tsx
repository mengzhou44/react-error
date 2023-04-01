import { Suspense, lazy, useState, useEffect } from 'react'
import ErrorBoundary from './error-boundary'

const Todos = lazy(() => import('./to-dos'));

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=> {
      async function getToDos() {
          let res= await fetch('https://jsonplaceholder.typicode.com/todos')
          res = await res.json();
          setTodos(res as any)
      }
      getToDos()
  }, [])


  return (
    <div className="App">
        <ErrorBoundary fallback={<h3>Error occured!</h3>}>
            <Suspense fallback={<p>Loading.... </p>}>
                 <Todos data={todos} />
            </Suspense>
        </ErrorBoundary>
    </div>
  )
}
