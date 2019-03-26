import React from 'react'
import styled from 'styled-components'

const TabSet = styled.div`
    display: flex;
    padding: 0.21875rem 3.0625rem;
    margin-top: 1.21875rem;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.6);
    height: 3.375rem;
`

const TabButton = styled.img` 
    height: 2.90625rem;
    width: 5.4375rem;
`

class Tab extends React.Component {
    constructor(props) {
        super(props) 
    }

    handleClick = (id, e) => {
        if (id == 1) {
            console.log("yes")
        } 
        console.log("id:"+id)
        console.log("e"+e)
    }

    render() {
        return (
            <TabSet>
                <TabButton id='1' src={require('../images/tabs/t1.png')} onClick={this.handleClick.bind(this, 1)} />
                <TabButton id='2' src={require('../images/tabs/t2.png')} />
                <TabButton id='3' src={require('../images/tabs/t3.png')} />
            </TabSet>
        )
    }
}

export default Tab