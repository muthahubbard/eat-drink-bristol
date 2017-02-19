const types = {
  bar: { name: 'Bar', seoName: 'bar' },
  resuarant: { name: 'Resuarant', seoName: 'restaurant' }
};

const cuisine = {
  burgers: { name: 'Burgers', seo: 'burgers' }
};

const data = [
  {
    name: 'Small Bar',
    seoName: 'small-bar',
    url: '',
    address: {
      lat: '51.451763',
      lng: '-2.595021',
    },
    meta: {
      type: types.bar.name,
      cuisines: [ cuisine.burgers.name ],
      tags: []
    }
  },
  {
    name: 'Three Brothers',
    seoName: 'three-brothers',
    url: '',
    address: {
      lat: '51.452187', 
      lng: '-2.592376'
    },
    meta: {
      type: types.resuarant.name,
      cuisines: [ cuisine.burgers.name ],
      tags: []
    }
  },
  {
    name: 'Chomp',
    seoName: 'chomp',
    url: '',
    address: {
      lat: '51.454120',
      lng: '-2.592446'
    },
    meta: {
      type: types.resuarant.name,
      cuisines: [ cuisine.burgers.name ],
      tags: []
    }
  },
  {
    name: 'Atomic Diner',
    seoName: 'atomic-diner',
    url: '',
    address: {
      lat: '51.457656', 
      lng: '-2.592645'
    },
    meta: {
      type: types.resuarant.name,
      cuisines: [ cuisine.burgers.name ],
      tags: []
    }
  },
  {
    name: 'The Ox',
    seoName: 'the-ox',
    url: '',
    address: {
      lat: '51.454427', 
      lng: '-2.594469'
    },
    meta: {
      type: types.resuarant.name,
      cuisines: [ cuisine.burgers.name ],
      tags: []
    }
  }
];

export default data;