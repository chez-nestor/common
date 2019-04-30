module.exports = {
  UNAVAILABLE_DATE: new Date(1E14),

  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss.SSSZ',

  LEASE_DURATION: '6',

  BASIC_PACK:         'basic',
  COMFORT_PACK:     'comfort',
  PRIVILEGE_PACK: 'privilege',

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
    1:              6000, // 1 room
    2:              6000, // 2 rooms
    default:        6000, // 3 or more rooms
  },

  CHECKIN_DURATION:   30,
  CHECKOUT_DURATION:  60,
  VISIT_DURATION:     20,

  LATE_NOTICE_FEES: {
    '0-9days':     67900,
    '10-19days':   47900,
    '20-29days':   27900,
  },

  LATE_FEES:        1000,

  DEPOSIT_REFUND_DELAYS: {
    basic:            60,
    comfort:          40,
    privilege:        20,
  },

  UNCASHED_DEPOSIT_FEE: 2900,

  TWO_OCCUPANTS_FEES: 9000,

  SALES_EMAIL: 'hello@chez-nestor.com',

  SUPPORT_EMAIL: 'support@chez-nestor.com',

  LEASE_SPECIMEN_URL: 'https://drive.google.com/file/d/0B6uBt4Bf8BxuSnRod3d1TGp3bFU/view',

  IDENTITY_FORM_URL: 'https://forms.chez-nestor.com/cheznestor/identity-record',

  PLUS1_FORM_URL: 'https://forms.chez-nestor.com/81495014404956',

  ELIGIBILITY_FORM_URL: 'https://cheznestor.typeform.com/to/gclDho',

  HOUSING_GUIDE_URL: 'https://forms.chez-nestor.com/81264205204950',

  ALERT_FORM_URL: 'https://forms.chez-nestor.com/81084169528968',

  CHECKIN_FORM_URL: 'https://www.jotformpro.com/form/72183828304962',

  CHECKOUT_FORM_URL: 'https://forms.chez-nestor.com/80883251192357',

  DEPOSIT_REFUND_FORM_URL: 'https://forms.chez-nestor.com/72291766784369',

  INVENTORY_FORM_URL: 'https://forms.chez-nestor.com/90784713029360',

  ENUMS: {
    apartmentPicsAlts: {
      kitchen: {
        'en-US': 'Kitchen',
        'fr-FR': 'Cuisine',
        'es-ES': 'Cocina',
      },
      bathroom: {
        'en-US': 'Bathroom',
        'fr-FR': 'Salle de bain',
        'es-ES': 'Cuarto de baño',
      },
      hall: {
        'en-US': 'Hall',
        'fr-FR': 'Hall',
        'es-ES': 'Vestíbulo',
      },
      wc: {
        'en-US': 'Toilets',
        'fr-FR': 'Toilettes',
        'es-ES': 'Aseos',
      },
      balcony: {
        'en-US': 'Balcony',
        'fr-FR': 'Balcon',
        'es-ES': 'Balcón',
      },
      patio: {
        'en-US': 'Patio',
        'fr-FR': 'Terrasse',
        'es-ES': 'Patio',
      },
      garden: {
        'en-US': 'Garden',
        'fr-FR': 'Jardin',
        'es-ES': 'Jardín',
      },
      loggia: {
        'en-US': 'Loggia',
        'fr-FR': 'Loggia',
        'es-ES': 'Logia',
      },
      livingroom: {
        'en-US': 'Living room',
        'fr-FR': 'Séjour',
        'es-ES': 'Sala de estar',
      },
      diningroom: {
        'en-US': 'Dining room',
        'fr-FR': 'Salle à manger',
        'es-ES': 'Comedor',
      },
      building: {
        'en-US': 'Building',
        'fr-FR': 'Immeuble',
        'es-ES': 'Edificio',
      },
      cellar: {
        'en-US': 'Cellar',
        'fr-FR': 'Cellier',
        'es-ES': 'Sótano',
      },
      dressing: {
        'en-US': 'Dressing',
        'fr-FR': 'Dressing',
        'es-ES': 'Vestir',
      },
      floorplan: {
        'en-US': 'Plan du logement',
        'fr-FR': 'Floor Plan',
        'es-ES': 'Plano de acceso',
      },
    },
    roomPicsAlts: {
      overview: {
        'en-US': 'Overview of the room',
        'fr-FR': 'Vue d\'ensemble de la chambre',
        'es-ES': 'Vista general de la sala',
      },
      privateBathroom: {
        'en-US': 'Private Bathroom',
        'fr-FR': 'Salle de bain privée',
        'es-ES': 'Baño privado',
      },
      privateToilet: {
        'en-US': 'Private Toilet',
        'fr-FR': 'WC Privés',
        'es-ES': 'Aseo privado',
      },
      privateBalcony: {
        'en-US': 'Private Balcony',
        'fr-FR': 'Balcon privé',
        'es-ES': 'Balcón privado',
      },
      privateTerrace: {
        'en-US': 'Private Terrace',
        'fr-FR': 'Terrasse Privée',
        'es-ES': 'Terraza privada',
      },
      privateGarden: {
        'en-US': 'Private Garden',
        'fr-FR': 'Jardin privé',
        'es-ES': 'Jardín privado',
      },
      privateDressing: {
        'en-US': 'Private Dressing',
        'fr-FR': 'Dressing privé',
        'es-ES': 'Vestimenta privada',
      },
      privateLoggia: {
        'en-US': 'Private Loggia',
        'fr-FR': 'Loggia privé',
        'es-ES': 'Logia privada',
      },
    },
    beds: {
      double: {
        'en-US': 'double bed',
        'fr-FR': 'lit double',
        'es-ES': 'cama doble',
      },
      simple: {
        'en-US': 'single bed',
        'fr-FR': 'lit simple',
        'es-ES': 'cama individual',
      },
      sofa: {
        'en-US': 'sofa',
        'fr-FR': 'canapé',
        'es-ES': 'canapé',
      },
      'double+sofa': {
        'en-US': 'double bed + sofa',
        'fr-FR': 'lit double + canapé',
        'es-ES': 'cama doble + canapé',
      },
      'simple+sofa': {
        'en-US': 'single bed + sofa',
        'fr-FR': 'lit simple + sofa',
        'es-ES': 'cama individual + canapé',
      },
      'simple+simple': {
        'en-US': 'two single beds',
        'fr-FR': 'deux lits simples',
        'es-ES': 'dos camas individuales',
      },
    },
    'room-features-sleep': {
      duvetAndPillow: {
        default: true,
        'en-US': 'Duvet and Pillow',
        'fr-FR': 'Couette et Oreiller',
        'es-ES': 'Edredón y almohada',
        css: 'picto-equipement_chambre_couette_et_oreiller',
      },
      bedsideTable: {
        'en-US': 'Bedside Table',
        'fr-FR': 'Table de chevet',
        'es-ES': 'Mesilla de noche',
        css: 'picto-equipement_chambre_table_chevet',
      },
      bedsideLamp: {
        'en-US': 'Bedside Lamp',
        'fr-FR': 'Lampe de chevet',
        'es-ES': 'Lámpara de cabecera',
        css: 'picto-equipement_chambre_lampe_chevet',
      },
      shutters: {
        'en-US': 'Shutters',
        'fr-FR': 'Volets',
        'es-ES': 'Persianas',
        css: 'picto-equipement_chambre_volets',
      },
      curtains: {
        'en-US': 'Curtains',
        'fr-FR': 'Rideaux',
        'es-ES': 'Cortinas',
        css: 'picto-equipement_chambre_rideaux_ou_voilages',
      },
      veilCurtains: {
        'en-US': 'Veil Curtains',
        'fr-FR': 'Voilage',
        'es-ES': 'Cortinas de Velo',
        css: 'picto-equipement_chambre_rideaux_ou_voilages',
      },
      doubleBed: {
        'en-US': 'Double bed',
        'fr-FR': 'Lit double',
        'es-ES': 'Cama doble',
        css: 'picto-equipement_chambre_lit_double',
      },
      simpleBed: {
        'en-US': 'Single bed',
        'fr-FR': 'Lit simple',
        'es-ES': 'Cama individual',
        css: 'picto-equipement_chambre_lit_simple',
      },
      twoSimpleBed: {
        'en-US': 'Two simple beds',
        'fr-FR': 'Deux lits simples',
        'es-ES': 'Dos camas individuales',
        css: 'picto-equipement_chambre_lit_simple',
      },
      sofaBed: {
        'en-US': 'Sofa bed',
        'fr-FR': 'Canapé lit',
        'es-ES': 'Sofá cama',
        css: 'picto-equipement_chambre_canape_ou_canapelit',
      },
    },
    'room-features-work': {
      deskAndChair: {
        default: true,
        'en-US': 'Desk and Chair',
        'fr-FR': 'Bureau et Chaise',
        'es-ES': 'Escritorio y silla',
        css: 'picto-equipement_chambre_bureau_et_chaise',
      },
      lamp: {
        default: true,
        'en-US': 'Lamp',
        'fr-FR': 'Lampe',
        'es-ES': 'Lámpara',
        css: 'picto-equipement_chambre_lampes',
      },
      bookCase: {
        'en-US': 'Book Case',
        'fr-FR': 'Bibliothèque',
        'es-ES': 'Estuche para libros',
        css: 'picto-equipement_chambre_bibliotheque',
      },
      multiSocket: {
        default: true,
        'en-US': 'Multi-Socket Extension Cable',
        'fr-FR': 'Multiprise',
        'es-ES': 'Cable de extensión multienchufe',
        css: 'picto-equipement_chambre_multiprise',
      },
    },
    'room-features-dress': {
      storage: {
        default: true,
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        'es-ES': 'Almacenamiento',
        css: 'picto-equipement_chambre_dressing',
      },
      hangers: {
        'en-US': 'Hangers',
        'fr-FR': 'Cintres',
        'es-ES': 'Perchas',
        css: 'picto-equipement_chambre_cintres',
      },
      mirror: {
        'en-US': 'Mirror',
        'fr-FR': 'Miroir',
        'es-ES': 'Espejo',
        css: 'picto-equipement_salle_de_bain_miroir',
      },
      walkinWardrobe: {
        'en-US': 'Walk-in wardrobe',
        'fr-FR': 'Dressing privé',
        'es-ES': 'Armario vestidor',
        css: 'picto-equipement_chambre_dressing',
      },
    },
    'room-features-general': {
      armchair: {
        'en-US': 'Armchair',
        'fr-FR': 'Fauteuil',
        'es-ES': 'Sillón',
        css: 'picto-equipement_chambre_fauteuil',
      },
      coffeeTable: {
        'en-US': 'Coffee table',
        'fr-FR': 'Table basse',
        'es-ES': 'Mesa de centro',
        css: 'picto-equipement_chambre_table_basse',
      },
      lockedRoom: {
        'en-US': 'Locked room',
        'fr-FR': 'Chambre fermée à clé',
        'es-ES': 'Habitación cerrada',
        css: 'picto-equipement_chambre_fermeture',
      },
      privateBathroom: {
        'en-US': 'Private bathroom',
        'fr-FR': 'Salle de bain privée',
        'es-ES': 'Baño privado',
        css: 'picto-equipement_chambre_sdb_privee',
      },
      privateToilet: {
        'en-US': 'Private toilet',
        'fr-FR': 'WC privés',
        'es-ES': 'Aseo privado',
        css: 'picto-equipement_chambre_wc_prives',
      },
      privateBalcony: {
        'en-US': 'Private balcony',
        'fr-FR': 'Balcon privé',
        'es-ES': 'Balcón privado',
        css: 'picto-equipement_chambre_balcon',
      },
      privateTerrace: {
        'en-US': 'Private terrace',
        'fr-FR': 'Terrasse privée',
        'es-ES': 'Terraza privada',
        css: 'picto-equipement_chambre_balcon',
      },
      privateGarden: {
        'en-US': 'Private Garden',
        'fr-FR': 'Jardin privé',
        'es-ES': 'Jardín privado',
        css: 'picto-equipement_chambre_jardin',
      },
      balcony: {
        'en-US': 'Balcony',
        'fr-FR': 'Balcon',
        'es-ES': 'Balcón',
        css: 'picto-equipement_chambre_balcon',
      },
      terrace: {
        'en-US': 'Terrace',
        'fr-FR': 'Terrasse',
        'es-ES': 'Terraza',
        css: 'picto-equipement_chambre_balcon',
      },
      garden: {
        'en-US': 'Garden',
        'fr-FR': 'Jardin',
        'es-ES': 'Jardín',
        css: 'picto-equipement_chambre_jardin',
      },
      terraceFurniture: {
        'en-US': 'Terrace furniture',
        'fr-FR': 'Mobilier de terrasse',
        'es-ES': 'Muebles de terraza',
        css: 'picto-equipement_chambre_mobilier_de_terrasse',
      },
      individualHeating: {
        'en-US': 'Individual heating',
        'fr-FR': 'Chauffage individuel',
        'es-ES': 'Calefacción individual',
        css: 'picto-equipement_chambre_chauffage',
      },
      sofa: {
        'en-US': 'Sofa',
        'fr-FR': 'Canapé',
        'es-ES': 'Sofá',
        css: 'picto-equipement_general_canape',
      },
      sofaBed: {
        'en-US': 'Sofa bed',
        'fr-FR': 'Canapé lit',
        'es-ES': 'Sofá cama',
        css: 'picto-equipement_chambre_canape_ou_canapelit',
      },
    },
    'apartment-features-kitchen': {
      oven: {
        default: true,
        'en-US': 'Oven',
        'fr-FR': 'Four',
        'es-ES': 'Horno',
        css: 'picto-equipement_cuisine_four',
      },
      microwave: {
        default: true,
        'en-US': 'Microwave',
        'fr-FR': 'Micro-onde',
        'es-ES': 'Microondas',
        css: 'picto-equipement_cuisine_microondes',
      },
      hotPlates: {
        'en-US': 'Hot-plates',
        'fr-FR': 'Plaques',
        'es-ES': 'Placas calientes',
        css: 'picto-inclus_gaz',
      },
      dishwasher: {
        'en-US': 'Dishwasher',
        'fr-FR': 'Lave-vaisselle',
        'es-ES': 'Lavavajillas',
        css: 'picto-equipement_cuisine_lavevaisselle',
      },
      fridge: {
        default: true,
        'en-US': 'Fridge',
        'fr-FR': 'Frigo',
        'es-ES': 'Nevera',
        css: 'picto-equipement_cuisine_frigo',
      },
      kettle: {
        default: true,
        'en-US': 'Kettle',
        'fr-FR': 'Bouilloire',
        'es-ES': 'Hervidor de agua',
        css: 'picto-equipement_cuisine_bouilloire',
      },
      cookingPots: {
        default: true,
        'en-US': 'Cooking pots',
        'fr-FR': 'Casseroles',
        'es-ES': 'Ollas de cocina',
        css: 'picto-equipement_cuisine_casseroles',
      },
      pan: {
        default: true,
        'en-US': 'Pans',
        'fr-FR': 'Poêles',
        'es-ES': 'Sartenes',
        css: 'picto-equipement_cuisine_poeles',
      },
      utensils: {
        default: true,
        'en-US': 'Utensils',
        'fr-FR': 'Ustensiles',
        'es-ES': 'Utensilios',
        css: 'picto-equipement_cuisine_ustensiles',
      },
      largePot: {
        default: true,
        'en-US': 'Large pot',
        'fr-FR': 'Faitout',
        'es-ES': 'Maceta grande',
        css: 'picto-equipement_cuisine_faitout',
      },
      plates: {
        default: true,
        'en-US': 'Plates',
        'fr-FR': 'Assiettes',
        'es-ES': 'Placas',
        css: 'picto-equipement_cuisine_assiettes',
      },
      cutlery: {
        default: true,
        'en-US': 'Cutlery',
        'fr-FR': 'Couverts',
        'es-ES': 'Cubiertos',
        css: 'picto-equipement_cuisine_couverts',
      },
      glasses: {
        default: true,
        'en-US': 'Glasses',
        'fr-FR': 'Verre',
        'es-ES': 'Gafas',
        css: 'picto-equipement_cuisine_verres',
      },
      mugs: {
        default: true,
        'en-US': 'Mugs',
        'fr-FR': 'Tasses',
        'es-ES': 'Tazas',
        css: 'picto-equipement_cuisine_mugs',
      },
      bowls: {
        default: true,
        'en-US': 'Bowls',
        'fr-FR': 'Bols',
        'es-ES': 'Cuencos',
        css: 'picto-equipement_cuisine_bols',
      },
      saladBowl: {
        default: true,
        'en-US': 'Salad Bowl',
        'fr-FR': 'Saladier',
        'es-ES': 'Tazón para ensalada',
        css: 'picto-equipement_cuisine_saladier',
      },
      colander: {
        default: true,
        'en-US': 'Colander',
        'fr-FR': 'Passoire',
        'es-ES': 'Escurridor',
        css: 'picto-equipement_cuisine_passoire',
      },
      glassBottle: {
        default: true,
        'en-US': 'Glass Bottles',
        'fr-FR': 'Bouteilles en verre',
        'es-ES': 'Glass Bottles',
        css: 'picto-equipement_cuisine_bouteilles_de_verre',
      },
      scissors: {
        default: true,
        'en-US': 'Scissors',
        'fr-FR': 'Ciseaux',
        'es-ES': 'Tijeras',
        css: 'picto-equipement_cuisine_ciseaux',
      },
      corkscrew: {
        default: true,
        'en-US': 'Corkscrew',
        'fr-FR': 'Tire-bouchon',
        'es-ES': 'Sacacorchos',
        css: 'picto-equipement_cuisine_tirebouchon',
      },
      cuttingBoards: {
        default: true,
        'en-US': 'Cutting Boards',
        'fr-FR': 'Planches à découper',
        'es-ES': 'Tablas de corte',
        css: 'picto-equipement_cuisine_planches_a_decouper',
      },
      storage: {
        default: true,
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        'es-ES': 'Almacenamiento',
        css: 'picto-equipement_chambre_rangements',
      },
    },
    'apartment-features-bathroom': {
      bathMat: {
        default: true,
        'en-US': 'Bath Mat',
        'fr-FR': 'Tapis de Bain',
        'es-ES': 'Alfombrilla de baño',
        css: 'picto-equipement_salle_de_bain_tapis_de_bain',
      },
      mirror: {
        default: true,
        'en-US': 'Mirror',
        'fr-FR': 'Miroir',
        'es-ES': 'Espejo',
        css: 'picto-equipement_salle_de_bain_miroir',
      },
      bathtub: {
        'en-US': 'Bathtub',
        'fr-FR': 'Baignoire',
        'es-ES': 'Bañera',
        css: 'picto-equipement_salle_de_bain_baignoire',
      },
      shower: {
        'en-US': 'Shower',
        'fr-FR': 'Douche',
        'es-ES': 'Ducha',
        css: 'picto-equipement_salle_de_bain_douche',
      },
      storage: {
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        'es-ES': 'Almacenamiento',
        css: 'picto-equipement_chambre_rangements',
      },
      sink: {
        'en-US': 'Sink',
        'fr-FR': 'Lavabo',
        'es-ES': 'Fregadero',
        css: 'picto-equipement_salle_de_bain_lavabo',
      },
    },
    'apartment-features-general': {
      wifi: {
        default: true,
        'en-US': 'Wifi',
        'fr-FR': 'Wifi',
        'es-ES': 'Wifi',
        css: 'picto-inclus_wifi',
      },
      iron: {
        default: true,
        'en-US': 'Iron',
        'fr-FR': 'Fer à repasser',
        'es-ES': 'Plancha',
        css: 'picto-equipement_general_fer_a_repasser',
      },
      ironingBoard: {
        default: true,
        'en-US': 'Ironing Board',
        'fr-FR': 'Planche à repasser',
        'es-ES': 'Tabla de planchar',
        css: 'picto-equipement_general_planche_a_repasser',
      },
      dryingRack: {
        default: true,
        'en-US': 'Clothes rack',
        'fr-FR': 'Tancarville',
        'es-ES': 'Perchero',
        css: 'picto-equipement_general_tancarville',
      },
      vacuumCleaner: {
        default: true,
        'en-US': 'Vacuum cleaner',
        'fr-FR': 'Aspirateur',
        'es-ES': 'Aspiradora',
        css: 'picto-equipement_general_aspirateur',
      },
      mopAndBucket: {
        default: true,
        'en-US': 'Mop and Bucket',
        'fr-FR': 'Serpillère et seau',
        'es-ES': 'Mopa y cubo',
        css: 'picto-equipement_general_kit_menage',
      },
      scrubBrush: {
        default: true,
        'en-US': 'Scrub Brush',
        'fr-FR': 'Balai Brosse',
        'es-ES': 'Cepillo para fregar',
        css: 'picto-equipement_general_balaibrosse',
      },
      washingMachine: {
        'en-US': 'Washing Machine',
        'fr-FR': 'Lave-linge',
        'es-ES': 'Lavadora',
        css: 'picto-equipement_general_lavelinge',
      },
      storage: {
        'en-US': 'Storage',
        'fr-FR': 'Rangements',
        'es-ES': 'Almacenamiento',
        css: 'picto-equipement_chambre_rangements',
      },
      hangers: {
        'en-US': 'Hangers',
        'fr-FR': 'Cintres',
        'es-ES': 'Perchas',
        css: 'picto-equipement_chambre_cintres',
      },
      sofa: {
        'en-US': 'Sofa',
        'fr-FR': 'Canapé',
        'es-ES': 'Sofá',
        css: 'picto-equipement_general_canape',
      },
      sofaBed: {
        'en-US': 'Sofa bed',
        'fr-FR': 'Canapé convertible',
        'es-ES': 'Sofá cama',
        css: 'picto-equipement_chambre_canape_ou_canapelit',
      },
      armchair: {
        'en-US': 'Armchair',
        'fr-FR': 'Fauteuil',
        'es-ES': 'Sillón',
        css: 'picto-equipement_chambre_fauteuil',
      },
      coffeeTable: {
        'en-US': 'Coffee Table',
        'fr-FR': 'Table Basse',
        'es-ES': 'Mesa de centro',
        css: 'picto-equipement_chambre_table_basse',
      },
      balcony: {
        'en-US': 'Balcony',
        'fr-FR': 'Balcon',
        'es-ES': 'Balcón',
        css: 'picto-equipement_chambre_balcon',
      },
      terrace: {
        'en-US': 'Terrace',
        'fr-FR': 'Terrasse',
        'es-ES': 'Terraza',
        css: 'picto-equipement_chambre_balcon',
      },
      garden: {
        'en-US': 'Garden',
        'fr-FR': 'Jardin',
        'es-ES': 'Jardín',
        css: 'picto-equipement_chambre_jardin',
      },
      terraceFurniture: {
        'en-US': 'Terrace Furniture',
        'fr-FR': 'Mobilier de Terrasse',
        'es-ES': 'Muebles de terraza',
        css: 'picto-equipement_chambre_mobilier_de_terrasse',
      },
      bikeShelter: {
        'en-US': 'Bicycle shelter',
        'fr-FR': 'Local vélo',
        'es-ES': 'Garaje de bicicletas',
        css: 'picto-local_velo',
      },
    },
  },
};
