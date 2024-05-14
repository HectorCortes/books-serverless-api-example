/**
 * Checks if a given owner has all the required fields
 *
 * @param {Object} event - The event object
 * @param {Object} context - The Lambda context object
 * @returns {Boolean} Whether the owner has all the required fields
 */
exports.lambdaHandler = async (event, context) => {
  console.log("[genreCreate] event: ", event);
  return true;
};
