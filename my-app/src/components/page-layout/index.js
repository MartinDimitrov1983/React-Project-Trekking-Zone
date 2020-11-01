import React  from 'react'
import Header from '../header'
import Footer from '../footer'

const PageLayout = (props) => {
    
    return (
        <React.Fragment>
            <Header />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;