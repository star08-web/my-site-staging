// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false
    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: true,                   // default: true
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'en': {
            consent_modal: {
                title: '🍪 Who wants a cookie?',
                description: 'We use cookies to make your experience better, you can customize your privacy settings. <button type="button" data-cc="c-settings" class="cc-link">Clicking Here</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie preferences',
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Online Font CDN',
                        description: 'this switch let the website load fonts from google fonts',
                        toggle: {
                            value: 'performance',     // your cookie category
                            enabled: true,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: 'no-cookie',       // match all cookies starting with "_ga"
                                col2: 'fonts.google.com',
                                col3: 'ephemeral',
                                col4: 'this switch let the website load fonts from google fonts, you can disable this but the website will need to load the self-hosted fonts, slowing down <br> (raccomanded to leave on)',
                                is_regex: false
                            }
                        ]
                    }, {
                        title: 'Online Services',
                        description: 'Those cookies are created by online services and widgets.',
                        toggle: {
                            value: 'miscellanous',
                            enabled: false,
                            readonly: false
                        },cookie_table: [            
                        {
                            col1: 'various cookies',       
                            col2: 'lnk.to, koji.to, youtube.com, ffm.to',
                            col3: '2 years',
                            col4: 'wing down <br> (raccomanded to leave on)',
                            is_regex: false
                        }
                    ]
                    }, {
                        title: 'More information',
                        description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                    }
                ]
            }
        }
    }
});