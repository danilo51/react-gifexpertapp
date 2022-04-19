

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=vD4GqvzGqxyVQ99NPXLOoqEu1iFesjVw`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    //trabajo con data para crear un objeto con la información que me interesa
    const gifs = data.map( img => {

        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title,

        }

    });

    return gifs;
}