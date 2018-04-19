// Response code global variable
var apiStatus = {
  ok: {
    statusCode: 200,
    resmsg: 'Request was successfully processed'
  },
  created: {
    statusCode: 201,
    resmsg: 'Request has been fulfilled and a new resource has been created'
  },
  accepted: {
    statusCode: 202,
    resmsg: 'Request has been accepted but not yet processed'
  },
  badrequest: {
    statusCode: 400,
    resmsg: 'The request was not understood by the server, generally due to bad syntax or not correctly set to application/json.'
  },
  unauthorized: {
    statusCode: 401,
    resmsg: 'The necessary authentication credentials are not present in the request or are incorrect.'
  }
}

module.exports = {
  apiStatus,
}
