function includeHTML(fileURL) {
  return new Promise((resolve, reject) => {
      const xRequest = new XMLHttpRequest()
      xRequest.open("GET", fileURL)
      xRequest.onload = function () {
        (this.status >= 200 && this.status < 300) ? resolve(xRequest.responseText) : reject({status: this.status, statusText: xRequest.statusText})
      }
      xRequest.onerror = function(){
         reject({status: this.status, statusText: xRequest.statusText})
      }
      xRequest.send()
    })
}
export default includeHTML;
