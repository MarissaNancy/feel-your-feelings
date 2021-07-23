let mongoose = require("mongoose");
let db = require("../models");
const MONGO_URI = require("../config/keys").mongoURI;
// edit end of next line 
mongoose.connect(MONGO_URI || "mongodb://localhost/feelings", {

  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});


let drinkSeed = [
  {
        alcoholic: "True",
        name: "Mocha Martini",
        img: "",
        url: "https://www.thespruceeats.com/mochatini-cocktail-recipe-761118",
        category: "Happy",
        ingridients:"1 oz espresso chilled, 1 ½ oz vodka, 1 ½ oz of coffee liqueur, 1 oz white creme de cacao",
        instructions: "Stir ingredients with ice. Strain into cocktail glass and enjoy!"
  },
  {

        alcoholic: "True",
        name: "Frozen Pina Colada",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/rum-cocktails/pina-colada/1010-pina-colada/p/183868750?glia=true&s=1102&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppiLwNeOUh60P1_-_CCfDHxE_fBfp_rdXgTCJm5e9avxeRQAn_DgD_BoCi2cQAvD_BwE&gclsrc=aw.ds",
        category: "Happy",
        ingridients: "3 oz light rum, 4 oz coconut milk, 3 oz crushed pineapple or juice",
        instructions: "Combine ingredients in a blender and mix on low. Fill blender half with ice and blend until slushy. Pour into a glass and garnish with pineapple wedge and enjoy!"
  },
  {
        alcoholic: "False",
        name: "Sweet Cream Cold Brew",
        img: "",
        url: "https://www.starbucks.com/menu/product/2121859/iced?parent=%2Fdrinks%2Fcold-coffees%2Fcold-brews",
        category: "Happy",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Rusty Nail",
        img: "",
        url: "https://www.thespruceeats.com/rusty-nail-recipe-760443",
        category: "Moody",
        ingridients:"1 oz scotch whiskey, 1 oz Drambuie",
        instructions: "Pour ingredients over ice and stir. Garnish with lemon a lemon twist and enjoy!"
  },
  {
        alcoholic: "True",
        name: "Gin and tonic",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/gin-cocktails/gin-tonicseltzer/cutwater-gin-tonic/p/180353118?glia=true&s=1116&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppkqVh1C6jU26AqhzoeDXA73w0KhUDjDnhhbl_cchHkFf_s_-Ct1wwBoCQmkQAvD_BwE&gclsrc=aw.ds",
        category: "Moody",
        ingridients:"2 oz gin, 5 iz if tonic water",
        instructions: "Pour ingredients into a glass full of ice and stir. Stir well and garnish with a lime wedge"
  },
  {
        alcoholic: "False",
        name: "Apple Cider Vinegar",
        img: "",
        url: "https://www.target.com/p/organic-apple-cider-vinegar-16oz-good-38-gather-8482/-/A-54633892?ref=tgt_adv_XS000000&AFID=google_pla_df_free_local&CPNG=Grocery&adgroup=212-8",
        category: "Moody",
        ingridients:"",
        instructions: ""
  },
  {

        alcoholic: "True",
        name: "Mimosa",
        img: "",
        url: "https://www.totalwine.com/wine/champagne-sparkling-wine/sparkling-wine/soleil-mimosa/p/111927750?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppt1EMp3e2Rmvj8J6mnK-ebJbl2uTvw-6IaoiCxQXCUAxkEoMVyKdPxoCA3YQAvD_BwE&gclsrc=aw.ds",
        category: "Tired",
        ingridients:"2 oz, orange juice, champagne or sparkling wine",
        instructions: "Pour cold oj into glass and fill with champagne and stir gently"
  },
  {
        alcoholic: "True",
        name: "Mintini",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/multibase-variety-packs/five-drinks-variety-pack/p/227289200?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppsIAx851B2Px04WM5cuEX17QxH2Hvqqe_c8NCpd00x97usE4dMTAqRoC7TkQAvD_BwE&gclsrc=aw.ds",
        category: "Tired",
        ingridients:"2 oz gin or vodka, 1 oz white creme de menthe",
        instructions: "Stir ingredients with ice in glass. Garnish with a sprig of fresh mint and enjoy!"
  },
  {
        alcoholic: "False",
        name: "Chamomile Tea",
        img: "",
        url: "https://www.target.com/p/celestial-seasonings-chamomile-tea-20ct/-/A-13327378?ref=tgt_adv_XS000000&AFID=google_pla_df_free_online&CPNG=Grocery&adgroup=231-15",
        category: "Tired",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "The European",
        img: "",
        url: "",
        category: "Grumpy",
        ingridients:"2 ½ oz vodka, ½ oz of chambord",
        instructions: "Stir ingredients with ice in glass"
  },
  {
        alcoholic: "True",
        name: "Cuba Libre",
        img: "",
        url: "https://drizly.com/liquor/ready-to-drink/daiquiri-ready-to-drink/drinkworks-classic-collection-cuban-daiquiri/p98639?drz_lat=41.2973577&drz_lng=-123.1390751&drz_nhd=CA&drz_sids%5B%5D=225&p=15.99&s=true&variant=222386",
        category: "Grumpy",
        ingridients:"2 oz of rum, cola, wedge of lime",
        instructions: "Squeeze lime juice into glass and put in the rind. Add rumm and fill with cola and ice. Stir."
  },
  {
        alcoholic: "False",
        name: "Lemonade",
        img: "",
        url: "https://www.vons.com/shop/product-details.960326340.html?cmpid=ps_von_soc_ecom_goo_20200924_71700000073036157_58700007109448193_92700063970949764&gclid=CjwKCAjwruSHBhAtEiwA_qCppoLfmjPo2FePUIfVs2_iSqFQQeYlmXAdfEhec2P0qGo-SgPVpMpxkRoChaUQAvD_BwE&gclsrc=aw.ds",
        category: "Grumpy",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Godfather",
        img: "",
        url: "https://www.totalwine.com/beer/lager/americanstyle-lager/godfather-lager/p/227033330?glia=true&s=1105",
        category: "Nostalgic",
        ingridients:"1 ½ oz bourbon, ¾ amaretto",
        instructions: "Mix together and pour over ice into glass. Garnish with twist of lemon"
  },
  {
        alcoholic: "True",
        name: "Old-Fashioned",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/whiskey-cocktails/old-fashioned/beagans-1806-old-fashioned/p/228434200?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCpptgwEF8-sm8JlY7U11Psvjo6_aPC-781G42Hmvk4YqgdubNCULE9XRoCaVIQAvD_BwE&gclsrc=aw.ds",
        category: "Nostalgic",
        ingridients:"1 cube of sugar, 1 dash marishcino cherry, orange slice, 2 oz blended whiskey, 1 tbspoon water",
        instructions: "Put sugar bitters and 1 tbsp water in the bottom of a glass and mix well. Crush cherries and orange slice into sugar mixture. Add whiskye and stir. Fill glass with ice and top off with soda water"
  },
  {
        alcoholic: "False",
        name: "Capri Sun",
        img: "",
        url: "https://www.target.com/p/capri-sun-pacific-cooler-juice-pack-10pk-6-fl-oz-pouches/-/A-15041133?ref=tgt_adv_XS000000&AFID=google_pla_df_free_local&CPNG=Grocery&adgroup=203-16",
        category: "Nostalgic",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Chocolate Martini",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/vodka-cocktails/martini/tiny-tini-chocolate-martini/p/129455750?glia=true&s=1102&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCpprrY5U46OvdqNt24-GaIkv-qjlwww-FGS9ld_AJ2-ruP48plpmSgwRoCW-MQAvD_BwE&gclsrc=aw.ds",
        category: "Romantic",
        ingridients:"2 ½ oz vanilla flavored vodka, ½ oz of chocolate liqueur",
        instructions: "Mix ingredients with ice and strain into a chilled glass. Garnish with chocolate covered expresso bean and enjoy"
  },
  {
        alcoholic: "True",
        name: "Glass of wine or champagne",
        img: "",
        url: "https://www.totalwine.com/wine/red-wine/cabernet-sauvignon/juggernaut-cabernet-sauvignon/p/194668750?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppvNhbBV-y5thM2vMjeBWuQpqJTWJvxsAaSlcZwuza-UhBqX7JJGE5xoCgkwQAvD_BwE&gclsrc=aw.ds",
        category: "Romantic",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "False",
        name: "Rose Lemon Spritzer",
        img: "",
        url: "https://www.target.com/p/she-can-island-citrus-dry-ros-233-spritzer-375ml-can/-/A-81782792?ref=tgt_adv_XS000000&AFID=google_pla_df_free_local&CPNG=Grocery&adgroup=213-0",
        category: "Romantic",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Spicy Margarita",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/tequila-cocktails/margarita/on-the-rocks-jalapeno-pineapple-margarita/p/226810375?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppo2CzulShF80K9X0vxPm8WjLdsTUlxGrfjr1MZna4zDpy88l7Q-3bhoCVUYQAvD_BwE&gclsrc=aw.ds",
        category: "Fun",
        ingridients:"Salt, Ice, 2 oz silver tequila, 3 tbsp fresh squeezed lime juice, 1 tablespoon orange juice, 1 ½ tsp light agave nectar, ½ jalapeno pepper, lime wedge",
        instructions: "Rim glass with salt. Fill glass with ice and set aside. Fill small shaker with additional ice add tequila lime juice, orange juice, agave, and jalapeno slices. Shake and strain into rimmed glass. Garnish with lime wedge and enjoy!"
  },
  {
        alcoholic: "True",
        name: "Zombie",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/rum-cocktails/sinship-zombie-cocktail/p/234419355?glia=true&s=1104&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppnIQFvfViP2wo61xLfZnPodsHTaqLwz6zbxiMY9FBlMK4jKROwqrAxoCzK4QAvD_BwE&gclsrc=aw.ds",
        category: "Fun",
        ingridients:"1 ½ oz dark rum, ¾ oz jamican rum, ¾ oz light rum, ¾ oz pineapple juice, 1 oz lime juice, ½ oz 151 proof rum",
        instructions: "Mix first five ingredients together with ice. Strain over ice and float the 151 proof and garnish with cherry and enjoy!"
  },
  {
        alcoholic: "False",
        name: "Virgin Michelada",
        img: "",
        url: "https://store.twang.com/products/twang-reserve-michelada-mix?variant=31866840940619&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic",
        category: "Fun",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Silver bullet",
        img: "",
        url: "https://www.totalwine.com/spirits/scotch/blended-scotch/johnnie-walker-black-label/p/636750?glia=true&s=1126&&pid=cpc:Head+Terms+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppvyyBTYI-5IyRBX7eCQWtsdVDD-61B32gV_EpbRDF3VRnWDXSQauqhoCCNAQAvD_BwE&gclsrc=aw.ds",
        category: "Active",
        ingridients:"dash of scotch, 3 oz of vodka",
        instructions: "Pour scotch into cocktail glass and swirl around. Empty out scotch and add vodka. Garnish with a lemon twist and enjoy!"
  },
  {
        alcoholic: "True",
        name: "Frozen Margarita",
        img: "",
        url: "https://www.instacart.com/landing?product_id=24272629&retailer_id=144&region_id=4955966184&utm_medium=sem_shopping&utm_source=instacart_google&utm_campaign=ad_demand_shopping_rp_july-4&utm_content=accountid-8145171519_campaignid-13618159377_adgroupid-126784678729_device-c&gclid=CjwKCAjwruSHBhAtEiwA_qCppnGtUbZnh8u5Bevtinv1ia6Ug5vDRTF-_YqYY0QmDNoZ7N3O5CnOKRoC6wkQAvD_BwE",
        category: "Active",
        ingridients:"2 tsp salt, 1 lime wedge, 3 oz tequila, 1 oz triple sec, 2 oz lime juice, 1 cup crushed ice",
        instructions: "Rub glass with lime and place salt around edge of glass. Put remaining ingredients in a blender and blend well at high speed. Pour into glass and garnish with lime and enjoy!"
  },
  {
        alcoholic: "False",
        name: "Anti oxidant blast: Beet Strawberry & Blueberry",
        img: "",
        url: "https://www.google.com/shopping/product/11162367435761939195?q=antioxidant+blast&prds=epd:6517941430814877273,prmr:3,eto:6517941430814877273_1,rto:1,tpim:CND8hdr56Z3OjwEQtYv5r_2ig-gjGPCUvgoiA1VTRCiQqqKIBjCeeg&utm_medium=tu_prop&utm_content=eid-lsjeuxoeqt&utm_campaign=15646",
        category: "Active",
        ingridients:"",
        instructions: ""
  },
  {
        alcoholic: "True",
        name: "Sidecar",
        img: "",
        url: "https://dandm.com/d-amp-m-cocktail-the-sidecar.html",
        category: "Motivated",
        ingridients:"1 ½ oz brandy, ¾ oz orange liqueur, ¾ oz sweet and sour",
        instructions: "Mix ingredients with ice. Strain into a chilled glass and garnish with a twist of lemon and enjoy!"
  },
  {
        alcoholic: "True",
        name: "Mint Julep",
        img: "",
        url: "https://www.totalwine.com/spirits/ready-to-drink/whiskey-cocktails/mint-julep/old-forester-mint-julep/p/147584010?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppiwB0RTJR13O5nNsOcrGciM_7Niz724DuCRZ3ibNn0QgRkD6Xwx8WxoCg8sQAvD_BwE&gclsrc=aw.ds",
        category: "Motivated",
        ingridients:"4 fresh mint sprigs, 1 tsp powdered sugar, 2 tsp water, 2 oz bourbon",
        instructions: "Muddle mint sugar and water in bottom of glass Fill glass with ice and add bourbon. Pack the glass with more ice and garnish with a mint sprig"

  },
  {
        alcoholic: "False",
        name: "Iced Americano",
        img: "",
        url: "https://www.starbucks.com/menu/product/406/iced?parent=%2Fdrinks%2Fcold-coffees%2Ficed-americano",
        category: "Motivated",
        ingridients:"",
        instructions: ""

  },
  {

        alcoholic: "True",
        name: "Gimlet",
        img: "",
        url: "https://drizly.com/liquor/ready-to-drink/post-meridiem-lemongrass-vodka-gimlet/p127906?drz_lat=41.2421097&drz_lng=-73.3875483&drz_nhd=CT&drz_sids%5B%5D=4791&p=4.99&s=true&variant=286738",
        category: "Lazy",
        ingridients:"2 oz gin, 1 oz lime juice, 1 tbsp sugar syrup",
        instructions: "Pour gin, lime juice and sugar over ice in a glass. Stir well and pour into another glass. Garnish with a lime wedge"
  },
  {
        alcoholic: "True",
        name: "Irish Coffee",
        img: "",
        url: "https://www.totalwine.com/spirits/irish-whiskey/jameson-cold-brew-irish-whiskey/p/227509750?glia=true&s=1126&&pid=cpc:Core+Catalog+-+Shopping%2BUS%2BCALI%2BENG%2BSPART::google::&gclid=CjwKCAjwruSHBhAtEiwA_qCppiUmcKtgvnhiTisYrjMWawGOi9Pwm8qaHj7N28KRFiaGRtwEBPOCAxoCrkEQAvD_BwE&gclsrc=aw.ds",
        category: "Lazy",
        ingridients:"1 ½ oz of irish whiskey,1 tbsp sugar syrup, 6 oz of hot coffee, heavy cream",
        instructions: "Combine whiskey, sugar and coffee into a mug. Float cold cream on top and serve"
  },
  {
        alcoholic: "False",
        name: "Hot Cocoa",
        img: "",
        url: "https://www.publicgoods.com/products/cocoa-mix?variant=34054564577418&utm_source=google&utm_medium=cpc&utm_campaign=PG_Shopping_Prospecting-Grocery&utm_term=&utm_matchtype=&utm_content=11487525596_120694924508_475747741811&gclid=CjwKCAjwruSHBhAtEiwA_qCppipTd63ktgscO9moqO4l6nNu2DknqW6snXT1M_4wNQMPjuPY3xk2EhoC-vgQAvD_BwE",
        category: "Lazy",
        ingridients:"",
        instructions: ""
  }
];


db.Drink.deleteMany({})
  .then(() => db.Drink.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " seeds inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });