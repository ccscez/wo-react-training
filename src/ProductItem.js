import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, CardFooter, Button } from 'reactstrap';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleAddProduct(e){
        this.props.handleAddProduct(this.props.product);
    }
    render() {
        return (
            <Card className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=354%C3%97180&w=354&h=180" alt="Card image cap" />
                <CardBlock>
                  <CardTitle>{this.props.product.name}</CardTitle>
                  <CardSubtitle>{this.props.product.price} $</CardSubtitle>
                  <CardText>{this.props.product.description}</CardText>
                </CardBlock>
                <CardFooter>
                  <Button color="primary" data-product-id={this.props.product.id} onClick={this.handleAddProduct}>Add</Button>
                </CardFooter>
            </Card>
        )
    }
}
