import React, {useState} from 'react';
import {connect} from 'react-redux'
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
//npm i @material-ui/lab
import Autocomplete from '@material-ui/lab/Autocomplete';

const NewProjects = (props) => {
    const [select, setSelect]=useState([])
    console.log(select)

    const handleChange = ((e) => {
        setSelect({
            ...select,
            [e.target.name]: e.target.value
        })
   
    })

  return (
    <form>
    <div style={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={props.allTechs}
        getOptionLabel={option => option.tech}
        defaultValue={[props.allTechs[13]]}
        renderInput={select => (
          <TextField
            {...select}
            variant="standard"
            label="Multiple values"
            placeholder="1-Favorites"
            margin="normal"
            fullWidth
            name="multivalues"
            type="text"
            value={select.multivalues}
            onChange={handleChange}
          />
        )}
      />
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={props.allTechs}
        getOptionLabel={option => option.tech}
        defaultValue={[props.allTechs[13]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
            margin="normal"
            fullWidth
          />
        )}
      /> */}
      {/* <Autocomplete
        multiple
        id="tags-filled"
        options={props.allTechs.map(option => option.tech)}
        defaultValue={[props.allTechs[13].tech]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={params => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
            margin="normal"
            fullWidth
          />
        )}
      /> */}
    </div>
    </form>
  );
}
const mapStateToProps = state => {
    return {
     allTechs : state.techReducer.techs
    }; 
  };
  
export default connect(
    mapStateToProps,
  )(NewProjects);

