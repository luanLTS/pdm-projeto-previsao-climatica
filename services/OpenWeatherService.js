//import * as axios from "axios";

import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/forecast",
    headers: {
        "Content-Type": "application/json",
    },
});

export function getData(cidade) {
    return baseUrl.get("/", {
        params: {
            q: cidade,
            appid: "f74a20774a615d3a7cac895e4221ea84",
            units: "metric",
        },
    });
}

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
