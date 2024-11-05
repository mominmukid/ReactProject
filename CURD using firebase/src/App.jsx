import React, { useState } from 'react'
import { db } from './config/firebase-conf'
import { collection, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { doc, deleteDoc,updateDoc } from 'firebase/firestore';

const App = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [name, setName] = useState('');
  const [age, setAge] = useState('');


  const usersCollectionsRef = collection(db, 'user');

  const getUsers = async () => {
    setLoading(true)
    try {
      const res = await getDocs(usersCollectionsRef);
      let docRef = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(docRef)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  React.useEffect(() => {
    getUsers()
  }, [])

  const DeleteUser = async (id) => {
    try {
      const docRef = doc(db, 'user', id);
      await deleteDoc(docRef);
      getUsers();

    } catch (error) {
      setError(error)
    }
  }

  const updateAge = async (age,id) => {
    try {
      const docRef = doc(db, 'user', id);
      const newage={age:Number(age)+5};
      await updateDoc(docRef, newage );
      getUsers();
      console.log('rech here');
      
    } catch (error) {
      setError(error)
    }

  }
  const createUser = async () => {
    setLoading(true)
    try {

      await addDoc(usersCollectionsRef, {
        name: name,
        age: age
      })
      getUsers();
      setName('');
      setAge('')
    } catch (error) {
      setError(error.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }

  }

  return (
    <div>
      <div>
        <h1>Create user</h1>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={createUser}>Create Users</button>
      </div>
      <h1>Users</h1>
      name as follow:
      <ul>
        {
          data?.map((doc) => {
            return (
              <li key={doc.id}>{doc.name} -{doc.age}
                <button onClick={()=>updateAge(doc.age,doc.id)}> Update Age</button>
                <button onClick={() => DeleteUser(doc.id)}>Delete</button>

              </li>
            )
          })
        }

      </ul>
    </div>
  )

}

export default App