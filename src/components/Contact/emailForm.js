import React from "react";
import Styles from "./contact.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Zoom from 'react-reveal/Zoom';

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#7BF2F2',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#7BF2F2',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#252526',
        },
        '&:hover fieldset': {
          borderColor: '#fdfdfd',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#7BF2F2',
        },
      },
    },
  })(TextField);

export default function Footer() {
    const [values, setValues] = React.useState({
      name: '',
      email: '',

    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

  return (
    <div >
        <div className={Styles.mainFormDiv}>
            <Zoom >
                <div>
                    <CssTextField 
                        id="outlined-name"
                        label="Name"
                        className={Styles.textField}
                        value={values.name}
                        onChange={handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <CssTextField
                        id="outlined-name"
                        label="Email"
                        className={Styles.textField}
                        value={values.email}
                        onChange={handleChange('email')}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div>
                    <CssTextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows="4"
                        className={Styles.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </div>
                <div className={Styles.submitBtn}>
                    <Button variant="outlined">
                        <span  className={Styles.textBnt}> Submit</span>
                    </Button>
                </div>
            </Zoom>
        </div>
    </div>
  );
}