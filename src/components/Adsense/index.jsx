import React from 'react'
import PropTypes from 'prop-types'

class Adsense extends React.Component {
  componentDidMount() {
    const { clientId } = this.props
    if (clientId) {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }

  render() {
    const { clientId, slotId, format } = this.props

    return clientId ? (
      <div className="ad">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={format}
        />
      </div>
    ) : (
      ''
    )
  }
}

Adsense.defaultProps = {
  clientId: '',
  slotId: '',
}

Adsense.propTypes = {
  clientId: PropTypes.string,
  format: PropTypes.string.isRequired,
}

export default Adsense
