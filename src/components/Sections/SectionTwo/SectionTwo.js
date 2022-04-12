import React from 'react';
import classes from './SectionTwo.module.scss';
import {SmallHeading, SubHeading, Text} from "../../Text/Text";
import {Button, PrimaryButton} from "../../Button/Button";

function SectionTwo(props) {
  const freeList = [
    {
      label: 'Spelling',
    }, {
      label: 'Grammar',
    }, {
      label: 'Punctuation',
    }, {
      label: 'Conciseness',
    }
  ];

  const premiumList = [
    {
      label: 'Everything in Free',
    }, {
      label: 'Clarity-focused sentence rewrites',
    }, {
      label: 'Tone adjustments',
    }, {
      label: 'Plagiarism detection',
    }, {
      label: 'Word choice',
    }, {
      label: 'Formality level',
    }, {
      label: 'Fluency',
    }, {
      label: 'Additional advanced suggestions',
    }
  ];

  return (
    <div className={classes.sectionTwoWrapper}>
      <div className={classes.heading}>
        <SubHeading className={classes.upLevelText}>
          Up-Level Your Communication
        </SubHeading>
        <Text fontSize={'18px'} className={classes.unlockText}>
          Unlock Grammarly Premium’s advanced features and suggestions.
        </Text>
      </div>

      <div className={classes.upLevel}>
        <div className={classes.section}>
          <div className={classes.topSection}>
            <span>FOR CASUAL WRITING</span>
            <SmallHeading>
              Free
            </SmallHeading>
            <div className={classes.medium}>
              Basic writing suggestions.
            </div>
            <div className={classes.flGrow}/>
            <Button>
              Included in Premium
            </Button>
          </div>
          <ul>
            {
              freeList.map(item => <li key={item.label}>
                <span className={classes.withBorder}>
                  <span className={classes.spanWrapper}>
                    <span>{item.label}</span>
                  </span>
                </span>
              </li>)
            }
          </ul>
        </div>

        <div className={classes.section}>
          <div className={classes.topSection}>
            <span>FOR WORK OR SCHOOL</span>
            <SmallHeading>
              Premium
            </SmallHeading>
            <div className={classes.medium}>
              Style, tone, and clarity improvements for writing at work and school.
            </div>
            <div className={classes.flGrow}/>
            <PrimaryButton>
              Upgrade to Grammarly Premium
            </PrimaryButton>
          </div>
          <ul>
            {
              premiumList.map(item => <li key={item.label}>
                <span className={classes.withBorder}>
                  <span className={classes.spanWrapper}>
                    <span>{item.label}</span>
                  </span>
                </span>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
