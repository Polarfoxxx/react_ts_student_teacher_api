
const servicesErrorResponze = {
    errorResponze
}
export default servicesErrorResponze

function errorResponze(status: number): string {
let stringStatus: string = ""
    if(status === 200) {
        stringStatus = "OK"
    }else if (status === 201) {
        stringStatus = "Created"
    }else if (status === 202) {
        stringStatus = "Accepted"
    }else if (status === 204) {
        stringStatus = "Accepted"
    }else if (status === 400) {
        stringStatus = "Bad Request"
    }else if (status === 401 ) {
        stringStatus = "Unauthorized"
    }else if (status === 402) {
        stringStatus = "Payment Required"
    }else if (status === 403) {
        stringStatus = "Forbidden"
    }else if (status === 404) {
        stringStatus = "Not Found"
    }else{stringStatus = "no ident status"}

return(
    stringStatus
)
}
