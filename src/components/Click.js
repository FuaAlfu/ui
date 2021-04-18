import React,{useState}  from 'react'

const Click =  () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setInput = (set) => (e) =>{
        Set(e.currentTarget.value);
    }

    return (
      <form>
        <input
         value={username}
         onchange={setInput(setUsername)}
         />
         <input
         value={password}
         onchange={setInput(setPassword)}
         />
      </form>
    );
}

export default Click
