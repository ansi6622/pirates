
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({id: default, name: 'Anne Bonney', poison: 'Rum', accessory: 'Scythe', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({id: default, name: 'Le\' Chuck', poison: 'Voodoo Goo', accessory: 'Push Pins', image_url: 'https://pbs.twimg.com/profile_images/1866704249/monkey-island-don-t-fuck-with-lechuck_design_400x400.png'}),
    knex('pirates').insert({id: default, name: 'Blackbeard', poison: 'Blood of his Enemies', accessory: 'Pistol', image_url: 'https://d13yacurqjgara.cloudfront.net/users/58309/screenshots/1105038/blackbeard-01.jpg'})
  );
};
