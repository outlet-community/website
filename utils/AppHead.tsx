import NextHead from 'next/head'
import type { FC } from 'react'

const defaultDescription = 'Outlet Community'
const defaultOGURL = ''
const defaultOGImage = ''

interface Props {
  title?: string
  description?: string
  url?: string
  socialImage?: string
}

const AppHead: FC<Props> = ({ title, description, url, socialImage }) => (
  <NextHead>
    <meta key="charset" charSet="UTF-8" />
    <title>{title}</title>
    <meta key="description" name="description" content={description} />
    <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
    <meta key="og-url" property="og:url" content={url} />
    <meta key="og-title" property="og:title" content={title} />
    <meta key="og-description" property="og:description" content={description} />
    <meta key="twitter-site" name="twitter:site" content={url} />
    <meta key="twitter-card" name="twitter:card" content="summary_large_image" />
    <meta key="twitter-image" name="twitter:image" content={socialImage} />
    <meta key="og-image" property="og:image" content={socialImage} />
    <meta key="og-image-width" property="og:image:width" content="1200" />
    <meta key="og-image-height" property="og:image:height" content="630" />
  </NextHead>
)

AppHead.defaultProps = {
  title: process.env.NEXT_PUBLIC_APP_NAME || '',
  description: defaultDescription,
  url: defaultOGURL,
  socialImage: defaultOGImage,
}

export default AppHead
