
const letters = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const ingredients_array =[
  'Gin',
  'Grand Marnier',
  'Lemon Juice',
  'Grenadine',
  'Amaretto',
  'Baileys irish cream',
  'Cognac',
  'Heavy cream',
  'Milk',
  'Egg White',
  '151 proof rum',
  'Wild Turkey',
  'Dark rum',
  'Lemon juice',
  'Absolut Vodka',
  'Tonic water',
  'Applejack',
  'Grapefruit juice',
  'Strawberry schnapps',
  'Orange juice',
  'Cranberry juice',
  'Club soda',
  'Apple juice',
  'Maraschino cherry',
  'Vodka',
  'Pisang Ambon',
  'Lemonade',
  'Peach nectar',
  'Vermouth',
  'Kahlua',
  'Egg white',
  'Light rum',
  'Triple sec',
  'Lime juice',
  'Sugar',
  'Mint',
  'Scotch',
  'Sweet Vermouth',
  'Dry Vermouth',
  'Orange bitters',
  'lemon juice',
  'maraschino liqueur',
  'Rum',
  'Tequila',
  'Fruit',
  'Ice',
  'Salt',
  'Fruit juice',
  'Soda Water',
  'Creme de Banane',
  'Pineapple juice',
  'Frangelico',
  'Coffee',
  'Cream',
  'Creme de Cacao',
  'Light cream',
  'Nutmeg',
  'Blended whiskey',
  'Bourbon',
  'Blackberry brandy',
  'Lemon peel',
  'Sambuca',
  'Orange Bitters',
  'Green Chartreuse',
  'Irish cream',
  'Goldschlager',
  'Champagne',
  'Peach schnapps',
  'Sugar syrup',
  'Creme de Mure',
  'Bitters',
  'Blue Curacao',
  'Rye Whiskey',
  'Maraschino Liqueur',
  'Angostura Bitters',
  'Maraschino Cherry',
  'Passion fruit juice',
  'Maraschino liqueur',
  'Galliano',
  'Pineapple Juice',
  'Lime Juice',
  'Prosecco',
  'Hot Chocolate',
  'Cherry Heering',
  'Wormwood',
  'Corona',
  'Bacardi Limon',
  'Everclear',
  'Mountain Dew',
  'Surge',
  'Sloe gin',
  'Midori melon liqueur',
  'Jägermeister',
  'Southern Comfort',
  'Lime',
  'Sour mix',
  'Banana liqueur',
  'Vanilla ice-cream',
  'Lemon',
  'Powdered sugar',
  'Cherry',
  'Dark Rum',
  'Orange Juice',
  'Sweet and Sour',
  'Brandy',
  'Cachaca',
  'Spiced rum',
  'Ginger ale',
  'Coca-Cola',
  'Cherry brandy',
  'Falernum',
  'Añejo rum',
  'blackstrap rum',
  'White rum',
  'Lager',
  'Campari',
  'Port',
  'Carbonated water',
  'Cointreau',
  'Water',
  'Vanilla',
  'Caramel coloring',
  'Egg yolk',
  'Triple Sec',
  'Lillet Blanc',
  'Absinthe',
  'Chocolate liqueur',
  'Wine',
  'Vanilla extract',
  'Chocolate',
  'Almond flavoring',
  'gin',
  'Peach Bitters',
  'Cider',
  'Blackcurrant cordial',
  'Fruit punch',
  'Sprite',
  'Olive',
  'Olive Brine',
  'Soda water',
  'Ginger Beer',
  'demerara Sugar',
  'Pisco',
  'Pineapple Syrup',
  'St. Germain',
  'Pepper',
  'Lavender',
  'Whiskey',
  'Hot Damn',
  'Dubonnet Rouge',
  'Cinnamon',
  'Whipped cream',
  'Chocolate syrup',
  'Whipping cream',
  'Vanilla syrup',
  'Espresso',
  'Egg',
  'Condensed milk',
  'Apricot brandy',
  'Elderflower cordial',
  'Mezcal',
  'Coffee liqueur',
  'Rose',
  'Strawberries',
  'Orange',
  'Honey',
  'Figs',
  'Thyme',
  'Tonic Water',
  'Benedictine',
  'Yoghurt',
  'Banana',
  'Apple',
  'Apricot Nectar',
  'Pomegranate juice',
  'lemon',
  'Raspberry Liqueur',
  'pineapple juice',
  'Lillet',
  'Orange Peel',
  'Firewater',
  'Absolut Peppar',
  'Tabasco sauce',
  'Dr. Pepper',
  'Beer',
  'Sarsaparilla',
  'Pineapple',
  'Sugar Syrup',
  'Peach Vodka',
  'Sirup of roses',
  'Red wine',
  'Cloves',
  'Lemon Peel',
  'Orange peel',
  'Grapefruit Juice',
  'Malibu rum',
  'Sweet and sour',
  'Orange spiral',
  'Green Creme de Menthe',
  'Whisky',
  'White Rum',
  'Tea',
  'Blackberries',
  'Cherry Juice',
  'Red Chili Flakes',
  'Ginger',
  'Grape juice',
  'Carbonated soft drink',
  'Sherbet',
  'Corn syrup',
  'Irish whiskey',
  'Butter',
  'Half-and-half',
  'Marshmallows',
  'Brown sugar',
  'Iced tea',
  'Coconut syrup',
  'Peach brandy',
  'Guinness stout',
  'Aperol',
  'Chambord raspberry liqueur',
  'Jack Daniels',
  'Anis',
  'Jello',
  'Mint syrup',
  'Yellow Chartreuse',
  'Apple brandy',
  'Tennessee whiskey',
  'Creme de Cassis',
  'Grain alcohol',
  'Kiwi liqueur',
  'Bitter lemon',
  'Absolut Kurant',
  'Kiwi',
  'Cranberry vodka',
  'Apfelkorn',
  'Schweppes Russchian',
  'Kool-Aid',
  'Papaya',
  'Lime peel',
  'Absolut Citron',
  'Angostura bitters',
  'Asafoetida',
  'Cayenne pepper',
  'Drambuie',
  'Mango',
  'Tia maria',
  'Coconut Liqueur',
  'Fresh Lemon Juice',
  'Cumin seed',
  'Cocoa powder',
  'Orgeat syrup',
  'Tomato Juice',
  'Hot Sauce',
  'Worcestershire Sauce',
  'Soy Sauce',
  'Pepsi Cola',
  'Pina colada mix',
  'Daiquiri mix',
  'Cardamom',
  'Black pepper',
  'Cucumber',
  'White Creme de Menthe',
  'Butterscotch schnapps',
  'Lemon-lime soda',
  'Rye whiskey',
  'Oreo cookie',
  'Jagermeister',
  'Rosemary Syrup',
  'Rosemary',
  'Grape Soda',
  'Apricot Brandy',
  'Orange Curacao',
  'Blended Scotch',
  'Honey syrup',
  'Ginger Syrup',
  'Islay single malt Scotch',
  'Egg Yolk',
  'Coconut milk',
  'Passoa',
  'Passion fruit syrup',
  'Cherry liqueur',
  'Fresh Lime Juice',
  'Pink lemonade',
  'Coffee brandy',
  'Lime vodka',
  'Sherry',
  'Black Sambuca',
  'Raspberry syrup',
  '7-Up',
  'Crown Royal',
  'Raspberry vodka',
  'Ricard',
  'Peychaud bitters',
  'Amaro Montenegro',
  'Ruby Port',
  'Blood Orange',
  'Allspice',
  'Advocaat',
  'Jim Beam',
  'Godiva liqueur',
  'Anisette',
  'Cherries',
  'Fresca',
  'Creme De Banane',
  'Irish Whiskey',
  'Coriander',
  'Tomato juice',
  'Celery salt',
  'Rosso Vermouth',
  '7-up',
  'Melon Liqueur',
  'Cranberry Juice',
  'Yukon Jack',
  'Maple syrup',
  'Limeade',
  'Agave Syrup',
  'White Wine',
  'Apple Brandy',
  'Cream of coconut',
  'Peachtree schnapps',
  'Root beer',
  'Gold rum',
  'Pernod',
  'Ouzo',
  'Zima']

const glass_id= {'Highball glass':1,
'Cocktail glass':2,
'Old-fashioned glass':3,
'Whiskey Glass':4,
'Collins glass':5,
'Pousse cafe glass':6,
'Champagne flute':7,
'Whiskey sour glass':8,
'Cordial glass':9,
'Brandy snifter':10,
'White wine glass':11,
'Nick and Nora Glass':12,
'Hurricane glass':13,
'Coffee mug':14,
'Shot glass':15,
'Jar':16,
'Irish coffee cup':17,
'Punch bowl':18,
'Pitcher':19,
'Pint glass':20,
'Copper Mug':21,
'Wine Glass':22,
'Beer mug':23,
'Margarita/Coupette glass':24,
'Beer pilsner':25,
'Beer Glass':26,
'Parfait glass':27,
'Mason jar':28,
'Margarita glass':29,
'Martini Glass':30,
'Balloon Glass':31,
'Coupe Glass':32};

 
const ingredientsIdObj= {
    'Gin': 2,
    'Grand Marnier': 238,
    'Lemon Juice': 293,
    'Grenadine': 250,
    'Amaretto': 18,
    'Baileys Irish Cream': 43,
    'Cognac': 141,
    'Heavy cream': 259,
    'Milk': 333,
    'Egg White': 192,
    '151 proof rum': 571,
    'Wild Turkey': 526,
    'Dark Rum': 179,
    'Absolut Vodka': 8,
    'Tonic Water': 497,
    'Applejack': 31,
    'Grapefruit Juice': 242,
    'Strawberry Schnapps': 473,
    'Orange Juice': 352,
    'Cranberry Juice': 155,
    'Club Soda': 127,
    'Apple Juice': 28,
    'Maraschino Cherry': 322,
    'Vodka': 1,
    'Pisang Ambon': 399,
    'Lemonade': 300,
    'Peach Nectar': 378,
    'Vermouth': 510,
    'Kahlua': 282,
    'Light Rum': 305,
    'Triple Sec': 498,
    'Lime Juice': 308,
    'Sugar': 476,
    'Mint': 337,
    'Scotch': 5,
    'Sweet Vermouth': 482,
    'Dry Vermouth': 189,
    'Orange Bitters': 350,
    'Maraschino Liqueur': 323,
    'Rum': 3,
    'Tequila': 4,
    'Fruit': 222,
    'Ice': 270,
    'Salt': 439,
    'Fruit Juice': 220,
    'Soda Water': 455,
    'Creme De Banane': 163,
    'Pineapple Juice': 393,
    'Frangelico': 212,
    'Coffee': 139,
    'Cream': 161,
    'Creme De Cacao': 164,
    'Light Cream': 304,
    'Nutmeg': 344,
    'Blended Whiskey': 66,
    'Bourbon': 71,
    'Blackberry Brandy': 61,
    'Lemon Peel': 294,
    'Sambuca': 440,
    'Green Chartreuse': 245,
    'Irish cream': 272,
    'Goldschlager': 235,
    'Champagne': 97,
    'Peach Schnapps': 379,
    'Sugar Syrup': 475,
    'Creme de Mure': 575,
    'Bitters': 56,
    'Blue Curacao': 67,
    'Rye Whiskey': 436,
    'Angostura Bitters': 20,
    'Passion fruit juice': 372,
    'Galliano': 223,
    'Prosecco': 542,
    'Hot Chocolate': 264,
    'Cherry Heering': 103,
    'Wormwood': 530,
    'Corona': 152,
    'Bacardi Limon': 39,
    'Everclear': 201,
    'Mountain Dew': 338,
    'Surge': 478,
    'Sloe Gin': 453,
    'Midori Melon Liqueur': 331,
    'Jagermeister': 278,
    'Southern Comfort': 458,
    'Lime': 312,
    'Sour Mix': 457,
    'Banana Liqueur': 44,
    'Vanilla Ice-Cream': 503,
    'lemon': 299,
    'Powdered Sugar': 409,
    'Cherry': 106,
    'Sweet and Sour': 480,
    'Brandy': 74,
    'Cachaca': 81,
    'Spiced Rum': 464,
    'Ginger Ale': 228,
    'Coca-Cola': 128,
    'Cherry Brandy': 100,
    'Falernum': 563,
    'Añejo Rum': 37,
    'Blackstrap rum': 566,
    'White Rum': 523,
    'Lager': 289,
    'Campari': 83,
    'Port': 406,
    'Carbonated Water': 89,
    'Cointreau': 142,
    'Water': 513,
    'Vanilla': 508,
    'Caramel Coloring': 87,
    'Egg Yolk': 193,
    'Lillet Blanc': 539,
    'Absinthe': 573,
    'Chocolate Liqueur': 113,
    'Wine': 528,
    'Vanilla extract': 502,
    'Chocolate': 116,
    'Almond Flavoring': 16,
    'Peach Bitters': 540,
    'Cider': 120,
    'Blackcurrant Cordial': 63,
    'Fruit Punch': 221,
    'Sprite': 466,
    'Olive': 347,
    'Olive Brine': 576,
    'Ginger Beer': 229,
    'Demerara Sugar': 181,
    'Pisco': 400,
    'Pineapple Syrup': 577,
    'St. Germain': 578,
    'Pepper': 386,
    'Lavender': 579,
    'Whiskey': 600,
    'Hot Damn': 265,
    'Dubonnet Rouge': 191,
    'Cinnamon': 122,
    'Whipped Cream': 515,
    'Chocolate Syrup': 115,
    'Whipping Cream': 516,
    'Vanilla syrup': 506,
    'Espresso': 200,
    'Egg': 194,
    'Condensed Milk': 145,
    'Apricot Brandy': 32,
    'Elderflower cordial': 552,
    'Mezcal': 330,
    'Coffee Liqueur': 138,
    'Rose': 615,
    'Strawberries': 470,
    'Orange': 359,
    'Honey': 260,
    'Figs': 609,
    'Thyme': 610,
    'Benedictine': 53,
    'Yoghurt': 533,
    'Banana': 47,
    'Apple': 30,
    'Apricot Nectar': 33,
    'Pomegranate juice': 602,
    'Raspberry Liqueur': 416,
    'Lillet': 306,
    'Orange Peel': 354,
    'Firewater': 207,
    'Absolut Peppar': 7,
    'Tabasco Sauce': 483,
    'Dr. Pepper': 186,
    'Beer': 52,
    'Sarsaparilla': 441,
    'Pineapple': 397,
    'Peach Vodka': 380,
    'Sirup of roses': 452,
    'Red Wine': 425,
    'Cloves': 126,
    'Malibu Rum': 315,
    'Orange spiral': 357,
    'Green Creme de Menthe': 246,
    'Whisky': 601,
    'Tea': 486,
    'Blackberries': 60,
    'Cherry Juice': 104,
    'Red Chili Flakes': 422,
    'Ginger': 230,
    'Grape juice': 240,
    'Carbonated Soft Drink': 88,
    'Sherbet': 448,
    'Corn Syrup': 149,
    'Irish Whiskey': 273,
    'Butter': 79,
    'Half-and-half': 256,
    'Marshmallows': 326,
    'Brown Sugar': 77,
    'Iced tea': 271,
    'Coconut Syrup': 136,
    'Peach brandy': 375,
    'Guinness stout': 254,
    'Aperol': 24,
    'Chambord Raspberry Liqueur': 96,
    'Jack Daniels': 275,
    'Anis': 21,
    'Jello': 276,
    'Mint syrup': 336,
    'Yellow Chartreuse': 532,
    'Apple Brandy': 26,
    'Tennessee whiskey': 487,
    'Creme De Cassis': 165,
    'Grain Alcohol': 237,
    'Kiwi liqueur': 285,
    'Bitter lemon': 55,
    'Absolut Kurant': 6,
    'Kiwi': 286,
    'Cranberry Vodka': 157,
    'Apfelkorn': 25,
    'Schweppes Russchian': 444,
    'Kool-Aid': 287,
    'Papaya': 366,
    'Lime Peel': 310,
    'Absolut citron': 574,
    'Asafoetida': 36,
    'Cayenne Pepper': 93,
    'Drambuie': 187,
    'Mango': 319,
    'Tia Maria': 490,
    'Coconut Liqueur': 133,
    'Fresh Lemon Juice': 217,
    'Cumin Seed': 173,
    'Cocoa Powder': 131,
    'Orgeat Syrup': 362,
    'Tomato Juice': 492,
    'Hot Sauce': 266,
    'Worcestershire Sauce': 529,
    'Soy Sauce': 460,
    'Pepsi Cola': 389,
    'Pina colada mix': 392,
    'Daiquiri Mix': 176,
    'Cardamom': 90,
    'Black Pepper': 57,
    'Cucumber': 171,
    'White Creme de Menthe': 520,
    'Butterscotch Schnapps': 80,
    'Lemon-lime soda': 297,
    'Oreo cookie': 361,
    'Rosemary Syrup': 608,
    'Rosemary': 549,
    'Grape soda': 241,
    'Orange Curacao': 351,
    'Blended Scotch': 569,
    'Honey syrup': 568,
    'Ginger Syrup': 567,
    'Islay single malt Scotch': 570,
    'Coconut Milk': 134,
    'Passoa': 374,
    'Passion fruit syrup': 373,
    'Cherry Liqueur': 105,
    'Fresh Lime Juice': 547,
    'Pink lemonade': 398,
    'Coffee Brandy': 137,
    'Lime vodka': 311,
    'Sherry': 449,
    'Black Sambuca': 59,
    'Raspberry syrup': 418,
    '7-up': 572,
    'Crown Royal': 168,
    'Raspberry Vodka': 419,
    'Ricard': 427,
    'Peychaud bitters': 391,
    'Amaro Montenegro': 613,
    'Ruby Port': 614,
    'Blood Orange': 612,
    'Allspice': 14,
    'Advocaat': 9,
    'Jim Beam': 279,
    'Godiva Liqueur': 232,
    'Anisette': 23,
    'Cherries': 99,
    'Fresca': 215,
    'Coriander': 147,
    'Celery Salt': 94,
    'Rosso Vermouth': 553,
    'Melon Liqueur': 328,
    'Yukon Jack': 534,
    'Maple syrup': 320,
    'Limeade': 313,
    'Agave Syrup': 12,
    'White Wine': 525,
    'Cream of Coconut': 158,
    'Peachtree schnapps': 382,
    'Root beer': 431,
    'Gold rum': 233,
    'Pernod': 390,
    'Ouzo': 363,
    'Zima': 535
  }

module.exports = {letters, glass_id,ingredients_array,ingredientsIdObj}