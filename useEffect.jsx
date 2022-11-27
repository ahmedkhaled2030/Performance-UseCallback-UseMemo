import React, {useEffect , useState } from 'react'

const useEffect = () => {

  const [term, setTerm] = useState('javascript');
  const [result, setResult] = useState([]);


  useEffect(() => {
    const search = async() => {
        const respond = await axios.get()
    } 

  },[])

  return (
    <div>useEffect</div>
  )
}

export default useEffect