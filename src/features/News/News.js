import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatCurrentDay } from '../../utils/dateFormatter'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))

function NewsList({ articles, deleteNew }){
    const classes = useStyles()


    const goToPost = (url) => {
        window.open(url, '_blank')
    }  

    return(
        <Grid container spacing={3} justifyContent="center">
            { articles.map((news, index) => {
                const { author, title, description, url, urlToImage, publishedAt } = news
                return(
                    <Grid key={index} item xs={11} sm={6} md={4} lg={3}>
                        <Card >
                            <CardHeader
                                title={title}
                                subheader={`${author ? `${author} -` : ''} ${formatCurrentDay(publishedAt)}`}
                                action={
                                    <IconButton aria-label="settings" onClick={() => goToPost(url)}>
                                      <LinkIcon />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                className={classes.media}
                                image={urlToImage}
                                title={title}
                                />
                        </Card>
                        <CardContent>
                            <Typography variant="body1">
                                {description}
                            </Typography>                            
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton onClick={() => deleteNew(index)}>
                                <DeleteIcon/>
                            </IconButton>
                        </CardActions>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}

export { NewsList };






