import moment from "moment-timezone";
import { axiosInstance } from "./AxiosInstance";

const getHeader = () => {
    const authToken = localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}authToken`);
    const timezone = moment.tz.guess(); // Get device's current time zone
    const headers = {
        timezone: timezone,
        Authorization: "Bearer " + authToken, //the token is a variable which holds the token
    };
    return headers;
};

const postRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };
    try {
        const response = await axiosInstance.post(path, data, { headers: getHeader() });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const deleteRequest = async (path) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axiosInstance.delete(path, { headers: getHeader() });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const putRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axiosInstance.put(path, data, { headers: getHeader() });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const getRequest = async (path) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axiosInstance.get(path, { headers: getHeader() });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

//common login api for admin and super visor
export const login = async (data) => {
    const path = "auth/login";
    return await postRequest(path, data);
};

export const fetchFeeds = async ({ page = 1, limit = 10, search = '', radius = '' }) => {

    const params = new URLSearchParams({
        page,
        limit
    });

    if (search) {
        params.append('search', search);
    }
    
    if (radius) {
        params.append('radius', radius);
    }

    const path = `feeds?${params.toString()}`;
    return await getRequest(path);

};


// Not Used currently but may be used in future
export const getCustomersAPI = async ({ page, search = "", limit }) => {
    const path = `customer?search=${search}&page=${page}&limit=${limit}`;
    return await getRequest(path);
}

export const getCustomerDetailAPI = async ({ id }) => {
    const path = `customer/${id}`;
    return await getRequest(path);
}

export const getProjectsAPI = async ({ page, limit, status }) => {
    const path = `project?page=${page}&limit=${limit}&status=${status}`;
    return await getRequest(path);
}

export const getProjectDetailAPI = async ({ id }) => {
    const path = `project/${id}`;
    return await getRequest(path);
}

export const getContractorsAPI = async ({ page, limit }) => {
    const path = `contractor?page=${page}&limit=${limit}`;
    return await getRequest(path);
}

export const getContractorDetailAPI = async ({ id }) => {
    const path = `contractor/${id}`;
    return await getRequest(path);
}

export const fetchChatMembersProfileAPI = async (data) => {
    const path = `chat/users/profiles`
    return await postRequest(path, data);
}


export const fetchUsersForChatAPI = async ({ search = "" }) => {
    const path = `chat/users?search=${search}`;
    return await getRequest(path)
}

export const uploadChatMediaAPI = async (data) => {
    const path = `chat/contentUpload`;
    return await postRequest(path, data);
}