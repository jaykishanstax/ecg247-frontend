import request from 'superagent';
import { config } from '../config';

// function parseJSON(response) {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   return response.json();
// }

function checkStatus(response) {
  // toggleLoader(false);
  if (response.status >= 200 && response.status < 300) {
    if (response.text === '') {
      return response.text;
    }
    if (response.headers['content-type'].search('text/html') > -1) {
      document.write(response.text);
    }
    return JSON.parse(response.text);
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON);
// }

export function setCustomHeaders(req) {
  // const user = getCurrentUserSelector();
  // const customer = user.user.activeCustomer;

  return req.set('x-real-ip', '127.0.0.2');
  // .set('X-Tenant-Id', customer.tenant)
  // .set('X-Customer-Id', customer.id)
}

export function showAlert(
  message,
  className = 'st-error-alert',
  timeout = 5000,
) {
  const toast = document.getElementById('message-container');
  if (toast) {
    if (toast.style.display === 'none') {
      toast.style.display = 'block';
      toast.className = `st-alert ${className}`;
    }
    toast.innerHTML = message;
    setTimeout(() => {
      toast.style.display = 'none';
      toast.innerHTML = '';
      toast.className = 'st-alert';
    }, timeout);
  }
}

export function handleError(err) {
  // toggleLoader(false);
  if (err && (err.status === 401 || err.status === 403)) {
    const path = window.location.pathname;
    if (['/login', '/register'].indexOf(path) === -1) {
      const host = config.baseHost;
      const port =
        window.location.port && window.location.port.length > 0
          ? `:${window.location.port}`
          : '';
      window.location = `//${host}${port}/login?redirectTo=${
        window.location.href
      }`;
    }
    const error =
      err.response && err.response.text
        ? JSON.parse(err.response.text)
        : { message: 'Error' };
    showAlert(error.message, 'st-error-alert');
    throw new Error(error.message);
  } else {
    const error =
      err.response && err.response.text
        ? JSON.parse(err.response.text)
        : { message: 'Error' };
    if (err && err.status === 400 && error.error) {
      showAlert(error.error, 'st-error-alert');
    } else {
      showAlert(error.message || error.error, 'st-error-alert');
    }
    throw new Error(error.message || error.error);
  }
}

export function doPost(url, data, extra, options) {
  if (!options || !options.ignoreLoader) {
    // toggleLoader(true);
  }
  const req = setCustomHeaders(
    request
      .post(config.baseUrl + url)
      .send(data)
      .withCredentials(),
  );
  return req.then(checkStatus).catch(handleError);
}

export function doPut(url, data, extra, options) {
  if (!options || !options.ignoreLoader) {
    // toggleLoader(true);
  }
  const req = setCustomHeaders(
    request
      .put(config.baseUrl + url)
      .send(data)
      .withCredentials(),
  );
  return req.then(checkStatus).catch(handleError);
}

export function doGet(url, extra, options) {
  if (!options || !options.ignoreLoader) {
    // toggleLoader(true);
  }
  const req = setCustomHeaders(
    request.get(config.baseUrl + url).withCredentials(),
  );
  return req.then(checkStatus).catch(handleError);
}

export function doDelete(url, data, extra, options) {
  if (!options || !options.ignoreLoader) {
    // toggleLoader(true);
  }
  const req = setCustomHeaders(
    request
      .del(config.baseUrl + url)
      .send(data)
      .withCredentials(),
  );
  return req.then(checkStatus).catch(handleError);
}
