import React,{useState}  from 'react'

const Click =  () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setInput = (set) => (e) =>{
        set(e.currentTarget.value);
    }

    return (
      <form>
        <input
        placeholder="username"
         value={username}
         onChange={setInput(setUsername)}
         />
         <input
         placeholder="password"
         value={password}
         onChange={setInput(setPassword)}
         />
      </form>
    );
}

export default Click
