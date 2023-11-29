function useAuth(){
    function handleAddToken(token:string){
        localStorage.setItem('token',token)
    }

    function handleClearToken() {
        localStorage.removeItem('token');
    }

    function handleGetToken(): string | null{
        return localStorage.getItem('token');
    }

    return{
        handleAddToken,
        handleClearToken,
        handleGetToken
    }
}

export default useAuth;