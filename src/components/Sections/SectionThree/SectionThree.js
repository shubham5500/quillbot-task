import React from 'react';
import classes from './SectionThree.module.scss';
import ProgressCircle from "../../ProgressCircle/ProgressCircle";
import {SubHeading, Text} from "../../Text/Text";
import {COLOR_PALETTE} from "../../constants";

function SectionThree(props) {

  const progressElement = [{
    text: '76% of Grammarly users find writing more enjoyable.',
    classes: '',
    count: 76,
    offset: 224,
  }, {
    text: '85% of Grammarly users are now stronger writers.',
    classes: '',
    count: 85,
    offset: 173,
  }, {
    text: '70% of Grammarly users reported an increased level of writing confidence.',
    classes: '',
    count: 70,
    offset: 259,
  }];

  return (
    <section className={classes.sectionThreeBg}>
      <div className={classes.sectionThreeWrapper}>
        <SubHeading className={classes.subHeading}>
          Premium Customers Report Better Results
        </SubHeading>

        <Text fontSize={'18px'} color={COLOR_PALETTE.lightText}>
          We routinely survey Grammarly users and have found that:
        </Text>
        <div className={classes.progressSection}>
          {
            progressElement.map(item => <div key={item.text} className={classes.progressWrapper}>
              <ProgressCircle {...item}/>
              <Text className={classes.progressText}>
                {item.text}
              </Text>
            </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
