import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalState$ } from '../../redux/selectors'
import useStyles from "./style"
import FileBase64 from "react-file-base64"
import { createPost, hideModal } from '../../redux/actions'


export default function CreatePostModel() {
    const [data, setData] = React.useState({
        title: "",
        content: "",
        attachment: "",
    })


    const classes = useStyles()
    const { isShow } = useSelector(modalState$)
    const dispatch = useDispatch();

    const onClose = React.useCallback(() => {
        dispatch(hideModal());
        setData({
            title: "",
            content: "",
            attachment: "",
        })
    }, [dispatch])

    const onSubmit = React.useCallback(() => {
        dispatch(createPost.createPostRequest(data))
    }, [data, dispatch])

    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <h2>Create New Post</h2>
            <form noValidate autoComplete="off" className={classes.form} >
                <TextField
                    className={classes.title}
                    required
                    label="title"
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                />
                <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder="content..."
                    value={data.content}
                    onChange={(e) => setData({ ...data, content: e.target.value })}
                />
                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type="file"
                    value={data.attachment}
                    onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
                />
                <div className={classes.footer}>
                    <Button variant="contained" color="primary" componen="span" fullWidth onClick={onSubmit} >Create</Button>
                </div>
            </form>
        </div>);

    return (
        <Modal open={isShow} onClose={onClose} >
            {body}
        </Modal>
    )
}
