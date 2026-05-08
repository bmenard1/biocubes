import React, { useState } from 'react';
import { Accordion, Icon , Grid, Image} from 'semantic-ui-react'

const TableofContents = (props) => {
  const [isActive, setIsActive] = useState(false);
  const titles = ["Macro/Micro", "Tree of Life", "Poster"]
  return (
    <div className='table_of_contents'>
        <Grid divided='vertically' >
          <Grid.Row columns={3} divided>
            {
              titles.map((title, i) => {

                return (
                  <Grid.Column>
                    <div className='content_item' onClick={()=>{props.setCounter(i); props.setPlaying(true)}}>
                    {i==props.counter ? <b><p>{i+1} : {title}</p> </b> : <p>{i+1} : {title}</p> }
                    
                    </div>
                  </Grid.Column>
                  )
              })
            }
          </Grid.Row>
        </Grid>

    </div>

  );
};

export default TableofContents;