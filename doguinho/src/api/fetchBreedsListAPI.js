export const fetchBreedsListAPI =async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        if(response.ok) {
            const data = await response.json();
            return Object.keys(data.message)
        }
    } catch(e) {
        alert('Desculpe, não podemos carregar os dados do doguinho!')
    }
}