import { useState } from 'react'
import Student from './Student.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Student name="Spongebob" age ="30"  isStudent = {true} />
      <Student name="Patrick" age ={45}  isStudent = {false} />
      <Student name="Chara" age ={52}  isStudent = {true} />
      <Student name="Tamam"/>
    </div>
  )
}

export default App
