import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header';
import Question from '../../components/Question';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      questionIndex: 0,
    };
  }

  render() {
    const { questionIndex } = this.state;
    const { questions } = this.props;

    console.log(questions[0]);

    return (
      <div>
        <Header />
        <Question question={ questions[questionIndex] } />
      </div>);
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  questions: state.game.questions,
});

Home.propTypes = {
  questions: propTypes.arrayOf(propTypes.any),
}.isRequired;

export default connect(mapStateToProps, null)(Home);
