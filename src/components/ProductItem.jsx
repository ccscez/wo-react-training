import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, CardFooter, Button} from 'reactstrap';
import ShoppingCartActions from '../actions/ShoppingCartActions'
import Formatter from '../libs/Formatter';

export default class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleAddProduct = this.handleAddProduct.bind(this);
    }
    handleAddProduct = () => {
        ShoppingCartActions.addProduct(this.props.product)
    }
    render() {

        let { id, name, price, description } = this.props.product;

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Card>
                    <CardImg top width="100%"
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=354%C3%97180&w=354&h=180"
                        alt="Card image cap" />
                    <CardBlock>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{Formatter.money(price)}</CardSubtitle>
                        <CardText>{description}</CardText>
                    </CardBlock>
                    <CardFooter>
                        <Button color="primary"
                            data-product-id={id}
                            onClick={this.handleAddProduct}>Add</Button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};
