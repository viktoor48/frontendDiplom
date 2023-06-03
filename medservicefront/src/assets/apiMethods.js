
export function patchMethod(url, data) {
    const headers = {
        "accept": "application/ld+json",
        "Content-Type": "application/merge-patch+json"
    };

    return fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify(data)
    });
}

export function getMethod(url) {
    const headers = {
        'accept': 'application/ld+json'
    };

    return fetch(url, {
        method: "GET",
        headers,
    });
}