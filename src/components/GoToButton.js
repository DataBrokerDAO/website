import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import ScaleLoader from 'react-spinners/dist/spinners/ScaleLoader'

class GoToButton extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static getDerivedStateFromProps(newProps, prevState) {
    if (
      !prevState.lazyContentLoaded &&
      newProps.lazyContentLoaded &&
      prevState.activated
    ) {
      setTimeout(() => goToSection(newProps.name), 100)

      return {
        activated: false,
        lazyContentLoaded: true,
      }
    }

    return null
  }

  componentDidUpdate() {}

  clickHandler() {
    this.state.lazyContentLoaded
      ? goToSection(this.props.name)
      : this.setState({ activated: true })
  }

  isLoading() {
    return this.state.activated && !this.state.lazyContentLoaded
  }

  render() {
    const loading = (
      <div style={{ textAlign: 'center' }}>
        <ScaleLoader height={6} width={2} color="black" />
      </div>
    )
    const button = (
      <a name={this.props.name} onClick={this.clickHandler.bind(this)}>
        <FormattedMessage id={this.props.id} />
      </a>
    )

    return this.isLoading() ? loading : button
  }
}

function goToSection(name) {
  name && window.location.replace(`#${name}`)
}

function mapStateToProps({ appState = {} }) {
  const { bottomContentMounted, middleContentMounted } = appState

  return {
    lazyContentLoaded: bottomContentMounted && middleContentMounted,
  }
}

export default connect(mapStateToProps)(injectIntl(GoToButton))
