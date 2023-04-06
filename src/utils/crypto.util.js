const bcrypt = require('bcrypt');

/**
 * ## hashPassword
 * @param {String} plainText 
 * @returns String
 */
exports.hashPassword = async function(plainText) {
    const hash = await bcrypt.hash(String(plainText), 10);
    return hash;
}

/**
 * ## comparePassword
 * #### Compare plain text with hashed string
 * @param {String} plainText 
 * @param {String} hash 
 * @returns Boolean
 */
exports.comparePassword = async function(plainText, hash) {
    const result = await bcrypt.compare(String(plainText), hash);
    return result;
}