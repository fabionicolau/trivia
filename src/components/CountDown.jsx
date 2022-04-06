import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COUNTDOWN } from '../store/actions/types';
import { action } from '../store/actions';

class CoutDown extends React.Component {
  constructor() {
    super();
    this.state = { time: 30 };
  }

  componentDidMount() {
    const OneSecond = 1000;
    setInterval(() => this.countDown(), OneSecond);
  }

  countDown() {
    const { time } = this.state;
    const { countDownDispatch } = this.props;
    if (time > 0) {
      this.setState(() => ({ time: time - 1 }));
      countDownDispatch(time - 1);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <p>{time}</p>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  countDownDispatch: (count) => { dispatch(action(COUNTDOWN, count)); },
});

CoutDown.propTypes = {
  countDownDispatch: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(CoutDown);
