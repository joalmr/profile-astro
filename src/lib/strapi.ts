const domain = import.meta.env.STRAPI_DOMAIN;

const apiUrl = `${domain}/api`;

export const getGlobal = async () => {
    console.log("getGlobal");
    
    const res = await fetch(`${apiUrl}/global`);
    if (!res.ok) throw new Error("Failed to fetch global info");

    const data = await res.json();
    console.log(data);
    
    return data;
};

export const getPages = async () => {
    console.log("getPages");
    
    const res = await fetch(`${apiUrl}/pages`);
    if (!res.ok) throw new Error("Failed to fetch pages");

    const data = await res.json();
    console.log(data);
    
    return data;
};