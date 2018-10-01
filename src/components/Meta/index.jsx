import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import get from 'lodash/get'

const Meta = ({ site, title }) => {
  const siteTitle = get(site, 'title')

  // TODO
  title = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `@${get(site, 'twitter')}`,
        },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: get(site, 'description'),
        },
        {
          property: 'og:url',
          content: `${get(site, 'siteUrl')}/profile`,
        },
        {
          property: 'og:image',
          content: `${get(site, 'siteUrl')}/img/profile.jpg`,
        },
      ]}
    />
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    siteUrl: PropTypes.string.isRequired,
  }),
}

export default Meta
