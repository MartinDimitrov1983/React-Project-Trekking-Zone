import React  from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

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