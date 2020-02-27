/* eslint no-console: ["error", { allow: ["error"] }] */
/* eslint react/no-this-in-sfc: 0 */ // --> OFF

/**
 * Wraps the browser's window.localStorage.
 * Prefixes all keys.
 *
 * @type {{
  *  prefix: string, namespace prefix for all keys passed to get and set
  *  get: localStorageUtil.get, function to retrieve the local storage value
  *  remove: localStorageUtil.remove, function to remove the local storage value
  *  set: localStorageUtil.set, function to set the local storage value
  * }}
  */
 const localStorageUtil = {
   prefix: 'com.bsb',
   get(key) {
     if (window.localStorage) {
       if (!key) {
         throw new Error('localStorageUtil.get requires key')
       }
 
       let value = null
       try {
         value = window.localStorage.getItem(`${this.prefix}.${key}`)
         return value ? JSON.parse(value) : value
       } catch (e) {
         console.error('localStorage setItem encountered an error', e)
       }
     } else {
       console.error('localStorage is not supported')
     }
     return null
   },
   remove(key) {
     if (window.localStorage) {
       if (!key) {
         throw new Error('localStorageUtil.remove requires key')
       }
 
       try {
         return window.localStorage.removeItem(`${this.prefix}.${key}`)
       } catch (e) {
         console.error('localStorage removeItem encountered an error', e)
       }
     } else {
       console.error('localStorage is not supported')
     }
     return null
   },
   set(key, value) {
     if (window.localStorage) {
       if (!key) {
         throw new Error('localStorageUtil.set requires key')
       }
 
       if (value === undefined) {
         throw new Error('localStorageUtil.set requires value')
       }
 
       try {
         window.localStorage.setItem(`${this.prefix}.${key}`, JSON.stringify(value))
       } catch (e) {
         console.error('localStorage setItem encountered an error', e)
       }
     } else {
       console.error('localStorage is not supported')
     }
     return undefined
   },
 }
 
 export default localStorageUtil
 