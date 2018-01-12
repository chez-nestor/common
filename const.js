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

  SUPPORT_EMAIL: 'support@chez-nestor.com',

  LEASE_SPECIMEN_URL: 'https://drive.google.com/file/d/0B6uBt4Bf8BxuSnRod3d1TGp3bFU/view',
  ZOB_URL: 'https://drive.google.com/file/d/0B6uBt4Bf8BxuSnRod3d1TGp3bFU/view',
  ZOB_URL2: '//drive.google.com/file/d/0B6uBt4Bf8BxuSnRod3d1TGp3bFU/view',

  IDENTITY_FORM_URL: '//forms.chez-nestor.com/form/50392735671964',

  CHECKIN_FORM_URLS: {
    basic: 'forms.chez-nestor.com/73332904404955',
    comfort: 'forms.chez-nestor.com/73344756704966',
    privilege: 'forms.chez-nestor.com/73344784804968',
  },
};
