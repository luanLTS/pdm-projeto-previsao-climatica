import axios from "axios";

const base = axios.create({
    baseURL:
        "https://g8c2b7c2d374e22-baseexemplo.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/fatec_ipi_20222_pdm_tarde_historico_previsoes/",
    headers: { "Content-Type": "application/json" },
});

export const saveHistory = (cidade) => {
    let history = {
        representante: "Weslley",
        cidade,
        data_previso: new Date(),
    };

    return base.post("/", history);
};

export const getHistory = () => {
    return base.get("/");
};
