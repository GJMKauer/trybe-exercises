import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { THREE, FOUR, POINT_FIVE } from '../helpers/helpers';
import Answers from './Answers';
import '../../styles/TriviaCard.css';

class TriviaCard extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  nextQuestion = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  render() {
    const { results } = this.props;
    const { index } = this.state;
    if (Object.keys(results).length !== 0 && index <= FOUR) {
      const { response_code: code, results: resultados } = results;
      if (code === THREE) {
        localStorage.clear();
        return <Redirect to="/" />;
      }
      const question = resultados[index];
      const questionsArr = [question.correct_answer, ...question.incorrect_answers];
      questionsArr.sort(() => POINT_FIVE - Math.random());
      return (
        <Answers
          question={ question }
          questionsArr={ questionsArr }
          nextQuestion={ this.nextQuestion }
          index={ index }
        />
      );
    }
    if (Object.keys(results).length !== 0 && index > FOUR) {
      return <Redirect to="/feedback" />;
    }
    return (
      <main className="loading-api-container">
        <p>Loading questions...</p>
      </main>
    );
  }
}

const mapStateToProps = ({ questionsReducer }) => ({
  results: questionsReducer.results,
});

TriviaCard.propTypes = {
  results: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(TriviaCard);
