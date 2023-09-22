export const isDev = () => {
    if(process.env.REACT_APP_IS_LOCAL_DEVELOPMENT === '1')  return true;
    return false;   
}

export const getAllLocalEnv = () => {
    
}