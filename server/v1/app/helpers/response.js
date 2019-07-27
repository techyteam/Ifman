class ResponseMsg {
    /**
     * @static responseErr
     * @param { Object } res
     * @param { Number } status
     * @param { Object } message
     * @returns respsonse body
     * @description ddefines the standard response format in the case of an error
     * @memberof ResponseMsg
     */
    static resErr(res, status, message) {
      return res.status(status).json({
        status: 'error',
        error: message,
      });
    }
  
    /**
     * @static response
     * @param { Object } res
     * @param { Number } status
     * @param { Object } message
     * @returns respsonse body
     * @description ddefines the standard response format when a data object is to be returned
     * @memberof ResponseMsg
     */
    static resLong(res, status, data) {
      return res.status(status).json({
        status: 'success',
        data,
      });
    }
  
    /**
     *
     *
     * @static
     * @param {*} res
     * @param {*} status
     * @param {*} message
     * @returns response body
     * @memberof ResponseMsg
     */
    static resShort(res, status, message) {
      return res.status(status).json({
       status: 'success',
       data:{
        message 
       }
      });
    }
  }
  
  export default ResponseMsg;