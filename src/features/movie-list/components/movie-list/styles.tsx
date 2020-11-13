import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // '&::after': {
            //     content: '":"'
            // },
            fontSize: `${theme.spacing(4)}px`,
        }
    })
);