import ProductList from 'components/Products/ProductList'
import React from 'react'
import { Container } from '@mui/material'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Container>
                <ProductList />
            </Container>
        </>
    )
}

export default Main
