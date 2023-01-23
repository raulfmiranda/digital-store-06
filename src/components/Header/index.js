import {Grid} from "@mui/material";

import "./styles.scss";

export default function Header() {
    return (
        <div className="header">
            <Grid container>
                <Grid item xs={3}>
                    Logo da Digital
                </Grid>

                <Grid item xs={5}>
                    Campo de busca
                </Grid>

                <Grid item xs={4}>
                    Botões
                </Grid>
            </Grid>
        </div>
    );
}
