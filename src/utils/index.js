module.exports = {
    emailCheck(x) {
        const email = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
        return x.match(email)
    },
    passwordCheck(x) {
        const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return x.match(password)
    },
    pageData() {
        const pagesData = localStorage.getItem("pageData");
        const parsedData = JSON.parse(pagesData);
        return (parsedData)
    }
}