import { Seeker } from './features/Seeker/Seeker';
import { useForm } from './hooks/hooks'
import { useSelector, useDispatch } from 'react-redux';
import { seekerData, fetchNewsAsync, deleteNew } from './features/Seeker/seekerSlice'
import { NewsList } from './features/News/News';
import { Box, Grid, CircularProgress } from '@mui/material';

function App() {

  const { formData, handleInputChange } = useForm({ new: '' })
  const { data, fetching, error } = useSelector(seekerData);
  const dispatch = useDispatch();

  const onClickSearchNew = () => {
    dispatch(fetchNewsAsync(formData.new))
  }

  const deleteNewFunc = (index) => {
    dispatch(deleteNew(index))
  }

  return (
    <>
      <Box mt={5} mb={5}>
        <Seeker onChange={handleInputChange} onClick={onClickSearchNew} />
      </Box>
      {fetching
        ? <Grid container justifyContent="center"><Grid item><CircularProgress /></Grid></Grid>
        : <NewsList articles={data} deleteNew={deleteNewFunc} />
      }
    </>
  );
}

export default App;
