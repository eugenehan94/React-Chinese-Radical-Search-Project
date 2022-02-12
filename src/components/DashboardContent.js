import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

const DashboardContent = () => {
  const reducer = useSelector((state) => state.character);
  const { radicalSelected } = reducer;
  const dispatch = useDispatch();
  console.log("radicalSelected: ", radicalSelected);

  useEffect(() => {
    const fetchChineseChar = async (selected) => {
      const chineseChar = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb`
      );
      const chineseCharDefiniation = axios.get(
        `http://ccdb.hemiola.com/characters/radicals/${selected}?filter=gb&fields=kDefinition`
      );
      await axios.all([chineseChar, chineseCharDefiniation]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          console.log("responseOne: ", responseOne.data);
          console.log("responseTwo: ", responseTwo.data);
        })
      );
    };
    fetchChineseChar(radicalSelected);
  }, [radicalSelected]);
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography paragraph>Radical {radicalSelected}</Typography>
        <Divider />
        <Typography paragraph>
          Search results for Radical {radicalSelected}
        </Typography>
        <Divider />
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Paper>
    </Box>
  );
};

export default DashboardContent;
