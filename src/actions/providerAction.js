export const UPDATE_PROVIDERS = 'UPDATE_PROVIDERS';

export const updateProviders = (providers) => ({
    type: UPDATE_PROVIDERS,
    providers
})


export const fetchProviders = () => async(dispatch) => {

    return new Promise((resolve, reject) => {
        try {
            const response = fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10', {
                mode: 'cors',
                // headers: {
                //     'Access-Control-Allow-Origin': '*'
                // }
            });
            response.then(response => {
                return response.json();
            }).then(data => {
                dispatch(updateProviders(data));
                return resolve(true);
            })
        } catch (error) {
            console.error(error);
            reject(error);
        }
    })


}