import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import { useState } from 'react';

export function App() {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const clickButtonHandler = ({ target: { name: statName } }) => {
    setStats({
      ...stats,
      [statName]: stats[statName] + 1,
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stats)}
          onLeaveFeedback={clickButtonHandler}
        />
      </Section>
      <Section title="Statisctics">
        <Statistics stats={stats} />
      </Section>
    </>
  );
}
