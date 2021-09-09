import { useState } from "react";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (feedbak) => {
    switch (tyfeedbakpe) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };


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
            options={("good", "neutral", "bad")}
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
