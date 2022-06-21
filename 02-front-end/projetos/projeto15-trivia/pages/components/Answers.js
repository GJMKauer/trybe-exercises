import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TWO, THREE, FOUR, TEN, THOUSAND } from '../helpers/helpers';
import { getAssertions, getScore } from '../../redux/actions/player';
import '../../styles/Answers.css';

let assertions = 0;
let score = 0;

class Answers extends Component {
  constructor() {
    super();

    this.state = {
      showAnswers: false,
      wasClicked: false,
      isDisabled: false,
      timer: 30,
      intervalFunc: '',
    };
  }

  componentDidMount() {
    this.counter();
  }

  static getDerivedStateFromProps(_props, state) {
    if (state.timer !== 0 && state.showAnswers === true) {
      return { showAnswers: true };
    }
    return { showAnswers: false };
  }

  handleAssertionClick = (difficulty) => {
    const { assertionsDispatch, scoreDispatch } = this.props;
    const { timer, intervalFunc } = this.state;

    switch (difficulty) {
    case 'medium':
      score += TEN + (timer * TWO);
      break;
    case 'hard':
      score += TEN + (timer * THREE);
      break;
    default:
      score += TEN + (timer);
    }

    assertions += 1;

    this.setState({
      showAnswers: true,
      wasClicked: true,
      isDisabled: true,
    }, () => {
      clearInterval(intervalFunc);
    });
    assertionsDispatch(assertions);
    scoreDispatch(score);
  }

  handleErrorClick = () => {
    const { intervalFunc } = this.state;
    this.setState({
      showAnswers: true,
      wasClicked: true,
      isDisabled: true,
    }, () => {
      clearInterval(intervalFunc);
    });
  }

  counter = () => {
    const tempo = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }), () => {
        const { timer, wasClicked } = this.state;
        if (timer === 0 || wasClicked) {
          this.setState({
            isDisabled: true,
          });
        }
      });
    }, THOUSAND);
    this.setState({
      intervalFunc: tempo,
    });
  };

  render() {
    const { question, questionsArr, nextQuestion, index, playerState } = this.props;
    const { showAnswers, timer, isDisabled, wasClicked } = this.state;

    const nextButton = (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => {
          nextQuestion();
          this.setState({
            showAnswers: false,
            isDisabled: false,
            wasClicked: false,
            timer: 30,
          });
          this.counter();
        } }
      >
        Next question
      </button>
    );
    const lastButton = (
      <button
        type="button"
        data-testid="btn-next"
        onClick={ () => {
          nextQuestion();
          this.setState({
            showAnswers: false,
            isDisabled: false,
            wasClicked: false,
            timer: 30,
          });
          this.counter();
          const storageReturn = JSON.parse(localStorage.getItem('ranking')) || [];
          storageReturn.push(playerState);
          localStorage.setItem('ranking', JSON.stringify(storageReturn));
          score = 0;
          assertions = 0;
        } }
      >
        Finish game
      </button>
    );

    return (
      <main className="page-container">
        <section className="question-header">
          <p>{ `Timer: ${timer}` }</p>
          <h1
            data-testid="question-category"
            className="question-category"
          >
            { question.category }
          </h1>
          <p
            data-testid="question-text"
            className="question-text"
          >
            { question.question }
          </p>
        </section>
        <section data-testid="answer-options" className="answer-options-container">
          {
            questionsArr.map((quest, i) => {
              let className = '';
              if (showAnswers) {
                className = quest === question.correct_answer
                  ? 'correct-answer' : 'wrong-answer';
              }
              return (
                <button
                  key={ i }
                  type="button"
                  data-testid={ quest === question.correct_answer
                    ? 'correct-answer'
                    : `wrong-answer-${question.incorrect_answers.indexOf(quest)}` }
                  onClick={ quest === question.correct_answer
                    ? () => this.handleAssertionClick(question.difficulty)
                    : this.handleErrorClick }
                  className={ className }
                  disabled={ isDisabled }
                >
                  { quest }
                </button>
              );
            })
          }
        </section>
        <div className="next-question-button-container">
          { (timer === 0 || wasClicked) && (index < FOUR ? nextButton : lastButton) }
        </div>
      </main>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  playerState: player,
});

const mapDispatchToProps = (dispatch) => ({
  assertionsDispatch: (assertion) => dispatch(getAssertions(assertion)),
  scoreDispatch: (scoreValue) => dispatch(getScore(scoreValue)),
});

Answers.propTypes = {
  question: PropTypes.objectOf(PropTypes.any).isRequired,
  questionsArr: PropTypes.arrayOf(PropTypes.any).isRequired,
  nextQuestion: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  assertionsDispatch: PropTypes.func.isRequired,
  scoreDispatch: PropTypes.func.isRequired,
  playerState: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
