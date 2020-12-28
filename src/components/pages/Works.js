import React from 'react';
import WorksItem from '../Works/WorksItem';
import styles from './Works.module.scss';

import { works } from '../../fakeData';

const Works = () => {
  return (  
    <section>
      <h3 className={styles.title}>Portfolio</h3>
      <div>
        {works.map(item => (
          <WorksItem 
            key={item.id} 
            title={item.title} 
            description={item.description}
            imageKey={item.imageKey}
          />
        ))}
      </div>
    </section>
  );
}
 
export default Works;