/* eslint-disable max-len */
// const baseURL = 'http://localhost:3000';
// const PORT = 3000;

const defaultGetOptions = {
  method: 'get',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  mode: 'cors',
};

const defaultPostOptions = {
  ...defaultGetOptions,
  method: 'post',
};

/**
 * Retrieves the list of products.
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an array of items as objects.
 */
function listProducts(page, count) {
  const options = defaultGetOptions;
  const params = {};
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `/products?${new URLSearchParams(params)}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

function addToOutfit(productObj) {
  const options = defaultPostOptions;
  const resource = '/products';
  options.body = JSON.stringify(productObj);
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function productInformation(productId) {
  const options = defaultGetOptions;
  const resource = `/products/${productId}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function productStyles(productId) {
  const options = defaultGetOptions;
  const resource = `/products/${productId}/styles`;
  return fetch(resource, options)
    .then((response) => response.json())
    .then(({ results }) => results)
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function relatedProducts(productId) {
  const options = defaultGetOptions;
  const resource = `/products/${productId}/related`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @param {string} sort Sort order of reviews: "newest", "helpful", or "relevant"
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function listReviews(productId, sort = 'relevant', page, count) {
  const options = defaultGetOptions;
  const params = {
    product_id: productId,
    sort,
  };
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `/reviews?${new URLSearchParams(params)}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .then(({ results }) => results)
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {number} product_id Required ID of the Product requested.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function getReviewMetadata(productId) {
  const options = defaultGetOptions;
  const params = { product_id: productId };
  const resource = `/reviews/meta?${new URLSearchParams(params)}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Returns all product level information for a specified product id.
 * @param {Object} reviewObj Object containing information about the review.
 * @param {number} reviewObj.product_id Required ID of the product to post the review for.
 * @param {number} reviewObj.rating Integer (1-5) indicating the review rating.
 * @param {string} reviewObj.summary Summary text of the review.
 * @param {string} reviewObj.body Continued or full text of the review.
 * @param {boolean} reviewObj.recommend Value indicating if the reviewer recommends the product.
 * @param {string} reviewObj.name Username for reviewer.
 * @param {string} reviewObj.email Email address for reviewer.
 * @param {string} reviewObj.photos Array of text urls that link to images to be shown.
 * @param {Object} reviewObj.characteristics Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...}
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function addAReview(reviewObj) {
  const options = defaultPostOptions;
  options.body = JSON.stringify(reviewObj);
  const resource = '/reviews';
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a review to show it was found helpful.
 * @param {number} review_id Required ID of the review to update
 * @returns {Response<Object>} Returns a response object.
 */
function markReviewAsHelpful(reviewId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/reviews/${reviewId}/helpful`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
 * @param {number} review_id Required ID of the review to update
 * @returns {Response<Object>} Returns a response object.
 */
function reportReview(reviewId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/reviews/${reviewId}/report`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Retrieves a list of questions for a particular product. This list does not include any reported questions.
 * @param {number} product_id Required ID of the Product requested.
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function listQuestions(productId, page, count) {
  const options = defaultGetOptions;
  const params = { product_id: productId, page, count };
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `/qa/questions?${new URLSearchParams(params)}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Returns answers for a given question. This list does not include any reported answers.
 * @param {number} question_id Required ID of the question for wich answers are needed
 * @param {number=} page Selects the page of results to return. Default 1.
 * @param {number=} count How many results per page to return. Default 5.
 * @returns {Promise<object>} Promise which resolves to an object representing the given product.
 */
function answersList(questionId, page, count) {
  const options = defaultGetOptions;
  const params = { page, count };
  if (typeof page === 'number') { params.page = page; }
  if (typeof count === 'number') { params.count = count; }
  const resource = `/qa/questions/${questionId}/answers?${new URLSearchParams(params)}`;
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Adds a question for the given product
 * @param {string} questionObj.body Text of question being asked
 * @param {string} questionObj.name Username for question asker
 * @param {string} questionObj.email Email address for question asker
 * @param {number} questionObj.product_id Required ID of the Product for which the question is posted
 * @returns {Response<object>}
 */
function addAQuestion(questionObj) {
  const options = defaultPostOptions;
  options.body = JSON.stringify(questionObj);
  const resource = '/qa/questions/';
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Adds an answer for the given question
 * @param {string} answerObj.body Text of answer
 * @param {string} answerObj.name Username for answer giver
 * @param {string} answerObj.email Email address for answer giver
 * @param {number} answerObj.questionId Required ID of the question to post the answer for
 * @returns {Response<object>}
 */
function addAnAnswer(answerObj) {
  const options = defaultPostOptions;
  const { questionId } = answerObj;
  // eslint-disable-next-line no-param-reassign
  delete answerObj.questionId;
  options.body = JSON.stringify(answerObj);
  const resource = `/qa/questions/${questionId}`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a question to show it was found helpful.
 * @param {number} question_id Required ID of the question to update
 * @returns {Response<Object>} Returns a response object.
 */
function markQuestionAsHelpful(questionId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/qa/questions/${questionId}/helpful`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a question to show it was reported. Note, this action does not delete the question, but the question will not be returned in the above GET request.
 * @param {number} question_id Required ID of the question to update
 * @returns {Response<Object>} Returns a response object.
 */
function reportQuestion(questionId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/qa/questions/${questionId}/report`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a answer to show it was found helpful.
 * @param {number} answer_id Required ID of the answer to update
 * @returns {Response<Object>} Returns a response object.
 */
function markAnswerAsHelpful(answerId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/qa/answers/${answerId}/helpful`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Updates a answer to show it was reported. Note, this action does not delete the answer, but the answer will not be returned in the above GET request.
 * @param {number} answer_id Required ID of the answer to update
 * @returns {Response<Object>} Returns a response object.
 */
function reportAnswer(answerId) {
  const options = defaultPostOptions;
  options.method = 'put';
  const resource = `/qa/answers/${answerId}/report`;
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

/**
 * Retrieves list of products added to the cart by a user.
 * @returns {Promise<object>} Promise which resolves to an object representing the products and count in the cart..
 */
function getCart() {
  const options = defaultGetOptions;
  const resource = '/cart';
  return fetch(resource, options)
    .then((response) => response.json())
    .catch((error) => error);
}

/**
 * Adds a product to the cart.
 * @param {number} sku_id ID for the product being added to the cart
 * @returns {Response<Object>} Returns a response object.
 */
function addToCart(skuId) {
  const options = defaultPostOptions;
  options.body = JSON.stringify({ sku_id: skuId });
  // options.body = { sku_id: skuId };
  // console.log('options.body', options.body);
  const resource = '/cart';
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => console.error('there is an error'));
}

/**
 * Adds a interaction to the db.
 * @param {string} interactionObj.element Required. Selector for the element which was clicked
 * @param {string} interactionObj.widget Required. Name of the module/widget in which the click occured
 * @param {string} interactionObj.time Required. Time the interaction occurred
 * @returns {Response<Object>} Returns a response object.
 */
function logAnInteraction(interactionObj) {
  const options = defaultPostOptions;
  options.body = JSON.stringify({ interactionObj });
  const resource = '/interactions';
  return fetch(resource, options)
    .then((response) => response)
    .catch((error) => error);
}

module.exports = {
  listProducts,
  productInformation,
  productStyles,
  relatedProducts,
  listReviews,
  getReviewMetadata,
  addAReview,
  markReviewAsHelpful,
  reportReview,
  listQuestions,
  answersList,
  addAQuestion,
  addAnAnswer,
  markQuestionAsHelpful,
  reportQuestion,
  markAnswerAsHelpful,
  reportAnswer,
  getCart,
  addToCart,
  logAnInteraction,
  addToOutfit,
};
