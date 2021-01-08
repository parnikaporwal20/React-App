export const UPDATE_SERVICES = 'UPDATE_SERVICES';

export const updateServices = (services) => ({
    type: UPDATE_SERVICES,
    services
});

export const fetchServices = () => async(dispatch) => {
    return new Promise((resolve, reject) => {
        try {
            const response = fetch('https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services', {
                mode: 'cors',
                // headers: {
                //     'Access-Control-Allow-Origin': '*'
                // }
            });
            response.then(response => {
                return response.json();
            }).then(data => {
                dispatch(updateServices(data));
                return resolve(true);
            })
        } catch (error) {
            console.error(error);
            reject(error);
        }
    })
}