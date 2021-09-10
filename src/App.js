import { useState } from "react";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

function App() {
  
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const onLeaveFeedback = (e) =>
    setState({
      ...state,
      [e.target.name]: state[e.target.name] + 1,
    });

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={"Statistics"}>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
