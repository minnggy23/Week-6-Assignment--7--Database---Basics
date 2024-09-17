import '../styles/globals.css';
// Bring in the BootStrap css File
import  '../styles/bootstrap.min.css';
 
// define our nextjs myApp
function myApp({Component, pageProps}){
    return(
        <Component{...pageProps} />
    );
}

export default myApp;