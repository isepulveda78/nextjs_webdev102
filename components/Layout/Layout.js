import Head from 'next/head'
import Navbar from './Navbar'
import { Container } from 'semantic-ui-react'
import nprogress from 'nprogress'
import Router from 'next/router'

function Layout({title, children, keywords, description}){

    //progress bar
    Router.onRouteChangeStart = () => nprogress.start()
    Router.onRouteChangeComplete = () => nprogress.done()
    Router.onRouteChangeError = () => nprogress.done()
    
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.png" sizes="16*16" type="image/png" />
                <link rel="stylesheet" type="text/css" href="/listMessages.css" />
                <link rel="stylesheet" type="text/css" href="/styles.css" />
                <link rel="stylesheet" type="text/css" href="/nprogress.css" />
           </Head>
          <Navbar />
          <Container>
              {children}
          </Container>
        </>
    )
}

Layout.defaultProps = {
    title: 'WebDev102',
    keywords: 'Web development blog',
    descrition: 'Blog about Web development'
}

export default Layout