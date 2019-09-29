const LoginCheck = () => {
    const checkLocalStorage = window.localStorage.getItem('auth') || false;
    console.log(checkLocalStorage);
    return checkLocalStorage
}

export default LoginCheck;