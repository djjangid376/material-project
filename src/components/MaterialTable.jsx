import React from "react";
import {
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function MaterialTable() {
  
  const [alignment, setAlignment] = React.useState("inbuilt");

  const handleChange = (newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Grid
      className="tableHeader"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      {/* table header buttons */}
      <Grid
        spacing={2}
        container
        item
        md={4}
        sm={6}
        direction="row"
        justifyContent="space-between"
      >
        <Grid item>
          <FormControl sx={{ minWidth: 140 }} size="small">
            <InputLabel>Home Page</InputLabel>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <ToggleButtonGroup
            exclusive
            value={alignment}
            onChange={handleChange}
            size="small"
          >
            <ToggleButton value="inbuilt">InBuilt</ToggleButton>
            <ToggleButton value="yourOwn">Your Own</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>

{/* add widget button */}

      <Grid item>
        <Button variant="contained" sx={{ backgroundColor: "#01314B" }}>
          Add Widget
        </Button>
      </Grid>
    </Grid>
  );
}

export default MaterialTable;
