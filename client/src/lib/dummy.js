// Dummy product data.

const dummyListProducts = [
  {
    id: 1,
    campus: 'hr-sea',
    name: '',
    slogan: '',
    description: '',
    category: '',
    default_price: '1',
    created_at: '2000-01-01T00:00:00.000Z',
    updated_at: '2000-01-01T00:00:00.000Z',
  },
];

const dummyProductInformation = {
  id: 1,
  campus: 'hr-sea',
  name: '',
  slogan: '',
  description: '',
  category: '',
  default_price: '1',
  created_at: '2000-01-01T00:00:00.000Z',
  updated_at: '2000-01-01T00:00:00.000Z',
  features: [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    },
  ],
};

const dummyProductStyles = {
  product_id: '1',
  results: [
    {
      style_id: 1,
      name: '',
      original_price: '1',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://dummyimage.com/1',
          url: 'https://dummyimage.com/1',
        },
      ],
      skus: {
        1: {
          quantity: 1,
          size: '',
        },
      },
    },
  ],
};

const dummyRelatedProducts = [
  1,
];

const dummyListReviews = {
  product: '1',
  page: 0,
  count: 5,
  results: [

    {
      review_id: 1,
      rating: 1,
      summary: "",
      recommend: true,
      response: '',
      body: '',
      date: '2000-01-01T00:00:00.000Z',
      reviewer_name: '',
      helpfulness: 1,
      photos: [
        {
          id: 1,
          url: 'https://dummyimage.com/1',
        },
      ],
    },
  ],
};

const dummyGetReviewMetadata = {
  product_id: '1',
  ratings: {
    1: '0',
    2: '0',
    3: '0',
    4: '0',
    5: '1',
  },
  recommended: {
    false: '1',
    true: '2',
  },
  characteristics: {
    Quality: {
      id: 1,
      value: '5',
    },
  },
};

module.exports = {
  dummyListProducts,
  dummyProductInformation,
  dummyProductStyles,
  dummyRelatedProducts,
  dummyListReviews,
  dummyGetReviewMetadata,
};

/*

Notable edge cases to handle!!!
-------------------------------------

20101 has no photos.
20110 has no styles.
20106 has no default style.
20150 has two children with the same key "Fair Trade Certified"
20300 has characteristics key without a value "null"
*/
