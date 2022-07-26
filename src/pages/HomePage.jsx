import React from 'react'
import Header from '../components/Header/Header'
import PostList from '../components/PostList'
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./style";
import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';
import CreatePostModel from '../components/CreatePostModel';

const HomePage = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const openCreatePostModal = React.useCallback(() => {
        dispatch(showModal())
    }, [dispatch])

    return (
        <Container maxWidth="lg" >
            <Header />
            <PostList />
            <CreatePostModel />
            <Fab color="primary" className={classes.fab} onClick={openCreatePostModal} >
                <AddIcon />
            </Fab>
        </Container>
    )
}

export default HomePage