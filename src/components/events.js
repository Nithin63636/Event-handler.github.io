import React from 'react';
import styles from './events.module.css';
/* you can use different name also */
export default function Events({events,eventhandle}) {
  return (
    <div> 
    {events.map((event)=>(
        <div className={styles.card} key={event.id}>
          <h2>{event.title}</h2>
          <h3>{event.location}-{event.date
          } </h3>
          <button onClick={()=>eventhandle(event.id)}>delete me</button>
        </div>
        ))
    }
    </div>
  )
}
