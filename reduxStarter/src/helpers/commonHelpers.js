
export const authCheckState = () => {
    const token = localStorage.getItem('token');
    if (!token){
        //call logout action
    } else {
        //have we passed the expiration DAte ?
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if(expirationDate > new Date()){

        }
    }
};

export default  authCheckState;