import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import classes from './ProgressCircle.module.scss';

function ProgressCircle({count, offset}) {

  const counter = (endNumber) => {
    const speed = 40;

    incNbrRec(0, endNumber);

    function incNbrRec(i, endNbr, elt) {
      if (i <= endNbr) {
        setProgressCount(i);
        setTimeout(function() {
          incNbrRec(i + 1, endNbr, elt);
        }, speed);
      }
    }
  }

  const [mounted, setMounted] = useState(false);
  const [progressCount, setProgressCount] = useState(0)

  useEffect(() => {
    setMounted(true);
    counter(count);
  }, []);

  return (<div className={classes.progressWrapper}>

      <svg className={classes.progressSVGWrapper}>
        <defs>
          <linearGradient id="grad1" gradientUnits="userSpaceOnUse" x1="70%" y1="70%" x2="0%" y2="0%">
            <stop stopColor="#4FDBCA" offset="0"/>
            <stop stopColor="#4CD696" offset="1"/>
          </linearGradient>
        </defs>
        <circle stroke="#e6e6e8" cx="73" cy="73" r="71" strokeWidth="4"/>
        <circle className={classNames({
          [classes.circle]: true,
        })}
                style={{
                  strokeDashoffset: mounted ? offset : 534
                }} cx="73" cy="73" r="71" stroke="#15C39A"
                strokeWidth="4"/>
      </svg>
      <div className={classes.count}>{progressCount}<span>%</span></div>
    </div>
  );
}

export default ProgressCircle;
