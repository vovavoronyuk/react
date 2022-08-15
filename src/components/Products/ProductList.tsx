import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography variant="h4" textAlign="center" margin={3}>
                Product List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone XS"
                        type="phone"
                        capacity={64}
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 11"
                        description="This is iPhone 11"
                        type="phone"
                        capacity={128}
                        price={600}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="phone"
                        capacity={256}
                        price={700}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductList
