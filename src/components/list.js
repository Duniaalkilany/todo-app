import React from 'react';
import { Button, Card, Elevation } from '@blueprintjs/core';

export default function List(props) {
  return (
    <div>
    <Card className="mainItem2">
      <h3>Items List</h3>
      {props.activeList.map((item) => (
      <>
          <Card className="listCard" interactive={true} elevation={Elevation.TWO} key={item.id} >
          <h3><b>{item.text}</b></h3>
            <p>
            <b>Assigned to:</b> {item.assignee}
            </p>
            <p>
            <b>Difficulty:</b> {item.difficulty}
            </p>
            <Button
            class="@ns-button"
            type="button"
             className={
                item.complete ? 'bp3-intent-primary' : 'bp3-intent-danger'
              } 
              onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}
              </Button>
          </Card>
          <br />
       </>
      ))}
   </Card>
   
   </div>
  );
}