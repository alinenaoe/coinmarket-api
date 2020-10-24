var apikey = {
    key: 'f9e1430b-5874-4594-9810-0bce0686ed5e'
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apikey.key}`)
    .then(response => {
        if(!response.ok) throw new Error(`Erro ao fazer requisição. Status do erro: ${response.status}`);
        return response.json();
    })
    .then(api => {
        var texto = "";
        for(var i=0; i<10; i++) {
            console.log(api.data[i])
            texto = texto +             
            `
                <div class="media">
                    <img 
                        src="coin.jpg"
                        alt="coin" 
                        class="align-self-center mr-3"
                        width="100"
                        height="60"
                    >
                    <div>
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>${api.data[i].first_historical_data}</p>
                    </div>
                </div>
            `;

            document.getElementById("coins").innerHTML = texto;
        }
    })
    .catch(error => console.log(error))
