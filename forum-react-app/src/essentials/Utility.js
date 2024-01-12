import { setCookie, deleteCookie } from "./CookieHandler";

export const permitLogin = (userData, setCurrentUser) => {

    const [firstName, lastName] = userData.user.username.split(" ");
    const cookieData = {
        firstName: firstName,
        lastName: lastName,
        id: userData.user.id
    }

    // console.log(cookieData);
    setCookie("user", cookieData, 1);
    setCurrentUser(cookieData);
};   

export const logoutUser = (setCurrentUser) => {
    deleteCookie("user");
    setCurrentUser(null);
};  

