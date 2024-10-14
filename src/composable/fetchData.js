export async function fetchD(data, type,method) {
    const response = await fetch(`http://localhost:4005/${type}`, {
        method: method,
        headers: {
            "Content-Type": "application/json" // Utilisez `headers` pour définir le type de contenu
        },
        body: JSON.stringify(data),
        credentials: 'include'
    });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    return await response.json();
}