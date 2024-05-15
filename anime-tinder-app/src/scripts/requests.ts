const URL_USER_COLLECTION = "http://127.0.0.1:5000/get_name/";

export function requestUserCollection() {
  return fetch(URL_USER_COLLECTION);
}