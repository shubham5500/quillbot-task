import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import classes from './SectionOne.module.scss';
import {Heading, MediumHeading, Text} from "../../Text/Text";
import {PrimaryButton} from "../../Button/Button";
import classNames from "classnames";

const UpgradeButton = styled(PrimaryButton)`
  width: 285px;
`

function SectionOne(props) {
  const featureList = [
    {
      id: 1,
      heading: 'Clear, confident communication',
      subHeading: 'Take the guesswork out of great writing.',
      imageLink: 'https://static.grammarly.com/assets/files/1495248700340626177a3f4fb713a94d/writing_sample.svg',
      subImageLink: 'https://static.grammarly.com/assets/files/32847965b20166d16b376b3f97d7ad65/grammarly_suggestion.svg',
      bottomPosition: 16,
      bottomMobilePosition: 16,
    },
    {
      id: 2,
      heading: 'Comprehensive real-time feedback',
      subHeading: 'Effective writing takes more than good grammar.',
      imageLink: 'https://static.grammarly.com/assets/files/718a361635f4474a3b373645dce51bec/writing_sample.svg',
      subImageLink: 'https://static.grammarly.com/assets/files/299da6fd3e0803d745cb860de475a4e5/grammarly_suggestion.svg',
      bottomPosition: 16,
    },
    {
      id: 3,
      heading: 'Support you can rely on',
      subHeading: 'Write with a second pair of eyes that never gets tired.',
      imageLink: 'https://static.grammarly.com/assets/files/467997bcab46bc3b210b11951fa061d8/writing_sample.svg',
      subImageLink: 'https://static.grammarly.com/assets/files/8557e8eb1af323bdc9bb1cc8acff9bb7/grammarly_suggestion.svg',
      bottomPosition: 46,
    },
    {
      id: 4,
      heading: 'Strike the right tone',
      subHeading: 'Make the best impression, every time.',
      imageLink: 'https://static.grammarly.com/assets/files/18c5385a8f59a60ee1a389426a2a0b89/writing_sample.svg',
      subImageLink: 'https://static.grammarly.com/assets/files/d9d689c835ee698bca792fe86759fbe1/grammarly_suggestion.svg',
      bottomPosition: 46,
    },
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const startAutoList = () => {
    const id = setInterval(() => {
      setSelectedItemIndex((value) => {
        if (value < featureList.length - 1) {
          return setSelectedItemIndex(value + 1);
        } else {
          setSelectedItemIndex(0);
        }
      })
    }, 7000);
    setIntervalId(id);
  }


  useEffect(() => {
    setMounted(true);
    startAutoList();
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <div className={classes.sectionWrapper}>
      <section className={classes.sectionOne}>
        <div className={classes.headingWrapper}>
          <Heading className={classes.heading}>
            Aim High With Brilliant Writing
          </Heading>
          <div>
            <UpgradeButton>
              Upgrade to Grammarly Premium
            </UpgradeButton>
          </div>
        </div>
        <div className={classes.imageListParent}>
          <div className={classes.absoluteMobile}>
            <div className={classes.imageSection}>
              {
                featureList.map((item, index) => <div key={item.subHeading}
                                                      className={classNames({
                                                        [classes.imageWrapper]: true,
                                                        [classes.active]: (selectedItemIndex === index) && mounted
                                                      })}>
                  <img className={classNames({
                    [classes.largeImage]: true,
                    [classes.active]: (selectedItemIndex === index) && mounted,
                  })} src={item.imageLink}/>

                  <img className={classNames({
                    [classes.subImage]: true,
                    [classes.active]: (selectedItemIndex === index) && mounted,
                  })}
                       style={{bottom: `${item.bottomPosition}px`}}
                       src={item.subImageLink}/>
                </div>)
              }
            </div>
          </div>
          <div className={classes.featureList}>
            <ul className={classes.list}>
              {
                featureList.map((item, index) => {
                  return <li className={classNames({
                    [classes.listItem]: true,
                    [classes.active]: index === selectedItemIndex
                  })}
                             key={item.id}
                             onClick={() => {
                               clearInterval(intervalId);
                               setSelectedItemIndex(index);
                               startAutoList();
                             }}>
                    <MediumHeading>{item.heading}</MediumHeading>
                    <Text>{item.subHeading}</Text>
                    <div className={classes.progressWrapper}>
                      <div className={classNames({
                        [classes.incomplete]: true,
                        [classes.completed]: (index === selectedItemIndex) && mounted
                      })}/>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SectionOne;
