class apiResponse {
    constructor(data, message = " success ", statuscode)
     {
         this.data = data
         this.message = message
         this.statuscode = statuscode < 400
    }
}