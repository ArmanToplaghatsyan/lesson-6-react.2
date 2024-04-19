import React, { useContext } from 'react';
import '../style.css';
import { MyContext } from '../../context/MyContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item1: React.FC = React.memo((): JSX.Element => {
  const { users, deleteUserById } = useContext(MyContext);

  return (
    <div className="item1">
      <h2>Item 1 </h2>
      {users.map((elm) => {
        return (
          <Card key={elm.id}>
            <Card.Title>
              {elm.name} {elm.surname}
            </Card.Title>
            <Link to={'/see/' + elm.id}>see more</Link>
          </Card>
        );
      })}
    </div>
  );
});
