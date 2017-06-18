export default (url, headers = []) => {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);
    if (headers.length) {
      headers.forEach(header => {
        req.setRequestHeader(header[0], header[1]);
      });
    }
    req.onload = function() {
      if (req.status < 400) {
        resolve(req);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network Error'));
    };
    req.send();
  });
};
