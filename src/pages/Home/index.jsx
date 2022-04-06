import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Question from '../../components/Question';
import { fetchQuestion } from '../../services/services';

const QUESTION_AMOUNT = 5;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionIndex: 0,
    };
  }

  componentDidMount() {
    const { token } = this.props;
    fetchQuestion(QUESTION_AMOUNT, token).then((res) => {
      const { results } = res;
      this.setState({ questions: results });
    });
  }

  render() {
    const { questions, questionIndex } = this.state;
    return (
      <div>
        <Header />
        {questions.length > 0 && (
          <Question question={ questions[questionIndex] } />
        )}
      </div>);
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Home.propTypes = {
  token: propTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Home);
