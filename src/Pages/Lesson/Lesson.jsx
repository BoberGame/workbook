import React, { useContext, useState } from 'react';
import { UserContext } from '../../context';
import { useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import AnswerList from '../../components/AnswerList/AnswerList';
import styles from './Lesson.module.scss';
import LessonFooter from './LessonFooter';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import LessonResult from '../../components/LessonResult/LessonResult';
import Instruments from '../../components/Instruments/Instruments';

const LessonHeader = ({ question, step, maxSteps }) => {
  return (
    <div className={styles.header}>
      <ProgressBar currentStep={step} maxSteps={maxSteps} />
      <Question question={question.title} imgSrc={question.imgSrc} />
    </div>
  );
};

const Lesson = () => {
  const [step, setStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const { lessons } = useContext(UserContext).course;
  const { lessonId } = useParams();
  const [currentAnswer, setCurrentAnswer] = useState([]);

  const { questions } = lessons[lessonId - 1];
  const question = questions[step];
  const isLessonEnd = step === questions.length;

  const saveUserAnswer = () => {
    if (currentAnswer.length === 0) {
      if (userAnswers.length === 0) {
        setUserAnswers([...userAnswers, { answerIndex: '', answerText: '', questionIndex: step }]);
      } else if (userAnswers.length > 0 && !userAnswers[step]) {
        setUserAnswers([...userAnswers, { answerIndex: '', answerText: '', questionIndex: step }]);
      }
    } else {
      setUserAnswers((prevItems) => {
        const newItems = [...prevItems];
        newItems[step] = currentAnswer;
        return newItems;
      });
      setCurrentAnswer([]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        {isLessonEnd ? (
          <LessonResult userAnswers={userAnswers} questions={questions} />
        ) : (
          <>
            <LessonHeader
              step={step + 1}
              maxSteps={questions.length}
              isLessonEnd={isLessonEnd}
              question={question}
            />
            <AnswerList
              answers={question.answers}
              answersType={question.type}
              currentAnswer={currentAnswer}
              setCurrentAnswer={setCurrentAnswer}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
              questionIndex={step}
            />
          </>
        )}
        <LessonFooter
          step={step}
          setStep={setStep}
          questions={questions}
          isLessonEnd={isLessonEnd}
          saveUserAnswer={saveUserAnswer}
        />
      </div>
      <Instruments />
    </div>
  );
};

export default Lesson;
