import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from '../../components/Header';

class Feedback extends React.Component {
  changeMessage =() => {
    const { assertions } = this.props;
    const THREE = 3;
    return assertions < THREE ? 'Could be better...' : 'Well Done!';
  }

  render() {
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">{this.changeMessage()}</h1>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  assertions: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
