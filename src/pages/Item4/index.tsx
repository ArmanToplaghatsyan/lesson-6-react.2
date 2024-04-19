import React, { useContext, useEffect, useState } from 'react';
import '../style.css'
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/MyContext';
import { IUser } from '../../type/type';


export const Item4: React.FC = React.memo((): JSX.Element => {
  const params = useParams()
  console.log(params);

  const {users} = useContext(MyContext)
  const [user, setUsers] = useState<IUser>({} as IUser)




  useEffect(() => {
    if(params.id){
      const use = users.find(elm => elm.id == Number(params.id) )
      console.log(use);
      if(use){
          setUsers({...use})
      }
    }

  
  }, [])



  return (

    <div className='item4'>
      <h2> Item 4 </h2>
      <h3>{user.name}</h3>    
      <h3>{user.surname}</h3>    
      <h3>{user.age}</h3>    
      <h3>{user.email}</h3>    


    </div>
  );
});
