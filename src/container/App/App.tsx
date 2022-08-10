import React from 'react'

type Props = {
    title: string
}

const Applist = () => {
    return (
        <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    )
}

const AppHeader = (props: Props) => {
    return <h1>Hello {props.title}</h1>
}

const App = () => {
    return (
        <>
            <AppHeader title="App.js" />
            <AppHeader title="React.js" />
            <Applist />
        </>
    )
}

export default App
