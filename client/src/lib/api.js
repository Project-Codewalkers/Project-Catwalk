const baseURL = 'http://localhost:3000';
// const PORT = 3000;

const defaultOptions = {
  method: 'get',
};

function fetchCall(resource, options) {
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Retrieves the list of products.
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an array of items as objects.
 */
function listProducts(page, count) {
  const options = defaultOptions;
  const params = {};
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `${baseURL}/products?${new URLSearchParams(params)}`;
  return fetchCall(resource, options);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function productInformation(productId) {
  const options = defaultOptions;
  const resource = `${baseURL}/products/${productId}`;
  return fetchCall(resource, options);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function productStyles(productId) {
  const options = defaultOptions;
  const resource = `${baseURL}/products/${productId}/styles`;
  return fetchCall(resource, options)
    .then(({ results }) => results);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function relatedProducts(productId) {
  const options = defaultOptions;
  const resource = `${baseURL}/products/${productId}/related`;
  return fetchCall(resource, options);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 // eslint-disable-next-line max-len
 * @param {string} sort Sort order of reviews: "newest", "helpful", or "relevant"
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function listReviews(productId, sort = 'relevant', page, count) {
  const options = defaultOptions;
  const params = {
    product_id: productId,
    sort,
  };
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `${baseURL}/reviews?${new URLSearchParams(params)}`;
  return fetchCall(resource, options)
    .then(({ results }) => results);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function getReviewMetadata(productId) {
  const options = defaultOptions;
  const params = { product_id: productId };
  const resource = `${baseURL}/reviews/meta?${new URLSearchParams(params)}`;
  return fetchCall(resource, options);
}

// Use of Parameters
// In an HTTP GET request, parameters are sent as a query string:

// http://example.com/page?parameter=value&also=another

// In an HTTP POST or PUT request, the parameters are not sent along with the URI,
// but in the request body. Parameters noted for each route below follow this standard.

module.exports = {
  listProducts,
  productInformation,
  productStyles,
  relatedProducts,
  listReviews,
  getReviewMetadata,
  // addAReview,
  // markReviewAsHelpful,
  // reportReview,
  // listQuestions,
  // answersList,
  // addAQuestion,
  // addAnAnswer,
  // markQuestionAsHelpful,
  // reportQuestion,
  // markAnswerAsHelpful,
  // reportAnswer,
  // getCart,
  // addToCart,
  // logAnInteraction,
};
