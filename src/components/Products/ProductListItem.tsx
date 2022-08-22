import React, { Component } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'

import './ProductListItem.scss'

export type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    id?: number
    image: string
}
type State = {
    count: number
}

class ProductListItem extends Component<ProductProps, State> {
    state = {
        count: 1,
    }
    // constructor(props: ProductProps) {
    //     super(props)
    //     this.state = {
    //         count: 1,
    //     }
    // }

    render() {
        return (
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h4 className="product-title">{this.props.name}</h4>
                    <div className="product-description">
                        {this.props.description}
                    </div>
                    <div className="product-features ">
                        Type: {this.props.type}
                    </div>
                    <div className="product-features">
                        Capacity:{this.props.capacity}
                    </div>
                    <div className="product-price">$ {this.props.price}</div>
                    <div className="product-quantity">
                        <Button variant="contained">-</Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                        />
                        <Button variant="contained">+</Button>
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
