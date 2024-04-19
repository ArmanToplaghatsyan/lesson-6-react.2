import React, { useContext } from "react";
import '../style.css'
import { MyContext } from "../../context/MyContext";
import {useForm} from 'react-hook-form'

import {Form, Row, Button, Col} from 'react-bootstrap'
import { IUser } from "../../type/type";

export const Item2: React.FC = React.memo(():JSX.Element => {
    const {createUser} = useContext(MyContext)
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IUser>() 
    const save = (data: IUser) => {
        createUser({...data, id:Date.now()})
        reset()
    }

    return(<div className="item2">
        <h2> Item 2 </h2>

        <Form  onSubmit={handleSubmit(save)}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            placeholder="First name"
           {...register("name", {required: "Enter first name"})}
          />
          {errors.name && <p>{errors.name.message}</p>}

          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Last name"
           {...register("surname", {required: "Enter last name"})}
          />
          {errors.surname && <p>{errors.surname.message}</p>}
          
          <Form.Label>Age </Form.Label>
          <Form.Control
            placeholder="Age"
           {...register("age", {required: "Enter age", pattern:{
            value:/^\d+$/,
            message: 'NaN'
           }})}
          />
          {errors.age && <p>{errors.age.message}</p>}
          
          <Form.Label>email </Form.Label>
          <Form.Control
            placeholder="email"
           {...register("email", {required: "Enter email", pattern:{
            value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'NaN'
           }})}
          />
          {errors.email && <p>{errors.email.message}</p>}

           <Button variant="success" type="submit">Save</Button>





        </Form.Group>
      
    </Form>

    </div>)
})