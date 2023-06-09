import axios from 'axios'

export const getProjects = async () => {
    try {
        const res = await axios.get(process.env.REACT_APP_API + "/projects", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}


export const getProjectsOnSearch = async (search) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/projects/search/${search}`, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        return res.data;
    }
    catch (err) {
        console.log(err);
    }
}

export const getProjectsOnType = async (type) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/projects/type/${type}`, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        return res.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const getProjectsOnDomain = async (domain) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/projects/domain/${domain}`, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        return res.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const getProjectsOnTypeAndDomain = async (type, domain) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API + `/projects/type/${type}/domain/${domain}`, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        return res.data;
    }
    catch (err) {
        console.log(err)
    }
}
