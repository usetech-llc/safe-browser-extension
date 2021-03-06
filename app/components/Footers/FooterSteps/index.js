import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { Redirect } from 'react-router'

import styles from 'assets/css/global.css'
import { NEXT } from '../../../../config/messages'

const cx = classNames.bind(styles)

class FooterSteps extends Component {
  constructor (props) {
    super(props)
    this.state = {
      actionURL: ''
    }
  }

  handleButton = (link) => (e) => {
    this.setState({ actionURL: link })
  }

  render = () => {
    const {
      ready,
      firstStep,
      secondStep,
      link,
      nextLink
    } = this.props
    const { actionURL } = this.state

    if (actionURL !== '') {
      return <Redirect to={actionURL} />
    }
    return (
      <footer>
        <button
          onClick={this.handleButton(link)}
          className={cx(styles.btnBack, styles.active)}
          type='button'
        />
        <ul className={styles.stepperDots}>
          <li className={firstStep && styles.active} />
          <li className={secondStep && styles.active} />
        </ul>
        <button
          onClick={this.handleButton(nextLink)}
          className={cx(styles.btnNext, ready && styles.active)}
        >
          <p>{NEXT}</p>
        </button>
      </footer>
    )
  }
}

export default FooterSteps
