import React from 'react';
import WorksItem from './WorksItem';
import styles from './HomeWorks.module.scss';

import { homeWorks } from '../../fakeData';

const HomeWorks = () => {
  return (  
    <section>
      <h3 className={styles.title}>Portfolio</h3>
      <div>
        {homeWorks.map(item => (
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
 
export default HomeWorks;