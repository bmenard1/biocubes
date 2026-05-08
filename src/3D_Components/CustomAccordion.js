import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import './CustomAccordion.css';
const CustomAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return ( 
    <Accordion fluid onMouseLeave={() => setIsActive(false)} className='accordion'> 
        <Accordion.Title active={true}
        onMouseEnter={() => setIsActive(true)} className='accordion_title'>
                      <Icon name='dropdown' />

            {title}
        </Accordion.Title>
        <Accordion.Content active={isActive} className='accordion_content'>
            {content}
        </Accordion.Content>
    </Accordion>
  );
};

export default CustomAccordion;