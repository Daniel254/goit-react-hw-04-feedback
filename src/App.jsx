import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';

export function App() {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const clickButtonHandler = ({ target: { name: statName } }) => {
    setStats(prev => ({
      ...prev,
      [statName]: prev[statName] + 1,
    }));
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
