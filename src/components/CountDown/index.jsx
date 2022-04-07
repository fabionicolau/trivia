import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { action } from '../../store/actions';
import { DECREMENT, SET_INTERVAL_ID } from '../../store/actions/types';
import * as S from './CountDown';

class CountDown extends React.Component {
  componentDidUpdate(prevProps) {
    const { timer: { isPlaying } } = this.props;
    if (!prevProps.timer.isPlaying && isPlaying) {
      this.countDown();
    }
  }

  countDown() {
    const { setIntervalID } = this.props;
    const OneSecond = 1000;
    const ID = setInterval(() => {
      const { timer: { counter, id }, decrement } = this.props;
      if (!counter) {
        return clearInterval(id);
      }
      decrement();
    }, OneSecond);
    setIntervalID(ID);
  }

  render() {
    const { timer: { counter } } = this.props;
    return (
      <S.CountDownContainer>
        <S.TimerParagraph counter={ counter }>{counter}</S.TimerParagraph>
      </S.CountDownContainer>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  setIntervalID: (ID) => { dispatch(action(SET_INTERVAL_ID, ID)); },
  decrement: () => dispatch(action(DECREMENT)),
});

const mapStateToProps = ({ game }) => ({
  timer: game.timer,
});

CountDown.propTypes = {
  countDownDispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);
