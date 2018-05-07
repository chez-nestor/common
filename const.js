module.exports = {
  UNAVAILABLE_DATE: new Date(1E14),

  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss.SSSZ',

  LEASE_DURATION: '6',

  BASIC_PACK:         'basic',
  COMFORT_PACK:     'comfort',
  PRIVILEGE_PACK: 'privilege',

  PACK_PRICES: {
    paris: {
      basic:      89000,
      comfort:   119000,
      privilege: 149000,
    },
    lyon: {
      basic:      59000,
      comfort:    79000,
      privilege:  99000,
    },
    montpellier: {
      basic:      49000,
      comfort:    69000,
      privilege:  89000,
    },
    toulouse: {
      basic:      29000,
      comfort:    49000,
      privilege:  69000,
    },
    lille: {
      basic:      49000,
      comfort:    69000,
      privilege:  89000,
    },
  },
  DEPOSIT_PRICES: {
    paris:        90000,
    lyon:         70000,
    montpellier:  50000,
    lille:        50000,
    toulouse:     50000,
  },

  ROOM_SWITCH_FEES: {
    basic:        29000,
    comfort:      19000,
    privilege:     9000,
  },
  HOME_CHECKIN_FEES: {
    basic:         7900,
    comfort:          0,
    privilege:        0,
  },
  SPECIAL_CHECKIN_FEES: {
    basic:        14900,
    comfort:       7900,
    privilege:        0,
  },
  SPECIAL_CHECKOUT_FEES: {
    basic:        14900,
    comfort:      14900,
    privilege:     7900,
  },
  LEFT_LUGGAGE_FEES: {
    basic:        12900,
    comfort:          0,
    privilege:        0,
  },

  SERVICE_FEES: {
    1:            5000, // 1 room
    2:            4000, // 2 rooms
    default:      3000, // 3 or more rooms
  },

  CHECKIN_DURATION:  30,
  CHECKOUT_DURATION: 60,

  LATE_NOTICE_FEES: {
    '0-9days':   67900,
    '10-19days': 47900,
    '20-29days': 27900,
  },

  LATE_FEES: 1000,

  DEPOSIT_REFUND_DELAYS: {
    basic:     60,
    comfort:   40,
    privilege: 20,
  },

  UNCASHED_DEPOSIT_FEE: 2900,

  TWO_OCCUPANTS_FEES: 9000,

  AGENCY_ADDRESSES: {
    paris: '76 rue de Rivoli, 75004 Paris',
    lyon: '16 rue de Condé, 69002 Lyon',
    montpellier: '4 rue Paul Lacroix, 34070 Montpellier',
  },

  SALES_EMAIL: 'hello@chez-nestor.com',

  SUPPORT_EMAIL: 'support@chez-nestor.com',

  LEASE_SPECIMEN_URL: 'https://drive.google.com/file/d/0B6uBt4Bf8BxuSnRod3d1TGp3bFU/view',

  IDENTITY_FORM_URL: 'https://forms.chez-nestor.com/cheznestor/identity-record',

  ELIGIBILITY_FORM_URL: 'https://forms.chez-nestor.com/72003771604953',

  HOUSING_GUIDE_URL: 'https://forms.chez-nestor.com/81264205204950',

  ALERT_FORM_URL: 'https://forms.chez-nestor.com/81084169528968',

  CHECKIN_FORM_URLS: {
    basic: 'forms.chez-nestor.com/73332904404955',
    comfort: 'forms.chez-nestor.com/73344756704966',
    privilege: 'forms.chez-nestor.com/73344784804968',
  },

  ENUMS: {
    apartmentPicsAlts: {
      kitchen: {
        'fr-FR': 'Cuisine',
        'en-US': 'Kitchen',
      },
      bathroom: {
        'fr-FR': 'Salle de bain',
        'en-US': 'Bathroom',
      },
      hall: {
        'fr-FR': 'Hall',
        'en-US': 'Hall',
      },
      wc: {
        'fr-FR': 'Toilettes',
        'en-US': 'Toilets',
      },
      balcony: {
        'fr-FR': 'Balcon',
        'en-US': 'Balcony',
      },
      patio: {
        'fr-FR': 'Terrasse',
        'en-US': 'Patio',
      },
      garden: {
        'fr-FR': 'Jardin',
        'en-US': 'Garden',
      },
      loggia: {
        'fr-FR': 'Loggia',
        'en-US': 'Loggia',
      },
      livingroom: {
        'fr-FR': 'Séjour',
        'en-US': 'Living room',
      },
      diningroom: {
        'fr-FR': 'Salle à manger',
        'en-US': 'Dining room',
      },
      building: {
        'fr-FR': 'Immeuble',
        'en-US': 'Building',
      },
      cellar: {
        'fr-FR': 'Cellier',
        'en-US': 'Cellar',
      },
      dressing: {
        'fr-FR': 'Dressing',
        'en-US': 'Dressing',
      },
      floorplan: {
        'fr-FR': 'Floor Plan',
        'en-US': 'Plan du logement',
      },
    },
    roomPicsAlts: {
      overview: {
        'fr-FR': 'Vue d\'ensemble de la chambre',
        'en-US': 'Overview of the room',
      },
      privateBathroom: {
        'en-US': 'Private Bathroom',
        'fr-FR': 'Salle de bain privée',
      },
      privateToilet: {
        'en-US': 'Private Toilet',
        'fr-FR': 'WC Privés',
      },
      privateBalcony: {
        'en-US': 'Private Balcony',
        'fr-FR': 'Ballcon privé',
      },
      privateTerrace: {
        'en-US': 'Private Terrace',
        'fr-FR': 'Terrasse Privée',
      },
      privateGarden: {
        'en-US': 'Private Garden',
        'fr-FR': 'Jardin privé',
      },
      privateDressing: {
        'en-US': 'Private Dressing',
        'fr-FR': 'Dressing privé',
      },
      privateLoggia: {
        'en-US': 'Private Loggia',
        'fr-FR': 'Loggia privé',
      },
    },
    beds: {
      double: {
        'fr-FR': 'lit double',
        'en-US': 'double bed',
      },
      simple: {
        'fr-FR': 'lit simple',
        'en-US': 'single bed',
      },
      sofa: {
        'fr-FR': 'canapé',
        'en-US': 'sofa',
      },
      'double+sofa': {
        'fr-FR': 'lit double + canapé',
        'en-US': 'double bed + sofa',
      },
      'simple+sofa': {
        'fr-FR': 'lit simple + sofa',
        'en-US': 'single bed + sofa',
      },
      'simple+simple': {
        'fr-FR': 'deux lits simples',
        'en-US': 'two single beds',
      },
    },
    'room-features-sleep': {
      duvetAndPillow: {
        default: true,
        'en-US': 'Duvet and Pillow',
        'fr-FR': 'Couette et Oreiller',
        css: 'picto-equipement_chambre_couette_et_oreiller',
      },
      sofaBed: {
        'en-US': 'Double sofa bed',
        'fr-FR': 'Canapé-lit double',
        css: 'picto-equipement_chambre_canape_lit',
      },
      bedsideTable: {
        'en-US': 'Bedside Table',
        'fr-FR': 'Table de chevet',
        css: 'picto-equipement_chambre_table_chevet',
      },
      bedsideLamp: {
        'en-US': 'Bedside Lamp',
        'fr-FR': 'Lampe de chevet',
        css: 'picto-equipement_chambre_table_chevet',
      },
      shutters: {
        'en-US': 'Shutters',
        'fr-FR': 'Volets',
        css: 'picto-equipement_chambre_volets',
      },
      curtains: {
        'en-US': 'Curtains',
        'fr-FR': 'Rideaux',
        css: 'picto-equipement_chambre_rideaux_ou_voilages',
      },
      veilCurtains: {
        'en-US': 'Veil Curtains',
        'fr-FR': 'Voilage',
        css: 'picto-equipement_chambre_rideaux_ou_voilages',
      },
    },
    'room-features-work': {
      deskAndChair: {
        default: true,
        'en-US': 'Desk and Chair',
        'fr-FR': 'Bureau et Chaise',
        css: 'picto-equipement_chambre_bureau_et_chaise',
      },
      lamp: {
        default: true,
        'en-US': 'Lamp',
        'fr-FR': 'Lampe',
        css: 'picto-equipement_chambre_lampes',
      },
      bookCase: {
        'en-US': 'Book Case',
        'fr-FR': 'Bibliothèque',
        css: 'picto-equipement_chambre_bibliotheque',
      },
      multiSocket: {
        default: true,
        'en-US': 'Multi-Socket Extension Cable',
        'fr-FR': 'Multiprise',
        css: 'picto-equipement_chambre_multiprise',
      },
    },
    'room-features-dress': {
      storage: {
        default: true,
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        css: 'picto-equipement_chambre_dressing',
      },
      hangers: {
        'en-US': 'Hangers',
        'fr-FR': 'Cintres',
        css: 'picto-equipement_chambre_cintres',
      },
      mirror: {
        'en-US': 'Mirror',
        'fr-FR': 'Miroir',
        css: 'picto-equipement_salle_de_bain_miroir',
      },
      walkinWardrobe: {
        'en-US': 'Walk-in wardrobe',
        'fr-FR': 'Dressing privé',
        css: 'picto-equipement_chambre_dressing',
      },
    },
    'room-features-general': {
      armchair: {
        'en-US': 'Armchair',
        'fr-FR': 'Fauteuil',
        css: 'picto-equipement_chambre_canape_ou_canapelit',
      },
      sofa: {
        'en-US': 'Sofa',
        'fr-FR': 'Canapé',
        css: 'picto-equipement_chambre_canape_ou_canapelit',
      },
      coffeeTable: {
        'en-US': 'Coffee table',
        'fr-FR': 'Table basse',
        css: 'picto-equipement_chambre_table_basse',
      },
      lockedRoom: {
        'en-US': 'Locked room',
        'fr-FR': 'Chambre fermée à clé',
        css: 'picto-equipement_chambre_fermeture',
      },
      privateBathroom: {
        'en-US': 'Private bathroom',
        'fr-FR': 'Salle de bain privée',
        css: 'picto-equipement_chambre_sdb_privee',
      },
      privateToilet: {
        'en-US': 'Private toilet',
        'fr-FR': 'WC privés',
        css: 'picto-equipement_chambre_wc_prives',
      },
      privateBalcony: {
        'en-US': 'Private blcony',
        'fr-FR': 'Balcon privé',
        css: 'picto-equipement_chambre_balcon',
      },
      privateTerrace: {
        'en-US': 'Private terrace',
        'fr-FR': 'Terrasse privée',
        css: 'picto-equipement_chambre_balcon',
      },
      privateGarden: {
        'en-US': 'Private Garden',
        'fr-FR': 'Jardin privé',
        css: 'picto-equipement_chambre_jardin',
      },
      balcony: {
        'en-US': 'Balcony',
        'fr-FR': 'Balcon',
        css: 'picto-equipement_chambre_balcon',
      },
      terrace: {
        'en-US': 'Terrace',
        'fr-FR': 'Terrasse',
        css: 'picto-equipement_chambre_balcon',
      },
      garden: {
        'en-US': 'Garden',
        'fr-FR': 'Jardin',
        css: 'picto-equipement_chambre_jardin',
      },
      terraceFurniture: {
        'en-US': 'Terrace furniture',
        'fr-FR': 'Mobilier de terrasse',
        css: 'picto-equipement_chambre_mobilier_de_terrasse',
      },
      individualHeating: {
        'en-US': 'Individual heating',
        'fr-FR': 'Chauffage individuel',
        css: 'picto-equipement_chambre_chauffage',
      },
    },
    'apartment-features-kitchen': {
      oven: {
        default: true,
        'en-US': 'Oven',
        'fr-FR': 'Four',
        css: 'picto-equipement_cuisine_four',
      },
      microwave: {
        default: true,
        'en-US': 'Microwave',
        'fr-FR': 'Micro-onde',
        css: 'picto-equipement_cuisine_microondes',
      },
      hotPlates: {
        'en-US': 'Hot-plates',
        'fr-FR': 'Plaques',
        css: 'picto-inclus_gaz',
      },
      dishwasher: {
        'en-US': 'Dishwasher',
        'fr-FR': 'Lave-vaisselle',
        css: 'picto-equipement_cuisine_lavevaisselle',
      },
      fridge: {
        default: true,
        'en-US': 'Fridge',
        'fr-FR': 'Frigo',
        css: 'picto-equipement_cuisine_frigo',
      },
      kettle: {
        default: true,
        'en-US': 'Kettle',
        'fr-FR': 'Bouilloire',
        css: 'picto-equipement_cuisine_bouilloire',
      },
      cookingPots: {
        default: true,
        'en-US': 'Cooking pots',
        'fr-FR': 'Casseroles',
        css: 'picto-equipement_cuisine_casseroles',
      },
      pan: {
        default: true,
        'en-US': 'Pans',
        'fr-FR': 'Poêles',
        css: 'picto-equipement_cuisine_poeles',
      },
      utensils: {
        default: true,
        'en-US': 'Utensils',
        'fr-FR': 'Ustensiles',
        css: 'picto-equipement_cuisine_ustensiles',
      },
      largePot: {
        default: true,
        'en-US': 'Large pot',
        'fr-FR': 'Faitout',
        css: 'picto-equipement_cuisine_ustensiles',
      },
      plates: {
        default: true,
        'en-US': 'Plates',
        'fr-FR': 'Assiettes',
        css: 'picto-equipement_cuisine_assiettes',
      },
      cutlery: {
        default: true,
        'en-US': 'Cutlery',
        'fr-FR': 'Couverts',
        css: 'picto-equipement_cuisine_couverts',
      },
      glasses: {
        default: true,
        'en-US': 'Glasses',
        'fr-FR': 'Verre',
        css: 'picto-equipement_cuisine_verres',
      },
      mugs: {
        default: true,
        'en-US': 'Mugs',
        'fr-FR': 'Mugs',
        css: 'picto-equipement_cuisine_mugs',
      },
      bowls: {
        default: true,
        'en-US': 'Bowls',
        'fr-FR': 'Bols',
        css: 'picto-equipement_cuisine_bols',
      },
      saladBowl: {
        default: true,
        'en-US': 'Salad Bowl',
        'fr-FR': 'Saladier',
        css: 'picto-equipement_cuisine_saladier',
      },
      colander: {
        default: true,
        'en-US': 'Colander',
        'fr-FR': 'Passoire',
        css: 'picto-equipement_cuisine_passoires',
      },
      glassBottle: {
        default: true,
        'en-US': 'Glass Bottles',
        'fr-FR': 'Bouteilles en verre',
        css: 'picto-equipement_cuisine_bouteilles_de_verre',
      },
      scissors: {
        default: true,
        'en-US': 'Scissors',
        'fr-FR': 'Ciseaux',
        css: 'picto-equipement_cuisine_ciseaux',
      },
      corkscrew: {
        default: true,
        'en-US': 'Corkscrew',
        'fr-FR': 'Tire-bouchon',
        css: 'picto-equipement_cuisine_tirebouchon',
      },
      cuttingBoards: {
        default: true,
        'en-US': 'Cutting Boards',
        'fr-FR': 'Planches à découper',
        css: 'picto-equipement_general_planche_a_decouper',
      },
      storage: {
        default: true,
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        css: 'picto-equipement_chambre_rangements',
      },
    },
    'apartment-features-bathroom': {
      bathMat: {
        default: true,
        'en-US': 'Bath Mat',
        'fr-FR': 'Tapis de Bain',
        css: 'picto-equipement_salle_de_bain_tapis_de_bain',
      },
      mirror: {
        default: true,
        'en-US': 'Mirror',
        'fr-FR': 'Miroir',
        css: 'picto-equipement_salle_de_bain_miroir',
      },
      bathtub: {
        'en-US': 'Bathtub',
        'fr-FR': 'Baignoire',
        css: 'picto-equipement_salle_de_bain_baignoire',
      },
      shower: {
        'en-US': 'Shower',
        'fr-FR': 'Douche',
        css: 'picto-equipement_salle_de_bain_douche',
      },
      storage: {
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        css: 'picto-equipement_chambre_rangements',
      },
      sink: {
        'en-US': 'Sink',
        'fr-FR': 'Lavabo',
        css: 'picto-equipement_salle_de_bain_lavabo',
      },
    },
    'apartment-features-general': {
      wifi: {
        default: true,
        'en-US': 'Wifi',
        'fr-FR': 'Wifi',
        css: 'picto-inclus_wifi',
      },
      iron: {
        default: true,
        'en-US': 'Iron',
        'fr-FR': 'Fer à repasser',
        css: 'picto-equipement_general_fer_a_repasser',
      },
      ironingBoard: {
        default: true,
        'en-US': 'Ironing Board',
        'fr-FR': 'Planche à repasser',
        css: 'picto-equipement_general_planche_a_repasser',
      },
      dryingRack: {
        default: true,
        'en-US': 'Clothes rack',
        'fr-FR': 'Tancarville',
        css: 'picto-equipement_general_tancarville',
      },
      vacuumCleaner: {
        default: true,
        'en-US': 'Vacuum cleaner',
        'fr-FR': 'Aspirateur',
        css: 'picto-equipement_general_aspirateur',
      },
      mopAndBucket: {
        default: true,
        'en-US': 'Mop and Bucket',
        'fr-FR': 'Serpillère et seau',
        css: 'picto-equipement_general_kit_menage',
      },
      scrubBrush: {
        default: true,
        'en-US': 'Scrub Brush',
        'fr-FR': 'Balai Brosse',
        css: 'picto-equipement_general_balaibrosse',
      },
      washingMachine: {
        'en-US': 'Washing Machine',
        'fr-FR': 'Lave-linge',
        css: 'picto-equipement_general_lavelinge',
      },
      storage: {
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        css: 'picto-equipement_chambre_rangements',
      },
      hangers: {
        'en-US': 'Hangers',
        'fr-FR': 'Cintres',
        css: 'picto-equipement_chambre_cintres',
      },
      sofa: {
        'en-US': 'Sofa',
        'fr-FR': 'Canapé',
        css: 'picto-equipement_chambre_canape_ou_canape_lit',
      },
      sofaBed: {
        'en-US': 'Sofa bed',
        'fr-FR': 'Canapé convertible',
        css: 'picto-equipement_chambre_canape_ou_canape_lit',
      },
      armchair: {
        'en-US': 'Armchair',
        'fr-FR': 'Fauteuil',
        css: 'picto-equipement_chambre_canape_ou_canape_lit',
      },
      coffeeTable: {
        'en-US': 'Coffee Table',
        'fr-FR': 'Table Basse',
        css: 'picto-equipement_chambre_table_basse',
      },
      balcony: {
        'en-US': 'Balcony',
        'fr-FR': 'Balcon',
        css: 'picto-equipement_chambre_balcon',
      },
      terrace: {
        'en-US': 'Terrace',
        'fr-FR': 'Terrasse',
        css: 'picto-equipement_chambre_balcon',
      },
      garden: {
        'en-US': 'Garden',
        'fr-FR': 'Jardin',
        css: 'picto-equipement_chambre_jardin',
      },
      terraceFurniture: {
        'en-US': 'Terrace Furniture',
        'fr-FR': 'Mobilier de Terrasse',
        css: 'picto-equipement_chambre_mobilier_de_terrasse',
      },
    },
  },
};
