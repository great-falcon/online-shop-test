import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

class ItemCard extends React.Component {
  render() {
    const { classes, item, handleAddToCart } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.imageUrl}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title
                .split(" ")
                .slice(0, 2)
                .join(" ")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <Typography>${item.price.toFixed(2)}</Typography>
          <Button onClick={handleAddToCart} size="small" color="primary">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(ItemCard);
