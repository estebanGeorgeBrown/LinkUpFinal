import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';

// MUI Stuff

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
    card: {
        display: 'flex'
    }
}
export class Post extends Component {

    render() {

        const { classes, post : {body, createdAt, userImage, userHandle, postId, likeCount, commentCount} } = this.props
        return (
            <Card>
                <CardMedia
                image={userImage}
                title="Profile image"/>
                <CardContent>
                    <Typography variant="h5">{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">
                    {createdAt.toString()}
                    </Typography> 
                    <Typography variant="body1">{body}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Post);
