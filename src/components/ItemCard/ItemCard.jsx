import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import addToShoppingCart from '../../actions/ShoppingCartActions/addToShoppingCart'


class ItemCard extends React.Component {
  handleAddToCart = () => {
    this.props.addToShoppingCart(this.props.item);
  }

  render() {
    const {classes, item} = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.url}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title.split(' ').slice(0, 2).join(' ')}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Typography>
            $100.00
          </Typography>
          <Button onClick={this.handleAddToCart} size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToShoppingCart: (item) => dispatch(addToShoppingCart(item))
  }
}


export default connect(
  null,
  mapDispatchToProps
)(ItemCard);