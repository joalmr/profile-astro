const domain = import.meta.env.STRAPI_DOMAIN;

const apiUrl = `${domain}/api`;

export const getGlobal = async () => {
    const res = await fetch(`${apiUrl}/global`);
    if (!res.ok) throw new Error("Failed to fetch global info");

    const data = await res.json();
    // console.log("getGlobal",data);
    
    return data;
};

export const getPages = async () => {
    const res = await fetch(`${apiUrl}/pages`);
    if (!res.ok) throw new Error("Failed to fetch pages");

    const data = await res.json();
    // console.log("getPages",data);
    
    return data;
};

export const getAbout = async () => {
    const res = await fetch(`${apiUrl}/about?populate=*`);
    if (!res.ok) throw new Error("Failed to fetch pages");

    const data = await res.json();
    // console.log("getAbout",data);
    
    return data;
};