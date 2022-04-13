
import React from 'react'
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel'


function QuestionBox(params) {
  return(
<>
<Card>
  <h1>Featured</h1>
    <h5>Special title treatment</h5>
    <p>
      With supporting text below as a natural lead-in to additional content.
    </p>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      </Card>
</>

  )


}

export default QuestionBox;