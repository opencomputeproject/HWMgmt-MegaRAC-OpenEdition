/**
 * common Constant service
 *
 * @module app/common/services/constants
 * @exports Constants
 * @name Constants

 */

window.angular && (function(angular) {
  'use strict';

  angular.module('app.common.services', []).service('Constants', function() {
    return {
      API_CREDENTIALS:
          {host_storage_key: 'API_HOST_KEY', default_protocol: 'https'},
      API_RESPONSE: {
        ERROR_STATUS: 'error',
        ERROR_MESSAGE: '401 Unauthorized',
        SUCCESS_STATUS: 'ok',
        SUCCESS_MESSAGE: '200 OK'
      },
      CERTIFICATE_TYPES: [
        {
          'Description': 'HTTPS Certificate',
          'location':
              '/redfish/v1/Managers/bmc/NetworkProtocol/HTTPS/Certificates/',
          'name': 'HTTPS Certificate'
        },
        {
          'Description': 'LDAP Certificate',
          'location': '/redfish/v1/AccountService/LDAP/Certificates/',
          'name': 'LDAP Certificate'
        },
        {
          'Description': 'TrustStore Certificate',
          'location': '/redfish/v1/Managers/bmc/Truststore/Certificates/',
          'name': 'CA Certificate'
        }
      ],
      HOST_STATE_TEXT: {
        on: 'Running',
        on_code: 'xyz.openbmc_project.State.Host.HostState.Running',
        off: 'Off',
        off_code: 'xyz.openbmc_project.State.Host.HostState.Off',
        error: 'Quiesced',
        error_code: 'xyz.openbmc_project.State.Host.HostState.Quiesced',
        unreachable: 'Unreachable'
      },
      LED_STATE: {on: true, off: false},
      LED_STATE_TEXT: {on: 'on', off: 'off'},
      SEVERITY_TO_PRIORITY_MAP: {
        Emergency: 'High',
        Alert: 'High',
        Critical: 'High',
        Error: 'High',
        Warning: 'Medium',
        Notice: 'Low',
        Debug: 'Low',
        Informational: 'Low'
      },
      PAGINATION: {LOG_ITEMS_PER_PAGE: 25},
      HARDWARE: {
        component_key_filter: '/xyz/openbmc_project/inventory/system',
        parent_components: [
          /xyz\/openbmc_project\/inventory\/system\/chassis\/motherboard\/cpu\d+\//
        ],
        uppercase_titles: ['cpu', 'dimm']
      },
      SENSOR_UNIT_MAP: {
        'xyz.openbmc_project.Sensor.Value.Unit.RPMS': 'rpms',
        'xyz.openbmc_project.Sensor.Value.Unit.DegreesC': 'C',
        'xyz.openbmc_project.Sensor.Value.Unit.Volts': 'volts',
        'xyz.openbmc_project.Sensor.Value.Unit.Meters': 'meters',
        'xyz.openbmc_project.Sensor.Value.Unit.Watts': 'watts',
        'xyz.openbmc_project.Sensor.Value.Unit.Amperes': 'amperes',
        'xyz.openbmc_project.Sensor.Value.Unit.Joules': 'joules'
      },
      SERVER_HEALTH: {
        critical: 'Critical',
        warning: 'Warning',
        good: 'Good',
        unknown: 'Unknown'
      },
      SENSOR_SORT_ORDER: [
        'xyz.openbmc_project.Sensor.Value.Unit.DegreesC',
        'xyz.openbmc_project.Sensor.Value.Unit.RPMS',
        'xyz.openbmc_project.Sensor.Value.Unit.Watts',
        'xyz.openbmc_project.Sensor.Value.Unit.Volts',
        'xyz.openbmc_project.Sensor.Value.Unit.Amperes',
        'xyz.openbmc_project.Sensor.Value.Unit.Joules',
        'xyz.openbmc_project.Sensor.Value.Unit.Meters'
      ],
      SENSOR_SORT_ORDER_DEFAULT: 8,
      FIRMWARE: {
        ACTIVATE_FIRMWARE:
            'xyz.openbmc_project.Software.Activation.RequestedActivations.Active',
        FUNCTIONAL_OBJPATH: '/xyz/openbmc_project/software/functional'
      },
      POLL_INTERVALS: {
        ACTIVATION: 5000,
        DOWNLOAD_IMAGE: 5000,
        POWER_OP: 5000,
      },
      TIMEOUT: {
        ACTIVATION: 1000 * 60 * 10,        // 10 mins
        DOWNLOAD_IMAGE: 1000 * 60 * 2,     // 2 mins
        HOST_ON: 1000 * 60 * 5,            // 5 mins
        HOST_OFF: 1000 * 60 * 5,           // 5 mins
        HOST_OFF_IMMEDIATE: 1000 * 60 * 2  // 2 mins
      },
      CERTIFICATE: {
        KEY_BIT_LENGTH: [2048],
        KEY_PAIR_ALGORITHM: ['EC', 'RSA'],
        KEY_CURVE_ID: ['prime256v1', 'secp521r1', 'secp384r1']
      },
      COUNTRIES: [
        {Name: 'Afghanistan', code: 'AF'},
        {Name: 'Albania', code: 'AL'},
        {Name: 'Algeria', code: 'DZ'},
        {Name: 'American Samoa', code: 'AS'},
        {Name: 'Andorra', code: 'AD'},
        {Name: 'Angola', code: 'AO'},
        {Name: 'Anguilla', code: 'AI'},
        {Name: 'Antarctica', code: 'AQ'},
        {Name: 'Antigua and Barbuda', code: 'AG'},
        {Name: 'Argentina', code: 'AR'},
        {Name: 'Armenia', code: 'AM'},
        {Name: 'Aruba', code: 'AW'},
        {Name: 'Australia', code: 'AU'},
        {Name: 'Austria', code: 'AT'},
        {Name: 'Azerbaijan', code: 'AZ'},
        {Name: 'Bahamas, The', code: 'BS'},
        {Name: 'Bahrain', code: 'BH'},
        {Name: 'Bangladesh', code: 'BD'},
        {Name: 'Barbados', code: 'BB'},
        {Name: 'Belarus', code: 'BY'},
        {Name: 'Belgium', code: 'BE'},
        {Name: 'Belize', code: 'BZ'},
        {Name: 'Benin', code: 'BJ'},
        {Name: 'Bermuda', code: 'BM'},
        {Name: 'Bhutan', code: 'BT'},
        {Name: 'Bolivia', code: 'BO'},
        {Name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ'},
        {Name: 'Bosnia and Herzegovina ', code: 'BA'},
        {Name: 'Bostwana', code: 'BW'},
        {Name: 'Bouvet Island', code: 'BV'},
        {Name: 'Brazil', code: 'BR'},
        {Name: 'British Indian Ocean Territory', code: 'IO'},
        {Name: 'Brunei Darussalam ', code: 'BN'},
        {Name: 'Bulgaria', code: 'BG'},
        {Name: 'Burkina Faso', code: 'BF'},
        {Name: 'Burundi', code: 'BI'},
        {Name: 'Cabo Verde', code: 'CV'},
        {Name: 'Cambodia', code: 'KH'},
        {Name: 'Cameroon', code: 'CM'},
        {Name: 'Canada', code: 'CA'},
        {Name: 'Cayman Islands', code: 'KY'},
        {Name: 'Central African Republic', code: 'CF'},
        {Name: 'Chad', code: 'TD'},
        {Name: 'Chile', code: 'CL'},
        {Name: 'China', code: 'CN'},
        {Name: 'Christmas Island ', code: 'CX'},
        {Name: 'Cocos(Keeling) Islands', code: 'CC'},
        {Name: 'Columbia', code: 'CO'},
        {Name: 'Comoros', code: 'KM'},
        {Name: 'Congo, The Democratic Republic of the', code: 'CD'},
        {Name: 'Congo', code: 'CG'},
        {Name: 'Cook Islands', code: 'CK'},
        {Name: 'Costa Rica', code: 'CR'},
        {Name: 'Croatia', code: 'HR'},
        {Name: 'Cuba', code: 'CU'},
        {Name: 'Cura??ao', code: 'CW'},
        {Name: 'Cyprus', code: 'CY'},
        {Name: 'Czechia', code: 'CZ'},
        {Name: 'C??te d\'Ivoire', code: 'CI'},
        {Name: 'Denmark', code: 'DK'},
        {Name: 'Djibouti', code: 'DJ'},
        {Name: 'Dominica', code: 'DM'},
        {Name: 'Dominican Republic', code: 'DO'},
        {Name: 'Ecuador', code: 'EC'},
        {Name: 'Egypt', code: 'EG'},
        {Name: 'El Salvador', code: 'SV'},
        {Name: 'Equatorial Guinea ', code: 'GQ'},
        {Name: 'Eritrea', code: 'ER'},
        {Name: 'Estonia', code: 'EE'},
        {Name: 'Eswatini', code: 'SZ'},
        {Name: 'Ethiopia', code: 'ET'},
        {Name: 'Falkland Islands (Malvinas)', code: 'FK'},
        {Name: 'Faroe Islands', code: 'FO'},
        {Name: 'Fiji', code: 'FJ'},
        {Name: 'Finland', code: 'FI'},
        {Name: 'France', code: 'FR'},
        {Name: 'French Guiana', code: 'GF'},
        {Name: 'French Polynesia', code: 'PF'},
        {Name: 'French Southern Territories', code: 'TF'},
        {Name: 'Gabon', code: 'GA'},
        {Name: 'Gambia, The', code: 'GM'},
        {Name: 'Georgia', code: 'GE'},
        {Name: 'Germany', code: 'DE'},
        {Name: 'Ghana', code: 'GH'},
        {Name: 'Gibraltar', code: 'GI'},
        {Name: 'Greece', code: 'GR'},
        {Name: 'Greenland', code: 'GL'},
        {Name: 'Grenada', code: 'GD'},
        {Name: 'Guadeloupe', code: 'GP'},
        {Name: 'Guam', code: 'GU'},
        {Name: 'Guatemala', code: 'GT'},
        {Name: 'Guernsey', code: 'GG'},
        {Name: 'Guinea', code: 'GN'},
        {Name: 'Guinea-Bissau', code: 'GW'},
        {Name: 'Guyana', code: 'GY'},
        {Name: 'Haiti', code: 'HT'},
        {Name: 'Heard Island and McDonald Islands', code: 'HM'},
        {Name: 'Holy See', code: 'VA'},
        {Name: 'Honduras', code: 'HN'},
        {Name: 'Hong Kong', code: 'HK'},
        {Name: 'Hungary', code: 'HU'},
        {Name: 'Iceland', code: 'IS'},
        {Name: 'India', code: 'IN'},
        {Name: 'Indonesia', code: 'ID'},
        {Name: 'Iran, Islamic Republic of', code: 'IR'},
        {Name: 'Iraq', code: 'IQ'},
        {Name: 'Ireland', code: 'IE'},
        {Name: 'Isle of Man', code: 'IM'},
        {Name: 'Israel', code: 'IL'},
        {Name: 'Italy', code: 'IT'},
        {Name: 'Jamaica', code: 'JM'},
        {Name: 'Japan', code: 'JP'},
        {Name: 'Jersey', code: 'JE'},
        {Name: 'Jordan', code: 'JO'},
        {Name: 'Kazakhstan', code: 'KZ'},
        {Name: 'Kenya', code: 'KE'},
        {Name: 'Kiribati', code: 'KI'},
        {Name: 'Korea, Republic of', code: 'KR'},
        {Name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
        {Name: 'Kuwait', code: 'KW'},
        {Name: 'Kyrgyzstan', code: 'KG'},
        {Name: 'Lao People\'s Democratic Republic', code: 'LA'},
        {Name: 'Latvia', code: 'LV'},
        {Name: 'Lebanon', code: 'LB'},
        {Name: 'Lesotho', code: 'LS'},
        {Name: 'Liberia', code: 'LR'},
        {Name: 'Libya', code: 'LY'},
        {Name: 'Liechtenstein', code: 'LI'},
        {Name: 'Lithuania', code: 'LT'},
        {Name: 'Luxembourg', code: 'LU'},
        {Name: 'Macao', code: 'MO'},
        {Name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
        {Name: 'Madagascar', code: 'MG'},
        {Name: 'Malawi', code: 'MW'},
        {Name: 'Malaysia', code: 'MY'},
        {Name: 'Maldives', code: 'MV'},
        {Name: 'Mali', code: 'ML'},
        {Name: 'Malta', code: 'MT'},
        {Name: 'Marshall Islands', code: 'MH'},
        {Name: 'Martinique', code: 'MQ'},
        {Name: 'Mauritania', code: 'MR'},
        {Name: 'Mauritius', code: 'MU'},
        {Name: 'Mayotte', code: 'YT'},
        {Name: 'Mexico', code: 'MX'},
        {Name: 'Micronesia, Federated States of', code: 'FM'},
        {Name: 'Moldova, Republic of', code: 'MD'},
        {Name: 'Monaco', code: 'MC'},
        {Name: 'Mongolia', code: 'MN'},
        {Name: 'Montenegro', code: 'ME'},
        {Name: 'Montserrat', code: 'MS'},
        {Name: 'Morocco', code: 'MA'},
        {Name: 'Mozambique', code: 'MZ'},
        {Name: 'Myanmar', code: 'MM'},
        {Name: 'Namibia', code: 'NA'},
        {Name: 'Nauru', code: 'NR'},
        {Name: 'Nepal', code: 'NP'},
        {Name: 'Netherlands', code: 'NL'},
        {Name: 'New Caledonia', code: 'NC'},
        {Name: 'New Zealand', code: 'NZ'},
        {Name: 'Nicaragua', code: 'NI'},
        {Name: 'Niger', code: 'NE'},
        {Name: 'Nigeria', code: 'NG'},
        {Name: 'Niue', code: 'NU'},
        {Name: 'Norfolk Island', code: 'NF'},
        {Name: 'Northern Mariana Islands', code: 'MP'},
        {Name: 'Norway', code: 'NO'},
        {Name: 'Oman', code: 'OM'},
        {Name: 'Pakistan', code: 'PK'},
        {Name: 'Palau', code: 'PW'},
        {Name: 'Palestine', code: 'PS'},
        {Name: 'Panama', code: 'PA'},
        {Name: 'Papua New Guinea', code: 'PG'},
        {Name: 'Paraguay', code: 'PY'},
        {Name: 'Peru', code: 'PE'},
        {Name: 'Philippines', code: 'PH'},
        {Name: 'Pitcairn', code: 'PN'},
        {Name: 'Poland', code: 'PL'},
        {Name: 'Portugal', code: 'PT'},
        {Name: 'Puerto Rico', code: 'PR'},
        {Name: 'Qatar', code: 'QA'},
        {Name: 'Romania', code: 'RO'},
        {Name: 'Russian Federation', code: 'RU'},
        {Name: 'Rwanda', code: 'RW'},
        {Name: 'R??union', code: 'RE'},
        {Name: 'Saint Barth??lemy', code: 'BL'},
        {Name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'SH'},
        {Name: 'Saint Kitts and Nevis ', code: 'KN'},
        {Name: 'Saint Lucia', code: 'LC'},
        {Name: 'Saint Martin', code: 'MF'},
        {Name: 'Saint Pierre and Miquelon', code: 'PM'},
        {Name: 'Saint Vincent and the Grenadines', code: 'VC'},
        {Name: 'Samoa', code: 'WS'},
        {Name: 'San Marino ', code: 'SM'},
        {Name: 'Sao Tome and Principe', code: 'ST'},
        {Name: 'Saudi Arabia', code: 'SA'},
        {Name: 'Senegal', code: 'SN'},
        {Name: 'Serbia', code: 'RS'},
        {Name: 'Seychelles', code: 'SC'},
        {Name: 'Sierra Leone', code: 'SL'},
        {Name: 'Singapore', code: 'SG'},
        {Name: 'Sint Maarten', code: 'SX'},
        {Name: 'Slovakia', code: 'SK'},
        {Name: 'Slovenia', code: 'SI'},
        {Name: 'Solomon Islands', code: 'SB'},
        {Name: 'Somalia', code: 'SO'},
        {Name: 'South Africa ', code: 'ZA'},
        {Name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
        {Name: 'South Sudan', code: 'SS'},
        {Name: 'Spain', code: 'ES'},
        {Name: 'Sri Lanka', code: 'LK'},
        {Name: 'Sudan', code: 'SD'},
        {Name: 'Suriname', code: 'SR'},
        {Name: 'Svalbard and Jan Mayen', code: 'SJ'},
        {Name: 'Sweden', code: 'SE'},
        {Name: 'Switzerland', code: 'CH'},
        {Name: 'Syrian Arab Republic', code: 'SY'},
        {Name: 'Taiwan', code: 'TW'},
        {Name: 'Tajikistan', code: 'TJ'},
        {Name: 'Tanzania, United Republic of', code: 'TZ'},
        {Name: 'Thailand', code: 'TH'},
        {Name: 'Timor-Leste', code: 'TL'},
        {Name: 'Togo', code: 'TG'},
        {Name: 'Tokelau', code: 'TK'},
        {Name: 'Tonga', code: 'TO'},
        {Name: 'Trinidad and Tobago', code: 'TT'},
        {Name: 'Tunisia', code: 'TN'},
        {Name: 'Turkey', code: 'TR'},
        {Name: 'Turkmenistan', code: 'TM'},
        {Name: 'Turks and Caicos Islands', code: 'TC'},
        {Name: 'Tuvalu', code: 'TV'},
        {Name: 'Uganda', code: 'UG'},
        {Name: 'Ukraine', code: 'UA'},
        {Name: 'United Arab Emirates', code: 'AE'},
        {Name: 'United Kingdom', code: 'GB'},
        {Name: 'United States Minor Outlying Islands', code: 'UM'},
        {Name: 'United States of America', code: 'US'},
        {Name: 'Uruguay', code: 'UY'},
        {Name: 'Uzbekistan', code: 'UZ'},
        {Name: 'Vanuatu', code: 'VU'},
        {Name: 'Venezuela', code: 'VE'},
        {Name: 'Viet Nam', code: 'VN'},
        {Name: 'Virgin Islands, British', code: 'VG'},
        {Name: 'Virgin Islands, U.S', code: 'VI'},
        {Name: 'Wallis and Futuna', code: 'WF'},
        {Name: 'Western Sahara', code: 'EH'},
        {Name: 'Yemen', code: 'YE'},
        {Name: 'Zambia', code: 'ZM'},
        {Name: 'Zimbabwe', code: 'ZW'},
        {Name: '??land Islands', code: 'AX'}
      ],
      MESSAGES: {
        POLL: {
          HOST_ON_TIMEOUT:
              'Time out. System did not reach Running state in allotted time.',
          HOST_OFF_TIMEOUT:
              'Time out. System did not reach Off state in allotted time.',
          HOST_QUIESCED: 'System is in Error state.',
          DOWNLOAD_IMAGE_TIMEOUT:
              'Time out. Did not download image in allotted time.',
        },
        POWER_OP: {
          POWER_ON_FAILED: 'Power on failed.',
          WARM_REBOOT_FAILED: 'Warm reboot failed.',
          COLD_REBOOT_FAILED: 'Cold reboot failed.',
          ORDERLY_SHUTDOWN_FAILED: 'Orderly shutdown failed.',
          IMMEDIATE_SHUTDOWN_FAILED: 'Immediate shutdown failed.',
        },
        SENSOR: {
          NO_SENSOR_DATA: 'There are no sensors found.',
          CRITICAL_NO_SENSOR_DATA: 'There are no sensors in Critical state.',
          WARNING_NO_SENSOR_DATA: 'There are no sensors in Warning state.',
          NORMAL_NO_SENSOR_DATA: 'There are no sensors in Normal state.'
        },
        ERROR_MESSAGE_DESC_TEMPLATE: '{{status}} - {{description}}',
      },
      POWER_CAP_TEXT: {unit: 'W', disabled: 'Not Enabled'},
      POWER_CONSUMPTION_TEXT: {
        'xyz.openbmc_project.Sensor.Value.Unit.Watts': 'W',
        notavailable: 'Not Available'
      },
    };
  });
})(window.angular);
