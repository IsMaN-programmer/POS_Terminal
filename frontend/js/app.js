const POS = {
    icons: {
        restaurant: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        menu: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
        pause: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>',
        tag: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
        briefcase: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
        'x-circle': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        'check-square': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>',
        'file-text': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
        shield: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        settings: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        sun: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
        moon: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
        'log-out': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
        search: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
        x: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
        table: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="10" rx="8" ry="3"/><line x1="12" y1="13" x2="12" y2="20"/><path d="M8 20h8"/></svg>',
        'trash-2': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
        coffee: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        package: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
        truck: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
        'shopping-cart': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
        'dollar-sign': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
        'credit-card': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        smartphone: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
        'pie-chart': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>',
        plus: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
        'edit-3': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
        check: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        users: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        'alert-triangle': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        'rotate-ccw': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>',
        edit: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
        'plus-square': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
        home: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
        info: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
        printer: '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
        'download': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
        'bar-chart': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
        'chevron-left': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
        'chevron-right': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
        'chevron-up': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
        'chevron-down': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
        'calendar': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
        'clock': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        'map-pin': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        'coffee': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        'wallet': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
        'archive': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
        'gift': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
        'star': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        'heart': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        'smile': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
        'camera': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
        'folder': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
        'image': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',
        'upload': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
        'database': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
        'user-plus': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>',
        'utensils': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
        'soup': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a5 5 0 0 1 5 5c0 2-1 3-1 5h-8c0-2-1-3-1-5a5 5 0 0 1 5-5z"/><path d="M8 13h8"/><path d="M6.5 17a3.5 3.5 0 0 0 0 7h11a3.5 3.5 0 0 0 0-7"/><path d="M18 8l2-2"/><path d="M6 8l-2-2"/></svg>',
        'salad': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M7 10l5-3 5 3"/><path d="M7 14l5 3 5-3"/><path d="M12 7v10"/></svg>',
        'cake': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16c1 .5 2 1 2 0s1-1.5 2 0 1 .5 2 0 1-1.5 2 0 1 .5 2 0 1-1.5 2 0 1 .5 2 0 1-1.5 2 0"/><path d="M12 4V2"/><path d="M9 6v-2"/><path d="M15 6v-2"/><path d="M8 11V9"/><path d="M16 11V9"/><path d="M12 11V9"/></svg>',
        'bread': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a4 4 0 0 1 4-4z"/><path d="M3 12h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/></svg>',
        'drink': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
        'clipboard': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
        'refresh-ccw': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
        'lock': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        'globe': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        'type': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
        'refresh-cw': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
        'arrow-up-circle': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>',
        'cpu': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
        'help-circle': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
        'user': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
        'log-in': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
        'key': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
        'percent': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
        'link': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
        'monitor': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',

        'play': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
        'send': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
        'phone': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'phone-call': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'mail': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
        'hash': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',

        /* ---- Food SVG Icons ---- */
        'meat': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8a5 5 0 0 0-10 0c0 3 2 7 5 9 3-2 5-6 5-9z"/><path d="M12 17v4"/><path d="M9 21h6"/></svg>',
        'dumpling': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a8 8 0 0 1 16 0v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-1z"/><path d="M9 16l-1 3"/><path d="M15 16l1 3"/><path d="M7 7l2 2"/><path d="M17 7l-2 2"/></svg>',
        'rice': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 18 0"/><path d="M3 12v3a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3"/><line x1="8" y1="9" x2="8" y2="11"/><line x1="12" y1="9" x2="12" y2="11"/><line x1="16" y1="9" x2="16" y2="11"/></svg>',
        'hot-drink': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v2"/><path d="M16 2v2"/><path d="M4 8h14v6a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8z"/><path d="M18 8a3 3 0 0 1 0 6"/><path d="M9 17v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3"/></svg>',
        'water': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8 9 6 12 6 15a6 6 0 0 0 12 0c0-3-2-6-6-13z"/><path d="M12 22a6 6 0 0 0 6-6"/></svg>',
        'ice-cream': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20v-7"/><path d="M8 20h8"/><path d="M6 12a6 6 0 0 1 12 0"/><path d="M9 7l3-5 3 5"/><path d="M7 12l5 7 5-7"/></svg>',
        'fruit': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c-3 0-6-2.5-6-6 0-3.5 2.5-6 6-6s6 2.5 6 6c0 3.5-3 6-6 6z"/><path d="M12 10c1-2 3-3 5-3"/><path d="M12 10c-1-2-3-3-5-3"/><path d="M12 16l-2-3"/></svg>',
        'fish': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0-4 4-7 8-7s8 3 8 7-4 7-8 7-8-3-8-7z"/><path d="M4 12H2"/><path d="M22 12h-2"/><path d="M12 8v8"/></svg>',
        'pizza': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>',
        'burger': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h18"/><path d="M4 15h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z"/><path d="M5 11V7a3 3 0 0 1 6 0v4"/><path d="M13 11V7a3 3 0 0 1 6 0v4"/></svg>',
        'bowl': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/><path d="M4 12v3a8 8 0 0 0 16 0v-3"/><path d="M12 2v4"/><path d="M8 4v2"/><path d="M16 4v2"/></svg>',
        'leaf': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
        'milk': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8"/><path d="M9 2v2.5a3.5 3.5 0 0 1-2 3.2L6 8a4 4 0 0 0-2 3.4V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.6A4 4 0 0 0 18 8l-1-.3a3.5 3.5 0 0 1-2-3.2V2"/><path d="M9 14h6"/></svg>',
        'candy': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"/><path d="M14 6.5v10"/><path d="M10 7.5v10"/><path d="m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .78.26 1.53.73 2.13L22 7l-5 1"/><path d="m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.73-2.13L2 17l5-1"/></svg>',
        'croissant': '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m20.82 14.5-3.18 3.18a1.5 1.5 0 0 1-2.12 0l-2.19-2.19a6 6 0 0 1-1.76-3.55l-.09-.7a5.9 5.9 0 0 0-.73-2.28L9.5 7.5l1.5-1.5c.83.83 1.5 1.5 1.5 1.5s2.5 0 5 2.5 4 5.5 3.5 5.5z"/><path d="m9.5 7.5-3.18 3.18a1.5 1.5 0 0 0 0 2.12l2.19 2.19"/><path d="M3.5 9.5c.5 2 2 5.5 4 7.5l2 2"/><path d="M14.5 3.5c-.5 1-1.5 2.5-3 3.5"/></svg>',
    },

    icon(name, size) {
        const svg = this.icons[name] || this.icons.info;
        const s = size || '1em';
        return svg.replace(/width="[^"]*"/, `width="${s}"`).replace(/height="[^"]*"/, `height="${s}"`);
    },

    icn(name, size) {
        const svg = this.icon(name, size);
        return `<span class="icon">${svg}</span>`;
    },

    foodSvgIcons: [
        'soup','utensils','salad','drink','cake','bread','clipboard',
        'meat','dumpling','rice','hot-drink','water','ice-cream','fruit','fish','pizza','burger','bowl',
        'leaf','milk','candy','croissant',
    ],

    _vvcStatusChecked: false,

    _emojiToSvg: {
        '🍲':'soup','🥘':'soup','🍜':'soup','🍚':'rice','🍛':'rice',
        '🥟':'dumpling','🥩':'meat','🍖':'meat','🥙':'meat',
        '🥗':'salad','🍅':'salad','🥬':'leaf','🥒':'salad','🌶':'salad',
        '🍵':'hot-drink','☕':'hot-drink','🥛':'milk','🥤':'drink','💧':'water',
        '🍬':'candy','🍯':'cake','🍞':'bread','🥖':'bread','🥐':'croissant',
        '📋':'clipboard','🍽':'utensils','🍳':'utensils','🥓':'meat',
        '🍔':'burger','🍕':'pizza','🥪':'bread','🌮':'bread',
        '🍣':'fish','🐟':'fish','🦐':'fish',
        '🍰':'cake','🎂':'cake','🍪':'cake','🍩':'cake',
        '🍇':'fruit','🍎':'fruit','🍊':'fruit','🍌':'fruit',
        '🍦':'ice-cream','🍧':'ice-cream',
    },

    foodIcon(icon, size) {
        if (this.foodSvgIcons.includes(icon)) return this.icn(icon, size);
        const mapped = this._emojiToSvg[icon];
        if (mapped) return this.icn(mapped, size);
        return icon;
    },

    initIcons() {
        document.querySelectorAll('[data-icon]').forEach(el => {
            const name = el.dataset.icon;
            const size = el.dataset.iconSize || '1em';
            el.innerHTML = this.icon(name, size);
        });
    },

    state: {
        currentCategory: 'all', order: [], orderNumber: 1,
        orderType: 'dinein', cashierName: 'Администратор',
        shiftOpen: false, fiscalConnected: false, searchQuery: '',
        tin: '123456789', apiKey: '', discountPercent: 0,
        selectedTable: null, orderHistory: [], refunds: [], loggedIn: false,
        guestCount: 1, serviceChargePercent: 0, parkedOrders: [],
        itemAvailability: {}, globalNote: '', paymentMode: 'single',
        currentStaff: null, receiptCompany: 'POS Терминал',
        receiptAddress: 'Ресторан', kitchenSent: false,
        receiptPhone: '+998 90 123 45 67',
        receiptLogo: '',
        vatRate: 12,
        theme: 'light',
        vcrUrl: 'http://127.0.0.1:5614',
        vcrUsername: '',
        vcrPassword: '',
        vcrTerminalId: 'LG420211640998',
        vcrEnabled: true,
        language: 'ru',
        _lastActivity: null,
        selectedPrinter: 'EPSON TM-T20II (USB)',
        kitchenPrinter: '',
        printers: ['EPSON TM-T20II (USB)', 'XP-80 (LAN)', 'System Print'],
    },

    /* ---- Role helpers ---- */
    _isWaiter() { return this.state.currentStaff && this.state.currentStaff.role === 'waiter'; },
    _isCashier() { return this.state.currentStaff && this.state.currentStaff.role === 'cashier'; },
    _isAdmin() { return this.state.currentStaff && this.state.currentStaff.role === 'admin'; },
    _canManageMoney() { return this._isCashier() || this._isAdmin(); },
    _canEditOrder() { return this._isWaiter() || this._isAdmin(); },
    _hasNewKitchenItems() {
        return this.state.order.some(i => {
            if (i.quantity <= (i.kitchenSentQty || 0)) return false;
            if (i.noKitchen) return false;
            const menuItem = this.menu.find(m => m.id === i.id);
            if (menuItem && menuItem.noKitchen) return false;
            return true;
        });
    },

    /* ---- VCR credentials check ---- */
    _hasFiscalModule() {
        return !!(this.state.vcrFiscalModuleFactoryId);
    },

    /* ---- Fiscal Module Setup Screen ---- */
    _showVcrLoginScreen() {
        const overlay = document.getElementById('vcr-login-overlay');
        if (overlay) overlay.style.display = 'flex';
        const usernameInput = document.getElementById('vcr-login-username');
        const passwordInput = document.getElementById('vcr-login-password');
        if (usernameInput) { usernameInput.value = ''; usernameInput.focus(); }
        if (passwordInput) passwordInput.value = '';
        const btn = document.getElementById('vcr-login-btn');
        if (btn) {
            btn.disabled = false;
            const text = btn.querySelector('.vcr-login-btn-text');
            const loader = btn.querySelector('.vcr-login-btn-loader');
            if (text) text.style.display = 'inline';
            if (loader) loader.style.display = 'none';
        }
        this._detectFiscalModules();
        const handler = (e) => {
            if (e.key === 'Enter') this._handleVcrLogin();
        };
        if (usernameInput) usernameInput.addEventListener('keydown', handler);
        if (passwordInput) passwordInput.addEventListener('keydown', handler);
    },

    async _detectFiscalModules() {
        const select = document.getElementById('vcr-login-terminal');
        const hint = document.getElementById('vcr-login-terminal-hint');
        if (!select) return;
        select.innerHTML = '<option value="">Поиск модулей...</option>';
        select.disabled = true;
        try {
            let modules = [];
            if (typeof FiscalAPI !== 'undefined') {
                const list = await FiscalAPI.getFiscalModuleList();
                if (list && list.length > 0) {
                    modules = list;
                } else {
                    const info = await FiscalAPI.getFiscalDriveInfo('');
                    if (info) modules = [info];
                }
            }
            if (modules.length > 0) {
                select.innerHTML = '';
                const savedFactoryId = this.state.vcrFiscalModuleFactoryId || '';
                let foundDefault = false;
                for (const fm of modules) {
                    const factoryId = fm.factoryId || fm.FactoryID || '';
                    const desc = fm.description || fm.Description || '';
                    const readerName = fm.readerName || fm.ReaderName || '';
                    const terminalId = fm.terminalId || '';
                    const label = terminalId ? `${terminalId}` : (desc ? `${desc}` : (readerName || factoryId || 'Неизвестный модуль'));
                    const val = factoryId;

                    const opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = label;
                    opt.dataset.readerName = readerName;
                    opt.dataset.description = desc;
                    opt.dataset.factoryId = factoryId;
                    opt.dataset.terminalId = terminalId;
                    if (val && val === savedFactoryId) { opt.selected = true; foundDefault = true; }
                    select.appendChild(opt);
                    if (terminalId && !this.state.vcrTerminalId) {
                        this.state.vcrTerminalId = terminalId;
                    }
                }
                if (modules.length === 1) {
                    const firstVal = select.options[0]?.value || '';
                    if (firstVal && !savedFactoryId) {
                        this._loadTerminalIdForModule(firstVal).catch(() => {});
                    }
                }
                if (!foundDefault && savedFactoryId) {
                    select.innerHTML += `<option value="${savedFactoryId}" selected>${savedFactoryId.slice(0, 16)}... (сохранённый)</option>`;
                }
                if (hint) { hint.textContent = `Найдено модулей: ${modules.length}`; hint.style.display = 'block'; }
            } else {
                const fallbackId = this.state.vcrFiscalModuleFactoryId || '';
                select.innerHTML = fallbackId
                    ? `<option value="${fallbackId}" selected>${fallbackId.slice(0, 16)}... (сохранённый)</option>`
                    : '<option value="">Фискальные модули не найдены</option>';
                if (hint) { hint.textContent = 'Подключите фискальный модуль к USB'; hint.style.display = 'block'; }
            }
        } catch (e) {
            console.warn('[FM] Не удалось получить список фискальных модулей:', e.message);
            const fallbackId = this.state.vcrFiscalModuleFactoryId || this.state.vcrTerminalId || 'LG420211640998';
            select.innerHTML = `<option value="${fallbackId}" selected>${fallbackId}</option>`;
            if (hint) { hint.textContent = 'Не удалось обнаружить модули. Используется сохранённый'; hint.style.display = 'block'; }
        } finally {
            select.disabled = false;
        }
    },

    async _loadTerminalIdForModule(factoryId) {
        if (!factoryId || typeof FiscalAPI === 'undefined') return;
        // Skip if not logged into VKК yet (FiscalDrive endpoints require auth)
        if (!this.state.vcrToken && !FiscalAPI.config.token) return;
        try {
            const info = await FiscalAPI.getFiscalModuleInfo(factoryId);
            if (info && info.terminalId) {
                this.state.vcrTerminalId = info.terminalId;
                const hint = document.getElementById('vcr-login-terminal-hint');
                if (hint) {
                    hint.textContent = `TerminalID: ${info.terminalId}`;
                    hint.style.display = 'block';
                }
            }
        } catch (e) {
            console.warn('[FM] Не удалось загрузить TerminalID для модуля:', e.message);
        }
    },

    _hideVcrLoginScreen() {
        const overlay = document.getElementById('vcr-login-overlay');
        if (overlay) overlay.style.display = 'none';
    },

    async _handleVcrLogin() {
        const username = document.getElementById('vcr-login-username').value.trim();
        const password = document.getElementById('vcr-login-password').value;
        const errorEl = document.getElementById('vcr-login-error');
        const btn = document.getElementById('vcr-login-btn');
        const terminalSelect = document.getElementById('vcr-login-terminal');

        errorEl.style.display = 'none';

        if (!username || !password) {
            errorEl.textContent = 'Введите логин и пароль';
            errorEl.style.display = 'block';
            return;
        }

        const selectedFactoryId = terminalSelect ? terminalSelect.value : '';

        btn.disabled = true;
        btn.querySelector('.vcr-login-btn-text').style.display = 'none';
        btn.querySelector('.vcr-login-btn-loader').style.display = 'inline';

        try {
            // Save credentials to config
            if (typeof FiscalAPI !== 'undefined') {
                FiscalAPI.config.vcrUsername = username;
                FiscalAPI.config.vcrPassword = password;
                if (selectedFactoryId) {
                    FiscalAPI.config.vcrFiscalModuleFactoryId = selectedFactoryId;
                }
            }

            // VKК login
            const vcrUrl = (this.state.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
            const loginResp = await fetch(`${vcrUrl}/api/v1/user/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    terminalId: this.state.vcrTerminalId || selectedFactoryId
                })
            });

            if (!loginResp.ok) {
                throw new Error('Неверный логин или пароль');
            }

            const loginJson = await loginResp.json();
            if (!loginJson.success) {
                throw new Error(loginJson.message || 'Ошибка авторизации в ВКК');
            }

            const token = loginJson.data;
            this.state.vcrToken = token;
            if (typeof FiscalAPI !== 'undefined') {
                FiscalAPI.config.token = token;
            }

            this.state.vcrFiscalModuleFactoryId = selectedFactoryId;
            this.syncVcrConfig();
            this.saveState();

            this._hideVcrLoginScreen();

            // Sync menu and categories from VKК API
            try {
                await this._syncProductsFromVcr(token);
                await this._syncCategoriesFromVcr(token);
                this._saveMenuData();
            } catch (syncErr) {
                console.warn('[VCR Login] Ошибка синхронизации меню:', syncErr.message);
            }

            this.showLogin();

        } catch (e) {
            console.error('[VCR Login]', e);
            errorEl.textContent = 'Ошибка: ' + e.message;
            errorEl.style.display = 'block';
            btn.disabled = false;
            btn.querySelector('.vcr-login-btn-text').style.display = 'inline';
            btn.querySelector('.vcr-login-btn-loader').style.display = 'none';
        }
    },

    _updateLoadingProgress(steps, idx) {
        const status = document.getElementById('loading-status');
        const fill = document.getElementById('loading-progress-fill');
        if (steps[idx]) {
            if (status) status.textContent = steps[idx].msg;
            if (fill) fill.style.width = steps[idx].pct + '%';
        }
    },

    async _syncProductsFromVcr(token) {
        const vcrUrl = (this.state.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
        let allProducts = [];
        let page = 1;
        const size = 200;
        let totalCount = Infinity;

        while (allProducts.length < totalCount) {
            const prodRes = await fetch(`${vcrUrl}/api/v1/product?page=${page}&size=${size}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const prodData = await prodRes.json();
            if (!prodData.success) break;
            if (Array.isArray(prodData.data)) {
                allProducts = allProducts.concat(prodData.data);
            }
            totalCount = prodData.totalCount || allProducts.length;
            page++;
        }

        const status = document.getElementById('loading-status');
        if (status) status.textContent = `Импорт ${allProducts.length} позиций...`;

        // Deduplicate by VKК product ID
        const seen = new Set();
        allProducts = allProducts.filter(p => {
            if (!p.id || seen.has(p.id)) return false;
            seen.add(p.id);
            return true;
        });

        // ВКК не принимает от нас информацию о проданном (в API нет метода
        // для записи остатка обратно) — кабинет ВКК просто хранит то число,
        // что туда ввели вручную. Поэтому при повторной синхронизации нельзя
        // слепо перезаписывать уже уменьшенный локально остаток: сверяем с
        // прошлым известным значением ВКК (vcrStockBaseline) и переносим наш
        // локальный остаток, если в кабинете ничего не поменяли. Если же само
        // число в ВКК изменилось (пополнили/скорректировали) — берём его.
        const prevByVcrId = new Map();
        (this.menu || []).forEach(m => {
            if (m.vvcProductId !== undefined && m.vvcProductId !== null) {
                prevByVcrId.set(m.vvcProductId, m);
            }
        });

        this.menu = [];
        const maxId = 0;
        let added = 0;

        for (const vvcProd of allProducts) {
            const name = (vvcProd.name || '').trim();
            if (!name) continue;

            const price = Math.round((vvcProd.salePrice || 0) / 100);
            if (price <= 0) continue;

            const posCategory = vvcProd.categoryId ? 'vvc-' + vvcProd.categoryId : 'main';
            const vcrAmount = (typeof vvcProd.amount === 'number' && !isNaN(vvcProd.amount)) ? vvcProd.amount : null;

            let stock = vcrAmount;
            const prevItem = prevByVcrId.get(vvcProd.id);
            if (prevItem && typeof prevItem.stock === 'number' && vcrAmount !== null) {
                const baselineUnchanged = prevItem.vcrStockBaseline === vcrAmount;
                stock = baselineUnchanged ? prevItem.stock : vcrAmount;
            }

            this.menu.push({
                id: maxId + 1 + added,
                name,
                price,
                category: posCategory,
                mxikCode: vvcProd.mxikCode || '',
                barcode: vvcProd.barcode || '',
                emoji: 'bowl',
                requiresMarking: !!vvcProd.hasLabel,
                noKitchen: false,
                vvcProductId: vvcProd.id,
                stock: stock,
                vcrStockBaseline: vcrAmount
            });
            added++;
        }
    },

    async _syncCategoriesFromVcr(token) {
        const vcrUrl = (this.state.vcrUrl || 'http://127.0.0.1:5614').replace(/\/+$/, '');
        const catRes = await fetch(`${vcrUrl}/api/v1/reference/category`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const catData = await catRes.json();
        if (!catData.success || !Array.isArray(catData.data)) return;

        const catSeen = new Set();
        this.categories = [{ id: 'all', name: 'Всё', emoji: 'clipboard' }];
        for (const vvcCat of catData.data) {
            const name = (vvcCat.name || '').trim();
            if (!name) continue;
            const catId = 'vvc-' + vvcCat.id;
            if (catSeen.has(catId)) continue;
            catSeen.add(catId);
            const emoji = this._vvcCategoryEmoji(name);
            this.categories.push({ id: catId, name, emoji });
        }
    },

    _showLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.classList.remove('hidden');
    },

    _hideLoading() {
        const overlay = document.getElementById('loading-overlay');
        if (overlay) overlay.classList.add('hidden');
    },

    tables: [
        { id: 1, name: 'Стол 1', seats: 4, status: 'free', price: 0 },
        { id: 2, name: 'Стол 2', seats: 2, status: 'free', price: 0 },
        { id: 3, name: 'Стол 3', seats: 6, status: 'free', price: 0 },
        { id: 4, name: 'Стол 4', seats: 4, status: 'free', price: 0 },
        { id: 5, name: 'Стол 5', seats: 2, status: 'free', price: 0 },
        { id: 6, name: 'Стол 6', seats: 8, status: 'free', price: 0 },
        { id: 7, name: 'Стол 7', seats: 4, status: 'free', price: 0 },
        { id: 8, name: 'Стол 8', seats: 6, status: 'free', price: 0 },
        { id: 9, name: 'Стол 9', seats: 2, status: 'free', price: 0 },
        { id: 10, name: 'Стол 10', seats: 4, status: 'free', price: 0 },
        { id: 11, name: 'Стол 11', seats: 4, status: 'free', price: 0 },
        { id: 12, name: 'VIP-зал', seats: 10, status: 'free', price: 0 },
    ],

    staff: [
        { id: 1, name: 'Администратор', pin: '1234', role: 'admin' },
        { id: 2, name: 'Алишер', pin: '1111', role: 'waiter' },
        { id: 3, name: 'Бахром', pin: '2222', role: 'waiter' },
        { id: 4, name: __('receipt.cashier.label'), pin: '0000', role: 'cashier' },
    ],

    categories: [
        { id: 'all', name: 'Всё', emoji: 'clipboard' },
    ],
    menu: [],
    modifiers: [],

    /* ======================== CORE DATA RESET ======================== */
    _resetCoreData() {
        this.categories = [
            { id: 'all', name: 'Всё', emoji: 'clipboard' },
        ];
        this.menu = [];
        this.modifiers = [];
        this.staff = [
            { id: 1, name: 'Администратор', pin: '1234', role: 'admin' },
            { id: 2, name: 'Алишер', pin: '1111', role: 'waiter' },
            { id: 3, name: 'Бахром', pin: '2222', role: 'waiter' },
            { id: 4, name: __('receipt.cashier.label'), pin: '0000', role: 'cashier' },
        ];
        this._saveMenuData();
    },

    /* ======================== INIT & LOGIN ======================== */
    async init() {
        try {
            await DB.init();
            await Warehouse.init();
            await CRM.init();
        } catch (e) {
            console.error('Failed to initialize database:', e);
        }
        if (typeof I18n !== 'undefined') {
            I18n.init();
            this.state.language = I18n.lang || 'ru';
        }
        this.initIcons();
        this.loadState();
        if (typeof FiscalQueue !== 'undefined') {
            FiscalQueue.init();
        }
        if (this.state.theme) document.documentElement.setAttribute('data-theme', this.state.theme);
        if (this.state.fontSize) this._applyFontSize(this.state.fontSize);
        this._loadMenuData();
        this.startClock();
        this._initInactivityLock();
        this._startAutoSync();
        this.bindEvents();
        if (this.state.loggedIn) {
            this.enterPOS();
            this._hideLoading();
        } else {
            this._showLoading();
            this._runLoadingSequence();
        }
    },

    async _runLoadingSequence() {
        const steps = [
            { msg: 'Инициализация...', pct: 10 },
            { msg: 'Загрузка конфигурации...', pct: 25 },
            { msg: 'Подготовка интерфейса...', pct: 40 },
            { msg: 'Проверка подключения...', pct: 55 },
            { msg: 'Загрузка данных...', pct: 70 },
            { msg: 'Почти готово...', pct: 85 },
        ];
        for (let i = 0; i < steps.length; i++) {
            await new Promise(r => setTimeout(r, 400));
            this._updateLoadingProgress(steps, i);
        }
        await new Promise(r => setTimeout(r, 600));
        this._hideLoading();
        if (this._hasFiscalModule()) {
            this.showLogin();
        } else {
            this._showVcrLoginScreen();
        }
    },

    _adminFilterList(input, listId) {
        const q = input.value.toLowerCase().trim();
        const list = document.getElementById(listId);
        if (!list) return;
        const items = list.querySelectorAll('[data-name]');
        let found = false;
        items.forEach(el => {
            const showDisplay = el.dataset.display || 'flex';
            if (!q) { el.style.display = showDisplay; return; }
            const match = el.dataset.name.includes(q);
            el.style.display = match ? showDisplay : 'none';
            if (match) found = true;
        });
        list.querySelectorAll('.adm-empty').forEach(e => e.remove());
        if (q && !found) {
            const d = document.createElement('div');
            d.className = 'adm-empty';
            d.style.cssText = 'text-align:center;padding:24px;color:var(--text-muted);font-size:13px;';
            d.innerHTML = POS.icn('search', '14px') + ' Ничего не найдено';
            list.appendChild(d);
        }
    },

    showLogin() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        if (!Array.isArray(this.staff)) this._resetCoreData();
        this._loginPin = '';
        overlay.innerHTML = `
            <div class="login-screen">
                <div class="login-card" style="width:100%;max-width:380px;background:transparent;box-shadow:none;border:none;padding:40px 24px;">
                    <div class="login-logo"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg></div>
                    <div class="login-title">Virtual kassa</div>
                    <div class="login-subtitle">POS Terminal v2.0</div>
                    <div class="login-select-wrapper">
                        <select class="login-select" id="login-staff">
                            ${this.staff.map(s => `<option value="${s.id}">${s.name} — ${s.role}</option>`).join('')}
                        </select>
                    </div>
                    <div class="login-pin-wrapper">
                        <div class="login-pin-label">${__('login.pin.label')}</div>
                        <div class="login-pin-dots" id="login-dots">
                            ${'<span class="login-pin-dot"></span>'.repeat(4)}
                        </div>
                        <div class="login-error" id="login-error" style="display:none;">${__('login.pin.error')}</div>
                    </div>
                    <div class="numpad" id="login-numpad">
                        ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="numpad-btn" onclick="POS.loginNumpad('${n}')">${n}</button>`).join('')}
                        <button class="numpad-btn" onclick="POS.loginNumpad('clear')" style="font-size:16px;">C</button>
                        <button class="numpad-btn" onclick="POS.loginNumpad('0')">0</button>
                        <button class="numpad-btn" onclick="POS.loginNumpad('back')">⌫</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    closeModal() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (overlay) {
            overlay.classList.remove('active');
            overlay.innerHTML = '<div id="modal-content"></div>';
        }
    },
    _confirm(msg) {
        return new Promise(resolve => {
            const overlay = document.getElementById('modal-overlay');
            const modal = document.getElementById('modal-content');
            if (!overlay || !modal) { resolve(true); return; }
            modal.innerHTML = `
                <div class="modal" style="max-width:360px;">
                    <div class="modal-header"><div class="modal-title">${this.icn('alert-triangle', '18px')} Подтверждение</div></div>
                    <div class="modal-body" style="padding:24px;text-align:center;">
                        <div style="font-size:14px;color:var(--text-primary);margin-bottom:20px;line-height:1.5;">${msg}</div>
                        <div style="display:flex;gap:10px;justify-content:center;">
                            <button class="btn btn-secondary" id="confirm-cancel" style="min-width:100px;">${__('action.cancel')}</button>
                            <button class="btn btn-primary" id="confirm-ok" style="min-width:100px;">${__('payment.confirm.btn')}</button>
                        </div>
                    </div>
                </div>`;
            overlay.classList.add('active');
            document.getElementById('confirm-ok').onclick = () => { this.closeModal(); resolve(true); };
            document.getElementById('confirm-cancel').onclick = () => { this.closeModal(); resolve(false); };
            document.getElementById('confirm-cancel').focus();
        });
    },

    loginNumpad(val) {
        if (val === 'clear') { this._loginPin = ''; }
        else if (val === 'back') { this._loginPin = this._loginPin.slice(0, -1); }
        else { if (this._loginPin.length >= 4) return; this._loginPin += val; }
        const dots = document.querySelectorAll('#login-dots .login-pin-dot');
        const errorEl = document.getElementById('login-error');
        if (errorEl) errorEl.style.display = 'none';
        dots.forEach((dot, i) => { dot.className = 'login-pin-dot' + (i < this._loginPin.length ? ' filled' : ''); });
        if (this._loginPin.length === 4) {
            const staffId = parseInt(document.getElementById('login-staff').value);
            const staff = this.staff.find(s => s.id === staffId);
            if (staff && staff.pin === this._loginPin) {
                this.state.cashierName = staff.name;
                this.state.currentStaff = staff;
                this.state.loggedIn = true;
                this.state._lastActivity = Date.now();
                this.saveState();
                this.closeModal();
                this.enterPOS();
                this.showToast(__('login.welcome') + ' ' + staff.name, 'success');
            } else {
                if (errorEl) errorEl.style.display = 'block';
                dots.forEach(d => d.classList.add('error'));
                setTimeout(() => { dots.forEach(d => d.classList.remove('error', 'filled')); this._loginPin = ''; }, 600);
            }
        }
    },

    enterPOS() {
        this._updateKassaInfo();
        this.renderCategories();
        this.renderMenu();
        this.renderOrder();
        this.checkFiscalStatus();
        this.updateUnsentCount();
        this.updateShiftUI();
        this.updateAdminButton();
        this._updateRoleUI();
        setInterval(() => this.checkFiscalStatus(), 30000);
        setInterval(() => this.updateUnsentCount(), 10000);
        this._initMobileSupport();
        // Sync order type bar after state restore
        document.querySelectorAll('#order-type-bar .btn').forEach(b => {
            b.className = 'btn btn-sm ' + (b.dataset.type === this.state.orderType ? 'btn-primary' : 'btn-secondary');
        });
    },

    _updateKassaInfo() {
        const idEl = document.getElementById('kassa-id-display');
        if (idEl) {
            idEl.textContent = this.state.vcrTerminalId || '—';
        }
    },

    _updateRoleUI() {
        const staff = this.state.currentStaff;
        if (!staff) return;
        const roleMap = { waiter: this.icn('coffee', '14px') + ' Официант', cashier: this.icn('credit-card', '14px') + ' ' + __('receipt.cashier.label'), admin: this.icn('shield', '14px') + ' Админ' };
        const badge = document.getElementById('role-badge');
        if (badge) badge.innerHTML = roleMap[staff.role] || staff.role;

        // Update new header user section
        const userAvatar = document.getElementById('user-avatar');
        const userName = document.getElementById('user-name-display');
        const userRole = document.getElementById('user-role-display');
        const vvcConnected = this.state.vcrEnabled !== false && typeof FiscalAPI !== 'undefined' && (this.state.fiscalConnected || !this._vvcStatusChecked);
        if (vvcConnected) {
            const vvcUsername = FiscalAPI.config.vcrUsername || this.state.vcrUsername || 'isardor';
            if (userAvatar) {
                const initials = vvcUsername.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
                userAvatar.textContent = initials;
            }
            if (userName) userName.textContent = vvcUsername;
            if (userRole) userRole.textContent = 'Soliq servis';
        } else {
            if (userAvatar && staff.name) {
                const initials = staff.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
                userAvatar.textContent = initials;
            }
            if (userName) userName.textContent = staff.name || '';
            if (userRole) {
                const roleLabels = { waiter: 'Официант', cashier: __('receipt.cashier.label'), admin: 'Администратор' };
                userRole.textContent = roleLabels[staff.role] || staff.role;
            }
        }

        const discountBtn = document.querySelector('.header-btn[onclick*="showDiscountModal"]');
        const serviceBtn = document.querySelector('.header-btn[onclick*="showServiceChargeModal"]');
        const shiftEl = document.getElementById('shift-btn');
        if (this._isWaiter()) {
            if (discountBtn) discountBtn.style.display = 'none';
            if (serviceBtn) serviceBtn.style.display = 'none';
            if (shiftEl) shiftEl.style.display = 'none';
        } else {
            if (discountBtn) discountBtn.style.display = '';
            if (serviceBtn) serviceBtn.style.display = '';
            if (shiftEl) shiftEl.style.display = '';
        }
    },

    updateAdminButton() {
        const btn = document.getElementById('admin-btn');
        if (btn) {
            btn.style.display = this._isAdmin() ? '' : 'none';
        }
    },

    /* ======================== PERSISTENCE ======================== */
    loadState() {
        try {
            const saved = localStorage.getItem('pos_state');
            if (saved) {
                const d = JSON.parse(saved);
                if (d.orderNumber) this.state.orderNumber = d.orderNumber;
                if (d.cashierName) this.state.cashierName = d.cashierName;
                if (d.tin) this.state.tin = d.tin;
                if (d.apiKey) this.state.apiKey = d.apiKey;
                if (d.shiftOpen !== undefined) this.state.shiftOpen = d.shiftOpen;
                if (d.loggedIn !== undefined) this.state.loggedIn = d.loggedIn;
                if (d.orderHistory) this.state.orderHistory = d.orderHistory;
                if (d.refunds) this.state.refunds = d.refunds;
                if (d.tables) this.tables = d.tables;
                if (d.discountPercent) this.state.discountPercent = d.discountPercent;
                if (d.serviceChargePercent) this.state.serviceChargePercent = d.serviceChargePercent;
                if (d.parkedOrders) this.state.parkedOrders = d.parkedOrders;
                if (d.itemAvailability) this.state.itemAvailability = d.itemAvailability;
                if (d.guestCount) this.state.guestCount = d.guestCount;
                if (d.currentStaff) this.state.currentStaff = d.currentStaff;
                if (d.receiptCompany) this.state.receiptCompany = d.receiptCompany;
                if (d.receiptAddress) this.state.receiptAddress = d.receiptAddress;
                if (d.receiptPhone) this.state.receiptPhone = d.receiptPhone;
                if (d.receiptLogo) this.state.receiptLogo = d.receiptLogo;
                if (d.receiptFooter) this.state.receiptFooter = d.receiptFooter;
                if (d.fontSize) this.state.fontSize = d.fontSize;
                if (d.selectedPrinter) this.state.selectedPrinter = d.selectedPrinter;
                if (d.kitchenPrinter) this.state.kitchenPrinter = d.kitchenPrinter;
                if (d.pinLockEnabled !== undefined) this.state.pinLockEnabled = d.pinLockEnabled;
                if (d.pinLockTime !== undefined) this.state.pinLockTime = d.pinLockTime;
                if (d.autoSyncEnabled !== undefined) this.state.autoSyncEnabled = d.autoSyncEnabled;
                if (d.autoSyncTime !== undefined) this.state.autoSyncTime = d.autoSyncTime;
                if (d.autoUpdateEnabled !== undefined) this.state.autoUpdateEnabled = d.autoUpdateEnabled;
                if (d.kitchenSent !== undefined) this.state.kitchenSent = d.kitchenSent;
                if (d.vatRate !== undefined) this.state.vatRate = d.vatRate;
                if (d.theme) this.state.theme = d.theme;
                if (d.language) this.state.language = d.language;
                if (d.vcrUrl) this.state.vcrUrl = d.vcrUrl;
                if (d.vcrUsername) this.state.vcrUsername = d.vcrUsername;
                if (d.vcrPassword) this.state.vcrPassword = d.vcrPassword;
                if (d.vcrTerminalId) this.state.vcrTerminalId = d.vcrTerminalId;
                if (d.vcrEnabled !== undefined) this.state.vcrEnabled = d.vcrEnabled;
                if (d.order) this.state.order = d.order;
                if (d.selectedTable !== undefined) this.state.selectedTable = d.selectedTable;
                if (d.orderType) this.state.orderType = d.orderType;
            }
        } catch (_) {}
        this.syncVcrConfig();
    },

    _exportState() {
        return {
            orderNumber: this.state.orderNumber,
            cashierName: this.state.cashierName,
            tin: this.state.tin,
            apiKey: this.state.apiKey,
            shiftOpen: this.state.shiftOpen,
            loggedIn: this.state.loggedIn,
            orderHistory: this.state.orderHistory,
            refunds: this.state.refunds,
            tables: this.tables,
            discountPercent: this.state.discountPercent,
            serviceChargePercent: this.state.serviceChargePercent,
            parkedOrders: this.state.parkedOrders,
            itemAvailability: this.state.itemAvailability,
            guestCount: this.state.guestCount,
            currentStaff: this.state.currentStaff,
            receiptCompany: this.state.receiptCompany,
            receiptAddress: this.state.receiptAddress,
            receiptPhone: this.state.receiptPhone,
            receiptLogo: this.state.receiptLogo,
            receiptFooter: this.state.receiptFooter,
            fontSize: this.state.fontSize,
            selectedPrinter: this.state.selectedPrinter,
            kitchenPrinter: this.state.kitchenPrinter,
            printCopies: this.state.printCopies,
            pinLockEnabled: this.state.pinLockEnabled,
            pinLockTime: this.state.pinLockTime,
            autoSyncEnabled: this.state.autoSyncEnabled,
            autoSyncTime: this.state.autoSyncTime,
            autoUpdateEnabled: this.state.autoUpdateEnabled,
            kitchenSent: this.state.kitchenSent,
            vatRate: this.state.vatRate,
            theme: this.state.theme,
            vcrUrl: this.state.vcrUrl,
            vcrUsername: this.state.vcrUsername,
            vcrPassword: this.state.vcrPassword,
            vcrTerminalId: this.state.vcrTerminalId,
            vcrEnabled: this.state.vcrEnabled,
            language: this.state.language,
            order: this.state.order,
            selectedTable: this.state.selectedTable,
            orderType: this.state.orderType,
        };
    },

    saveState() {
        try {
            localStorage.setItem('pos_state', JSON.stringify(this._exportState()));
        } catch (_) {}
        this.syncVcrConfig();
    },

    syncVcrConfig() {
        if (typeof FiscalAPI !== 'undefined') {
            FiscalAPI.config.vcrUrl = this.state.vcrUrl || 'http://127.0.0.1:5614';
            FiscalAPI.config.vcrDriverUrl = this.state.vcrDriverUrl || this.state.vcrUrl || 'http://127.0.0.1:5614';
            FiscalAPI.config.vcrTerminalId = this.state.vcrTerminalId || '';
            FiscalAPI.config.vcrEnabled = this.state.vcrEnabled !== false;
            FiscalAPI.config.mockMode = !this.state.vcrEnabled;
            FiscalAPI.config.vcrFiscalModuleFactoryId = this.state.vcrFiscalModuleFactoryId || '';
        }
    },

    /* ======================== CATEGORIES & MENU ======================== */
    renderCategories() {
        const container = document.getElementById('categories');
        if (!container) return;
        if (!Array.isArray(this.categories) || this.categories.length === 0) {
            this._resetCoreData();
            return;
        }
        container.innerHTML = this.categories.map(cat =>
            `<button class="category-tab${this.state.currentCategory === cat.id ? ' active' : ''}"
                     onclick="POS.selectCategory('${cat.id}')">
                ${cat.name}
            </button>`
        ).join('');
    },

    renderMenu() {
        const container = document.getElementById('menu-grid');
        if (!container) return;
        if (!Array.isArray(this.menu) || !Array.isArray(this.categories)) this._resetCoreData();
        let items = this.menu;
        if (this.state.currentCategory !== 'all')
            items = items.filter(i => i.category === this.state.currentCategory);
        if (this.state.searchQuery) {
            const q = this.state.searchQuery.toLowerCase();
            items = items.filter(i => i.name.toLowerCase().includes(q));
        }
        if (items.length === 0) {
            container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">${this.icn('search', '32px')}</div><div class="empty-state-title">Ничего не найдено</div><div class="empty-state-text">Измените поисковый запрос</div></div>`;
            return;
        }
        container.innerHTML = items.map(item => {
            const inOrder = this.state.order.find(o => o.id === item.id || String(o.id).startsWith(item.id + '-'));
            const unavailable = this.state.itemAvailability[item.id] === false;
            const orderQty = this.state.order.filter(o => o.id === item.id || String(o.id).startsWith(item.id + '-')).reduce((s, o) => s + o.quantity, 0);
            const matchingItems = this.state.order.filter(o => o.id === item.id || String(o.id).startsWith(item.id + '-'));
            const modCount = matchingItems.reduce((s, o) => s + (o.modifiers ? o.modifiers.length : 0), 0);
                    const cashierDisabled = POS._isCashier();
                    const hasStock = typeof item.stock === 'number';
                    const remaining = hasStock ? Math.max(0, item.stock - orderQty) : null;
                    const outOfStock = hasStock && remaining <= 0;
                    return `<button class="menu-item${inOrder ? ' in-order' : ''}${unavailable || cashierDisabled || outOfStock ? ' unavailable' : ''}"
                     onclick="${unavailable || cashierDisabled || outOfStock ? '' : "POS.addToOrder(" + item.id + ")"}" ${unavailable || cashierDisabled || outOfStock ? 'disabled' : ''}>
                    ${orderQty > 0 ? `<span class="badge">${orderQty}</span>` : ''}
                    ${unavailable || outOfStock ? '<span style="position:absolute;top:8px;right:8px;opacity:0.6;">' + this.icn('x-circle', '16px') + '</span>' : ''}
                    <span class="menu-item-name">${item.name}</span>
                    <span class="menu-item-price">${hasStock ? `<span class="menu-item-stock${remaining <= 3 ? ' low' : ''}">${remaining}</span> / ` : ''}${item.price.toLocaleString()} ${__('currency.sum')}</span>
                    ${modCount > 0 ? `<span style="font-size:10px;color:var(--amber);font-weight:600;">+${modCount} мод.</span>` : ''}
                </button>`;
        }).join('');
    },

    /* ======================== ORDER ======================== */
    renderOrder() {
        const container = document.getElementById('order-items');
        const summaryEl = document.getElementById('order-summary');
        const actionsEl = document.getElementById('order-actions');
        const orderNumDisplay = document.getElementById('order-number-display');
        if (!container) return;
        if (orderNumDisplay) orderNumDisplay.textContent = this.state.orderNumber;

        /* Update KOT / Issue Bill button */
        const kotBtn = document.getElementById('kot-btn');
        if (kotBtn) {
            if (this._isCashier()) {
                kotBtn.style.display = '';
                kotBtn.innerHTML = this.icn('file-text', '20px') + ' ' + __('order.bill.btn');
                kotBtn.onclick = () => this.issueBill();
            } else if (this.state.kitchenSent && !this._hasNewKitchenItems()) {
                kotBtn.style.display = '';
                kotBtn.innerHTML = this.icn('file-text', '20px') + ' ' + __('order.bill.btn');
                kotBtn.onclick = () => this.issueBill();
            } else {
                kotBtn.style.display = '';
                kotBtn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/></svg> ' + __('order.kitchen.btn');
                kotBtn.onclick = () => this.sendToKitchen();
            }
        }

        const metaEl = document.getElementById('order-meta');
        if (metaEl) {
            let info = this.state.order.length + ' ' + __('order.meta.pos') + ' · ';
            if (this.state.selectedTable) {
                const tn = this.tables.find(t => t.id === this.state.selectedTable)?.name || '—';
                info += tn + ' · ' + this.state.guestCount + ' ' + __('order.meta.guests');
            } else {
                info += this.state.orderType === 'takeaway' ? this.icn('package', '12px') + ' ' + __('order.type.takeaway') : this.state.orderType === 'delivery' ? this.icn('truck', '12px') + ' ' + __('order.type.delivery') : '—';
            }
            metaEl.innerHTML = info;
        }

        if (this.state.order.length === 0) {
            container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">${this.icn('shopping-cart', '32px')}</div><div class="empty-state-title">${__('order.empty.title')}</div><div class="empty-state-text">${__('order.empty.text')}</div></div>`;
            if (summaryEl) this._renderSummary(summaryEl, true);
            if (actionsEl) this._renderPaymentButtons(actionsEl, true);
            this.renderMenu();
            this._updateMobileCart();
            return;
        }

        container.innerHTML = this.state.order.map((item, idx) => {
            const total = (item.price * item.quantity) + this._getItemModifierTotal(item);
            const modText = item.modifiers && item.modifiers.length > 0
                ? '<div style="font-size:10px;color:var(--amber);margin-top:2px;">' + item.modifiers.map(m => '+' + m.name + (m.price > 0 ? ' (' + m.price.toLocaleString() + ')' : '')).join(', ') + '</div>'
                : '';
            const noteText = item.note
                ? '<div style="font-size:10px;color:var(--blue);font-style:italic;margin-top:1px;">' + this.icn('edit-3', '12px') + ' ' + item.note + '</div>'
                : '';
            const markText = item.markingCode
                ? `<span style="font-size:10px;color:var(--primary);font-family:monospace;letter-spacing:-0.2px;background:var(--primary-muted);padding:2px 6px;border-radius:4px;display:inline-flex;align-items:center;gap:2px;margin-top:2px;">${this.icn('search', '11px')} Код: ${item.markingCode.substring(0, 4)}...</span>`
                : '';
            return `<div class="order-item" data-idx="${idx}">
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-unit-price">${item.price.toLocaleString()} ${__('currency.sum')}</div>
                        ${modText}${noteText}${markText}
                    </div>
                    <div style="display:flex;align-items:center;gap:4px;">
                        <div class="qty-control">
                            <button class="qty-btn minus" onclick="event.stopPropagation();POS.updateQuantity('${item.id}',-1)">−</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn plus" onclick="event.stopPropagation();POS.updateQuantity('${item.id}',1)" ${item.markingCode ? 'disabled' : ''}>+</button>
                        </div>
                        <span class="order-item-total">${total.toLocaleString()}</span>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:2px;">
                        <button class="order-item-remove" onclick="event.stopPropagation();POS.addItemNote(${idx})" title="${__('item.note.btn')}">${this.icn('edit-3', '12px')}</button>
                        <button class="order-item-remove" onclick="event.stopPropagation();POS.removeItem('${item.id}')" title="${__('item.remove.btn')}">${this.icn('x', '12px')}</button>
                    </div>
                </div>`;
        }).join('');

        if (summaryEl) this._renderSummary(summaryEl);
        if (actionsEl) this._renderPaymentButtons(actionsEl);
        this.renderMenu();
        this._updateMobileCart();
    },

    _getItemModifierTotal(item) {
        if (!item.modifiers || item.modifiers.length === 0) return 0;
        return item.modifiers.reduce((s, m) => s + m.price, 0) * item.quantity;
    },

    _renderSummary(container, empty) {
        if (empty) {
            container.innerHTML =
                `<div class="order-totals-row"><span class="label">${__('summary.subtotal')}</span><span class="value">0 ${__('currency')}</span></div>
                 <div class="order-totals-row total"><span class="label">${__('summary.total')}</span><span class="value">0 ${__('currency')}</span></div>`;
            return;
        }
        const subtotal = this.getSubtotal();
        const modTotal = this.getModifierTotal();
        const discount = this.getDiscount();
        const serviceCharge = this.getServiceCharge();
        const vat = this.getVAT();
        const total = this.getTotal();

        let html =
            `<div class="order-totals-row"><span class="label">${__('summary.subtotal')}</span><span class="value">${subtotal.toLocaleString()} ${__('currency')}</span></div>`;
        if (modTotal > 0)
            html += `<div class="order-totals-row"><span class="label">${__('summary.modifiers')}</span><span class="value">${modTotal.toLocaleString()} ${__('currency')}</span></div>`;
        if (discount > 0)
            html += `<div class="order-totals-row"><span class="label">${__('summary.discount')} ${this.state.discountPercent}%</span><span class="value" style="color:var(--danger)">−${discount.toLocaleString()} ${__('currency')}</span></div>`;
        if (serviceCharge > 0)
            html += `<div class="order-totals-row"><span class="label">${__('summary.service')} ${this.state.serviceChargePercent}%</span><span class="value">${serviceCharge.toLocaleString()} ${__('currency')}</span></div>`;
        html += `<div class="order-totals-row tax"><span class="label">${__('summary.vat')} ${this.state.vatRate || 12}%</span><span class="value">${vat.toLocaleString()} ${__('currency')}</span></div>
                 <div class="order-totals-row total"><span class="label">${__('summary.total')}</span><span class="value">${total.toLocaleString()} ${__('currency')}</span></div>`;
        container.innerHTML = html;
    },

    _renderPaymentButtons(container, empty) {
        if (this._isWaiter()) {
            container.innerHTML =
                `<div style="grid-column:span 3;display:flex;gap:4px;margin-top:2px;">
                    <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.printPreCheck()">${this.icn('file-text', '14px')} ${__('payment.precheck')}</button>
                    <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.showModifierPanel()">${this.icn('plus', '14px')} ${__('payment.modifiers')}</button>
                    <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.parkOrder()">${this.icn('pause', '14px')} ${__('payment.park')}</button>
                 </div>`;
            return;
        }
        if (empty) {
            container.innerHTML =
                `<button class="payment-btn cash disabled" disabled><span class="payment-icon">${this.icn('wallet', '20px')}</span> ${__('payment.cash')}</button>
                 <button class="payment-btn card disabled" disabled><span class="payment-icon">${this.icn('credit-card', '20px')}</span> ${__('payment.card')}</button>
                 <button class="payment-btn mobile disabled" disabled><span class="payment-icon">${this.icn('smartphone', '20px')}</span> ${__('payment.mobile')}</button>`;
            return;
        }
        container.innerHTML =
            `<button class="payment-btn cash" onclick="POS.openPayment(1)"><span class="payment-icon">${this.icn('wallet', '20px')}</span> ${__('payment.cash')}</button>
             <button class="payment-btn card" onclick="POS.openPayment(2)"><span class="payment-icon">${this.icn('credit-card', '20px')}</span> ${__('payment.card')}</button>
             <button class="payment-btn mobile" onclick="POS.openPayment(5)"><span class="payment-icon">${this.icn('smartphone', '20px')}</span> ${__('payment.mobile')}</button>
             <div style="grid-column:span 3;display:flex;gap:4px;margin-top:2px;">
                 <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.showSplitPaymentModal()">${this.icn('pie-chart', '14px')} ${__('payment.split')}</button>
                 <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.showModifierPanel()">${this.icn('plus', '14px')} ${__('payment.modifiers')}</button>
                 <button class="btn btn-sm btn-secondary" style="flex:1" onclick="POS.parkOrder()">${this.icn('pause', '14px')} ${__('payment.park')}</button>
             </div>`;
    },

    printPreCheck() {
        if (this.state.order.length === 0) { this.showToast(__('toast.no.order') + ' ' + __('payment.precheck'), 'warning'); return; }
        const total = this.state.order.reduce((s, i) => s + (i.price * i.quantity) + this._getItemModifierTotal(i), 0);
        const win = window.open('', 'precheck', 'width=300,height=500,menubar=no,toolbar=no');
        if (!win) return;
        win.document.write(`<html><head><title>Предчек #${this.state.orderNumber}</title>
            <style>@page{size:58mm 200mm;margin:0;}body{font-family:'Courier New',monospace;font-size:13px;padding:16px;white-space:pre-wrap;width:48mm;margin:0;}
            h2{text-align:center;border-bottom:1px dashed #000;padding-bottom:6px;font-size:16px;}
            .meta{font-size:11px;color:#666;text-align:center;}
            table{width:100%;border-collapse:collapse;margin:8px 0;}
            td{padding:3px 0;}
            .right{text-align:right;}
            .total{border-top:2px solid #000;font-weight:700;font-size:15px;padding-top:4px;}
            .footer{text-align:center;border-top:1px dashed #000;padding-top:6px;margin-top:8px;font-size:10px;color:#999;}
</style></head><body>
            <h2>${this.icn('file-text', '16px')} ${__('receipt.precheck.title')}</h2>
            <div class="meta">Заказ #${this.state.orderNumber}<br>${new Date().toLocaleString('ru-RU')}</div>
            <table>${this.state.order.map(i => `
                <tr><td>${this.foodIcon(i.emoji, '14px')} ${i.name} × ${i.quantity}</td><td class="right">${((i.price * i.quantity) + this._getItemModifierTotal(i)).toLocaleString()}</td></tr>
                ${i.modifiers && i.modifiers.length ? '<tr><td style="font-size:11px;color:#888;padding-left:12px;">+ ' + i.modifiers.map(m => m.name + (m.price > 0 ? ' (' + m.price.toLocaleString() + ')' : '')).join(', ') + '</td><td></td></tr>' : ''}
                ${i.note ? '<tr><td style="font-size:11px;color:#888;padding-left:12px;">' + POS.icn('edit-3', '10px') + ' ' + i.note + '</td><td></td></tr>' : ''}
            `).join('')}</table>
            <div class="total">ИТОГО: ${total.toLocaleString()} ${__('currency.sum')}</div>
            <div class="footer">${__('receipt.precheck.desc')}</div>
            <script>setTimeout(()=>window.print(),300);</script>
        </body></html>`);
        win.document.close();
        this.showToast(__('receipt.precheck.printed'), 'success');
    },

    /* ======================== ORDER OPERATIONS ======================== */
    addToOrder(itemId) {
        if (this._isCashier()) { this.showToast(__('toast.add.order.admin'), 'error'); return; }
        if (!this.state.shiftOpen) { this.showToast(__('shift.open.required'), 'error'); return; }
        const menuItem = this.menu.find(m => m.id === parseInt(itemId));
        if (!menuItem) return;

        if (typeof menuItem.stock === 'number') {
            const reserved = this.state.order.filter(o => o.id === menuItem.id || String(o.id).startsWith(menuItem.id + '-')).reduce((s, o) => s + o.quantity, 0);
            if (reserved >= menuItem.stock) {
                this.showToast(__('toast.stock.exhausted').replace('{0}', menuItem.name), 'warning');
                this.renderMenu();
                return;
            }
        }

        if (menuItem.requiresMarking) {
            this.promptMarkingCode(menuItem);
            return;
        }

        const existing = this.state.order.find(o => o.id === menuItem.id);
        if (existing) { existing.quantity++; }
        else {
            this.state.order.push({
                id: menuItem.id, name: menuItem.name, price: menuItem.price,
                quantity: 1, mxikCode: menuItem.mxikCode, barcode: menuItem.barcode,
                emoji: menuItem.emoji,
                modifiers: [], note: '', kitchenSentQty: 0,
                noKitchen: !!menuItem.noKitchen,
            });
        }
        this.renderOrder();
        this.saveState();
        if (window.innerWidth <= 768) this.toggleOrderPanel(true);
    },

    promptMarkingCode(menuItem) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        modal.innerHTML = `
            <div class="modal" style="max-width:450px; text-align:center; padding: 24px;">
                <div style="margin-bottom:12px;">${this.icn('search', '36px')}</div>
                <div style="font-size:18px; font-weight:700; color:var(--text-primary); margin-bottom:8px;">${__('marking.title')}</div>
                <div style="font-size:13px; color:var(--text-secondary); margin-bottom:20px; line-height:1.5;">
                    ${__('marking.description')}
                    <br><strong style="color:var(--primary); font-size:14px;">${this.foodIcon(menuItem.emoji, '16px')} ${menuItem.name}</strong>
                </div>
                
                <input type="text" class="form-input" id="marking-scan-input" placeholder="${__('marking.placeholder')}" style="text-align:center; font-family:monospace; font-size:13px; margin-bottom:16px; height:42px;" autofocus>
                
                <div style="display:flex; gap:8px; justify-content:center;">
                    <button class="btn btn-ghost" onclick="POS.closeModal(); POS.showToast(__('marking.cancelled'), 'warning');" style="flex:1; height:38px;">${__('marking.cancel')}</button>
                    <button class="btn btn-primary" onclick="POS.confirmMarkingCode(${menuItem.id})" style="flex:1; height:38px;">${__('marking.confirm')}</button>
                </div>
            </div>`;
        
        overlay.classList.add('active');
        
        setTimeout(() => {
            const input = document.getElementById('marking-scan-input');
            if (input) {
                input.focus();
                input.addEventListener('keyup', (e) => {
                    if (e.key === 'Enter') {
                        this.confirmMarkingCode(menuItem.id);
                    }
                });
            }
        }, 100);
    },

    confirmMarkingCode(menuItemId) {
        const input = document.getElementById('marking-scan-input');
        const code = input?.value.trim();
        if (!code) { this.showToast(__('marking.scan.required'), 'warning'); return; }
        
        const duplicate = this.state.order.find(o => o.markingCode === code);
        if (duplicate) { this.showToast(__('marking.duplicate'), 'error'); return; }

        const menuItem = this.menu.find(m => m.id === menuItemId);
        if (!menuItem) return;

        const cartItemId = menuItem.id + '-' + Date.now();

        this.state.order.push({
            id: cartItemId,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
            mxikCode: menuItem.mxikCode,
            barcode: menuItem.barcode,
            emoji: menuItem.emoji,
            modifiers: [],
            note: '',
            markingCode: code,
            kitchenSentQty: 0,
            noKitchen: !!menuItem.noKitchen
        });

        this.closeModal();
        this.saveState();
        this.renderOrder();
        this.showToast(__('marking.accepted') + ' ' + menuItem.name, 'success');
        
        if (window.innerWidth <= 768) this.toggleOrderPanel(true);
    },

    updateQuantity(itemId, delta) {
        if (this._isWaiter() && this.state.kitchenSent) {
            this.showToast(__('toast.order.kitchen'), 'error');
            return;
        }
        const item = this.state.order.find(o => String(o.id) === String(itemId));
        if (!item) return;
        if (delta > 0) {
            const baseId = parseInt(String(item.id).split('-')[0]);
            const menuItem = this.menu.find(m => m.id === baseId);
            if (menuItem && typeof menuItem.stock === 'number') {
                const reserved = this.state.order.filter(o => o.id === menuItem.id || String(o.id).startsWith(menuItem.id + '-')).reduce((s, o) => s + o.quantity, 0);
                if (reserved >= menuItem.stock) {
                    this.showToast(__('toast.stock.exhausted').replace('{0}', menuItem.name), 'warning');
                    return;
                }
            }
        }
        item.quantity += delta;
        if (item.quantity <= 0) this.state.order = this.state.order.filter(o => String(o.id) !== String(itemId));
        this.renderOrder();
    },

    removeItem(itemId) {
        if (this._isWaiter() && this.state.kitchenSent) {
            this.showToast(__('toast.order.kitchen'), 'error');
            return;
        }
        this.state.order = this.state.order.filter(o => String(o.id) !== String(itemId));
        this.renderOrder();
    },

    async clearOrder() {
        if (this.state.order.length === 0) { this.showToast(__('toast.order.empty'), 'warning'); return; }
        if (this._isWaiter() && this.state.kitchenSent) {
            this.showToast(__('toast.order.kitchen.admin'), 'error');
            return;
        }
        if (await this._confirm(__('toast.order.confirm.clear'))) {
            // Освобождаем выбранный стол при очистке заказа
            if (this.state.selectedTable) {
                const table = this.tables.find(t => t.id === this.state.selectedTable);
                if (table) table.status = 'free';
            }
            this.state.selectedTable = null;

            this.state.order = [];
            this.state.discountPercent = 0;
            this.state.serviceChargePercent = 0;
            this.state.globalNote = '';
            this.state.guestCount = 1;
            this.state.kitchenSent = false;
        this.saveState();
        this._updateRoleUI();
        this.renderOrder();
            this.showToast(__('order.empty.title'), 'info');
        }
    },

    /* ======================== ORDER TYPE ======================== */
    setOrderType(type) {
        this.state.orderType = type;
        if (type !== 'dinein') {
            this.state.selectedTable = null;
            this._removeTablePriceFromOrder();
        }
        document.querySelectorAll('#order-type-bar .btn').forEach(b => {
            b.className = 'btn btn-sm ' + (b.dataset.type === type ? 'btn-primary' : 'btn-secondary');
        });
        this.renderOrder();
    },

    /* ======================== GUEST COUNT ======================== */
    setGuestCount(n) {
        this.state.guestCount = n;
        this.renderOrder();
        const label = document.getElementById('guest-count-label');
        if (label) label.textContent = n;
        document.querySelectorAll('#modal-content .gc-btn').forEach(b => {
            b.className = 'btn btn-sm gc-btn ' + (parseInt(b.textContent) === n ? 'btn-primary' : 'btn-secondary');
        });
    },

    /* ======================== TABLE ======================== */
    selectTable() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const isEditMode = !!this._tablesEditMode;

        modal.innerHTML = `
            <div class="modal" style="max-width:680px;display:flex;flex-direction:column;">
                <div class="modal-header">
                    <div class="modal-title">${this.icn('table', '18px')} ${isEditMode ? __('tables.manage') : __('tables.title')}</div>
                    <button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button>
                </div>
                <div style="padding:12px 24px 12px;flex-shrink:0;">
                    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-active); padding:12px 16px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
                        <span style="font-weight:600; font-size:13px; color:var(--text-secondary);">${this.icn('users', '16px')} ${__('tables.guests')}</span>
                        <div style="display:flex; align-items:center; gap:12px;">
                            <button class="btn btn-sm btn-secondary" onclick="POS.changeGuestCount(-1)" style="min-width:36px;font-weight:bold;height:36px;">−</button>
                            <span id="tables-guest-count" style="font-size:18px;font-weight:700;min-width:24px;text-align:center;color:var(--text-primary);">${this.state.guestCount || 1}</span>
                            <button class="btn btn-sm btn-secondary" onclick="POS.changeGuestCount(1)" style="min-width:36px;font-weight:bold;height:36px;">+</button>
                        </div>
                    </div>
                </div>
                <div class="modal-body" style="flex:1;padding-top:0;">
                    <div style="margin-bottom:10px;position:relative;">
                        <input type="text" class="form-input" id="tables-search" placeholder="${__('tables.search')}" oninput="POS.filterTables()" style="width:100%;padding:10px 36px 10px 14px;font-size:14px;" autocomplete="off">
                        <span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;">${this.icn('search', '16px')}</span>
                    </div>
                    <div id="tables-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:8px;">
                        ${this.tables.map(t => {
                            const sel = this.state.selectedTable === t.id;
                            const busy = t.status === 'occupied' && !sel;
                            const reserved = t.status === 'reserved';
                            const parkedCount = this.state.parkedOrders.filter(p => p.table === t.id).length;
                            let borderStyle = '';
                            if (isEditMode) {
                                borderStyle = 'border: 2px dashed var(--amber); background: rgba(245, 158, 11, 0.05);';
                            } else if (sel) {
                                borderStyle = 'border-color:var(--primary);background:var(--primary-muted);';
                            } else if (busy && parkedCount > 0) {
                                borderStyle = 'border-color:var(--danger);background:rgba(239,68,68,0.06);';
                            } else if (busy) {
                                borderStyle = 'border-color:var(--danger);background:rgba(239,68,68,0.06);opacity:0.7;cursor:not-allowed;';
                            } else if (reserved) {
                                borderStyle = 'border-color:var(--info,#3b82f6);background:rgba(59,130,246,0.06);opacity:0.8;cursor:not-allowed;';
                            }
                            const clickAction = isEditMode
                                ? `POS.showEditTableModal(${t.id})`
                                : (t.status === 'occupied' && parkedCount > 0)
                                    ? `POS.showTableParkedOrders(${t.id})`
                                    : (t.status === 'reserved')
                                        ? ''
                                        : `POS.pickTable(${t.id})`;
                            const clickHandler = clickAction ? `onclick="${clickAction}"` : '';
                            let statusText = '';
                            if (busy && parkedCount > 0) statusText = parkedCount + ' ' + __('tables.orders');
                            else if (busy) statusText = __('tables.occupied');
                            else if (reserved) statusText = __('tables.reserved');
                            else if (t.price > 0) statusText = t.seats + ' ' + __('tables.seats') + ' · ' + t.price.toLocaleString() + ' ' + __('currency.sum');
                            else statusText = t.seats + ' ' + __('tables.seats');
                            const badgeHtml = (busy && parkedCount > 0) ? `<span style="position:absolute;top:6px;right:6px;background:var(--danger);color:#fff;font-size:10px;font-weight:700;min-width:20px;height:20px;border-radius:10px;display:flex;align-items:center;justify-content:center;padding:0 5px;box-shadow:0 1px 3px rgba(0,0,0,.2);">${parkedCount}</span>` : '';
                            const priceLine = !busy && !reserved && t.price > 0 ? `<div style="font-size:11px;color:var(--primary);font-weight:600;">+${t.price.toLocaleString()} ${__('currency.sum')}</div>` : '';
                            const searchName = t.name.toLowerCase().replace(/\s+/g, '');
                            return `<button class="menu-item" data-search="${searchName}" style="position:relative;${borderStyle}" ${clickHandler}>
                                    ${badgeHtml}
                                    <span class="menu-item-icon">${isEditMode ? POS.icn('edit', '28px') : POS.icn('table', '28px')}</span>
                                    <span class="menu-item-name">${t.name}</span>
                                    <span class="menu-item-price" style="font-size:11px;color:var(--text-muted);font-weight:400;">${statusText}</span>
                                    ${priceLine}
                                </button>`;
                        }).join('')}
                        
                        ${isEditMode ? `
                        <button class="menu-item" data-search="" style="border: 2px dashed var(--primary); background: transparent;" onclick="POS.showAddTableModal()">
                            <span class="menu-item-icon">${POS.icn('plus-square', '28px')}</span>
                            <span class="menu-item-name" style="color:var(--primary); font-weight:600;">${__('tables.add')}</span>
                            <span class="menu-item-price" style="font-size:11px;color:var(--primary);font-weight:400;">${__('tables.new')}</span>
                        </button>
                        ` : ''}
                    </div>
                </div>
                <div class="modal-footer" style="display:flex;gap:10px;justify-content:space-between;padding:14px 24px;">
                    <div style="display:flex;gap:8px;">
                        ${!isEditMode ? `<button class="btn btn-secondary" onclick="POS.showReserveModal()" style="height:40px;font-size:14px;padding:0 18px;">${POS.icn('calendar', '16px')} ${__('tables.reserve')}</button>` : ''}
                        <button class="btn ${isEditMode ? 'btn-primary' : 'btn-secondary'}" id="tables-edit-toggle" onclick="POS.toggleTablesEditMode()" style="height:40px;font-size:14px;padding:0 18px;">
                            ${isEditMode ? POS.icn('table', '16px') + ' ' + __('tables.select') : POS.icn('edit', '16px') + ' ' + __('tables.manage.btn')}
                        </button>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <button class="btn btn-ghost" onclick="POS.closeModal()" style="height:40px;font-size:14px;padding:0 18px;">${__('tables.close')}</button>
                        <button class="btn btn-danger" onclick="POS.pickTable(null)" style="height:40px;font-size:14px;padding:0 18px;${this.state.selectedTable ? '' : 'display:none'}">${__('tables.deselect')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    filterTables() {
        const query = document.getElementById('tables-search');
        if (!query) return;
        const val = query.value.toLowerCase().replace(/\s+/g, '');
        const items = document.querySelectorAll('#tables-grid .menu-item');
        items.forEach(el => {
            const search = (el.dataset.search || '').toLowerCase();
            el.style.display = !val || search.includes(val) ? '' : 'none';
        });
    },

    _removeTablePriceFromOrder() {
        this.state.order = this.state.order.filter(item => !item._isTablePrice);
    },

    _addTablePriceToOrder(tableId) {
        this._removeTablePriceFromOrder();
        const table = this.tables.find(t => t.id === tableId);
        if (table && table.price > 0) {
            this.state.order.push({
                _isTablePrice: true,
                id: 'table-price-' + tableId,
                name: 'Аренда стола "' + table.name + '"',
                price: table.price,
                quantity: 1,
                modifiers: [],
                mxikCode: '09901001001000000',
            });
        }
    },

    pickTable(tableId) {
        // Освобождаем ранее выбранный стол при переключении или снятии выбора
        let prevTablePrice = 0;
        if (this.state.selectedTable && this.state.selectedTable !== tableId) {
            const prevTable = this.tables.find(t => t.id === this.state.selectedTable);
            if (prevTable) { prevTable.status = 'free'; prevTablePrice = prevTable.price || 0; }
        }

        this.state.selectedTable = tableId;
        const tableObj = this.tables.find(t => t.id === tableId);
        if (tableObj) tableObj.status = 'occupied';
        
        if (tableId === null) {
            this.state.orderType = 'takeaway';
            this._removeTablePriceFromOrder();
        } else {
            this.state.orderType = 'dinein';
            this._addTablePriceToOrder(tableId);
        }

        document.querySelectorAll('#order-type-bar .btn').forEach(b => {
            b.className = 'btn btn-sm ' + (b.dataset.type === this.state.orderType ? 'btn-primary' : 'btn-secondary');
        });
        
        this.closeModal();
        this.renderOrder();
        this.saveState();
        if (tableId) this.showToast(__('tables.selected') + ' ' + this.tables.find(t => t.id === tableId)?.name, 'info');
        this.showToast(__('tables.deselected'), 'info');
    },

    changeGuestCount(delta) {
        const newCount = Math.max(1, (this.state.guestCount || 1) + delta);
        this.setGuestCount(newCount);
        const el = document.getElementById('tables-guest-count');
        if (el) el.textContent = newCount;
    },

    toggleTablesEditMode() {
        this._tablesEditMode = !this._tablesEditMode;
        this.selectTable();
    },

    showReserveModal() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        const freeTables = this.tables.filter(t => t.status === 'free');
        const reservedTables = this.tables.filter(t => t.status === 'reserved');
        modal.innerHTML = `
            <div class="modal" style="max-width:520px;">
                <div class="modal-header"><div class="modal-title">${this.icn('calendar', '18px')} ${__('tables.reserve.title')}</div><button class="modal-close" onclick="POS.selectTable()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    ${reservedTables.length > 0 ? '<div style="font-weight:600;font-size:14px;color:var(--text-secondary);margin-bottom:8px;">' + __('tables.reserved.list') + '</div>' : ''}
                    ${reservedTables.map(t => `
                        <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-card);border:1px solid var(--info,#3b82f6);border-radius:var(--radius-md);padding:14px 16px;margin-bottom:8px;">
                            <span style="font-weight:600;font-size:15px;">${t.name}</span>
                            <button class="btn btn-ghost" onclick="POS.unreserveTable(${t.id})" style="color:var(--danger);height:36px;font-size:13px;padding:0 14px;">${this.icn('x', '14px')} ${__('tables.unreserve')}</button>
                        </div>
                    `).join('')}
                    ${freeTables.length > 0 ? '<div style="font-weight:600;font-size:14px;color:var(--text-secondary);margin:14px 0 10px;">' + __('tables.available') + '</div>' : ''}
                    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;">
                        ${freeTables.map(t => `
                            <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:12px 14px;">
                                <span style="font-weight:600;font-size:14px;">${t.name}</span>
                                <button class="btn btn-primary" onclick="POS.reserveTable(${t.id})" style="font-size:13px;height:34px;padding:0 14px;">${this.icn('calendar', '14px')} ${__('tables.reserve')}</button>
                            </div>
                        `).join('')}
                    </div>
                    ${freeTables.length === 0 && reservedTables.length === 0 ? '<div style="text-align:center;padding:20px;color:var(--text-muted);">' + __('tables.no.tables') + '</div>' : ''}
                    <div style="margin-top:16px;display:flex;gap:8px;">
                        <button class="btn btn-secondary" style="flex:1;height:40px;font-size:14px;" onclick="POS.selectTable()">${__('tables.back')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    reserveTable(tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || table.status !== 'free') return;
        table.status = 'reserved';
        this.saveState();
        this.showReserveModal();
        this.showToast(__('tables.reserved.toast') + ' "' + table.name + '"', 'success');
    },

    unreserveTable(tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table || table.status !== 'reserved') return;
        table.status = 'free';
        this.saveState();
        this.selectTable();
        this.showToast(__('tables.unreserved.toast') + ' "' + table.name + '"', 'info');
    },

    showAddTableModal() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:360px;">
                <div class="modal-header"><div class="modal-title">${this.icn('plus-square', '18px')} ${__('tables.add.title')}</div><button class="modal-close" onclick="POS.selectTable()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group"><label class="form-label">${__('tables.name.label')}</label><input type="text" class="form-input" id="new-table-name" placeholder="${__('tables.name.placeholder')}" autocomplete="off"></div>
                    <div class="form-group"><label class="form-label">${__('tables.seats.label')}</label><input type="number" class="form-input" id="new-table-seats" value="4" min="1"></div>
                    <div class="form-group"><label class="form-label">${__('tables.price.label')}</label><input type="number" class="form-input" id="new-table-price" value="0" min="0" placeholder="0 = ${__('tables.free')}"></div>
                    <div style="display:flex;gap:8px;margin-top:16px;">
                        <button class="btn btn-secondary" style="flex:1;" onclick="POS.selectTable()">${__('tables.cancel')}</button>
                        <button class="btn btn-primary" style="flex:1;" onclick="POS.confirmAddTable()">${__('tables.add.btn')}</button>
                    </div>
                </div>
            </div>`;
    },

    confirmAddTable() {
        const nameInput = document.getElementById('new-table-name');
        const seatsInput = document.getElementById('new-table-seats');
        const priceInput = document.getElementById('new-table-price');
        if (!nameInput) return;
        const name = nameInput.value.trim();
        const seats = parseInt(seatsInput.value, 10) || 4;
        const price = parseInt(priceInput.value, 10) || 0;
        if (!name) { this.showToast(__('toast.table.name.empty'), 'error'); return; }
        
        const nextId = this.tables.length > 0 ? Math.max(...this.tables.map(t => t.id)) + 1 : 1;
        this.tables.push({
            id: nextId,
            name: name,
            seats: seats,
            status: 'free',
            price: price
        });
        this.saveState();
        this.selectTable();
        this.showToast(__('toast.table.added') + ' "' + name + '"', 'success');
    },

    showEditTableModal(tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) return;
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:360px;">
                <div class="modal-header"><div class="modal-title">${this.icn('edit', '18px')} ${__('tables.edit.title')}</div><button class="modal-close" onclick="POS.selectTable()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group"><label class="form-label">${__('tables.name.label')}</label><input type="text" class="form-input" id="edit-table-name" value="${table.name}" autocomplete="off"></div>
                    <div class="form-group"><label class="form-label">${__('tables.seats.label')}</label><input type="number" class="form-input" id="edit-table-seats" value="${table.seats}" min="1"></div>
                    <div class="form-group"><label class="form-label">${__('tables.price.label')}</label><input type="number" class="form-input" id="edit-table-price" value="${table.price || 0}" min="0"></div>
                    <div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
                        <div style="display:flex;gap:8px;">
                            <button class="btn btn-secondary" style="flex:1;" onclick="POS.selectTable()">${__('tables.cancel')}</button>
                            <button class="btn btn-primary" style="flex:1;" onclick="POS.confirmEditTable(${tableId})">${__('tables.save.btn')}</button>
                        </div>
                        <button class="btn btn-danger btn-block" onclick="POS.confirmDeleteTable(${tableId})">${this.icn('trash-2', '14px')} ${__('tables.delete.btn')}</button>
                    </div>
                </div>
            </div>`;
    },

    confirmEditTable(tableId) {
        const nameInput = document.getElementById('edit-table-name');
        const seatsInput = document.getElementById('edit-table-seats');
        const priceInput = document.getElementById('edit-table-price');
        if (!nameInput) return;
        const name = nameInput.value.trim();
        const seats = parseInt(seatsInput.value, 10) || 4;
        const price = parseInt(priceInput.value, 10) || 0;
        if (!name) { this.showToast(__('toast.table.name.empty'), 'error'); return; }

        const table = this.tables.find(t => t.id === tableId);
        if (table) {
            table.name = name;
            table.seats = seats;
            table.price = price;
            this.saveState();
            this.selectTable();
            this.showToast(__('toast.table.updated'), 'success');
        }
    },

    async confirmDeleteTable(tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) return;
        if (await this._confirm(__('toast.table.confirm.delete') + ' "' + table.name + '"?')) {
            this.tables = this.tables.filter(t => t.id !== tableId);
            if (this.state.selectedTable === tableId) {
                this.state.selectedTable = null;
            }
            this.saveState();
            this.selectTable();
            this.showToast(__('toast.table.deleted'), 'success');
        }
    },

    /* ======================== PARKED ORDERS PER TABLE ======================== */
    showTableParkedOrders(tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) return;
        const parkedForTable = this.state.parkedOrders.filter(p => p.table === tableId);

        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        modal.innerHTML = `
            <div class="modal" style="max-width:500px;">
                <div class="modal-header">
                    <div class="modal-title">${this.icn('table', '18px')} ${table.name} — ${__('tables.parked.title')}</div>
                    <button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button>
                </div>
                <div class="modal-body">
                    ${parkedForTable.length === 0
                        ? '<div class="empty-state"><div class="empty-state-icon">' + this.icn('archive', '32px') + '</div><div class="empty-state-title">' + __('tables.parked.none') + '</div></div>'
                        : parkedForTable.map(p => {
                            const pTotal = p.items.reduce((s, it) => s + it.price * it.quantity, 0);
                            const dt = new Date(p.parkedAt);
                            const pIdx = this.state.parkedOrders.indexOf(p);
                            return `<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:12px 16px;margin-bottom:8px;">
                                        <div style="display:flex;justify-content:space-between;align-items:center;">
                                            <div>
                                                <div style="font-weight:700;font-size:14px;">${this.icn('pause', '14px')} ${__('tables.parked.order')} #${p.orderNumber}</div>
                                                <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">
                                                    ${p.items.length} ${__('tables.parked.items')} · ${pTotal.toLocaleString()} ${__('currency.sum')} · ${dt.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'})}
                                                </div>
                                            </div>
                                            <button class="btn btn-sm btn-primary" onclick="POS.restoreParkedOrder(${pIdx})">${this.icn('rotate-ccw', '14px')} ${__('tables.parked.restore')}</button>
                                        </div>
                                    </div>`;
                        }).join('')
                    }
                    <div style="margin-top:16px;display:flex;gap:8px;justify-content:space-between;">
                        <button class="btn btn-ghost" onclick="POS.selectTable()">${this.icn('chevron-left', '14px')} ${__('tables.parked.back')}</button>
                        <button class="btn btn-primary" onclick="POS.startNewOrderForTable(${tableId})">${this.icn('plus', '14px')} ${__('tables.parked.new.order')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    startNewOrderForTable(tableId) {
        if (this.state.order.length > 0) {
            const orderCopy = this.state.order.map(o => ({ ...o, modifiers: o.modifiers ? [...o.modifiers] : [] }));
            this.state.parkedOrders.push({
                id: Date.now(),
                orderNumber: this.state.orderNumber,
                items: orderCopy,
                table: this.state.selectedTable,
                orderType: this.state.orderType,
                guestCount: this.state.guestCount,
                discountPercent: this.state.discountPercent,
                serviceChargePercent: this.state.serviceChargePercent,
                note: this.state.globalNote,
                parkedAt: new Date().toISOString(),
            });
            if (this.state.selectedTable) {
                const prevTable = this.tables.find(t => t.id === this.state.selectedTable);
                if (prevTable) prevTable.status = 'occupied';
            }
            this.state.orderNumber++;
        }
        this.state.order = [];
        this.state.discountPercent = 0;
        this.state.serviceChargePercent = 0;
        this.state.globalNote = '';
        this.state.kitchenSent = false;
        this.state.guestCount = 1;
        this.state.selectedTable = tableId;
        const table = this.tables.find(t => t.id === tableId);
        if (table) table.status = 'occupied';
        this.state.orderType = 'dinein';
        document.querySelectorAll('#order-type-bar .btn').forEach(b => {
            b.className = 'btn btn-sm ' + (b.dataset.type === this.state.orderType ? 'btn-primary' : 'btn-secondary');
        });
        this.saveState();
        this.closeModal();
        this.renderOrder();
        this.showToast(__('tables.new.order.for') + ' ' + table?.name, 'info');
    },

    /* ======================== ITEM NOTES ======================== */
    addItemNote(idx) {
        if (this._isWaiter() && this.state.kitchenSent) {
            this.showToast(__('toast.order.kitchen'), 'error');
            return;
        }
        const item = this.state.order[idx];
        if (!item) return;
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        modal.innerHTML = `
            <div class="modal" style="max-width:400px;">
                <div class="modal-header"><div class="modal-title">${this.icn('edit-3', '18px')} ${__('order.note.modal.title')} "${item.name}"</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group">
                        <textarea class="form-input" id="item-note-input" rows="3" style="resize:vertical;min-height:80px;" placeholder="${__('order.note.placeholder')}">${item.note || ''}</textarea>
                    </div>
                    <div style="display:flex;gap:6px;flex-wrap:wrap;">
                        ${I18n.t('order.note.quick').map(p =>
                            `<button class="btn btn-sm btn-secondary" onclick="document.getElementById('item-note-input').value += (document.getElementById('item-note-input').value ? ', ' : '') + '${p}';">${p}</button>`
                        ).join('')}
                    </div>
                    <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end;">
                        <button class="btn btn-ghost" onclick="POS.closeModal()">${__('order.note.btn.cancel')}</button>
                        <button class="btn btn-primary" onclick="POS.saveItemNote(${idx})">${__('order.note.btn.save')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
        setTimeout(() => document.getElementById('item-note-input')?.focus(), 100);
    },

    saveItemNote(idx) {
        const inp = document.getElementById('item-note-input');
        if (inp && this.state.order[idx]) this.state.order[idx].note = inp.value.trim();
        this.closeModal();
        this.renderOrder();
        this.showToast(__('order.note.saved'), 'info');
    },

    /* ======================== MODIFIERS ======================== */
    showModifierPanel() {
        if (this.state.order.length === 0) {         this.showToast(__('toast.order.empty'), 'warning'); return; }
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const orderOpts = this.state.order.map((item, i) =>
            `<option value="${i}">${this.foodIcon(item.emoji, '14px')} ${item.name} × ${item.quantity}</option>`
        ).join('');

        const modBtns = this.modifiers.map(m =>
            `<button class="btn btn-sm btn-secondary" onclick="POS.applyModifierToItem('${m.id}')" style="flex:1;min-width:120px;">
                ${m.name}${m.price > 0 ? ' +' + m.price.toLocaleString() : ''}
            </button>`
        ).join('');

        modal.innerHTML = `
            <div class="modal" style="max-width:500px;">
                <div class="modal-header"><div class="modal-title">${this.icn('plus', '18px')} ${__('modifier.panel.title')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">${__('modifier.select.dish')}</label>
                        <select class="form-input" id="mod-item-select" onchange="POS._updateModPreview()">${orderOpts}</select>
                    </div>
                    <label class="form-label" style="margin-bottom:8px;">${__('modifier.add.label')}</label>
                    <div style="display:flex;flex-wrap:wrap;gap:6px;">${modBtns}</div>
                    <div id="mod-preview" style="margin-top:16px;"></div>
                    <div style="margin-top:12px;display:flex;gap:8px;justify-content:flex-end;">
                        <button class="btn btn-secondary" onclick="POS.closeModal()">${__('modifier.done')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
        this._updateModPreview();
    },

    _updateModPreview() {
        const preview = document.getElementById('mod-preview');
        if (!preview) return;
        const sel = document.getElementById('mod-item-select');
        const idx = sel ? parseInt(sel.value) : -1;
        const item = this.state.order[idx];
        if (!item || !item.modifiers || item.modifiers.length === 0) {
            preview.innerHTML = '<div style="color:var(--text-muted);font-size:13px;">' + __('modifier.none') + '</div>';
            return;
        }
        preview.innerHTML = '<label class="form-label">' + __('modifier.current') + '</label>' +
            item.modifiers.map((m, mi) =>
                `<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 8px;background:var(--bg-card);border-radius:var(--radius-sm);margin-bottom:4px;">
                    <span style="font-size:13px;">${m.name}${m.price > 0 ? ' <span style="color:var(--primary);">+' + m.price.toLocaleString() + ' сум</span>' : ''}</span>
                    <button class="order-item-remove" onclick="POS.removeModifier(${idx},${mi})" style="width:20px;height:20px;">${POS.icn('x', '10px')}</button>
                </div>`
            ).join('');
    },

    applyModifierToItem(modId) {
        const sel = document.getElementById('mod-item-select');
        const idx = sel ? parseInt(sel.value) : -1;
        const item = this.state.order[idx];
        if (!item) return;
        const mod = this.modifiers.find(m => m.id === modId);
        if (!mod) return;
        if (!item.modifiers) item.modifiers = [];
        if (item.modifiers.some(m => m.id === modId)) {
            this.showToast(__('toast.modifier.exists'), 'warning');
            return;
        }
        item.modifiers.push({ id: mod.id, name: mod.name, price: mod.price });
        this._updateModPreview();
        this.renderOrder();
        this.showToast(__('modifier.added') + ' ' + mod.name, 'success');
    },

    removeModifier(itemIdx, modIdx) {
        const item = this.state.order[itemIdx];
        if (!item || !item.modifiers) return;
        item.modifiers.splice(modIdx, 1);
        this._updateModPreview();
        this.renderOrder();
    },

    /* ======================== SERVICE CHARGE & DISCOUNT ======================== */
    showServiceChargeModal() {
        if (!this._canManageMoney()) { this.showToast(__('toast.only.admin'), 'error'); return; }
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        modal.innerHTML = `
            <div class="modal" style="max-width:400px;">
                <div class="modal-header"><div class="modal-title">${this.icn('briefcase', '18px')} ${__('service.title')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">${__('service.percent.label')}</label>
                        <input type="number" class="form-input" id="service-input" value="${this.state.serviceChargePercent}" min="0" max="50" step="1">
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;">
                        ${[0,5,8,10,12,15,18,20].map(p =>
                            `<button class="btn btn-sm ${this.state.serviceChargePercent === p ? 'btn-primary' : 'btn-secondary'}"
                                     onclick="POS.setServiceChargeQuick(${p})">${p}%</button>`
                        ).join('')}
                    </div>
                    <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end;">
                        <button class="btn btn-ghost" onclick="POS.closeModal()">${__('tables.cancel')}</button>
                        <button class="btn btn-primary" onclick="POS.applyServiceCharge()">${__('service.apply')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    setServiceChargeQuick(pct) {
        this.state.serviceChargePercent = pct;
        this.closeModal();
        this.renderOrder();
        this.showToast(pct > 0 ? __('service.set') + ' ' + pct + '%' : __('service.cancelled'), 'info');
    },

    applyServiceCharge() {
        const inp = document.getElementById('service-input');
        if (inp) this.state.serviceChargePercent = Math.min(50, Math.max(0, parseInt(inp.value) || 0));
        this.closeModal();
        this.renderOrder();
        if (this.state.serviceChargePercent > 0)
            this.showToast(__('service.set') + ' ' + this.state.serviceChargePercent + '%', 'info');
    },

    setDiscountQuick(pct) {
        this.state.discountPercent = pct;
        this.closeModal();
        this.renderOrder();
        this.showToast(pct > 0 ? __('discount.set') + ' ' + pct + '%' : __('discount.cancelled'), 'info');
    },

    applyDiscount() {
        const inp = document.getElementById('discount-input');
        if (inp) this.state.discountPercent = Math.min(100, Math.max(0, parseInt(inp.value) || 0));
        this.closeModal();
        this.renderOrder();
        if (this.state.discountPercent > 0) this.showToast(__('discount.set') + ' ' + this.state.discountPercent + '%', 'info');
        else this.showToast(__('discount.cancelled'), 'info');
    },



    showDiscountModal() {
        if (!this._canManageMoney()) { this.showToast(__('toast.only.admin'), 'error'); return; }
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:420px;">
                <div class="modal-header"><div class="modal-title">${this.icn('tag', '18px')} ${__('discount.title')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div class="form-group">
                        <label class="form-label">${__('discount.percent.label')}</label>
                        <input type="number" class="form-input" id="discount-input" value="${this.state.discountPercent}" min="0" max="100" step="5">
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
                        ${[0,5,10,15,20,30].map(p =>
                            `<button class="btn btn-sm ${this.state.discountPercent === p ? 'btn-primary' : 'btn-secondary'}"
                                     onclick="POS.setDiscountQuick(${p})">${p}%</button>`
                        ).join('')}
                    </div>
                    <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end;">
                        <button class="btn btn-ghost" onclick="POS.closeModal()">${__('tables.cancel')}</button>
                        <button class="btn btn-primary" onclick="POS.applyDiscount()">${__('discount.apply')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },



    /* ======================== PARKED ORDERS ======================== */
    parkOrder() {
        if (this.state.order.length === 0) { this.showToast(__('park.no.order'), 'warning'); return; }
        if (this.state.selectedTable) {
            const table = this.tables.find(t => t.id === this.state.selectedTable);
            if (table) table.status = 'occupied';
        }
        const orderCopy = this.state.order.map(o => ({ ...o, modifiers: o.modifiers ? [...o.modifiers] : [] }));
        this.state.parkedOrders.push({
            id: Date.now(),
            orderNumber: this.state.orderNumber,
            items: orderCopy,
            table: this.state.selectedTable,
            orderType: this.state.orderType,
            guestCount: this.state.guestCount,
            discountPercent: this.state.discountPercent,
            serviceChargePercent: this.state.serviceChargePercent,
            note: this.state.globalNote,
            parkedAt: new Date().toISOString(),
        });
        this.state.order = [];
        this.state.selectedTable = null;
        this.state.discountPercent = 0;
        this.state.serviceChargePercent = 0;
        this.state.globalNote = '';
        this.state.guestCount = 1;
        this.state.orderNumber++;
        this.saveState();
        this.renderOrder();
        this.renderMenu();
        this.showToast(__('park.parked'), 'info');
    },

    showParkedOrders() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const parked = this.state.parkedOrders;
        modal.innerHTML = `
            <div class="modal" style="max-width:600px;">
                <div class="modal-header"><div class="modal-title">${this.icn('pause', '18px')} ${__('park.title')} (${parked.length})</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    ${parked.length === 0
                        ? '<div class="empty-state"><div class="empty-state-icon">' + this.icn('archive', '32px') + '</div><div class="empty-state-title">' + __('park.empty') + '</div></div>'
                        : parked.map((p, i) => {
                            const dt = new Date(p.parkedAt);
                            const tableName = p.table ? (this.tables.find(t => t.id === p.table)?.name || '—') : (p.orderType === 'takeaway' ? __('order.type.takeaway') : __('order.type.delivery'));
                            const total = p.items.reduce((s, it) => s + it.price * it.quantity, 0);
                            return `<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:10px 14px;margin-bottom:6px;display:flex;align-items:center;justify-content:space-between;gap:10px;">
                                        <div style="min-width:0;flex:1;">
                                            <div style="font-weight:700;font-size:13px;">${__('order.number')} #${p.orderNumber} · ${tableName} · ${p.guestCount || 1} ${__('order.meta.guests')}</div>
                                            <div style="font-size:12px;color:var(--text-muted);margin-top:2px;">${dt.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'})} · ${p.items.length} ${__('order.meta.pos')} · ${total.toLocaleString()} ${__('currency.sum')}</div>
                                        </div>
                                        <div style="display:flex;gap:4px;flex-shrink:0;">
                                            <button class="btn btn-sm btn-primary" onclick="POS.restoreParkedOrder(${i})">${this.icn('rotate-ccw', '14px')} ${__('park.restore')}</button>
                                        </div>
                                    </div>`;
                        }).join('')
                    }
                </div>
                <div class="modal-footer">
                    <button class="btn btn-ghost" onclick="POS.closeModal()">${__('park.close')}</button>
                    ${parked.length > 0 ? '<button class="btn btn-danger" onclick="POS._adminClearAllParked()">' + this.icn('trash-2', '14px') + ' ' + __('park.clear.all') + '</button>' : ''}
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    async _adminClearAllParked() {
        if (!(await this._confirm(__('toast.park.confirm.clear')))) return;
        this.state.parkedOrders.forEach(p => {
            if (p.table) {
                const table = this.tables.find(t => t.id === p.table);
                if (table) table.status = 'free';
            }
        });
        this.state.parkedOrders = [];
        this.saveState();
        this.closeModal();
        this.showToast(__('park.cleared'), 'info');
    },

    async _adminClearHistory() {
        if (!(await this._confirm(__('toast.history.confirm.clear')))) return;
        this.state.orderHistory = [];
        this.state.refunds = [];
        this.saveState();
        this.closeModal();
        this.showToast(__('history.cleared'), 'info');
    },

    async restoreParkedOrder(idx) {
        const parked = this.state.parkedOrders[idx];
        if (!parked) return;
        if (this.state.order.length > 0 && !(await this._confirm(__('toast.order.confirm.restore') + '?'))) return;
        this.state.order = [];
        this.state.discountPercent = 0;
        this.state.serviceChargePercent = 0;
        this.state.globalNote = '';
        this.state.guestCount = 1;
        this.state.order = parked.items.map(o => ({ ...o, modifiers: o.modifiers ? [...o.modifiers] : [] }));
        this.state.orderNumber = parked.orderNumber;
        this.state.selectedTable = parked.table;
        if (parked.table) {
            const table = this.tables.find(t => t.id === parked.table);
            if (table) table.status = 'occupied';
        }
        this.state.orderType = parked.orderType;
        this.state.guestCount = parked.guestCount || 1;
        this.state.discountPercent = parked.discountPercent || 0;
        this.state.serviceChargePercent = parked.serviceChargePercent || 0;
        this.state.globalNote = parked.note || '';
        this.state.parkedOrders.splice(idx, 1);
        this.saveState();
        this.closeModal();
        this.renderOrder();
        document.querySelectorAll('#order-type-bar .btn').forEach(b => {
            b.className = 'btn btn-sm ' + (b.dataset.type === parked.orderType ? 'btn-primary' : 'btn-secondary');
        });
        this.showToast(__('park.restored'), 'success');
    },

    /* ======================== ITEM AVAILABILITY ======================== */
    showAvailabilityManager() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        // Initialize state filters if not set
        if (typeof this.availSearchQuery === 'undefined') this.availSearchQuery = '';
        if (typeof this.availSelectedCategory === 'undefined') this.availSelectedCategory = 'all';
        this.availView = 'all';

        modal.innerHTML = `
            <div class="modal modal-full">
                <div class="modal-header">
                    <div class="modal-title">${this.icn('check-square', '18px')} ${__('avail.title') || 'Доступность блюд'}</div>
                    <button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button>
                </div>
                <div class="modal-body" style="display:flex; flex-direction:column; gap:20px; max-width:1200px; margin:0 auto; width:100%; height:100%;">
                    
                    <!-- Stats & Actions Row -->
                    <div class="avail-stats-row" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; background:var(--bg-card); border-radius:var(--radius-lg); padding:16px 20px; border:1px solid var(--border-subtle);">
                        <div style="display:flex; gap:24px; align-items:center; flex-wrap:wrap;">
                            <div>
                                <div style="font-size:12px; color:var(--text-muted); font-weight:500;">${__('avail.total')}</div>
                                <div id="avail-stat-total" style="font-size:24px; font-weight:800; color:var(--text-primary); margin-top:2px;">0</div>
                            </div>
                            <div style="width:1px; height:32px; background:var(--border-subtle);"></div>
                            <div>
                                <div style="font-size:12px; color:var(--text-muted); font-weight:500;">${__('avail.in.stock')}</div>
                                <div id="avail-stat-available" style="font-size:24px; font-weight:800; color:var(--primary); margin-top:2px;">0</div>
                            </div>
                            <div style="width:1px; height:32px; background:var(--border-subtle);"></div>
                            <div>
                                <div style="font-size:12px; color:var(--text-muted); font-weight:500;">${__('avail.stop.list')}</div>
                                <div id="avail-stat-stopped" style="font-size:24px; font-weight:800; color:var(--danger); margin-top:2px;">0</div>
                            </div>
                        </div>
                        <div style="display:flex; gap:10px;">
                            <button class="btn btn-secondary" onclick="POS.setAllAvailable()"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; color: #10b981; vertical-align: middle;"><polyline points="20 6 9 17 4 12"></polyline></svg><span style="vertical-align: middle;">${__('avail.all.available') || 'Все доступны'}</span></button>
                        </div>
                    </div>

                    <!-- Search & Filter Controls -->
                    <div class="avail-filters-row" style="display:flex; flex-direction:column; gap:12px;">
                        <!-- Search Box -->
                        <div class="search-bar" style="margin: 0; width: 100%; position: relative;">
                            <span class="search-icon">${this.icn('search', '16px')}</span>
                            <input type="text" id="avail-search-input" placeholder="${__('search.placeholder')}" autocomplete="off" oninput="POS.handleAvailSearch(this.value)" style="width:100%; padding:12px 16px 12px 40px; background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); color:var(--text-primary); font-family:inherit; font-size:14px; outline:none; transition:all 0.2s;">
                            <button class="search-clear" onclick="document.getElementById('avail-search-input').value=''; POS.handleAvailSearch('')" style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 16px;">✕</button>
                        </div>

                        <!-- Categories Horizontal Scroll -->
                        <div class="avail-cats-wrapper" style="overflow-x:auto; white-space:nowrap; padding:4px 0; display:flex; gap:8px; scrollbar-width: none;">
                            <!-- Dynamically populated -->
                        </div>
                        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 0;">
                        <!-- Availability Tabs -->
                        <div style="display:flex; gap:8px; padding:4px 0;">
                            <button class="btn btn-sm btn-primary" id="avail-tab-all" onclick="POS.switchAvailTab('all')" style="border-radius:var(--radius-full); padding:8px 16px;">${this.icn('menu', '14px')} Все</button>
                            <button class="btn btn-sm btn-secondary" id="avail-tab-available" onclick="POS.switchAvailTab('available')" style="border-radius:var(--radius-full); padding:8px 16px;">${this.icn('check', '14px')} Доступные</button>
                            <button class="btn btn-sm btn-secondary" id="avail-tab-stopped" onclick="POS.switchAvailTab('stopped')" style="border-radius:var(--radius-full); padding:8px 16px;">${this.icn('x-circle', '14px')} Стоп лист</button>
                        </div>
                    </div>

                    <!-- Menu Grid Container -->
                    <div style="flex:1; overflow-y:auto; padding-bottom:20px;">
                        <div id="avail-items-grid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:12px;">
                            <!-- Dynamically populated -->
                        </div>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');

        // Populate Categories
        const catsWrapper = modal.querySelector('.avail-cats-wrapper');
        if (catsWrapper) {
            catsWrapper.innerHTML = this.categories.map(cat => {
                const active = this.availSelectedCategory === cat.id;
                return `<button class="btn btn-sm ${active ? 'btn-primary' : 'btn-secondary'}" 
                                data-avail-cat-id="${cat.id}"
                                onclick="POS.handleAvailCategory('${cat.id}')"
                                style="border-radius: var(--radius-full); padding: 8px 16px;">
                            ${this.foodIcon(cat.emoji, '14px')} ${cat.name}
                        </button>`;
            }).join('');
        }

        // Populate Grid
        const grid = modal.querySelector('#avail-items-grid');
        if (grid) {
            grid.innerHTML = this.menu.map(item => {
                const avail = this.state.itemAvailability[item.id] !== false;
                const catName = this.categories.find(c => c.id === item.category)?.name || '';
                return `
                    <div class="avail-card" 
                         data-avail-item-id="${item.id}"
                         data-avail-item-name="${item.name.toLowerCase()}"
                         data-avail-item-cat="${item.category}"
                         style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; justify-content: space-between; gap: 16px; transition: all 0.2s ease-in-out;">
                        <div style="display: flex; gap: 12px; align-items: flex-start; padding-bottom: 8px;">
                            ${item.photo ? `<span style="width:44px;height:44px;border-radius:var(--radius-md);overflow:hidden;flex-shrink:0;background:url(${item.photo}) center/cover no-repeat;border:1px solid var(--border-subtle);"></span>` : `<span style="font-size:28px;display:flex;align-items:center;justify-content:center;width:44px;height:44px;">${this.icn("bowl","28px")}</span>`}
                            <div style="min-width: 0; flex: 1;">
                                <div style="font-size: 15px; font-weight: 700; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.3;" title="${item.name}">${item.name}</div>
                                <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px; font-weight: 500;">${catName}</div>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 12px; margin-top: auto;">
                            <div style="font-size: 14px; font-weight: 800; color: var(--primary);">${item.price.toLocaleString()} ${__('currency.sum')}</div>
                            <button class="btn btn-sm ${avail ? 'btn-primary' : 'btn-danger'}" 
                                    onclick="POS.toggleAvailability(${item.id})"
                                    style="padding: 6px 12px; font-size: 12px; border-radius: var(--radius-sm); gap: 6px; font-weight: 700;">
                                <span class="avail-status-icon">${avail ? this.icn('check', '14px') : this.icn('x-circle', '14px')}</span>
                                <span class="avail-status-text">${avail ? __('avail.available') : __('avail.stopped')}</span>
                            </button>
                        </div>
                    </div>`;
            }).join('');
        }

        // Initialize display filtering and statistics
        this.filterAvailItemsDOM();
        this.updateAvailStats();
    },

    handleAvailSearch(val) {
        this.availSearchQuery = val.trim().toLowerCase();
        this.filterAvailItemsDOM();
    },

    handleAvailCategory(catId) {
        this.availSelectedCategory = catId;
        const buttons = document.querySelectorAll('[data-avail-cat-id]');
        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-avail-cat-id') === catId;
            if (isCurrent) {
                btn.classList.remove('btn-secondary');
                btn.classList.add('btn-primary');
            } else {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-secondary');
            }
        });
        this.filterAvailItemsDOM();
    },

    filterAvailItemsDOM() {
        const searchQuery = this.availSearchQuery || '';
        const selectedCat = this.availSelectedCategory || 'all';
        const cards = document.querySelectorAll('[data-avail-item-id]');
        
        cards.forEach(card => {
            const name = card.getAttribute('data-avail-item-name') || '';
            const category = card.getAttribute('data-avail-item-cat') || '';
            const itemId = parseInt(card.getAttribute('data-avail-item-id'));
            const matchesSearch = name.includes(searchQuery);
            const matchesCat = selectedCat === 'all' || category === selectedCat;
            const isAvailable = this.state.itemAvailability[itemId] !== false;
            const matchesAvail = this.availView === 'available' ? isAvailable : (this.availView === 'stopped' ? !isAvailable : true);
            
            if (matchesSearch && matchesCat && matchesAvail) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    },

    switchAvailTab(tab) {
        this.availView = tab;
        const allBtn = document.getElementById('avail-tab-all');
        const availBtn = document.getElementById('avail-tab-available');
        const stoppedBtn = document.getElementById('avail-tab-stopped');
        if (allBtn && availBtn && stoppedBtn) {
            allBtn.className = 'btn btn-sm ' + (tab === 'all' ? 'btn-primary' : 'btn-secondary');
            availBtn.className = 'btn btn-sm ' + (tab === 'available' ? 'btn-primary' : 'btn-secondary');
            stoppedBtn.className = 'btn btn-sm ' + (tab === 'stopped' ? 'btn-primary' : 'btn-secondary');
        }
        this.filterAvailItemsDOM();
    },

    updateAvailStats() {
        const total = this.menu.length;
        let available = 0;
        let stopped = 0;
        
        this.menu.forEach(item => {
            const avail = this.state.itemAvailability[item.id] !== false;
            if (avail) available++;
            else stopped++;
        });
        
        const totalEl = document.getElementById('avail-stat-total');
        const availEl = document.getElementById('avail-stat-available');
        const stoppedEl = document.getElementById('avail-stat-stopped');
        
        if (totalEl) totalEl.textContent = total;
        if (availEl) availEl.textContent = available;
        if (stoppedEl) stoppedEl.textContent = stopped;
    },

    toggleAvailability(itemId) {
        const current = this.state.itemAvailability[itemId];
        const next = current === false ? true : false;
        this.state.itemAvailability[itemId] = next;
        this.saveState();
        this.renderMenu();
        
        const card = document.querySelector(`[data-avail-item-id="${itemId}"]`);
        if (card) {
            const btn = card.querySelector('button');
            if (btn) {
                btn.className = `btn btn-sm ${next ? 'btn-primary' : 'btn-danger'}`;
                const icon = btn.querySelector('.avail-status-icon');
                const text = btn.querySelector('.avail-status-text');
                if (icon) icon.innerHTML = next ? POS.icn('check', '14px') : POS.icn('x-circle', '14px');
                if (text) text.textContent = next ? __('avail.available') : __('avail.stopped');
            }
        }
        this.updateAvailStats();
    },

    setAllAvailable() {
        this.menu.forEach(item => { this.state.itemAvailability[item.id] = true; });
        this.saveState();
        this.renderMenu();
        
        const cards = document.querySelectorAll('[data-avail-item-id]');
        cards.forEach(card => {
            const btn = card.querySelector('button');
            if (btn) {
                btn.className = 'btn btn-sm btn-primary';
                const icon = btn.querySelector('.avail-status-icon');
                const text = btn.querySelector('.avail-status-text');
                if (icon) icon.innerHTML = POS.icn('check', '14px');
                if (text) text.textContent = __('avail.available');
            }
        });
        
        this.updateAvailStats();
        this.showToast(__('avail.all.set') || 'Все блюда доступны', 'info');
    },

    /* ======================== TOTALS ======================== */
    getSubtotal() {
        return this.state.order.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    getModifierTotal() {
        return this.state.order.reduce((sum, item) => sum + this._getItemModifierTotal(item), 0);
    },
    getDiscount() {
        const base = this.getSubtotal() + this.getModifierTotal();
        return this.state.discountPercent > 0 ? Math.round(base * this.state.discountPercent / 100) : 0;
    },
    getServiceCharge() {
        const base = this.getSubtotal() + this.getModifierTotal() - this.getDiscount();
        return this.state.serviceChargePercent > 0 ? Math.round(base * this.state.serviceChargePercent / 100) : 0;
    },
    getVAT() {
        const base = this.getSubtotal() + this.getModifierTotal() - this.getDiscount() + this.getServiceCharge();
        return Math.round(base * 12 / 112);
    },
    getTotal() {
        return this.getSubtotal() + this.getModifierTotal() - this.getDiscount() + this.getServiceCharge();
    },

    /* ======================== PAYMENT ======================== */
    openPayment(type) {
        if (this.state.order.length === 0) return;
        if (type === 1) this.showCashModal();
        else this.showCardModal(type);
    },

    showCashModal() {
        const total = this.getTotal();
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:500px;display:flex;flex-direction:column;max-height:96vh;">
                <div class="modal-header"><div class="modal-title">${this.icn('wallet', '18px')} ${__('payment.cash')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body" style="flex:1;overflow-y:auto;padding:16px;max-height:none;">
                    <div class="order-totals-row" style="padding:12px 0;">
                        <span style="font-size:15px;color:var(--text-muted);font-weight:500;">${__('payment.amount.due')}</span>
                        <span style="font-size:24px;font-weight:800;color:var(--primary);line-height:1;">${total.toLocaleString()} ${__('currency.sum')}</span>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${__('payment.received')}</label>
                        <div class="amount-input-wrapper">
                            <div class="amount-input" id="cash-display" style="text-align:center;font-size:32px;font-weight:700;padding:16px;background:var(--bg-input);border:2px solid var(--border-default);border-radius:var(--radius-md);">0 ${__('currency.sum')}</div>
                            <input type="hidden" id="cash-raw" value="0">
                        </div>
                    </div>
                    <div class="order-totals-row" id="cash-change-row" style="visibility:hidden;">
                        <span class="label">${__('payment.change')}</span>
                        <span class="value" id="cash-change" style="font-size:18px;font-weight:700;">0 ${__('currency.sum')}</span>
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin:12px 0;">
                        <button class="btn btn-sm btn-secondary" onclick="POS.setCashAmount(${total})">${__('payment.no.change')}</button>
                        <button class="btn btn-sm btn-secondary" onclick="POS.addCashAmount(5000)">+5 000</button>
                        <button class="btn btn-sm btn-secondary" onclick="POS.addCashAmount(10000)">+10 000</button>
                        <button class="btn btn-sm btn-secondary" onclick="POS.addCashAmount(20000)">+20 000</button>
                        <button class="btn btn-sm btn-secondary" onclick="POS.addCashAmount(50000)">+50 000</button>
                        <button class="btn btn-sm btn-secondary" onclick="POS.addCashAmount(100000)">+100 000</button>
                    </div>
                    <div class="numpad">
                        ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="numpad-btn" onclick="POS.numpadInput('${n}')">${n}</button>`).join('')}
                        <button class="numpad-btn" onclick="POS.numpadInput('0')">0</button>
                        <button class="numpad-btn" onclick="POS.numpadInput('000')">000</button>
                        <button class="numpad-btn backspace" onclick="POS.numpadBackspace()">⌫</button>
                    </div>
                    <button class="btn btn-primary btn-block btn-lg" id="cash-confirm-btn" onclick="POS.confirmCashPayment()" disabled style="margin-top:16px;">${this.icn('wallet', '18px')} Подтвердить (${total.toLocaleString()} ${__('currency.sum')})</button>
                </div>
            </div>`;
        overlay.classList.add('active');
        this.updateCashDisplay();
    },

    numpadInput(digit) {
        const raw = document.getElementById('cash-raw');
        if (!raw) return;
        let val = raw.value;
        if (val === '0') val = '';
        val += digit;
        if (val.length > 10) return;
        raw.value = val;
        this.updateCashDisplay();
    },
    numpadBackspace() {
        const raw = document.getElementById('cash-raw');
        if (!raw) return;
        raw.value = (raw.value.slice(0, -1)) || '0';
        this.updateCashDisplay();
    },
    setCashAmount(amount) {
        const raw = document.getElementById('cash-raw');
        if (raw) { raw.value = String(amount); this.updateCashDisplay(); }
    },
    addCashAmount(amount) {
        const raw = document.getElementById('cash-raw');
        if (raw) { raw.value = String((parseInt(raw.value, 10) || 0) + amount); this.updateCashDisplay(); }
    },

    updateCashDisplay() {
        const raw = document.getElementById('cash-raw');
        const display = document.getElementById('cash-display');
        const changeEl = document.getElementById('cash-change');
        const changeRow = document.getElementById('cash-change-row');
        const confirmBtn = document.getElementById('cash-confirm-btn');
        if (!raw || !display) return;
        const received = parseInt(raw.value, 10) || 0;
        const total = this.getTotal();
        const change = received - total;
        display.textContent = received.toLocaleString() + ' ' + __('currency.sum');
        if (changeEl) {
            changeEl.textContent = Math.max(0, change).toLocaleString() + ' ' + __('currency.sum');
            changeEl.style.color = change >= 0 ? 'var(--primary)' : 'var(--danger)';
        }
        if (changeRow) {
            changeRow.style.visibility = received > 0 ? 'visible' : 'hidden';
            changeRow.style.position = received > 0 ? '' : 'relative';
        }
        if (confirmBtn) {
            confirmBtn.disabled = received < total || total <= 0;
            confirmBtn.innerHTML = received >= total ? POS.icn('wallet', '18px') + ' ' + __('payment.confirm.btn') + ' (' + __('payment.change') + ' ' + Math.max(0, change).toLocaleString() + ' сум)' : POS.icn('wallet', '18px') + ' ' + __('payment.confirm.btn') + ' (' + total.toLocaleString() + ' сум)';
        }
    },

    confirmCashPayment() {
        const raw = document.getElementById('cash-raw');
        if (!raw) return;
        if (parseInt(raw.value, 10) >= this.getTotal()) {
            const btn = document.getElementById('cash-confirm-btn');
            if (btn) {
                btn.classList.add('cash-confirm-anim');
                btn.disabled = true;
            }
            setTimeout(() => this.processPayment(1, parseInt(raw.value, 10)), 300);
        }
    },

    showCardModal(paymentType) {
        const total = this.getTotal();
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        const typeName = (paymentType === 2 ? this.icn('credit-card', '18px') : this.icn('smartphone', '18px')) + ' ' + (paymentType === 2 ? __('payment.card') : __('payment.mobile'));
        modal.innerHTML = `
            <div class="modal" style="max-width:420px;">
                <div class="modal-header"><div class="modal-title">${typeName}</div></div>
                <div class="modal-body" style="text-align:center;padding:40px;">
                    <div style="margin-bottom:20px;">${paymentType === 2 ? this.icn('credit-card', '48px') : this.icn('smartphone', '48px')}</div>
                    <div style="font-size:14px;color:var(--text-muted);margin-bottom:8px;">${__('payment.amount.due')}</div>
                    <div style="font-size:36px;font-weight:800;color:var(--text-primary);margin-bottom:24px;">${total.toLocaleString()} ${__('currency.sum')}</div>
                    <div class="spinner" style="width:36px;height:36px;border-width:4px;margin:0 auto 16px;"></div>
                    <div style="color:var(--text-secondary);font-size:14px;">${__('payment.processing')}</div>
                </div>
            </div>`;
        overlay.classList.add('active');
        setTimeout(() => this.processPayment(paymentType, total), 1500);
    },

    /* ======================== SPLIT PAYMENT ======================== */
    showSplitPaymentModal() {
        if (this.state.order.length === 0) return;
        const total = this.getTotal();
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const half = Math.floor(total / 2);
        modal.innerHTML = `
            <div class="modal" style="max-width:460px;">
                <div class="modal-header"><div class="modal-title">${this.icn('pie-chart', '18px')} Разделить оплату</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div style="text-align:center;margin-bottom:20px;">
                        <div style="font-size:13px;color:var(--text-muted);">${__('payment.amount.due')}</div>
                        <div style="font-size:28px;font-weight:800;color:var(--primary);">${total.toLocaleString()} ${__('currency.sum')}</div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${this.icn('wallet', '14px')} ${__('payment.cash')}</label>
                        <input type="number" class="form-input" id="split-cash" value="${half}" min="0" max="${total}" step="100">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${this.icn('credit-card', '14px')} ${__('payment.card')}</label>
                        <input type="number" class="form-input" id="split-card" value="0" min="0" max="${total}" step="100">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${this.icn('smartphone', '14px')} Payme/Click</label>
                        <input type="number" class="form-input" id="split-mobile" value="0" min="0" max="${total}" step="100">
                    </div>
                    <div id="split-total" style="text-align:center;padding:12px;font-size:15px;font-weight:700;"></div>
                    <div id="split-error" style="text-align:center;padding:8px;color:var(--danger);font-size:13px;display:none;">Сумма частей не равна общей сумме!</div>
                    <button class="btn btn-primary btn-block btn-lg" id="split-confirm" onclick="POS.confirmSplitPayment(${total})" disabled>Оплатить</button>
                </div>
            </div>`;
        overlay.classList.add('active');
        this.updateSplitTotal(total);
        ['split-cash', 'split-card', 'split-mobile'].forEach(id => {
            document.getElementById(id)?.addEventListener('input', () => this.updateSplitTotal(total));
        });
    },

    updateSplitTotal(total) {
        const cash = parseInt(document.getElementById('split-cash')?.value) || 0;
        const card = parseInt(document.getElementById('split-card')?.value) || 0;
        const mobile = parseInt(document.getElementById('split-mobile')?.value) || 0;
        const sum = cash + card + mobile;
        const el = document.getElementById('split-total');
        const err = document.getElementById('split-error');
        const btn = document.getElementById('split-confirm');
        if (el) el.innerHTML = `Распределено: <span style="color:${sum === total ? 'var(--primary)' : 'var(--danger)'}">${sum.toLocaleString()}</span> из ${total.toLocaleString()} ${__('currency.sum')}`;
        if (err) err.style.display = sum === total && total > 0 ? 'none' : 'block';
        if (btn) btn.disabled = sum !== total || total <= 0;
    },

    confirmSplitPayment(total) {
        const cash = parseInt(document.getElementById('split-cash')?.value) || 0;
        const card = parseInt(document.getElementById('split-card')?.value) || 0;
        const mobile = parseInt(document.getElementById('split-mobile')?.value) || 0;
        if (cash + card + mobile !== total) return;
        this.state._splitData = { cash, card, mobile };
        this.closeModal();

        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:420px;">
                <div class="modal-header"><div class="modal-title">${this.icn('pie-chart', '18px')} Раздельная оплата</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body" style="text-align:center;padding:40px;">
                    <div style="margin-bottom:20px;">${this.icn('refresh-ccw', '40px')}</div>
                    <div style="font-size:14px;color:var(--text-muted);margin-bottom:12px;"></div>
                    <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:20px;">
                        ${cash > 0 ? `<div style="display:flex;justify-content:space-between;padding:6px 12px;background:var(--bg-card);border-radius:var(--radius-sm);"><span>${POS.icn('dollar-sign', '14px')} Наличные</span><span style="font-weight:700;">${cash.toLocaleString()} ${__('currency.sum')}</span></div>` : ''}
                        ${card > 0 ? `<div style="display:flex;justify-content:space-between;padding:6px 12px;background:var(--bg-card);border-radius:var(--radius-sm);"><span>${POS.icn('credit-card', '14px')} Карта</span><span style="font-weight:700;">${card.toLocaleString()} ${__('currency.sum')}</span></div>` : ''}
                        ${mobile > 0 ? `<div style="display:flex;justify-content:space-between;padding:6px 12px;background:var(--bg-card);border-radius:var(--radius-sm);"><span>${POS.icn('smartphone', '14px')} Payme/Click</span><span style="font-weight:700;">${mobile.toLocaleString()} ${__('currency.sum')}</span></div>` : ''}
                    </div>
                    <div class="spinner" style="width:36px;height:36px;border-width:4px;margin:0 auto 16px;"></div>
                </div>
            </div>`;
        overlay.classList.add('active');

        setTimeout(() => {
            const payments = [];
            if (cash > 0) payments.push({ type: 1, amount: cash });
            if (card > 0) payments.push({ type: 2, amount: card });
            if (mobile > 0) payments.push({ type: 5, amount: mobile });
            this.processPayment('split', total, payments);
        }, 1500);
    },

    /* ======================== PROCESS PAYMENT ======================== */
    async processPayment(paymentType, receivedAmount, splitPayments) {
        const total = this.getTotal();
        const vat = this.getVAT();
        const discount = this.getDiscount();
        const subtotal = this.getSubtotal();
        const modTotal = this.getModifierTotal();
        const serviceCharge = this.getServiceCharge();
        const change = paymentType === 1 ? receivedAmount - total : 0;

        const baseSum = this.getSubtotal() + this.getModifierTotal();
        const totalSumTiyin = Math.round(total * 100);
        let allocatedSumTiyin = 0;

        const fiscalItems = this.state.order.map((item, idx) => {
            const itemBaseTotal = (item.price * item.quantity) + this._getItemModifierTotal(item);
            
            // Calculate prorated share in tiyins after discounts and service charges
            let itemFinalTotalTiyin = 0;
            if (idx === this.state.order.length - 1) {
                // Last item gets the exact remainder to eliminate any rounding errors
                itemFinalTotalTiyin = totalSumTiyin - allocatedSumTiyin;
            } else {
                itemFinalTotalTiyin = Math.round(itemBaseTotal * 100 * (total / baseSum));
                allocatedSumTiyin += itemFinalTotalTiyin;
            }
            
            // Mathematically satisfy Soliq rule: totalPrice = (salePrice * quantity) - discountSum
            // ensures discountSum is always non-negative even with service charges
            const salePrice = Math.ceil(itemFinalTotalTiyin / item.quantity);
            const calculatedTotal = salePrice * item.quantity;
            const discountSum = calculatedTotal - itemFinalTotalTiyin;
            
            const nameWithMods = item.name + 
                (item.modifiers && item.modifiers.length > 0 ? ' (+' + item.modifiers.map(m => m.name).join(', ') + ')' : '') + 
                (item.note ? ' [' + item.note + ']' : '');
                
            return {
                name: nameWithMods,
                quantity: item.quantity,
                price: salePrice,                               // Unit price in tiyins (rounded up)
                total: itemFinalTotalTiyin,                     // Final line total in tiyins (after prorated discount/service)
                discountSum: discountSum,                       // Recomputed line discount in tiyins
                mxikCode: item.mxikCode || '09901001001000000', // Default to catering services MXIK approved by State Tax Committee
                vatPercent: 12,
                vatSum: Math.round(itemFinalTotalTiyin * 12 / 112),
                packageCode: '0',
            };
        });

        const payments = splitPayments || [{ type: paymentType, amount: Math.round(total * 100) }];

        const receiptPayload = {
            tin: this.state.tin,
            receiptId: FiscalAPI.generateReceiptId(),
            cashier: this.state.cashierName,
            time: new Date().toISOString(),
            items: fiscalItems,
            payments: payments.map(p => ({ type: p.type, amount: p.amount, merchantId: p.merchantId })),
            totalSum: Math.round(total * 100),
            vatSum: Math.round(vat * 100),
            tenderedSum: paymentType === 1 ? Math.round(receivedAmount * 100) : Math.round(total * 100),
        };

        let fiscalResult;
        try {
            if (typeof FiscalAPI !== 'undefined' && this.state.fiscalConnected) {
                fiscalResult = await FiscalAPI.registerReceipt(receiptPayload);
            } else {
                fiscalResult = {
                    success: true,
                    fiscalSign: 'OFFLINE-' + Date.now(),
                    qrCodeUrl: '',
                    receiptNumber: 'MOCK-' + String(Date.now()).slice(-6),
                    terminalId: 'OFFLINE',
                    offline: true,
                };
            }
        } catch (err) {
            console.error('Fiscal error:', err);
            fiscalResult = {
                success: false, fiscalSign: 'НЕ ФИСКАЛИЗИРОВАН',
                qrCodeUrl: '', receiptNumber: '', terminalId: 'ОШИБКА', offline: true,
            };
        }

        this._lastVcrReceiptId = fiscalResult.vcrReceiptId || null;

        const payNames = {
            1: __('payment.cash'), 2: __('payment.card'), 5: __('payment.mobile'),
            split: splitPayments ? splitPayments.map(p => ({ 1: __('payment.cash'), 2: __('payment.card'), 5: __('payment.mobile') })[p.type] || '').join('+') : 'SPLIT'
        };
        const payIcon = { 1: this.icn('wallet', '14px'), 2: this.icn('credit-card', '14px'), 5: this.icn('smartphone', '14px') };

        const receiptData = {
            orderNumber: this.state.orderNumber,
            dateTime: new Date(),
            cashier: this.state.cashierName,
            items: [...this.state.order],
            subtotal, modTotal, discount, serviceCharge, vat, total,
            paymentType, paymentName: payNames[paymentType] || 'ДРУГОЕ',
            splitPayments: splitPayments || null,
            received: receivedAmount, change: change > 0 ? change : 0,
            fiscalSign: fiscalResult.fiscalSign || '—',
            terminalId: fiscalResult.terminalId || this.state.vcrTerminalId || (typeof FiscalAPI !== 'undefined' ? FiscalAPI.config.vcrTerminalId : '') || '—',
            receiptSeq: fiscalResult.receiptSeq || null,
            licenseId: fiscalResult.licenseId || null,
            qrCodeUrl: fiscalResult.qrCodeUrl || '',
            offline: fiscalResult.offline || false,
            fiscalQueueId: null,
            tin: this.state.tin, guestCount: this.state.guestCount,
            globalNote: this.state.globalNote,
            orderType: this.state.orderType,
        };

        let fiscalQueueId = null;
        if (typeof FiscalQueue !== 'undefined' && this.state.vcrEnabled !== false) {
            if (fiscalResult.offline || !fiscalResult.success) {
                fiscalQueueId = FiscalQueue.enqueue(receiptPayload, {
                    orderNumber: this.state.orderNumber,
                    cashier: this.state.cashierName,
                    total: total,
                    receiptData: {
                        items: receiptData.items,
                        subtotal: receiptData.subtotal,
                        modTotal: receiptData.modTotal,
                        discount: receiptData.discount,
                        serviceCharge: receiptData.serviceCharge,
                        vat: receiptData.vat,
                        paymentType: receiptData.paymentType,
                        paymentName: receiptData.paymentName,
                        splitPayments: receiptData.splitPayments,
                        received: receiptData.received,
                        change: receiptData.change,
                        tin: receiptData.tin,
                        guestCount: receiptData.guestCount,
                        globalNote: receiptData.globalNote,
                        orderType: receiptData.orderType,
                    }
                });
                receiptData.fiscalQueueId = fiscalQueueId;
            }
        }

        const orderRecord = {
            id: 'ORD-' + Date.now() + '-' + this.state.orderNumber,
            orderNumber: this.state.orderNumber,
            timestamp: new Date().toISOString(),
            total, paymentType: paymentType === 'split' ? 'split' : (paymentType === 1 ? 'cash' : (paymentType === 2 ? 'card' : 'mobile')),
            splitPayments,
            items: this.state.order.map(o => ({ ...o, modifiers: o.modifiers ? [...o.modifiers] : [] })),
            cashier: this.state.cashierName,
            guestCount: this.state.guestCount,
            discount,
            refunded: false,
            refundAmount: 0
        };

        this.state.orderHistory.push({
            id: orderRecord.id,
            orderNumber: orderRecord.orderNumber,
            date: orderRecord.timestamp,
            total, paymentType, splitPayments,
            items: orderRecord.items,
            cashier: orderRecord.cashier,
            guestCount: orderRecord.guestCount,
            refunded: false,
            refundAmount: 0
        });

        // Backend Sync Emulation
        if (typeof DB !== 'undefined') {
            await DB.put('orders', orderRecord);
            if (typeof Warehouse !== 'undefined') {
                await Warehouse.deductStockForOrder(orderRecord.items);
            }
        }
        this._deductMenuStock(orderRecord.items);

        if (this.state.selectedTable) {
            const table = this.tables.find(t => t.id === this.state.selectedTable);
            if (table) table.status = 'free';
        }
        this.state.selectedTable = null;

        this.state.order = [];
        this.state.discountPercent = 0;
        this.state.serviceChargePercent = 0;
        this.state.guestCount = 1;
        this.state.globalNote = '';
        this.state.kitchenSent = false;
        this.state._splitData = null;
        this.state.orderNumber++;
        this.saveState();
        this.renderOrder();
        this.showReceiptModal(receiptData);
        this.showToast(__('payment.accepted'), 'success');
    },

    _deductMenuStock(orderItems) {
        let changed = false;
        for (const oi of orderItems) {
            const baseId = parseInt(String(oi.id).split('-')[0]);
            const menuItem = this.menu.find(m => m.id === baseId);
            if (menuItem && typeof menuItem.stock === 'number') {
                menuItem.stock = Math.max(0, menuItem.stock - oi.quantity);
                changed = true;
            }
        }
        if (changed) this._saveMenuData();
    },

    /* ======================== RECEIPT ======================== */
    _receiptItemBlock(item) {
        const modT = this._getItemModifierTotal(item);
        const lt = (item.price * item.quantity) + modT;
        const lv = Math.round(lt * 12 / 112);
        const mxik = item.mxikCode || '09901001001000000';
        const markingLine = item.markingCode ? '<div class="r-line"><span class="r-grey-text">ShT kod:</span><span class="r-grey-text" style="font-size:9px;font-family:monospace;">' + item.markingCode + '</span></div>' : '';
        const mods = item.modifiers && item.modifiers.length > 0
            ? '<div class="r-item-detail">+' + item.modifiers.map(function(m) { return m.name + (m.price > 0 ? ' (' + m.price.toLocaleString() + ' сум)' : ''); }).join(', ') + '</div>' : '';
        const note = item.note ? '<div class="r-item-detail" style="font-style:italic;">' + this.icn('edit-3', '10px') + ' ' + item.note + '</div>' : '';
        return '<div class="r-item-block">'
            + '<div class="r-line"><span class="r-bold">' + item.name + '</span><span class="r-bold">' + item.quantity + ' x ' + item.price.toLocaleString() + ' сум</span></div>'
            + mods + note
            + '<div class="r-line"><span class="r-grey-text">sh.j. QQS 12%</span><span class="r-grey-text">' + lv.toLocaleString() + ' сум</span></div>'
            + '<div class="r-line"><span class="r-grey-text">MXIK:</span><span class="r-grey-text">' + mxik + '</span></div>'
            + markingLine
            + '</div>';
    },

    showReceiptModal(data) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const dt = data.dateTime;
        const dateStr = dt.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = dt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const co = this.state.receiptCompany || 'Soliq servis';
        const ad = this.state.receiptAddress || 'Muqimiy Ko\'chasi, 166.';
        const phone = this.state.receiptPhone || '+998 90 123 45 67';
        const footer = this.state.receiptFooter || 'Спасибо! Ждём вас снова.';
        const inn = data.tin || this.state.tin || '200200200';
        const logo = this.state.receiptLogo || 'assets/img/217844580_108833764807015_1720829239842915183_n.png';
        const logoHTML = '<img src="' + logo + '" style="max-width: 60px; max-height: 60px; border-radius: 50%; margin: 0 auto 6px; display: block; border: 1px solid #ddd;"/>';

        const offlineBanner = data.offline
            ? '<div style="text-align:center;padding:8px;background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;margin-bottom:8px;border-radius:4px;">' + this.icn('alert-triangle', '14px') + ' OFFLINE — FISKALLASHTIRILMAGAN</div>'
            : '';

        // Items
        const itemsHTML = data.items.map(function(item) {
            return POS._receiptItemBlock(item);
        }).join('');

        // Payment split
        let splitStr = '';
        if (data.splitPayments) {
            splitStr = data.splitPayments.map(function(p) {
                const pName = p.type === 1 ? 'Naqd' : (p.type === 2 ? 'Karta' : 'Payme/Click');
                return '<div class="r-line"><span>' + pName + '</span><span>' + p.amount.toLocaleString() + ' sum</span></div>';
            }).join('');
        } else {
            const pName = data.paymentType === 1 ? 'Naqd' : (data.paymentType === 2 ? 'Karta' : 'Payme/Click');
            splitStr = '<div class="r-line"><span>' + pName + '</span><span>' + (data.received || data.total).toLocaleString() + ' sum</span></div>';
        }

        const change = data.change || 0;
        const discountSum = data.discount || 0;
        const serviceSum = data.serviceCharge || 0;

        // QR code
        const qrUrl = data.qrCodeUrl || 'https://ofd.soliq.uz/check?t=' + (data.terminalId || '') + '&f=' + (data.fiscalSign || '');
        const qrSection = '<div style="text-align:center;margin:12px 0 6px;"><img src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=' + encodeURIComponent(qrUrl) + '" style="width:110px;height:110px;display:block;margin:0 auto;"/></div>';

        modal.innerHTML = '<div class="modal modal-receipt">'
            + '<div class="modal-header"><div class="modal-title">' + this.icn('file-text', '18px') + ' Chek #' + data.orderNumber + '</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">' + this.icon('x', '18px') + '</span></button></div>'
            + '<div class="modal-body" style="padding:0;">'
            + '<div class="receipt-paper" id="receipt-paper" style="border:none;box-shadow:none;max-width:320px;margin:20px auto;">'
            + offlineBanner
            + '<div style="text-align:center;margin-bottom:6px;">' + logoHTML + '</div>'
            + '<div class="r-header">'
            + '<div class="r-header-name" style="font-size:14px;font-weight:700;text-transform:uppercase;color:#000;margin-bottom:2px;">' + co + '</div>'
            + '<div style="font-size:10px;">' + ad + '</div>'
            + '<div style="font-size:10px;color:#555;">' + phone + '</div>'
            + '</div>'
            + '<div class="r-dashed"></div>'
            + '<div class="r-line"><span class="r-bold">STIR</span><span class="r-bold">' + inn + '</span></div>'
            + '<div class="r-line"><span>' + dateStr + '</span><span>' + timeStr + '</span></div>'
            + '<div class="r-line"><span class="r-bold">Chek raqami</span><span class="r-bold">#' + (data.receiptSeq || data.orderNumber) + '</span></div>'
            + '<div class="r-line"><span class="r-bold">Zakaz</span><span class="r-bold">#' + data.orderNumber + '</span></div>'
            + '<div class="r-line"><span class="r-bold">Kassir</span><span class="r-bold">' + data.cashier + '</span></div>'
            + '<div class="r-line"><span>Smena:</span><span>002</span></div>'
            + (data.orderType === 'takeaway' ? '<div class="r-line"><span>Buyurtma turi</span><span>Olib ketish</span></div>' : data.orderType === 'delivery' ? '<div class="r-line"><span>Buyurtma turi</span><span>Yetkazib berish</span></div>' : '')
            + '<div class="r-solid"></div>'
            + itemsHTML
            + '<div class="r-solid"></div>'
            + '<div class="r-line"><span class="r-bold">JAMI</span><span class="r-bold">' + data.total.toLocaleString() + ' sum</span></div>'
            + '<div class="r-line"><span>sh. j. jami QQS 12%</span><span>' + data.vat.toLocaleString() + '</span></div>'
            + '<div class="r-solid"></div>'
            + '<div class="r-line"><span class="r-bold">Tolov shakli</span><span class="r-bold">' + data.total.toLocaleString() + ' sum</span></div>'
            + splitStr
            + (discountSum > 0 ? '<div class="r-line"><span>Chegirma</span><span>-' + discountSum.toLocaleString() + ' sum</span></div>' : '<div class="r-line"><span>Chegirma</span><span>0 sum</span></div>')
            + (change > 0 ? '<div class="r-line"><span>Qaytim</span><span>' + change.toLocaleString() + ' sum</span></div>' : '<div class="r-line"><span>Qaytim</span><span>0 sum</span></div>')
            + '<div class="r-solid"></div>'
            + '<div class="r-line"><span>Chek turi</span><span class="r-type-option active" style="color:#111;font-weight:700;">Xarid</span></div>'
            + '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">'
            + '<span class="r-type-option" style="font-size:9.5px;color:#444;font-weight:600;">Qaytarish</span>'
            + '<span class="r-type-option" style="font-size:9.5px;color:#d97706;font-weight:600;">Kredit</span>'
            + '<span class="r-type-option" style="font-size:9.5px;color:#dc2626;font-weight:600;">Bonaq (avans)</span>'
            + '</div>'
            + '<div class="r-solid"></div>'
            + '<div style="font-size:10px;margin:4px 0;">'
            + '<div class="r-bold" style="margin-bottom:4px;">Fiskal malumot</div>'
            + '<div style="margin:1px 0;"><span style="color:#555;">Terminal ID:</span><br><span style="font-weight:700;font-size:11px;word-break:break-all;">' + (data.terminalId || '—') + '</span></div>'
            + (data.licenseId ? '<div style="margin:1px 0;"><span style="color:#555;">Litsenziya ID:</span><br><span style="font-weight:700;font-size:11px;word-break:break-all;">' + data.licenseId + '</span></div>' : '')
            + '<div style="margin:1px 0;"><span style="color:#555;">Fiskal belgi:</span><br><span style="font-weight:700;font-size:11px;word-break:break-all;">' + data.fiscalSign + '</span></div>'
            + '</div>'
            + qrSection
            + '<div id="prev-footer" style="text-align:center;font-size:10px;font-weight:700;color:#333;margin-top:8px;">' + footer + '</div>'
            + '</div>'
            + '<div style="display:flex;gap:8px;padding:12px 20px;border-top:1px solid var(--border-subtle);">'
            + (data.offline
                ? '<button class="btn btn-secondary" style="opacity:0.4;cursor:not-allowed;flex:1;height:46px;font-size:14px;" disabled>' + this.icn('printer', '16px') + ' Pechat</button>'
                  + '<button class="btn btn-primary" style="height:46px;width:46px;display:flex;align-items:center;justify-content:center;flex-shrink:0;" onclick="POS.retryOfflineReceipt(this,\'' + (data.fiscalQueueId || '') + '\')" title="Проверить соединение и фискализировать">' + this.icn('refresh-cw', '20px') + '</button>'
                : '<button class="btn btn-primary" style="flex:1;" onclick="POS.printReceipt()">' + this.icn('printer', '14px') + ' Pechat</button>'
                  + '<button class="btn btn-secondary" style="flex:1;" onclick="POS.closeModal()">' + __('action.close') + '</button>')
            + '</div>'
            + '</div>'
            + '</div>';
        overlay.classList.add('active');
    },

    printReceipt() {
        if (typeof FiscalAPI !== 'undefined' && FiscalAPI.config.vcrEnabled && this._lastVcrReceiptId) {
            this.showToast(__('receipt.printing'), 'info');
            FiscalAPI.printReceipt(this._lastVcrReceiptId).then(success => {
                if (success) {
                    this.showToast(__('receipt.print.success'), 'success');
                } else {
                    this.showToast(__('receipt.print.error'), 'warning');
                    this._printFallback();
                }
            }).catch(() => {
                this._printFallback();
            });
        } else {
            this._printFallback();
        }
    },

    _printFallback() {
        const paper = document.getElementById('receipt-paper');
        if (!paper) return;
        const win = window.open('', 'receipt', 'width=350,height=600,menubar=no,toolbar=no');
        if (!win) return;
        win.document.write(`
            <html>
            <head>
                <title>Печать чека</title>
                <style>
                    @page { size: 58mm 297mm; margin: 0; }
                    body { margin: 0; padding: 0; background: #fff; }
                    .receipt-paper {
                        background: #ffffff;
                        color: #111111;
                        font-family: 'Courier New', 'Consolas', monospace;
                        font-size: 11px;
                        line-height: 1.4;
                        padding: 24px 16px;
                        width: 48mm;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                    .receipt-paper .r-dashed { border-top: 1px dashed #444; margin: 8px 0; }
                    .receipt-paper .r-solid { border-top: 1px solid #111; margin: 8px 0; }
                    .receipt-paper .r-double { border-top: 3px double #111; margin: 8px 0; }
                    .receipt-paper .r-line { display: flex; justify-content: space-between; align-items: flex-start; margin: 3px 0; gap: 4px; }
                    .receipt-paper .r-line > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 1; min-width: 0; }
                    .receipt-paper .r-line > span:last-child { white-space: nowrap; flex-shrink: 0; }
                    .receipt-paper .r-bold { font-weight: 700; }
                    .receipt-paper .r-center { text-align: center; }
                    .receipt-paper .r-header { text-align: center; font-size: 10px; color: #444; }
                    .receipt-paper .r-header-name { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #000; margin-bottom: 2px; }
                    .receipt-paper .r-item-block { margin-bottom: 8px; }
                    .receipt-paper .r-item-detail { font-size: 10px; color: #555; padding-left: 8px; }
                    .receipt-paper .r-grey-text { color: #666; font-size: 9.5px; }
                    .receipt-paper .r-type-option { font-size: 9.5px; color: #aaa; display: inline-block; margin-right: 6px; }
                    .receipt-paper .r-type-option.active { color: #111; font-weight: 700; }
                </style>
            </head>
            <body>
                <div class="receipt-paper">
                    ${paper.innerHTML}
                </div>
                <script>
                    setTimeout(function() { window.print(); window.close(); }, 300);
                <\/script>
            </body>
            </html>
        `);
        win.document.close();
    },

    /* ======================== UNSENT CHECKS ======================== */
    async retryOfflineReceipt(btn, queueId) {
        if (!queueId || typeof FiscalQueue === 'undefined') {
            this.showToast(__('toast.fiscal.queue.not.found'), 'error');
            return;
        }
        if (btn && btn.classList) btn.classList.add('icon-spin');
        this.showToast(__('toast.fiscal.checking'), 'info');
        const status = await FiscalAPI.checkStatus().catch(() => ({ connected: false }));
        if (!status.connected) {
            if (btn && btn.classList) btn.classList.remove('icon-spin');
            this.showToast(__('fiscal.disconnected'), 'error');
            return;
        }
        this.showToast(__('toast.fiscal.sending'), 'info');
        const result = await FiscalQueue.retryItemById(queueId);
        if (btn && btn.classList) btn.classList.remove('icon-spin');
        if (result.success) {
            this.showToast(__('toast.fiscal.success'), 'success');
            this.closeModal();
            const item = FiscalQueue.queue.find(i => i.id === queueId);
            if (item && item.receipt) {
                const r = item.receipt;
                const res = result.result;
                const rd = item.meta.receiptData || {};
                this.showReceiptModal({
                    orderNumber: item.meta.orderNumber || r.receiptId,
                    dateTime: new Date(),
                    cashier: item.meta.cashier || r.cashier,
                    items: rd.items || [],
                    subtotal: rd.subtotal || 0,
                    modTotal: rd.modTotal || 0,
                    discount: rd.discount || 0,
                    serviceCharge: rd.serviceCharge || 0,
                    vat: rd.vat || 0,
                    total: item.meta.total || 0,
                    paymentType: rd.paymentType || 1,
                    paymentName: rd.paymentName || 'НАЛИЧНЫЕ',
                    splitPayments: rd.splitPayments || null,
                    received: rd.received || item.meta.total || 0,
                    change: rd.change || 0,
                    fiscalSign: res.fiscalSign || '—',
                    terminalId: res.terminalId || '—',
                    receiptSeq: res.receiptSeq || null,
                    licenseId: res.licenseId || null,
                    qrCodeUrl: res.qrCodeUrl || '',
                    offline: false,
                    tin: rd.tin || r.tin || '',
                    guestCount: rd.guestCount || 1,
                    globalNote: rd.globalNote || '',
                    orderType: rd.orderType || 'dinein',
                });
            }
            this.updateUnsentCount();
        } else {
            if (btn && btn.classList) btn.classList.remove('icon-spin');
            this.showToast(__('toast.fiscal.error') + ': ' + result.error, 'error');
        }
    },

    showUnsentChecks() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const items = typeof FiscalQueue !== 'undefined' ? FiscalQueue.getUnsentItems() : [];
        const hasItems = items.length > 0;

        const statusBadge = function(status) {
            return status === 'pending'
                ? '<span style="color:var(--amber);font-weight:600;">' + I18n.t('unsent.pending') + '</span>'
                : '<span style="color:var(--danger);font-weight:600;">' + I18n.t('unsent.failed') + '</span>';
        };

        modal.innerHTML = ''
            + '<div class="modal" style="max-width:600px;display:flex;flex-direction:column;">'
            + '<div class="modal-header"><div class="modal-title">' + this.icn('alert-triangle', '18px') + ' ' + I18n.t('unsent.title') + ' (' + items.length + ')</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">' + this.icon('x', '18px') + '</span></button></div>'
            + '<div class="modal-body" style="flex:1;">'
            + (hasItems
                ? items.map(function(item) {
                    const dt = new Date(item.createdAt);
                    const total = item.meta.total || 0;
                    const orderNum = item.meta.orderNumber || '—';
                    return '<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:10px 14px;margin-bottom:6px;">'
                        + '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">'
                        + '<div style="min-width:0;flex:1;">'
                        + '<div style="font-weight:700;font-size:13px;">' + I18n.t('order.title') + ' #' + orderNum + ' · ' + total.toLocaleString() + ' сум</div>'
                        + '<div style="font-size:12px;color:var(--text-muted);margin-top:2px;">' + dt.toLocaleString() + ' · ' + statusBadge(item.status) + '</div>'
                        + (item.lastError ? '<div style="font-size:11px;color:var(--danger);margin-top:2px;">' + item.lastError + '</div>' : '')
                        + '</div>'
                        + '<div style="display:flex;gap:4px;flex-shrink:0;flex-direction:column;">'
                        + '<button class="btn btn-sm btn-primary" onclick="POS.retryOfflineReceipt(null,\'' + item.id + '\')">' + POS.icn('printer', '14px') + ' Распечатать</button>'
                        + '<button class="btn btn-sm btn-danger" onclick="POS.removeUnsentItem(\'' + item.id + '\')">' + POS.icn('trash-2', '14px') + ' Удалить</button>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                }).join('')
                : '<div class="empty-state"><div class="empty-state-icon">' + this.icn('check', '32px') + '</div><div class="empty-state-title">' + I18n.t('unsent.empty') + '</div></div>')
            + '</div>'
            + '<div class="modal-footer">'
            + '<button class="btn btn-ghost" onclick="POS.closeModal()">' + __('action.close') + '</button>'
            + '</div>'
            + '</div>';
        overlay.classList.add('active');
    },

    async retryAllUnsent() {
        if (typeof FiscalQueue === 'undefined') return;
        const items = FiscalQueue.getUnsentItems();
        if (items.length === 0) return;
        this.showToast(__('toast.unsent.sending') + ' ' + items.length + '...', 'info');
        let sent = 0;
        for (const item of items) {
            const result = await FiscalQueue.retryItemById(item.id);
            if (result.success) sent++;
        }
        this.closeModal();
        this.showToast(__('toast.unsent.sent') + ': ' + sent + ' / ' + items.length, sent === items.length ? 'success' : 'warning');
        this.updateUnsentCount();
        if (sent > 0) this.showUnsentChecks();
    },

    removeUnsentItem(id) {
        if (typeof FiscalQueue === 'undefined') return;
        FiscalQueue.removeItem(id);
        this.updateUnsentCount();
        this.showUnsentChecks();
    },

    updateUnsentCount() {
        const el = document.getElementById('unsent-count');
        if (!el) return;
        const count = typeof FiscalQueue !== 'undefined' ? FiscalQueue.getUnsentCount() : 0;
        el.textContent = count;
    },

    /* ======================== KITCHEN ======================== */
    sendToKitchen() {
        if (this._isCashier()) { this.showToast(__('toast.add.order.cashier'), 'error'); return; }
        if (this.state.order.length === 0) {
            this.showToast(__('toast.kitchen.no.order'), 'warning');
            return;
        }

        const newItems = this.state.order.filter(i => {
            if (i.quantity <= (i.kitchenSentQty || 0)) return false;
            if (i.noKitchen) return false;
            const menuItem = this.menu.find(m => m.id === i.id);
            if (menuItem && menuItem.noKitchen) return false;
            return true;
        });
        if (newItems.length === 0) {
            this.showToast(__('toast.kitchen.no.order'), 'warning');
            return;
        }

        const kitchenPrinter = this.state.kitchenPrinter || this.state.selectedPrinter || __('settings.printer.system');
        const win = window.open('', 'kitchen', 'width=300,height=400,menubar=no,toolbar=no');
        if (win) {
        win.document.write(`<html><head><title>Кухня — Заказ #${this.state.orderNumber}</title>
                <style>@page{size:58mm 200mm;margin:0;}body{font-family:'Courier New',monospace;font-size:14px;padding:20px;width:48mm;margin:0 auto;}
                h2{text-align:center;border-bottom:2px dashed #000;padding-bottom:8px;margin-bottom:12px;}
                .meta{font-size:12px;color:#666;text-align:center;margin-bottom:12px;}
                .printer-name{font-size:10px;color:#999;text-align:center;margin-bottom:8px;}
                .item{display:flex;justify-content:space-between;align-items:flex-start;padding:4px 0;gap:4px;}
                .item-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0;}
                .item-qty{white-space:nowrap;flex-shrink:0;}
                .item-note,.item-mods{font-size:11px;color:#555;padding-left:8px;margin-bottom:2px;}
                .footer{text-align:center;border-top:2px dashed #000;padding-top:8px;margin-top:12px;font-size:12px;color:#666;}</style></head><body>
                <h2>КУХНЯ</h2>
                <div class="printer-name">${kitchenPrinter}</div>
                <div class="meta">Заказ #${this.state.orderNumber} | ${new Date().toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'})}
                <br>${this.state.selectedTable ? this.tables.find(t=>t.id===this.state.selectedTable)?.name || '' : this.state.orderType === 'takeaway' ? __('order.type.takeaway') : __('order.type.delivery')} | ${this.state.guestCount} ${__('order.meta.guests')}
                </div>
                ${newItems.map(i => `<div class="item"><span class="item-name">${i.name}</span><span class="item-qty">× ${i.quantity - (i.kitchenSentQty || 0)}</span></div>${i.note ? '<div class="item-note">' + i.note + '</div>' : ''}${i.modifiers && i.modifiers.length ? '<div class="item-mods">+' + i.modifiers.map(m=>m.name).join(', ') + '</div>' : ''}`).join('')}
                <div class="footer">${this.state.globalNote || ''}</div>
                <script>setTimeout(()=>window.print(),300);setTimeout(()=>window.close(),5000);</script>
                </body></html>`);
            win.document.close();
        }
        this.state.order.forEach(i => { i.kitchenSentQty = i.quantity; });
        if (this.state.selectedTable) {
            const table = this.tables.find(t => t.id === this.state.selectedTable);
            if (table) table.status = 'occupied';
        }
        this.state.kitchenSent = true;
        this.saveState();
        this.renderOrder();
        this.showToast(__('kitchen.sent'), 'success');
    },

    /* ======================== ISSUE BILL ======================== */
    issueBill() {
        if (this.state.order.length === 0) { this.showToast(__('toast.no.order') + ' ' + __('order.bill.btn'), 'warning'); return; }
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        const co = this.state.receiptCompany || 'Soliq servis';
        const ad = this.state.receiptAddress || 'Muqimiy Ko\'chasi, 166.';
        const phone = this.state.receiptPhone || '+998 90 123 45 67';
        const footer = this.state.receiptFooter || 'Спасибо! Ждём вас снова.';
        const inn = this.state.tin || '200200200';
        const logo = this.state.receiptLogo || 'assets/img/217844580_108833764807015_1720829239842915183_n.png';
        const logoHTML = '<img src="' + logo + '" style="max-width: 60px; max-height: 60px; border-radius: 50%; margin: 0 auto 6px; display: block; border: 1px solid #ddd;"/>';

        const subtotal = this.getSubtotal();
        const modTotal = this.getModifierTotal();
        const discount = this.getDiscount();
        const serviceCharge = this.getServiceCharge();
        const vat = this.getVAT();
        const total = this.getTotal();

        const dt = new Date();
        const dateStr = dt.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = dt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const tableName = this.state.selectedTable
            ? (this.tables.find(t => t.id === this.state.selectedTable)?.name || '—')
            : (this.state.orderType === 'takeaway' ? 'Olib ketish' : this.state.orderType === 'delivery' ? 'Yetkazib berish' : 'Zalda');

        const itemsHTML = this.state.order.map(function(item) {
            return POS._receiptItemBlock(item);
        }).join('');

        modal.innerHTML = '<div class="modal modal-receipt">'
            + '<div class="modal-header"><div class="modal-title">' + this.icn('file-text', '18px') + ' Счет #' + this.state.orderNumber + '</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">' + this.icon('x', '18px') + '</span></button></div>'
            + '<div class="modal-body" style="padding:0;">'
            + '<div class="receipt-paper" id="receipt-paper" style="border:none;box-shadow:none;max-width:320px;margin:20px auto;">'
            + '<div style="text-align:center;margin-bottom:6px;">' + logoHTML + '</div>'
            + '<div class="r-header">'
            + '<div class="r-header-name" style="font-size:14px;font-weight:700;text-transform:uppercase;color:#000;margin-bottom:2px;">' + co + '</div>'
            + '<div style="font-size:10px;">' + ad + '</div>'
            + '<div style="font-size:10px;color:#555;">' + phone + '</div>'
            + '</div>'
            + '<div class="r-dashed"></div>'
            + '<div class="r-line"><span class="r-bold">STIR</span><span class="r-bold">' + inn + '</span></div>'
            + '<div class="r-line"><span>' + dateStr + '</span><span>' + timeStr + '</span></div>'
            + '<div class="r-line"><span class="r-bold">Zakaz</span><span class="r-bold">#' + this.state.orderNumber + '</span></div>'
            + '<div class="r-line"><span>' + (this.state.selectedTable ? 'Stol' : 'Buyurtma turi') + '</span><span>' + tableName + '</span></div>'
            + '<div class="r-line"><span>Mijozlar</span><span>' + this.state.guestCount + '</span></div>'
            + '<div class="r-line"><span>Kassir</span><span>' + this.state.cashierName + '</span></div>'
            + '<div class="r-solid"></div>'
            + itemsHTML
            + '<div class="r-solid"></div>'
            + '<div class="r-line"><span class="r-bold">JAMI</span><span class="r-bold">' + total.toLocaleString() + ' sum</span></div>'
            + '<div class="r-line"><span>sh. j. jami QQS 12%</span><span>' + vat.toLocaleString() + '</span></div>'
            + '<div class="r-solid"></div>'
            + (discount > 0 ? '<div class="r-line"><span>Chegirma</span><span>-' + discount.toLocaleString() + ' sum</span></div>' : '')
            + (serviceCharge > 0 ? '<div class="r-line"><span>Servis</span><span>' + serviceCharge.toLocaleString() + ' sum</span></div>' : '')
            + '<div id="prev-footer" style="text-align:center;font-size:10px;font-weight:700;color:#333;margin-top:8px;">' + footer + '</div>'
            + '</div>'
            + '<div style="display:flex;gap:8px;padding:12px 20px;border-top:1px solid var(--border-subtle);">'
            + '<button class="btn btn-primary" style="flex:1;" onclick="POS._printBillFallback()">' + this.icn('printer', '14px') + ' Pechat</button>'
            + '<button class="btn btn-secondary" style="flex:1;" onclick="POS.closeModal()">' + __('action.close') + '</button>'
            + '</div>'
            + '</div>'
            + '</div>';
        overlay.classList.add('active');
    },

    _printBillFallback() {
        const paper = document.getElementById('receipt-paper');
        if (!paper) return;
        const win = window.open('', 'bill', 'width=350,height=600,menubar=no,toolbar=no');
        if (!win) return;
        win.document.write(`
            <html>
            <head>
                <title>Печать счета</title>
                <style>
                    @page { size: 58mm 297mm; margin: 0; }
                    body { margin: 0; padding: 0; background: #fff; }
                    .receipt-paper {
                        background: #ffffff;
                        color: #111111;
                        font-family: 'Courier New', 'Consolas', monospace;
                        font-size: 11px;
                        line-height: 1.4;
                        padding: 24px 16px;
                        width: 48mm;
                        margin: 0 auto;
                        box-sizing: border-box;
                    }
                    .receipt-paper .r-dashed { border-top: 1px dashed #444; margin: 8px 0; }
                    .receipt-paper .r-solid { border-top: 1px solid #111; margin: 8px 0; }
                    .receipt-paper .r-double { border-top: 3px double #111; margin: 8px 0; }
                    .receipt-paper .r-line { display: flex; justify-content: space-between; align-items: flex-start; margin: 3px 0; gap: 4px; }
                    .receipt-paper .r-line > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 1; min-width: 0; }
                    .receipt-paper .r-line > span:last-child { white-space: nowrap; flex-shrink: 0; }
                    .receipt-paper .r-bold { font-weight: 700; }
                    .receipt-paper .r-center { text-align: center; }
                    .receipt-paper .r-header { text-align: center; font-size: 10px; color: #444; }
                    .receipt-paper .r-header-name { font-size: 14px; font-weight: 700; text-transform: uppercase; color: #000; margin-bottom: 2px; }
                    .receipt-paper .r-item-block { margin-bottom: 8px; }
                    .receipt-paper .r-item-detail { font-size: 10px; color: #555; padding-left: 8px; }
                    .receipt-paper .r-grey-text { color: #666; font-size: 9.5px; }
                </style>
            </head>
            <body>
                <div class="receipt-paper">
                    ${paper.innerHTML}
                </div>
                <script>
                    setTimeout(function() { window.print(); }, 300);
                <\/script>
            </body>
            </html>
        `);
        win.document.close();
    },

    /* ======================== HISTORY & SALES ======================== */
    showOrderHistory(page = 1) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        if (!this.state._historyPage) this.state._historyPage = 1;
        if (!this.state._historyType) this.state._historyType = 'all';
        this.state._historyPage = page;

        // Build combined items
        const listItems = [];
        // Sales
        this.state.orderHistory.forEach(o => {
            const cash = o.paymentType === 1 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 1)?.amount || 0) : 0);
            const card = o.paymentType === 2 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 2)?.amount || 0) : 0);
            const mobile = o.paymentType === 5 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 5)?.amount || 0) : 0);
            
            let chekTuri = 'Заказ';
            if (o.items && o.items.length === 1) {
                chekTuri = o.items[0].name;
            }

            listItems.push({
                id: o.id,
                orderNumber: o.orderNumber,
                displayId: String(o.orderNumber),
                type: 'Заказ',
                chekTuri: chekTuri,
                date: new Date(o.date),
                total: o.total,
                cash: cash,
                card: card,
                mobile: mobile,
                raw: o
            });
        });

        // Refunds
        const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
        refunds.forEach(r => {
            const cash = r.paymentType === 1 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 1)?.amount || 0) : 0);
            const card = r.paymentType === 2 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 2)?.amount || 0) : 0);
            const mobile = r.paymentType === 5 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 5)?.amount || 0) : 0);

            let chekTuri = __('action.return');
            if (r.items && r.items.length === 1) {
                chekTuri = r.items[0].name;
            }

            const refundNum = r.refundNumber || (r.orderNumber + 3);
            listItems.push({
                id: r.id,
                orderNumber: r.orderNumber,
                displayId: `<span style="display:inline-flex; align-items:center; gap:4px;">${r.orderNumber} <svg style="width:12px; height:12px; color:var(--primary);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 17H3m0 0l4-4m-4 4l4 4M7 7h14m0 0l-4-4m4 4l-4 4"/></svg> ${refundNum}</span>`,
                type: __('action.return'),
                chekTuri: chekTuri,
                date: new Date(r.createdAt),
                total: -r.amount,
                cash: cash,
                card: card,
                mobile: mobile,
                raw: r,
                isRefund: true
            });
        });

        // Sort newest first
        listItems.sort((a, b) => b.date - a.date);

        // Apply filters
        let filtered = listItems;
        if (this.state._historyType !== 'all') {
            filtered = filtered.filter(item => item.type === this.state._historyType);
        }
        if (this.state._historyStart) {
            const start = new Date(this.state._historyStart);
            start.setHours(0,0,0,0);
            filtered = filtered.filter(item => item.date >= start);
        }
        if (this.state._historyEnd) {
            const end = new Date(this.state._historyEnd);
            end.setHours(23,59,59,999);
            filtered = filtered.filter(item => item.date <= end);
        }

        // Pagination
        const itemsPerPage = 10;
        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
        const currentPage = Math.min(this.state._historyPage, totalPages);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const pageItems = filtered.slice(startIndex, startIndex + itemsPerPage);

        const fmtNum = (val) => {
            const formatted = Math.abs(val).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return val < 0 ? `-${formatted}` : formatted;
        };

        const rowsHTML = pageItems.map(item => {
            return `
                <tr>
                    <td class="order-num" style="font-weight:700;">${item.displayId}</td>
                    <td style="font-weight:600;">${item.chekTuri}</td>
                    <td style="font-size:12px;color:var(--text-muted);">${item.date.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false })}</td>
                    <td class="order-total" style="font-weight:700; color:${item.total < 0 ? 'var(--danger)' : 'var(--text-primary)'};">${fmtNum(item.total)}</td>
                    <td style="font-weight:600; color:${item.cash < 0 ? 'var(--danger)' : 'var(--text-primary)'};">${fmtNum(item.cash)}</td>
                    <td style="font-weight:600; color:${item.card < 0 ? 'var(--danger)' : 'var(--text-primary)'};">${fmtNum(item.card)}</td>
                    <td style="font-weight:600; color:${item.mobile < 0 ? 'var(--danger)' : 'var(--text-primary)'};">${fmtNum(item.mobile)}</td>
                    <td>
                        <button class="hist-btn-details" onclick="POS.showOrderDetails(${item.orderNumber}, ${item.isRefund ? 'true' : 'false'})">${__('ui.details')}</button>
                    </td>
                </tr>`;
        }).join('');

        // Pagination buttons
        let pagButtonsHTML = '';
        if (totalPages > 1) {
            pagButtonsHTML += `<button class="hist-page-btn" onclick="POS.showOrderHistory(${Math.max(1, currentPage - 1)})">&lt;</button>`;
            for (let i = 1; i <= totalPages; i++) {
                if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                    pagButtonsHTML += `<button class="hist-page-btn ${i === currentPage ? 'active' : ''}" onclick="POS.showOrderHistory(${i})">${i}</button>`;
                } else if (i === currentPage - 3 || i === currentPage + 3) {
                    pagButtonsHTML += `<span style="color:var(--text-muted);">...</span>`;
                }
            }
            pagButtonsHTML += `<button class="hist-page-btn" onclick="POS.showOrderHistory(${Math.min(totalPages, currentPage + 1)})">&gt;</button>`;
        }

        modal.innerHTML = `
            <div class="modal modal-full">
                <div class="modal-header">
                    <div class="modal-title">${this.icn('file-text', '18px')} ${__('history.title')}</div>
                    <button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button>
                </div>
                <div class="modal-body" style="padding: 12px 20px; overflow:auto !important;">
                    <!-- Filters Bar -->
                    <div class="hist-filters-bar" style="margin-bottom:10px;">
                        <select class="hist-filter-select" id="hist-type-select" onchange="POS._changeHistoryType(this.value)">
                            <option value="all" ${this.state._historyType === 'all' ? 'selected' : ''}>${__('history.filter.all')}</option>
                            <option value="Заказ" ${this.state._historyType === 'Заказ' ? 'selected' : ''}>${__('history.filter.sales')}</option>
                            <option value="Возврат" ${this.state._historyType === __('action.return') ? 'selected' : ''}>${__('history.filter.refunds')}</option>
                        </select>
                        
                        <div style="display:flex; align-items:center; gap:8px;">
                            <input type="date" class="hist-date-picker" id="hist-start-date" value="${this.state._historyStart || ''}" onchange="POS._changeHistoryDate('start', this.value)">
                            <span style="color:var(--text-muted); font-size:12px;">-</span>
                            <input type="date" class="hist-date-picker" id="hist-end-date" value="${this.state._historyEnd || ''}" onchange="POS._changeHistoryDate('end', this.value)">
                        </div>
                        
                        <button class="hist-export-btn" onclick="POS._exportHistoryToExcel()">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                            ${__('history.export')}
                        </button>
                    </div>

                    <!-- Table -->
                    <div style="overflow-x:auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); background:var(--bg-card);">
                        <table class="hist-table">
                            <thead>
                                <tr>
                                    <th>${__('history.th.invoice')}</th>
                                    <th>${__('history.th.type')}</th>
                                    <th>${__('history.th.datetime')}</th>
                                    <th>${__('history.th.amount')}</th>
                                    <th>${__('history.th.cash')}</th>
                                    <th>${__('history.th.terminal')}</th>
                                    <th>${__('history.th.clickpayme')}</th>
                                    <th>${__('history.th.action')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rowsHTML || '<tr><td colspan="8" style="text-align:center; padding: 40px; color: var(--text-muted);">' + __('history.not.found') + '</td></tr>'}
                            </tbody>
                        </table>
                    </div>

                    <!-- Pagination -->
                    <div class="hist-pagination" style="flex-shrink:0;">
                        ${pagButtonsHTML}
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    _changeHistoryType(val) {
        this.state._historyType = val;
        this.showOrderHistory(1);
    },

    _changeHistoryDate(type, val) {
        if (type === 'start') this.state._historyStart = val;
        if (type === 'end') this.state._historyEnd = val;
        this.showOrderHistory(1);
    },

    _exportHistoryToExcel() {
        const listItems = [];
        
        // Sales
        this.state.orderHistory.forEach(o => {
            const cash = o.paymentType === 1 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 1)?.amount || 0) : 0);
            const card = o.paymentType === 2 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 2)?.amount || 0) : 0);
            const mobile = o.paymentType === 5 ? o.total : (o.splitPayments ? (o.splitPayments.find(p => p.type === 5)?.amount || 0) : 0);
            let chekTuri = o.items && o.items.length === 1 ? o.items[0].name : 'Заказ';
            listItems.push({
                displayId: String(o.orderNumber),
                chekTuri,
                date: new Date(o.date).toLocaleString('ru-RU'),
                total: o.total,
                cash,
                card,
                mobile,
                isRefund: false
            });
        });

        // Refunds
        const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
        refunds.forEach(r => {
            const cash = r.paymentType === 1 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 1)?.amount || 0) : 0);
            const card = r.paymentType === 2 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 2)?.amount || 0) : 0);
            const mobile = r.paymentType === 5 ? -r.amount : (r.splitPayments ? -(r.splitPayments.find(p => p.type === 5)?.amount || 0) : 0);
            let chekTuri = r.items && r.items.length === 1 ? r.items[0].name : __('action.return');
            const refundNum = r.refundNumber || (r.orderNumber + 3);
            listItems.push({
                displayId: `${r.orderNumber} ⇆ ${refundNum}`,
                chekTuri,
                date: new Date(r.createdAt).toLocaleString('ru-RU'),
                total: -r.amount,
                cash,
                card,
                mobile,
                isRefund: true
            });
        });

        // Sort newest first
        listItems.sort((a, b) => new Date(b.date) - new Date(a.date));

        let xlsHTML = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; }
                    th { background-color: #6b21a8; color: white; font-weight: bold; border: 1px solid #ddd; padding: 8px; text-align: left; }
                    td { border: 1px solid #ddd; padding: 8px; }
                    .refund-row { color: #dc2626; font-weight: bold; }
                </style>
            </head>
            <body>
                <h2>${__('history.export.title')}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>${__('history.export.th.invoice')}</th>
                            <th>${__('history.export.th.type')}</th>
                            <th>${__('history.export.th.datetime')}</th>
                            <th>${__('history.export.th.amount')}</th>
                            <th>${__('history.export.th.cash')}</th>
                            <th>${__('history.export.th.terminal')}</th>
                            <th>${__('history.export.th.clickpayme')}</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        listItems.forEach(item => {
            xlsHTML += `
                <tr class="${item.isRefund ? 'refund-row' : ''}">
                    <td>'${item.displayId}</td>
                    <td>${item.chekTuri}</td>
                    <td>${item.date}</td>
                    <td>${item.total}</td>
                    <td>${item.cash}</td>
                    <td>${item.card}</td>
                    <td>${item.mobile}</td>
                </tr>
            `;
        });

        xlsHTML += `
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const blob = new Blob([xlsHTML], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Chek_tarixi_${Date.now()}.xls`;
        link.click();
        this.showToast('Excel yuklab olindi', 'success');
    },

    showOrderDetails(orderNumber, isRefund = false) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        let order;
        if (isRefund) {
            const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
            order = refunds.find(r => r.orderNumber === orderNumber);
        } else {
            order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        }

        if (!order) {
            this.showToast(__('toast.order.not.found'), 'error');
            return;
        }

        const orderDate = order.date || order.createdAt || order.timestamp;
        const dateObj = new Date(typeof orderDate === 'string' ? orderDate.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1') : orderDate);
        const dateStr = dateObj.toLocaleDateString('ru-RU');
        const timeStr = dateObj.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

        const fmtNum = (val) => Number(val).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        // Items HTML
        let itemsHTML = '';
        const items = order.items || [];
        const hasBarcode = items.some(item => item.barcode);
        items.forEach((item, idx) => {
            const price = item.price || 0;
            const qty = item.quantity || 1;
            const total = price * qty;
            const vat = Math.round(total * 12 / 112 * 100) / 100;
            const mxik = item.mxikCode || '06111001046005004';
            const discount = item.discountSum || 0;

            itemsHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    ${hasBarcode ? `<td style="font-family:monospace; font-size:12px;">${item.barcode || ''}</td>` : ''}
                    <td style="font-family:monospace; font-size:12px;">${mxik}</td>
                    <td style="font-weight:600;">${item.name}</td>
                    <td>${fmtNum(price)}</td>
                    <td style="font-weight:600;">${qty}</td>
                    <td>${fmtNum(vat)}</td>
                    <td>${fmtNum(discount)}</td>
                    <td style="font-weight:700;">${fmtNum(total)}</td>
                </tr>`;
        });

        const subtotal = order.total || order.amount || 0;
        const totalVat = Math.round(subtotal * 12 / 112 * 100) / 100;
        const discountTotal = order.discount || 0;
        const refundedAmount = order.refundAmount || 0;
        const paymentTotal = subtotal;

        const isReturnPossible = !isRefund && !order.refunded;
        const returnBtnHTML = isReturnPossible
            ? `<button class="details-action-btn btn-return" onclick="POS._openRefundModal(${orderNumber})">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
                <span>${__('history.details.refund')}</span>
               </button>`
            : '';

        const refundNum = isRefund ? (order.refundNumber || (order.orderNumber + 3)) : order.orderNumber;

        modal.innerHTML = `
            <div class="modal modal-full">
                <div class="modal-header">
                    <div class="modal-title">${this.icn('file-text', '18px')} ${__('history.details.title')}</div>
                    <button class="modal-close" onclick="POS.showOrderHistory()"><span class="icon">${this.icon('chevron-left', '18px')}</span></button>
                </div>
                <div class="modal-body" style="padding: 24px;">
                    <div class="details-panel">
                        <!-- Top actions -->
                        <div class="details-header">
                            <div>
                                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">${__('history.details.cashier')} <span style="color:var(--primary);">${order.cashier || this.state.cashierName}</span></div>
                            </div>
                            <div style="font-size: 16px; font-weight: 800; color: var(--text-primary);">
                                ${isRefund ? __('history.details.refund') : __('history.details.order')} № ${isRefund ? refundNum : orderNumber}
                            </div>
                            <div class="details-action-buttons">
                                ${returnBtnHTML}
                                <button class="details-action-btn" onclick="POS._printDetailsReceipt(${orderNumber}, ${isRefund})">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
                                    <span>${__('history.details.print')}</span>
                                </button>
                                <button class="details-action-btn" onclick="POS._exportDetailsExcel(${orderNumber}, ${isRefund})">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>
                                    <span>${__('history.details.excel')}</span>
                                </button>
                                <button class="details-action-btn" onclick="POS._exportDetailsPDF(${orderNumber}, ${isRefund})">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                                    <span>${__('history.details.pdf')}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Items Table -->
                        <div style="flex:1; overflow-y:auto; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); background:var(--bg-card); margin-top:10px;">
                            <table class="hist-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        ${hasBarcode ? `<th>${__('history.details.barcode')}</th>` : ''}
                                        <th>${__('history.details.mxik')}</th>
                                        <th>${__('history.details.item.name')}</th>
                                        <th>${__('history.details.price')}</th>
                                        <th>${__('history.details.qty')}</th>
                                        <th>${__('history.details.vat')}</th>
                                        <th>${__('history.details.discount')}</th>
                                        <th>${__('history.details.total')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${itemsHTML}
                                </tbody>
                            </table>
                        </div>

                        <!-- Meta block bottom -->
                        <div class="details-meta-block">
                            <div class="details-meta-col">
                                <div class="details-meta-line"><span>${__('history.details.date')}</span><strong>${dateStr}</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.time')}</span><strong>${timeStr}</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.check.num')}</span><strong>${isRefund ? refundNum : orderNumber}</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.type')}</span><strong>${isRefund ? __('history.details.refund') : __('history.details.order')}</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.fiscal.num')}</span><strong>${order.terminalId && order.terminalId !== '—' ? order.terminalId : (this.state.vcrTerminalId || FiscalAPI?.config?.vcrTerminalId || '—')}</strong></div>
                            </div>
                            <div class="details-meta-col" style="border-left: 1px solid var(--border-subtle); padding-left: 40px;">
                                <div class="details-meta-line"><span>${__('history.details.discount.amount')}</span><strong>${fmtNum(discountTotal)} сум</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.vat.amount')}</span><strong>${fmtNum(totalVat)} сум</strong></div>
                                <div class="details-meta-line"><span>${__('history.details.refund.amount')}</span><strong>${fmtNum(refundedAmount)} сум</strong></div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; border-top:1px solid var(--border-subtle); padding-top:16px;">
                                    <span class="details-total-label">${__('history.details.payment.total')}</span>
                                    <span class="details-total-value">${fmtNum(paymentTotal)} сум</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    },

    _printDetailsReceipt(orderNumber, isRefund) {
        let order;
        if (isRefund) {
            const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
            order = refunds.find(r => r.orderNumber === orderNumber);
        } else {
            order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        }

        if (!order) {
            this.showToast(__('toast.order.not.found'), 'error');
            return;
        }

        const refundNum = isRefund ? (order.refundNumber || (order.orderNumber + 3)) : order.orderNumber;

        const dateObj = new Date(order.date || order.createdAt || Date.now());
        const dateStr = dateObj.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = dateObj.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const companyName = this.state.receiptCompany || 'POS Терминал';
        const addressName = this.state.receiptAddress || 'Ресторан';
        const phone = this.state.receiptPhone || '+998 90 123 45 67';
        const inn = this.state.tin || '200200200';
        const logo = this.state.receiptLogo || 'assets/img/217844580_108833764807015_1720829239842915183_n.png';

        const subtotal = order.total || 0;
        const discountTotal = order.discount || 0;
        const paymentTotal = subtotal; 
        const totalVat = Math.round(paymentTotal * 12 / 112);

        // Generate items HTML
        let itemsHTML = '';
        const items = order.items || [];
        items.forEach((item, idx) => {
            const price = item.price || 0;
            const qty = item.quantity || 1;
            const lineTotal = price * qty;
            const lineVat = Math.round(lineTotal * 12 / 112);
            const itemMxik = item.mxikCode || '09901001001000000';

            itemsHTML += `
                <div style="margin: 8px 0; font-family: monospace; font-size: 11px;">
                    <div style="display:flex; justify-content:space-between; font-weight: bold;">
                        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex-shrink:1; min-width:0;">${idx + 1}. ${item.name}</span>
                        <span style="white-space:nowrap; flex-shrink:0;">${qty} x ${price.toLocaleString()} ${__('currency.sum')}</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; color: #555;">
                        <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex-shrink:1; min-width:0;">в т.ч. НДС 12%</span>
                        <span style="white-space:nowrap; flex-shrink:0;">${lineVat.toLocaleString()} ${__('currency.sum')}</span>
                    </div>
                    <div style="color: #666; font-size: 10px;">ИКПУ (МХИК): ${itemMxik}</div>
                    ${item.barcode ? `<div style="color: #666; font-size: 10px;">Штрих-код: ${item.barcode}</div>` : ''}
                </div>
            `;
        });

        // Payment details HTML
        let paymentHTML = '';
        if (order.splitPayments) {
            paymentHTML = order.splitPayments.map(p => {
                const name = p.type === 1 ? __('payment.cash') : (p.type === 2 ? __('payment.card') : __('payment.mobile'));
                return `<div style="display:flex; justify-content:space-between; font-family: monospace; font-size: 11px; margin-bottom: 2px;"><span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex-shrink:1; min-width:0;">${name}</span><span style="white-space:nowrap; flex-shrink:0;">${p.amount.toLocaleString()} ${__('currency.sum')}</span></div>`;
            }).join('');
        } else {
            const name = order.paymentType === 1 ? __('payment.cash') : (order.paymentType === 2 ? __('payment.card') : __('payment.mobile'));
            paymentHTML = `<div style="display:flex; justify-content:space-between; font-family: monospace; font-size: 11px; margin-bottom: 2px;"><span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; flex-shrink:1; min-width:0;">${name}</span><span style="white-space:nowrap; flex-shrink:0;">${paymentTotal.toLocaleString()} ${__('currency.sum')}</span></div>`;
        }

        const qrImage = order.qrCodeUrl 
            ? `https://chart.googleapis.com/chart?chs=90x90&cht=qr&chl=${encodeURIComponent(order.qrCodeUrl)}` 
            : 'assets/img/qr-code.png';

        const win = window.open('', '_blank', 'width=350,height=600,menubar=no,toolbar=no');
        if (win) {
            win.document.write(`
                <html>
                <head>
                    <title>Чек № ${isRefund ? refundNum : orderNumber}</title>
                    <style>
                        @page { size: 58mm 297mm; margin: 0; }
                        body {
                            font-family: 'Courier New', monospace;
                            padding: 10px;
                            width: 48mm;
                            margin: 0 auto;
                            color: #000;
                            background: #fff;
                        }
                        .center { text-align: center; }
                        .bold { font-weight: bold; }
                        .line { display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 3px; }
                        .line span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex-shrink: 1; min-width: 0; }
                        .line span:last-child { white-space: nowrap; flex-shrink: 0; }
                        .dashed { border-bottom: 1px dashed #000; margin: 8px 0; }
                        .solid { border-bottom: 1px solid #000; margin: 8px 0; }
                    </style>
                </head>
                <body>
                    <div class="center">
                        <img src="${window.location.origin}/${logo}" style="max-width: 60px; max-height: 60px; border-radius: 50%; display: block; margin: 0 auto 6px; border: 1px solid #ddd;"/>
                        <div class="bold" style="font-size: 14px; margin-bottom: 4px;">${companyName}</div>
                        <div style="font-size: 10px; color: #555;">${addressName}</div>
                        <div style="font-size: 10px; color: #555;">${phone}</div>
                    </div>
                    
                    <div class="dashed"></div>
                    
                    <div class="line bold"><span>${__('receipt.inn.label')}</span><span>${inn}</span></div>
                    <div class="line"><span>Дата: ${dateStr}</span><span>Время: ${timeStr}</span></div>
                    <div class="line bold"><span>${__('receipt.check.num')}</span><span>№ ${isRefund ? refundNum : orderNumber}</span></div>
                    <div class="line bold"><span>Тип чека</span><span>${isRefund ? __('action.return') : __('order.title')}</span></div>
                    <div class="line bold"><span>${__('receipt.cashier.label')}</span><span>${order.cashier || this.state.cashierName}</span></div>
                    
                    <div class="solid"></div>
                    
                    <div>${itemsHTML}</div>
                    
                    <div class="solid"></div>
                    
                    ${discountTotal > 0 ? `<div class="line"><span>СКИДКА</span><span>-${discountTotal.toLocaleString()} ${__('currency.sum')}</span></div>` : ''}
                    <div class="line bold" style="font-size: 12px;"><span>ИТОГО К ОПЛАТЕ</span><span>${paymentTotal.toLocaleString()} ${__('currency.sum')}</span></div>
                    <div class="line" style="color: #666; font-size: 10px;"><span>в т.ч. всего НДС 12%</span><span>${totalVat.toLocaleString()} ${__('currency.sum')}</span></div>
                    
                    <div class="solid"></div>
                    
                    <div class="bold" style="font-size: 11px; margin-bottom: 4px;">${__('receipt.form.payment')}</div>
                    ${paymentHTML}
                    
                    <div class="solid"></div>
                    
                    <div class="bold center" style="font-size: 10px; margin-bottom: 4px;">${__('receipt.fiscal.data')}</div>
                    <div class="line" style="color: #555; font-size: 9.5px;"><span>Terminal ID:</span><span>{${(order.terminalId && order.terminalId !== '—') ? order.terminalId : (this.state.vcrTerminalId || typeof FiscalAPI !== 'undefined' ? FiscalAPI.config.vcrTerminalId : '' || '—')}}</span></div>
                    <div class="line" style="color: #555; font-size: 9.5px;"><span>${__('receipt.fiscal.sign.label')}</span><span>${order.fiscalSign || '�'}</span></div>
                    
                    <div style="text-align:center; padding: 10px 0 5px;">
                        <img src="${window.location.origin}/${qrImage}" style="width: 90px; height: 90px; border: 1px solid #eee; border-radius: 4px; display: inline-block;"/>
                    </div>
                    
                    <div class="center bold" style="font-size: 10px; margin-top: 8px;">СПАСИБО ЗА ПОКУПКУ!</div>
                    
                    <script>
                        setTimeout(() => {
                            window.print();
                            window.close();
                        }, 300);
                    </script>
                </body>
                </html>
            `);
            win.document.close();
        }
        this.showToast(__('receipt.precheck.printed'), 'success');
    },

    _exportDetailsExcel(orderNumber, isRefund) {
        let order;
        if (isRefund) {
            const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
            order = refunds.find(r => r.orderNumber === orderNumber);
        } else {
            order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        }

        if (!order) {
            this.showToast('Заказ не найден', 'error');
            return;
        }

        const dateObj = new Date(order.date || order.createdAt || Date.now());
        const dateStr = dateObj.toLocaleDateString('ru-RU');
        const timeStr = dateObj.toLocaleTimeString('ru-RU');

        const refundNum = isRefund ? (order.refundNumber || (order.orderNumber + 3)) : order.orderNumber;
        let xlsHTML = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head>
                <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
                <style>
                    table { border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; }
                    th { background-color: #6b21a8; color: white; font-weight: bold; border: 1px solid #ddd; padding: 8px; text-align: left; }
                    td { border: 1px solid #ddd; padding: 8px; }
                    .header-cell { font-weight: bold; background-color: #f3e8ff; }
                    .total-cell { font-weight: bold; background-color: #faf5ff; }
                </style>
            </head>
            <body>
                <h2>${__('ui.details')} чека № ${isRefund ? refundNum : orderNumber} (${isRefund ? __('action.return') : __('order.title')})</h2>
                <table>
                    <tr><td class="header-cell">Дата</td><td>${dateStr}</td><td class="header-cell">Время</td><td>${timeStr}</td></tr>
                    <tr><td class="header-cell">${__('receipt.cashier.label')}</td><td>${order.cashier || this.state.cashierName}</td><td class="header-cell">Фискальный модуль</td><td>LG230110020563</td></tr>
                    <tr><td class="header-cell">Тип чека</td><td>${isRefund ? __('action.return') : __('order.title')}</td><td class="header-cell">Смена</td><td>002</td></tr>
                </table>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Штрих-код</th>
                            <th>ИКПУ (МХИК)</th>
                            <th>Название товара</th>
                            <th>Цена (сум)</th>
                            <th>Количество</th>
                            <th>НДС 12% (сум)</th>
                            <th>Скидка (сум)</th>
                            <th>${__('ui.total')}вая сумма (сум)</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        const items = order.items || [];
        let discountTotal = 0;
        let vatTotal = 0;
        let grandTotal = 0;

        items.forEach((item, idx) => {
            const price = item.price || 0;
            const qty = item.quantity || 1;
            const total = price * qty;
            const lineVat = Math.round(total * 12 / 112);
            const discount = item.discountSum || 0;
            const mxik = item.mxikCode || '09901001001000000';

            discountTotal += discount;
            vatTotal += lineVat;
            grandTotal += total;

            xlsHTML += `
                <tr>
                    <td>${idx + 1}</td>
                    <td>${item.barcode ? `'${item.barcode}` : ''}</td>
                    <td>'${mxik}</td>
                    <td>${item.name}</td>
                    <td>${price}</td>
                    <td>${qty}</td>
                    <td>${lineVat}</td>
                    <td>${discount}</td>
                    <td>${total}</td>
                </tr>
            `;
        });

        xlsHTML += `
                    <tr>
                        <td colspan="7" class="total-cell" style="text-align: right;">${__('ui.total')} скидка:</td>
                        <td colspan="2" class="total-cell">${discountTotal} сум</td>
                    </tr>
                    <tr>
                        <td colspan="7" class="total-cell" style="text-align: right;">${__('ui.total')} НДС 12%:</td>
                        <td colspan="2" class="total-cell">${vatTotal} сум</td>
                    </tr>
                    <tr>
                        <td colspan="7" class="total-cell" style="text-align: right; font-size: 14px; color: #6b21a8;">Сумма оплаты:</td>
                        <td colspan="2" class="total-cell" style="font-size: 14px; color: #6b21a8;">${grandTotal} сум</td>
                    </tr>
                    </tbody>
                </table>
            </body>
            </html>
        `;

        const blob = new Blob([xlsHTML], { type: 'application/vnd.ms-excel;charset=utf-8;' });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Detali_cheka_${isRefund ? 'Vozvrat' : 'Zakaz'}_${isRefund ? refundNum : orderNumber}.xls`;
        link.click();
        this.showToast('Excel успешно загружен', 'success');
    },

    _exportDetailsPDF(orderNumber, isRefund) {
        let order;
        if (isRefund) {
            const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
            order = refunds.find(r => r.orderNumber === orderNumber);
        } else {
            order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        }

        if (!order) {
            this.showToast('Заказ не найден', 'error');
            return;
        }

        this.showToast("Для загрузки PDF выберите принтер 'Сохранить как PDF' (Save as PDF)", "info", 5000);

        const docNumber = isRefund ? (order.refundNumber || (order.orderNumber + 3)) : order.orderNumber;

        const dateObj = new Date(order.date || order.createdAt || Date.now());
        const dateStr = dateObj.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = dateObj.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

        const companyName = this.state.receiptCompany || 'Soliq servis';
        const addressName = this.state.receiptAddress || 'Muqimiy Ko\'chasi, 166.';
        const phone = this.state.receiptPhone || '+998 90 123 45 67';
        const inn = this.state.tin || '200200200';
        const logo = this.state.receiptLogo || 'assets/img/217844580_108833764807015_1720829239842915183_n.png';

        const subtotal = order.total || 0;
        const discountTotal = order.discount || 0;
        const paymentTotal = subtotal; 
        const totalVat = Math.round(paymentTotal * 12 / 112);

        let rowsHTML = '';
        const items = order.items || [];
        items.forEach((item, idx) => {
            const price = item.price || 0;
            const qty = item.quantity || 1;
            const total = price * qty;
            const lineVat = Math.round(total * 12 / 112);
            const mxik = item.mxikCode || '09901001001000000';

            rowsHTML += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${idx + 1}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.barcode || ''}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${mxik}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">${item.name}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${price.toLocaleString()} ${__('currency.sum')}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${qty}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${lineVat.toLocaleString()} ${__('currency.sum')}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">${(item.discountSum || 0).toLocaleString()} ${__('currency.sum')}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: right; font-weight: bold;">${total.toLocaleString()} ${__('currency.sum')}</td>
                </tr>
            `;
        });

        let paymentTypeStr = '';
        if (order.splitPayments) {
            paymentTypeStr = order.splitPayments.map(p => {
                const name = p.type === 1 ? __('payment.cash') : (p.type === 2 ? __('payment.card') : __('payment.mobile'));
                return `${name}: ${p.amount.toLocaleString()} ${__('currency.sum')}`;
            }).join(', ');
        } else {
            const name = order.paymentType === 1 ? __('payment.cash') : (order.paymentType === 2 ? __('payment.card') : __('payment.mobile'));
            paymentTypeStr = `${name}: ${paymentTotal.toLocaleString()} ${__('currency.sum')}`;
        }

        const qrImage = order.qrCodeUrl 
            ? `https://chart.googleapis.com/chart?chs=120&chs=120&cht=qr&chl=${encodeURIComponent(order.qrCodeUrl)}` 
            : 'assets/img/qr-code.png';

        const win = window.open('', '_blank', 'width=800,height=900,menubar=no,toolbar=no');
        if (win) {
            win.document.write(`
                <html>
                <head>
                    <title>Invoice_PDF_${isRefund ? 'Vozvrat' : 'Zakaz'}_${docNumber}</title>
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            padding: 40px;
                            color: #333;
                            background: #fff;
                        }
                        .invoice-container {
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        .invoice-header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            border-bottom: 3px solid #6b21a8;
                            padding-bottom: 20px;
                            margin-bottom: 30px;
                        }
                        .company-details {
                            text-align: right;
                            font-size: 13px;
                            color: #666;
                        }
                        .invoice-title {
                            font-size: 26px;
                            font-weight: 800;
                            color: #6b21a8;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                        }
                        .meta-section {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 30px;
                            background: #faf5ff;
                            padding: 20px;
                            border-radius: 8px;
                            border: 1px solid #f3e8ff;
                        }
                        .meta-col {
                            font-size: 13px;
                            line-height: 1.6;
                        }
                        .meta-col strong {
                            color: #6b21a8;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 30px;
                            font-size: 12px;
                        }
                        th {
                            background-color: #6b21a8;
                            color: white;
                            font-weight: bold;
                            border: 1px solid #ddd;
                            padding: 10px;
                            text-align: left;
                            text-transform: uppercase;
                        }
                        td {
                            border: 1px solid #ddd;
                            padding: 10px;
                        }
                        tr:nth-child(even) {
                            background-color: #fdfbff;
                        }
                        .bold { font-weight: bold; }
                        .right { text-align: right; }
                        .center { text-align: center; }
                        .summary-section {
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-start;
                        }
                        .qr-code-block {
                            text-align: center;
                            padding: 10px;
                            border: 1px solid #e2e8f0;
                            border-radius: 8px;
                            background: #fff;
                        }
                        .totals-block {
                            width: 320px;
                            font-size: 14px;
                        }
                        .totals-row {
                            display: flex;
                            justify-content: space-between;
                            padding: 6px 0;
                            border-bottom: 1px solid #e2e8f0;
                        }
                        .grand-total {
                            display: flex;
                            justify-content: space-between;
                            padding: 12px 0;
                            font-size: 18px;
                            font-weight: 800;
                            color: #6b21a8;
                            border-bottom: none;
                        }
                        .footer {
                            margin-top: 50px;
                            border-top: 1px solid #e2e8f0;
                            padding-top: 20px;
                            text-align: center;
                            font-size: 11px;
                            color: #94a3b8;
                        }
                        @media print {
                            body { padding: 0; }
                            .meta-section { background: #faf5ff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                            th { background-color: #6b21a8 !important; color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                        }
                    </style>
                </head>
                <body>
                    <div class="invoice-container">
                        <div class="invoice-header">
                            <div>
                                <img src="${logo}" style="max-height: 55px; border-radius: 50%; border: 1px solid #ddd; margin-bottom: 6px;"/>
                                <div class="invoice-title">${isRefund ? __('invoice.return.doc') : __('invoice.sale')}</div>
                            </div>
                            <div class="company-details">
                                <div style="font-weight: bold; font-size: 16px; color: #6b21a8; margin-bottom: 4px;">${companyName}</div>
                                <div>${addressName}</div>
                                <div>Телефон: ${phone}</div>
                                <div>${__('receipt.inn.label')}: ${inn}</div>
                            </div>
                        </div>
                        <div class="meta-section">
                            <div class="meta-col">
                                <div><strong>Тип документа:</strong> ${isRefund ? __('invoice.refund') : __('invoice.sale')}</div>
                                <div><strong>Номер документа:</strong> # ${docNumber}</div>
                                <div><strong>Дата:</strong> ${dateStr}</div>
                                <div><strong>Время:</strong> ${timeStr}</div>
                            </div>
                            <div class="meta-col" style="text-align: right;">
                                <div><strong>${__('receipt.cashier.label')}:</strong> ${order.cashier || this.state.cashierName || 'Sultonov Raxmatilla'}</div>
                                <div><strong>Тип оплаты:</strong> ${paymentTypeStr}</div>
                                <div><strong>Статус:</strong> ${isRefund ? 'Возвращен' : 'Успешно'}</div>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Штрих-код</th>
                                    <th>ИКПУ (МХИК)</th>
                                    <th>Название товара</th>
                                    <th class="right">Цена</th>
                                    <th class="center">Кол-во</th>
                                    <th class="right">НДС (12%)</th>
                                    <th class="right">Скидка</th>
                                    <th class="right">${__('ui.total')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rowsHTML}
                            </tbody>
                        </table>

                        <div class="summary-section">
                            <div class="qr-code-block">
                                <img src="${qrImage}" style="width: 110px; height: 110px; display: block; margin-bottom: 6px;"/>
                                <div style="font-size: 10px; color: #666;">QR-код для проверки</div>
                            </div>
                            <div class="totals-block">
                                <div class="totals-row">
                                    <span>${__('ui.total')}:</span>
                                    <span>${subtotal.toLocaleString()} ${__('currency.sum')}</span>
                                </div>
                                <div class="totals-row">
                                    <span>Скидка:</span>
                                    <span>${discountTotal.toLocaleString()} ${__('currency.sum')}</span>
                                </div>
                                <div class="totals-row">
                                    <span>НДС (12%):</span>
                                    <span>${totalVat.toLocaleString()} ${__('currency.sum')}</span>
                                </div>
                                <div class="totals-row grand-total">
                                    <span>${__('payment.amount.due')}</span>
                                    <span>${paymentTotal.toLocaleString()} ${__('currency.sum')}</span>
                                </div>
                            </div>
                        </div>

                        <div class="footer">
                            <div style="font-weight: bold; margin-bottom: 4px; color: #6b21a8;">Спасибо за покупку!</div>
                            <div>Автоматически напечатано через POS-систему Soliq Servis.</div>
                        </div>
                    </div>
                </body>
                </html>
            `);
            win.document.close();
            setTimeout(() => {
                win.print();
                win.close();
            }, 600);
            this.showToast('Инвойс PDF отправлен на печать', 'success');
        }
    },

    _openRefundModal(orderNumber) {
        if (!this._canManageMoney()) { this.showToast(__('toast.only.admin'), 'error'); return; }
        const order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        if (!order) return;
        if (order.refunded) { this.showToast(__('toast.refund.already'), 'info'); return; }

        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;

        // Initialize interactive refund state
        this.refundState = {
            orderNumber: orderNumber,
            items: (order.items || []).map((item, idx) => {
                const price = item.price || 0;
                const qty = item.quantity || 1;
                const discount = item.discountSum || 0;
                return {
                    idx: idx,
                    name: item.name,
                    barcode: item.barcode || '',
                    price: price,
                    quantity: qty,
                    originalQty: qty,
                    unit: item.unit || 'dona',
                    discount: discount,
                    originalDiscount: discount,
                    checked: true,
                    total: (price - discount) * qty
                };
            }),
            grandTotal: order.total,
            showOverlay: false,
            refundCash: undefined,
            refundCard: undefined,
            refundMobile: undefined
        };

        this._renderRefundModal();
        overlay.classList.add('active');
    },

    _fmtNum(val) {
        return Number(val).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },

    _renderRefundModal() {
        const orderNumber = this.refundState.orderNumber;
        const order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        if (!order) return;

        const modal = document.getElementById('modal-content');
        if (!modal) return;

        const fmtNum = (val) => Number(val).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        const fmtVal = (val) => Number(val) % 1 === 0 ? Math.round(val).toString() : Number(val).toFixed(2);

        const cashMax = order.paymentType === 1 ? order.total : (order.splitPayments ? (order.splitPayments.find(p => p.type === 1)?.amount || 0) : 0);
        const cardMax = order.paymentType === 2 ? order.total : (order.splitPayments ? (order.splitPayments.find(p => p.type === 2)?.amount || 0) : 0);
        const mobileMax = order.paymentType === 5 ? order.total : (order.splitPayments ? (order.splitPayments.find(p => p.type === 5)?.amount || 0) : 0);

        // Render table rows
        let itemsHTML = '';
        this.refundState.items.forEach((item) => {
            const rowTotal = (item.price - item.discount) * item.quantity;
            itemsHTML += `
                <div id="ref-row-${item.idx}" style="display:flex; justify-content:space-between; align-items:center; padding: 12px 0; border-bottom:1px solid var(--border-subtle); opacity: ${item.checked ? '1' : '0.5'}; transition: opacity 0.2s;">
                    <div style="flex:2; display:flex; align-items:center; gap:12px;">
                        <input type="checkbox" class="refund-checkbox" id="ref-chk-${item.idx}" ${item.checked ? 'checked' : ''} onchange="POS._toggleRefundItem(${item.idx})">
                        <div>
                            <div style="font-size:10px; color:var(--text-muted); margin-bottom:2px;">${item.barcode}</div>
                            <div style="font-weight:700; font-size:12px; color:var(--text-primary);">${item.name}</div>
                        </div>
                    </div>
                    <div style="flex:1; text-align:center;">
                        <input type="number" class="refund-table-input" id="ref-price-${item.idx}" value="${fmtVal(item.price)}" oninput="POS._onPriceInput(${item.idx}, this.value)" style="max-width:90px;">
                    </div>
                    <div style="flex:1; text-align:center; display:flex; justify-content:center;">
                        <div class="refund-qty-control">
                            <button class="refund-qty-btn" onclick="POS._changeRefundQty(${item.idx}, -1)">-</button>
                            <input type="number" class="refund-qty-input" id="ref-qty-${item.idx}" value="${item.quantity}" min="1" max="${item.originalQty}" oninput="POS._onQtyInput(${item.idx}, this.value)">
                            <button class="refund-qty-btn" onclick="POS._changeRefundQty(${item.idx}, 1)">+</button>
                        </div>
                    </div>
                    <div style="flex:1; text-align:center; color:var(--text-muted); font-size:12px;">${item.unit === 'dona' ? 'шт.' : item.unit}</div>
                    <div style="flex:1; text-align:center;">
                        <input type="number" class="refund-table-input" id="ref-disc-${item.idx}" value="${fmtVal(item.discount)}" oninput="POS._onDiscountInput(${item.idx}, this.value)" style="max-width:80px;">
                    </div>
                    <div style="flex:1; text-align:right; font-weight:700; font-size:12px; color:var(--text-primary); display:flex; align-items:center; justify-content:flex-end; gap:8px; padding-right:20px;">
                        <input type="number" class="refund-table-input" id="ref-sum-${item.idx}" value="${fmtVal(rowTotal)}" oninput="POS._onSumInput(${item.idx}, this.value)" style="max-width:110px; text-align:right; font-weight:700;">
                        <button onclick="POS._deleteRefundItem(${item.idx})" style="background:none; border:none; color:var(--danger, #ef4444); cursor:pointer; font-size:18px;" title="${__('item.remove.btn')}">&times;</button>
                    </div>
                </div>`;
        });

        const allChecked = this.refundState.items.length > 0 && this.refundState.items.every(it => it.checked);

        let cashVal = this.refundState.refundCash;
        let cardVal = this.refundState.refundCard;
        let mobileVal = this.refundState.refundMobile;

        if (cashVal === undefined && cardVal === undefined && mobileVal === undefined) {
            let remainingToRefund = this.refundState.grandTotal;
            
            cashVal = Math.min(cashMax, remainingToRefund);
            remainingToRefund -= cashVal;
            
            cardVal = Math.min(cardMax, remainingToRefund);
            remainingToRefund -= cardVal;
            
            mobileVal = Math.min(mobileMax, remainingToRefund);
            remainingToRefund -= mobileVal;
            
            this.refundState.refundCash = cashVal;
            this.refundState.refundCard = cardVal;
            this.refundState.refundMobile = mobileVal;
        } else {
            cashVal = cashVal || 0;
            cardVal = cardVal || 0;
            mobileVal = mobileVal || 0;
        }
        
        const currentOverlayTotal = cashVal + cardVal + mobileVal;

        let overlayHTML = '';
        if (this.refundState.showOverlay) {
            overlayHTML = `
                <div id="refund-overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:flex; justify-content:center; align-items:center; z-index:1000; backdrop-filter:blur(3px);">
                    <div style="background:var(--bg-card); border-radius:var(--radius-lg); width:460px; padding:28px; box-shadow:0 20px 25px -5px rgba(0,0,0,0.3); border:1px solid var(--border-subtle); position:relative;">
                        <button onclick="POS._hideMixedRefundOverlay()" style="position:absolute; top:16px; right:16px; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:20px;">&times;</button>
                        
                        <div style="font-size:18px; font-weight:800; color:var(--text-primary); margin-bottom:20px; text-align:center; display:flex; align-items:center; justify-content:center; gap:8px;">
                            ${this.icn('rotate-ccw', '20px')}
                            ${__('refund.mixed')}
                        </div>
                        
                        <div class="form-group" style="margin-bottom:16px;">
                            <label class="form-label" style="font-weight:600; font-size:12px; margin-bottom:6px; color:var(--text-muted);">${__('refund.amount.max')} ${fmtNum(cashMax)} сум</label>
                            <input type="number" class="refund-input-field" id="ref-cash-input" value="${cashVal}" max="${cashMax}" min="0" oninput="POS._updateRefundSums(${order.total}, ${cashMax}, ${cardMax}, ${mobileMax})">
                        </div>

                        <div class="form-group" style="margin-bottom:16px;">
                            <label class="form-label" style="font-weight:600; font-size:12px; margin-bottom:6px; color:var(--text-muted);">${__('refund.amount.max.card')} ${fmtNum(cardMax)} сум</label>
                            <input type="number" class="refund-input-field" id="ref-card-input" value="${cardVal}" max="${cardMax}" min="0" oninput="POS._updateRefundSums(${order.total}, ${cashMax}, ${cardMax}, ${mobileMax})">
                        </div>

                        <div class="form-group" style="margin-bottom:20px;">
                            <label class="form-label" style="font-weight:600; font-size:12px; margin-bottom:6px; color:var(--text-muted);">${__('refund.amount.max.mobile')} ${fmtNum(mobileMax)} сум</label>
                            <input type="number" class="refund-input-field" id="ref-mobile-input" value="${mobileVal}" max="${mobileMax}" min="0" oninput="POS._updateRefundSums(${order.total}, ${cashMax}, ${cardMax}, ${mobileMax})">
                        </div>

                        <div style="text-align:center; font-size:15px; font-weight:800; color:var(--text-primary); margin-bottom:24px;">
                            ${__('refund.amount')} <span id="ref-total-sum" style="color:var(--primary); font-size:18px;">${fmtNum(currentOverlayTotal)}</span> сум
                        </div>

                        <button class="refund-btn-purple" onclick="POS._processRefund(${orderNumber})">${__('refund.submit')}</button>
                    </div>
                </div>`;
        }

        modal.innerHTML = `
            <div class="modal modal-full" style="position:relative;">
                <!-- Background items return spec -->
                <div class="modal-header">
                    <div class="modal-title">${this.icn('rotate-ccw', '18px')} ${__('refund.title')} #${order.orderNumber}</div>
                    <button class="modal-close" onclick="POS.showOrderDetails(${orderNumber})"><span class="icon">${this.icon('x', '18px')}</span></button>
                </div>
                <div class="modal-body" style="padding: 24px; position:relative; background:var(--bg-elevated);">
                    <!-- Header columns -->
                    <div style="display:flex; justify-content:space-between; align-items:center; font-weight:800; font-size:11px; color:var(--text-muted); border-bottom: 2px solid var(--border-subtle); padding-bottom:8px; margin-bottom:8px;">
                        <span style="flex:2; display:flex; align-items:center; gap:12px;">
                            <input type="checkbox" class="refund-checkbox" id="ref-chk-all" ${allChecked ? 'checked' : ''} onchange="POS._toggleAllRefundItems(event)">
                            НАЗВАНИЕ
                        </span>
                        <span style="flex:1; text-align:center;">ЦЕНА</span>
                        <span style="flex:1; text-align:center;">КОЛ-ВО / ОБЪЕМ</span>
                        <span style="flex:1; text-align:center;">ЕД. ИЗМ.</span>
                        <span style="flex:1; text-align:center;">СКИДКА</span>
                        <span style="flex:1; text-align:right; padding-right:50px;">СУММА</span>
                    </div>
                    <div>
                        ${itemsHTML}
                    </div>

                    <div style="text-align:center; margin-top:30px; font-size:15px; font-weight:700; color:var(--text-primary);">
                        ${__('refund.amount')} <span id="ref-grand-total" style="color:var(--primary); font-size:18px;">${fmtNum(this.refundState.grandTotal)} сум</span>
                    </div>

                    <div style="display:flex; justify-content:center; margin-top:20px;">
                        <button class="btn btn-secondary" onclick="POS._showMixedRefundOverlay()" style="width:240px; background:var(--primary-muted); color:var(--primary); border:none; height:42px; font-weight:700;">${__('refund.submit')}</button>
                    </div>
                </div>

                ${overlayHTML}
            </div>`;
    },

    _toggleRefundItem(idx) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        item.checked = !item.checked;
        
        // Update opacity in the row DOM
        const row = document.getElementById(`ref-row-${idx}`);
        if (row) {
            row.style.opacity = item.checked ? '1' : '0.5';
        }
        
        this._updateRefundGrandTotal();
        
        // Update Select All checkbox state
        const allChecked = this.refundState.items.length > 0 && this.refundState.items.every(it => it.checked);
        const chkAll = document.getElementById('ref-chk-all');
        if (chkAll) chkAll.checked = allChecked;
    },

    _toggleAllRefundItems(event) {
        const checked = event.target.checked;
        this.refundState.items.forEach(item => {
            item.checked = checked;
            const chk = document.getElementById(`ref-chk-${item.idx}`);
            if (chk) chk.checked = checked;
            const row = document.getElementById(`ref-row-${item.idx}`);
            if (row) row.style.opacity = checked ? '1' : '0.5';
        });
        this._updateRefundGrandTotal();
    },

    _deleteRefundItem(idx) {
        this.refundState.items = this.refundState.items.filter(it => it.idx !== idx);
        this._renderRefundModal();
    },

    _changeRefundQty(idx, delta) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        let newQty = item.quantity + delta;
        if (newQty > item.originalQty) newQty = item.originalQty;
        if (newQty < 1) newQty = 1;
        
        item.quantity = newQty;
        
        const qtyInput = document.getElementById(`ref-qty-${idx}`);
        if (qtyInput) qtyInput.value = newQty;
        
        this._recalcRefundRow(idx);
    },

    _onQtyInput(idx, val) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        let qty = parseFloat(val) || 0;
        if (qty > item.originalQty) qty = item.originalQty;
        if (qty < 0) qty = 0;
        
        item.quantity = qty;
        this._recalcRefundRow(idx);
    },

    _onPriceInput(idx, val) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        let price = parseFloat(val) || 0;
        if (price < 0) price = 0;
        
        item.price = price;
        this._recalcRefundRow(idx);
    },

    _onDiscountInput(idx, val) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        let discount = parseFloat(val) || 0;
        if (discount > item.price) discount = item.price;
        if (discount < 0) discount = 0;
        
        item.discount = discount;
        this._recalcRefundRow(idx);
    },

    _onSumInput(idx, val) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        let sum = parseFloat(val) || 0;
        const maxPossible = item.price * item.quantity;
        if (sum > maxPossible) sum = maxPossible;
        if (sum < 0) sum = 0;
        
        item.total = sum;
        
        if (item.quantity > 0) {
            let discount = item.price - (sum / item.quantity);
            if (discount < 0) discount = 0;
            if (discount > item.price) discount = item.price;
            item.discount = discount;
            
            const discInput = document.getElementById(`ref-disc-${idx}`);
            if (discInput) {
                const fmtVal = (val) => Number(val) % 1 === 0 ? Math.round(val).toString() : Number(val).toFixed(2);
                discInput.value = fmtVal(discount);
            }
        }
        
        this._updateRefundGrandTotal();
    },

    _recalcRefundRow(idx) {
        const item = this.refundState.items.find(it => it.idx === idx);
        if (!item) return;
        
        const rowTotal = (item.price - item.discount) * item.quantity;
        item.total = rowTotal;
        
        const sumInput = document.getElementById(`ref-sum-${idx}`);
        if (sumInput) {
            const fmtVal = (val) => Number(val) % 1 === 0 ? Math.round(val).toString() : Number(val).toFixed(2);
            sumInput.value = fmtVal(rowTotal);
        }
        
        this._updateRefundGrandTotal();
    },

    _updateRefundGrandTotal() {
        let grandTotal = 0;
        this.refundState.items.forEach(item => {
            if (item.checked) {
                grandTotal += (item.price - item.discount) * item.quantity;
            }
        });
        this.refundState.grandTotal = grandTotal;
        
        const grandTotalEl = document.getElementById('ref-grand-total');
        if (grandTotalEl) {
            grandTotalEl.textContent = this._fmtNum(grandTotal) + " сум";
        }
    },

    _showMixedRefundOverlay() {
        let grandTotal = 0;
        const selectedItems = this.refundState.items.filter(it => it.checked);
        selectedItems.forEach(item => {
            grandTotal += (item.price - item.discount) * item.quantity;
        });
        
        if (selectedItems.length === 0 || grandTotal <= 0) {
            this.showToast(__('toast.refund.select.items'), 'error');
            return;
        }
        
        this.refundState.grandTotal = grandTotal;
        this.refundState.showOverlay = true;
        this._renderRefundModal();
    },

    _hideMixedRefundOverlay() {
        this.refundState.showOverlay = false;
        // reset values so they re-calculate proportionally next time
        this.refundState.refundCash = undefined;
        this.refundState.refundCard = undefined;
        this.refundState.refundMobile = undefined;
        this._renderRefundModal();
    },

    _updateRefundSums(orderTotal, cashMax, cardMax, mobileMax) {
        const cashInput = document.getElementById('ref-cash-input');
        const cardInput = document.getElementById('ref-card-input');
        const mobileInput = document.getElementById('ref-mobile-input');
        if (!cashInput || !cardInput || !mobileInput) return;

        let cash = parseFloat(cashInput.value) || 0;
        let card = parseFloat(cardInput.value) || 0;
        let mobile = parseFloat(mobileInput.value) || 0;

        if (cash > cashMax) { cash = cashMax; cashInput.value = cashMax; }
        if (card > cardMax) { card = cardMax; cardInput.value = cardMax; }
        if (mobile > mobileMax) { mobile = mobileMax; mobileInput.value = mobileMax; }
        if (cash < 0) { cash = 0; cashInput.value = 0; }
        if (card < 0) { card = 0; cardInput.value = 0; }
        if (mobile < 0) { mobile = 0; mobileInput.value = 0; }

        this.refundState.refundCash = cash;
        this.refundState.refundCard = card;
        this.refundState.refundMobile = mobile;

        const total = cash + card + mobile;
        const fmtNum = (val) => Number(val).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        
        document.getElementById('ref-total-sum').textContent = fmtNum(total);
    },

    async _processRefund(orderNumber) {
        if (!this._canManageMoney()) { this.showToast(__('toast.only.admin'), 'error'); return; }
        const order = this.state.orderHistory.find(o => o.orderNumber === orderNumber);
        if (!order) return;
        if (order.refunded) { this.showToast(__('toast.refund.already'), 'info'); return; }

        const cashVal = parseFloat(document.getElementById('ref-cash-input')?.value) || 0;
        const cardVal = parseFloat(document.getElementById('ref-card-input')?.value) || 0;
        const mobileVal = parseFloat(document.getElementById('ref-mobile-input')?.value) || 0;
        const refundAmount = cashVal + cardVal + mobileVal;

        if (refundAmount <= 0) {
            this.showToast(__('toast.refund.amount.zero'), 'error');
            return;
        }

        // Verify that refundAmount matches the selected items total!
        const selectedTotal = this.refundState.grandTotal;
        if (Math.abs(refundAmount - selectedTotal) > 0.01) {
            if (!(await this._confirm(`Внимание! Введенная сумма возврата (${refundAmount.toLocaleString()} ${__('currency.sum')}) не совпадает с суммой выбранных товаров (${selectedTotal.toLocaleString()} ${__('currency.sum')}). Продолжить?`))) return;
        }

        if (!(await this._confirm(`${__('refund.submit')} на сумму ${refundAmount.toLocaleString()} ${__('currency.sum')} по чеку № ${order.orderNumber}?`))) return;

        // Build list of returned items
        const selectedItems = this.refundState.items
            .filter(it => it.checked && it.quantity > 0)
            .map(it => {
                const origItem = order.items[it.idx] || {};
                return {
                    ...origItem,
                    price: it.price,
                    quantity: it.quantity,
                    discountSum: it.discount,
                    total: (it.price - it.discount) * it.quantity
                };
            });

        const refundNumber = this.state.orderNumber++;
        const refundRecord = {
            id: 'RET-' + Date.now() + '-' + Math.random().toString(16).slice(2, 6),
            orderId: order.id || null,
            orderNumber: order.orderNumber,
            refundNumber: refundNumber,
            amount: refundAmount,
            paymentType: order.paymentType,
            splitPayments: order.splitPayments ? [
                { type: 1, amount: cashVal },
                { type: 2, amount: cardVal },
                { type: 5, amount: mobileVal }
            ].filter(p => p.amount > 0) : null,
            items: selectedItems,
            reason: 'Смешанный возврат',
            cashier: this.state.cashierName,
            status: 'completed',
            createdAt: new Date().toISOString()
        };

        order.refunded = true;
        order.refundAmount = refundAmount;
        order.refundDate = refundRecord.createdAt;

        if (!Array.isArray(this.state.refunds)) this.state.refunds = [];
        this.state.refunds.push(refundRecord);
        this.saveState();

        if (typeof DB !== 'undefined') {
            await DB.put('returns', refundRecord);
        }

        if (typeof Warehouse !== 'undefined') {
            await Warehouse.restockForReturn(selectedItems);
        }

        this.showToast(__('refund.success'), 'success');
        this.showOrderHistory();
    },

    showSalesReport() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        const history = this.state.orderHistory;
        const today = new Date().toDateString();
        const todayOrders = history.filter(o => new Date(o.date).toDateString() === today);
        const todayRevenue = todayOrders.reduce((s, o) => s + o.total, 0);
        const refunds = Array.isArray(this.state.refunds) ? this.state.refunds : [];
        const todayRefunds = refunds.filter(r => {
            const dt = r.createdAt || r.timestamp || r.date;
            return dt ? new Date(dt).toDateString() === today : false;
        });
        const refundTotal = todayRefunds.reduce((s, r) => s + (r.amount || 0), 0);
        const cashTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 1).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 1 ? o.total : 0);
        }, 0);
        const cardTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 2).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 2 ? o.total : 0);
        }, 0);
        const mobileTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 5).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 5 ? o.total : 0);
        }, 0);
        const refundByType = todayRefunds.reduce((acc, r) => {
            if (r.splitPayments) {
                r.splitPayments.forEach(p => {
                    if (p.type === 1) acc.cash += (p.amount || 0);
                    else if (p.type === 2) acc.card += (p.amount || 0);
                    else if (p.type === 5) acc.mobile += (p.amount || 0);
                });
            } else {
                if (r.paymentType === 1 || r.paymentType === 'cash') acc.cash += (r.amount || 0);
                else if (r.paymentType === 2 || r.paymentType === 'card') acc.card += (r.amount || 0);
                else if (r.paymentType === 5 || r.paymentType === 'mobile') acc.mobile += (r.amount || 0);
            }
            return acc;
        }, { cash: 0, card: 0, mobile: 0 });
        const netRevenue = todayRevenue - refundTotal;
        const netCashTotal = cashTotal - refundByType.cash;
        const netCardTotal = cardTotal - refundByType.card;
        const netMobileTotal = mobileTotal - refundByType.mobile;
        const itemsSold = todayOrders.reduce((s, o) => s + o.items.reduce((si, it) => si + it.quantity, 0), 0);

        modal.innerHTML = `
            <div class="modal" style="max-width:600px;">
                <div class="modal-header"><div class="modal-title">${this.icn('bar-chart', '18px')} ${__('report.today')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body">
                    <div style="text-align:center;margin-bottom:20px;">
                        <div style="font-size:13px;color:var(--text-muted);">${new Date().toLocaleDateString('ru-RU', {day:'2-digit',month:'long',year:'numeric'})}</div>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px;">
                        <div style="background:var(--bg-card);border-radius:var(--radius-md);padding:16px;text-align:center;">
                            <div style="font-size:28px;font-weight:800;color:var(--primary);">${netRevenue.toLocaleString()}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${__('report.revenue.net.label')}</div>
                        </div>
                        <div style="background:var(--bg-card);border-radius:var(--radius-md);padding:16px;text-align:center;">
                            <div style="font-size:28px;font-weight:800;color:var(--text-primary);">${todayOrders.length}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${__('report.checks.count.label')} · ${itemsSold} ${__('report.items.count')}</div>
                        </div>
                    </div>
                    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px;">
                        <div style="background:var(--primary-muted);border-radius:var(--radius-md);padding:12px;text-align:center;">
                            <div style="font-size:20px;">${this.icn('wallet', '24px')}</div>
                            <div style="font-size:16px;font-weight:700;color:var(--primary);">${netCashTotal.toLocaleString()}</div>
                            <div style="font-size:10px;color:var(--text-muted);">${__('report.cash.net.label')}</div>
                        </div>
                        <div style="background:var(--blue-muted);border-radius:var(--radius-md);padding:12px;text-align:center;">
                            <div style="font-size:20px;">${this.icn('credit-card', '24px')}</div>
                            <div style="font-size:16px;font-weight:700;color:var(--blue);">${netCardTotal.toLocaleString()}</div>
                            <div style="font-size:10px;color:var(--text-muted);">${__('report.card.net.label')}</div>
                        </div>
                        <div style="background:var(--amber-muted);border-radius:var(--radius-md);padding:12px;text-align:center;">
                            <div style="font-size:20px;">${this.icn('smartphone', '24px')}</div>
                            <div style="font-size:16px;font-weight:700;color:var(--amber);">${netMobileTotal.toLocaleString()}</div>
                            <div style="font-size:10px;color:var(--text-muted);">${__('report.mobile.net.label')}</div>
                        </div>
                    </div>
                    ${refundTotal > 0 ? `<div style="background:var(--bg-card);border-radius:var(--radius-md);padding:10px 12px;margin-bottom:16px;font-size:12px;color:var(--danger);text-align:center;">
                        ${__('report.refunds.today.label')} <strong>${refundTotal.toLocaleString()} ${__('currency.sum')}</strong>
                    </div>` : ''}
                    <div style="background:var(--bg-card);border-radius:var(--radius-md);padding:12px 16px;">
                        <div style="font-weight:600;margin-bottom:8px;">${this.icn('star', '16px')} ${__('report.top.label')}</div>
                        ${this._getTopItems(todayOrders).slice(0, 5).map((item, i) =>
                            `<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:13px;">
                                <span>${i + 1}. ${this.foodIcon(item.emoji, '14px')} ${item.name}</span>
                                <span style="font-weight:600;color:var(--amber);">${item.count} ${__('report.pcs')}</span>
                            </div>`
                        ).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="POS.printReport()">${this.icn('printer', '14px')} ${__('report.print')}</button>
                    <button class="btn btn-ghost" onclick="POS.closeModal()">${__('action.close')}</button>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    _getTopItems(orders) {
        const counts = {};
        orders.forEach(o => o.items.forEach(item => {
            const key = item.id;
            if (!counts[key]) counts[key] = { name: item.name, emoji: item.emoji || this.icn('coffee', '14px'), count: 0 };
            counts[key].count += item.quantity;
        }));
        return Object.values(counts).sort((a, b) => b.count - a.count);
    },

    printReport() {
        const history = this.state.orderHistory;
        const today = new Date().toDateString();
        const todayOrders = history.filter(o => new Date(o.date).toDateString() === today);
        const todayRevenue = todayOrders.reduce((s, o) => s + o.total, 0);
        const cashTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 1).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 1 ? o.total : 0);
        }, 0);
        const cardTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 2).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 2 ? o.total : 0);
        }, 0);
        const mobileTotal = todayOrders.reduce((sum, o) => {
            if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 5).reduce((s, p) => s + (p.amount || 0), 0);
            return sum + (o.paymentType === 5 ? o.total : 0);
        }, 0);
        const itemsSold = todayOrders.reduce((s, o) => s + o.items.reduce((si, it) => si + it.quantity, 0), 0);
        const topItems = this._getTopItems(todayOrders).slice(0, 5);

        const win = window.open('', 'report', 'width=400,height=600,menubar=no,toolbar=no');
        if (!win) return;
        win.document.write(`<html><head><title>Отчёт за ${new Date().toLocaleDateString('ru-RU')}</title>
            <style>@page{size:58mm 297mm;margin:0;}body{font-family:'Courier New',monospace;font-size:13px;padding:20px;width:48mm;margin:0 auto;color:#000;background:#fff;}
            h2{text-align:center;border-bottom:2px dashed #000;padding-bottom:8px;}
            table{width:100%;border-collapse:collapse;margin:10px 0;}
            td{padding:4px 0;}
            .r{text-align:right;}
            .total{font-size:16px;font-weight:700;border-top:2px solid #000;padding-top:6px;}
            .section{font-weight:700;margin-top:12px;border-bottom:1px solid #ccc;padding-bottom:4px;}
            .footer{text-align:center;border-top:1px dashed #000;padding-top:8px;margin-top:12px;font-size:10px;color:#999;}</style></head><body>
            <h2>${this.icn('bar-chart', '16px')} ОТЧЁТ ЗА ДЕНЬ</h2>
            <div style="text-align:center;font-size:11px;margin-bottom:12px;">${new Date().toLocaleDateString('ru-RU', {day:'2-digit',month:'long',year:'numeric'})}</div>
            <div class="section">${this.icn('wallet', '14px')} ${__('ui.total')}</div>
            <table>
                <tr><td>Выручка</td><td class="r">${todayRevenue.toLocaleString()} ${__('currency.sum')}</td></tr>
                <tr><td>Чеков</td><td class="r">${todayOrders.length}</td></tr>
                <tr><td>Позиций</td><td class="r">${itemsSold} шт.</td></tr>
            </table>
            <div class="section">${this.icn('credit-card', '14px')} Оплаты</div>
            <table>
                <tr><td>${this.icn('wallet', '14px')} Наличные</td><td class="r">${cashTotal.toLocaleString()} ${__('currency.sum')}</td></tr>
                <tr><td>${this.icn('credit-card', '14px')} Карта</td><td class="r">${cardTotal.toLocaleString()} ${__('currency.sum')}</td></tr>
                <tr><td>${this.icn('smartphone', '14px')} Payme/Click</td><td class="r">${mobileTotal.toLocaleString()} ${__('currency.sum')}</td></tr>
                <tr class="total"><td>ИТОГО</td><td class="r">${(cashTotal+cardTotal+mobileTotal).toLocaleString()} ${__('currency.sum')}</td></tr>
            </table>
            ${topItems.length ? `<div class="section">${this.icn('star', '14px')} Топ блюд</div>
            <table>${topItems.map((item, i) =>
                `<tr><td>${i+1}. ${this.foodIcon(item.emoji, '14px')} ${item.name}</td><td class="r">${item.count} шт.</td></tr>`
            ).join('')}</table>` : ''}
            <div class="footer">POS Терминал · Отчёт сформирован ${new Date().toLocaleString('ru-RU')}</div>
            <script>setTimeout(()=>window.print(),300);setTimeout(()=>window.close(),5000);</script>
        </body></html>`);
        win.document.close();
    },

    /* ======================== SHIFT ======================== */
    toggleShift() {
        if (!this._canManageMoney()) { this.showToast(__('toast.only.admin'), 'error'); return; }
        this.state.shiftOpen ? this.closeShiftAction() : this.openShift();
    },
    async openShift() {
        const fiscalOk = typeof FiscalAPI !== 'undefined' && this.state.fiscalConnected;
        if (fiscalOk) {
            try {
                const res = await FiscalAPI._request('POST', '/api/v1/shift/open');
                if (!res || !res.success) throw new Error('API error');
            } catch (e) {
                this.showToast('Не удалось открыть смену в ВКК: ' + e.message, 'error');
                return;
            }
        }
        this.state.shiftOpen = true;
        this.saveState();
        this.updateShiftUI();
        this.showToast(__('shift.open.action'), 'success');
    },
    async closeShiftAction() {
        if (this.state.order.length > 0) { this.showToast(__('toast.shift.finish.order'), 'error'); return; }
        const unsentCount = typeof FiscalQueue !== 'undefined' ? FiscalQueue.getUnsentCount() : 0;
        if (unsentCount > 0) { this.showToast(I18n.t('shift.unsent_warning') + ' (' + unsentCount + ')', 'error'); return; }
        if (!(await this._confirm(__('shift.close.title') + ' и сформировать Z-отчёт?'))) return;
        const fiscalPromise = (typeof FiscalAPI !== 'undefined' && this.state.fiscalConnected)
            ? FiscalAPI.closeShift().catch(() => {}) : Promise.resolve();
        await Promise.race([fiscalPromise, new Promise(r => setTimeout(r, 2000))]);
        this.state.shiftOpen = false;
        this.saveState();
        this.state.orderNumber = 1;
        this.updateShiftUI();
        
        // Generate Z-Report
        if (typeof Reports !== 'undefined') {
            const zReport = await Reports.generateZReport();
            await Reports.printReport(zReport);
        }

        const totalDay = this.state.orderHistory.reduce((s, o) => s + o.total, 0);
        this.showToast(`Смена закрыта. Продаж: ${totalDay.toLocaleString()} ${__('currency.sum')}`, 'success');
        try { await this._exportShiftZip(); }
        catch (_) { this.showToast(__('toast.shift.zip.fail'), 'warning'); }
    },

    async _exportShiftZip() {
        if (typeof JSZip === 'undefined') {         this.showToast(__('toast.shift.jszip.missing'), 'error'); return; }
        const zip = new JSZip();
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10);
        const today = now.toDateString();
        const shiftOrders = this.state.orderHistory.filter(o => new Date(o.date).toDateString() === today);

        const folder = zip.folder('z-report');
        folder.file('report.txt', JSON.stringify({
            closedAt: now.toISOString(),
            orderCount: shiftOrders.length,
            totalRevenue: shiftOrders.reduce((s, o) => s + o.total, 0),
            cashTotal: shiftOrders.reduce((sum, o) => {
                if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 1).reduce((s, p) => s + (p.amount || 0), 0);
                return sum + (o.paymentType === 1 ? o.total : 0);
            }, 0),
            cardTotal: shiftOrders.reduce((sum, o) => {
                if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 2).reduce((s, p) => s + (p.amount || 0), 0);
                return sum + (o.paymentType === 2 ? o.total : 0);
            }, 0),
            mobileTotal: shiftOrders.reduce((sum, o) => {
                if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 5).reduce((s, p) => s + (p.amount || 0), 0);
                return sum + (o.paymentType === 5 ? o.total : 0);
            }, 0),
            itemsTotal: shiftOrders.reduce((s, o) => s + o.items.reduce((si, it) => si + it.quantity, 0), 0),
        }, null, 2));

        folder.folder('orders').file('all.txt', JSON.stringify(shiftOrders, null, 2));
        folder.folder('menu').file('items.txt', JSON.stringify(this.menu, null, 2));
        folder.folder('menu').file('categories.txt', JSON.stringify(this.categories, null, 2));
        folder.file('settings.txt', JSON.stringify({
            tin: this.state.tin, cashierName: this.state.cashierName,
            receiptCompany: this.state.receiptCompany,
            receiptAddress: this.state.receiptAddress,
        }, null, 2));
        folder.file('staff.txt', JSON.stringify(this.staff, null, 2));

        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'z-report-' + dateStr + '.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast('ZIP сохранён в Загрузки: ' + a.download, 'success');
    },
    updateShiftUI() {
        const indicator = document.getElementById('shift-indicator');
        const label = document.getElementById('shift-label');
        const shiftBtn = document.getElementById('shift-btn');
        if (indicator) indicator.className = 'status-dot ' + (this.state.shiftOpen ? 'online' : 'offline');
        if (label) label.textContent = this.state.shiftOpen ? __('shift.close.title') : __('shift.open.title');
        if (shiftBtn) {
            if (this.state.shiftOpen) {
                shiftBtn.classList.add('active');
            } else {
                shiftBtn.classList.remove('active');
            }
        }
    },

    /* ======================== CLOCK ======================== */
    startClock() {
        const update = () => {
            const now = new Date();
            const clock = document.getElementById('clock');
            const dateEl = document.getElementById('current-date');
            if (clock) clock.textContent = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            if (dateEl) dateEl.textContent = now.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
        };
        update();
        setInterval(update, 1000);
    },

    /* ======================== FISCAL ======================== */
    async checkFiscalStatus() {
        const dot = document.getElementById('fiscal-status');
        const label = document.getElementById('fiscal-label');
        try {
            if (typeof FiscalAPI === 'undefined') throw new Error('FiscalAPI not loaded');
            const status = await Promise.race([
                FiscalAPI.checkStatus(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000))
            ]);
            this.state.fiscalConnected = status.connected;
            if (status.forceUpdate) {
                const sys = status.systemInfo || {};
                let msg = '⚠️ Требуется обязательное обновление ВКК!\n\nТекущая версия: ' + (sys.currentVersion || '?') + '\nПоследняя версия: ' + (sys.latestVersion || '?');
                if (sys.filePath) msg += '\n\nСкачайте обновление: ' + sys.filePath;
                msg += '\n\nОбновите приложение для продолжения работы.';
                alert(msg);
                if (dot) { dot.className = 'status-dot offline'; dot.title = 'Требуется обновление ВКК'; }
                if (label) { label.className = 'status-label offline'; label.textContent = 'ФМ ✗'; }
                this.state.fiscalConnected = false;
                return;
            }
            if (status.userStatus && (status.userStatus.statusCode !== 200 || status.userStatus.locked)) {
                const errMsg = status.userStatus.locked ? 'Аккаунт ВКК заблокирован' : (status.userStatus.statusMessage || 'Статус аккаунта: ' + status.userStatus.statusCode);
                if (label) { label.className = 'status-label offline'; label.textContent = '⚠️ ' + errMsg; }
                if (dot) { dot.className = 'status-dot offline'; dot.title = errMsg; }
                this.state.fiscalConnected = false;
                this.showToast(errMsg, 'error');
                return;
            }
            if (dot) { dot.className = 'status-dot ' + (status.connected ? 'online' : 'offline'); dot.title = status.connected ? 'ФМ подключён' : 'ФМ не подключён'; }
            if (label) { label.className = 'status-label ' + (status.connected ? 'online' : 'offline'); label.textContent = status.connected ? 'ФМ ✓' : 'ФМ ✗'; }
            if (status.connected && typeof FiscalQueue !== 'undefined') {
                FiscalQueue.process();
            }
            if (status.connected && status.unsentCount > 0 && typeof FiscalAPI !== 'undefined') {
                FiscalAPI.syncFiscalModule().then(ok => {
                    if (ok) console.log('[ФискалAPI] ✅ Непроведённые чеки отправлены в OFD');
                }).catch(() => {});
            }
        } catch (e) {
            this.state.fiscalConnected = false;
            if (dot) { dot.className = 'status-dot offline'; dot.title = 'FiscalDriveAPI недоступна'; }
            if (label) { label.className = 'status-label offline'; label.textContent = 'ФМ ✗'; }
        }
        this.updateUnsentCount();
        this._vvcStatusChecked = true;
        this._updateRoleUI();
    },

    /* ======================== SYNC DATA ======================== */
    async syncData() {
        const steps = [
            { id: 'fm', label: __('ui.checking') },
            { id: 'server', label: 'Синхронизация с сервером' },
            { id: 'menu', label: 'Обновление меню и данных' },
            { id: 'fiscal', label: 'Проверка очереди фискальных чеков' },
            { id: 'done', label: 'Завершение синхронизации' },
        ];
        let currentStep = 0;
        let results = {};
        let hasError = false;

        const render = (activeIdx, errorIdx) => {
            const overlay = document.getElementById('modal-overlay');
            const modal = document.getElementById('modal-content');
            if (!overlay || !modal) return;
            const pct = Math.min(Math.round((activeIdx / steps.length) * 100), 100);
            modal.innerHTML = `
                <div class="sync-modal">
                    <div class="sync-header">
                        <div class="sync-header-icon">${this.icn('refresh-ccw', '26px')}</div>
                        <div class="sync-header-title">Синхронизация</div>
                        <div class="sync-header-sub">Проверка и обновление всех данных...</div>
                    </div>
                    <div class="sync-progress-track">
                        <div class="sync-progress-bar" id="sync-progress-bar" style="width:${pct}%;"></div>
                    </div>
                    <div class="sync-steps">
                        ${steps.map((s, i) => {
                            let cls = 'sync-step';
                            let iconHtml = '';
                            let statusText = '';
                            if (i < activeIdx) {
                                cls += ' done';
                                iconHtml = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
                                statusText = 'Готово';
                            } else if (i === activeIdx) {
                                if (i === errorIdx) {
                                    cls += ' error';
                                    iconHtml = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
                                    statusText = 'Ошибка';
                                } else {
                                    cls += ' active';
                                    iconHtml = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>';
                                    statusText = 'Выполняется...';
                                }
                            } else {
                                cls += ' pending';
                                iconHtml = '<span style="opacity:0.4;">' + (i + 1) + '</span>';
                                statusText = 'Ожидание';
                            }
                            return `<div class="${cls}">
                                <div class="sync-step-icon">${iconHtml}</div>
                                <div class="sync-step-label">${s.label}</div>
                                <div class="sync-step-status">${statusText}</div>
                            </div>`;
                        }).join('')}
                    </div>
                    <div class="sync-footer">
                        ${activeIdx >= steps.length ? `<div class="sync-result-text">${hasError
                            ? this.icn('alert-triangle', '16px') + ' Синхронизация завершена с ошибками. Проверьте подключения.'
                            : this.icn('check', '16px') + ' Все данные успешно синхронизированы.'}</div>
                        <button class="sync-btn-close" onclick="POS.closeModal()">${this.icn('check', '16px')} Готово</button>`
                        : ''}
                    </div>
                </div>`;
            overlay.classList.add('active');
        };

        const delay = (ms) => new Promise(r => setTimeout(r, ms));

        render(0);
        await delay(400);

        // Step 1: Check FM
        currentStep = 1;
        render(1);
        try {
            if (typeof FiscalAPI !== 'undefined') {
                const status = await Promise.race([
                    FiscalAPI.checkStatus(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 5000))
                ]);
                results.fm = status.connected ? 'ФМ подключён' : 'ФМ не подключён';
                this.state.fiscalConnected = status.connected;
                if (status.connected && typeof FiscalQueue !== 'undefined') {
                    FiscalQueue.process();
                }
                await this.saveState();
            } else {
                results.fm = 'FiscalAPI не загружен';
            }
        } catch (e) {
            results.fm = 'Ошибка: ' + e.message;
            hasError = true;
        }
        await delay(300);

        // Step 2: Sync data from backend + VKК API
        currentStep = 2;
        render(2, hasError ? 1 : -1);
        try {
            if (typeof DB !== 'undefined') {
                // Backend has endpoints for: orders, menu, guests
                for (const store of ['orders', 'menu', 'guests']) {
                    const items = await DB.getAll(store);
                    if (Array.isArray(items) && items.length > 0) {
                        results.server = `${store}: ${items.length} записей`;
                    }
                }
                // Categories and tables are local only
                const cats = await DB._getAllLocal('categories');
                if (Array.isArray(cats) && cats.length > 0 && !cats.some(c => c.id === 'all')) {
                    cats.unshift({ id: 'all', name: 'Всё', emoji: 'clipboard' });
                    await DB._putLocal('categories', { id: 'all', name: 'Всё', emoji: 'clipboard' });
                }
                results.server = results.server || 'Данные загружены';
            } else {
                results.server = 'База данных не доступна';
            }
            // Sync from VKК API
            const token = this.state.vcrToken || (typeof FiscalAPI !== 'undefined' ? FiscalAPI.config.token : null);
            if (token) {
                await this._syncProductsFromVcr(token);
                await this._syncCategoriesFromVcr(token);
                // Save VKК data to backend SQLite
                try {
                    await fetch('/api/sync/menu', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ items: this.menu })
                    });
                    await fetch('/api/sync/categories', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ items: this.categories.filter(c => c.id !== 'all') })
                    });
                } catch (beErr) {
                    console.warn('[Sync] Backend sync error:', beErr.message);
                }
                results.server += ' + ВКК';
            }
        } catch (e) {
            results.server = 'Ошибка: ' + e.message;
            hasError = true;
        }
        await delay(300);

        // Step 3: Update menu and data
        currentStep = 3;
        render(3, hasError ? 2 : -1);
        try {
            // If VKК sync didn't run, load from IndexedDB
            if (!this.state.vcrToken && typeof DB !== 'undefined') {
                const cats = await DB._getAllLocal('categories');
                if (Array.isArray(cats) && cats.length > 0) {
                    if (!cats.some(c => c.id === 'all')) {
                        cats.unshift({ id: 'all', name: 'Всё', emoji: 'clipboard' });
                    }
                    this.categories = cats;
                }
                const menuItems = await DB._getAllLocal('menu');
                if (Array.isArray(menuItems) && menuItems.length > 0) {
                    this.menu = menuItems;
                }
            }
            this._saveMenuData();
            this.renderCategories();
            this.renderMenu();
            results.menu = `Меню и категории обновлены`;
        } catch (e) {
            results.menu = 'Ошибка: ' + e.message;
            hasError = true;
        }
        await delay(300);

        // Step 4: Check fiscal queue
        currentStep = 4;
        render(4, hasError ? 3 : -1);
        try {
            if (typeof FiscalQueue !== 'undefined') {
                const queue = FiscalQueue.queue || [];
                const qCount = Array.isArray(queue) ? queue.length : 0;
                if (qCount > 0) {
                    const processed = await FiscalQueue.process();
                    results.fiscal = `Обработано ${processed || 0} чеков из очереди`;
                } else {
                    results.fiscal = 'Очередь фискальных чеков пуста';
                }
            } else {
                results.fiscal = 'FiscalQueue не загружен';
            }
        } catch (e) {
            results.fiscal = 'Ошибка: ' + e.message;
            hasError = true;
        }
        await delay(300);

        // Step 5: Done
        currentStep = 5;
        render(5, hasError ? 4 : -1);
        this.checkFiscalStatus();

        // Log sync action
        if (typeof DB !== 'undefined') {
            DB.logAction('sync', results, this.state.cashierName || 'System');
        }
    },

    /* ======================== SEARCH & FILTER ======================== */
    filterMenu(query) { this.state.searchQuery = query.toLowerCase(); this.renderMenu(); },
    selectCategory(categoryId) { this.state.currentCategory = categoryId; this.renderCategories(); this.renderMenu(); },

    /* ======================== EVENTS ======================== */
    bindEvents() {
        const overlay = document.getElementById('modal-overlay');
        if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) this.closeModal(); });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
            if (e.key === 'Enter') {
                const btn = document.getElementById('cash-confirm-btn');
                if (btn && !btn.disabled) btn.click();
            }
            if (e.key === 'F1') { e.preventDefault(); this.showDiscountModal(); }
            if (e.key === 'F2') { e.preventDefault(); this.selectTable(); }
            if (e.key === 'F3') { e.preventDefault(); this.showOrderHistory(); }
            if (e.key === 'F4') { e.preventDefault(); this.showParkedOrders(); }
            if (e.key === 'F5') { e.preventDefault(); this.showServiceChargeModal(); }
            if (e.key === 'F6') { e.preventDefault(); this.showAvailabilityManager(); }
            if (e.key === 'F12') { e.preventDefault(); this.showSettings(); }
        });
        const searchInput = document.getElementById('menu-search');
        if (searchInput) searchInput.addEventListener('input', (e) => this.filterMenu(e.target.value));
    },

    /* ======================== TOAST ======================== */
    showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        container.querySelectorAll('.hiding').forEach(t => t.remove());
        while (container.children.length >= 3) container.firstChild.remove();
        const toast = document.createElement('div');
        toast.className = 'toast ' + type;
        const iconMap = { success: 'check', error: 'x', info: 'info', warning: 'alert-triangle' };
        let iconName = iconMap[type] || 'info';
        let cleanMessage = message;
        
        const prefixMap = { '⏸️': 'pause', '↩️': 'rotate-ccw', '🗑️': 'trash-2', '📦': 'package', '✅': 'check', '❌': 'x', 'ℹ️': 'info', '⚠️': 'alert-triangle' };
        for (const [prefix, icn] of Object.entries(prefixMap)) {
            if (cleanMessage.startsWith(prefix)) {
                iconName = icn;
                cleanMessage = cleanMessage.slice(prefix.length).trim();
                break;
            }
        }
        
        toast.innerHTML = `<span class="toast-icon">${this.icn(iconName, '18px')}</span><div class="toast-content"><div class="toast-title">${cleanMessage}</div></div>`;
        container.appendChild(toast);
        setTimeout(() => { toast.classList.add('hiding'); setTimeout(() => toast.remove(), 400); }, 3000);
    },

    /* ======================== SETTINGS ======================== */
    showSettings(tab) {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        const t = tab || this._settingsActiveTab || 'main';
        this._settingsActiveTab = t;

        let content = '';
        if (t === 'main') {
            content = this._settingsMainContent();
        } else if (t === 'help') {
            content = this._settingsHelpContent();
        }

        const contentMaxWidth = t === 'help' ? '1200px' : '600px';

        const existing = modal.querySelector('.modal');
        if (existing) {
            const bodyContainer = existing.querySelector('.modal-body > div');
            if (bodyContainer) {
                bodyContainer.innerHTML = content;
                bodyContainer.style.maxWidth = contentMaxWidth;
            }
            const tabBar = existing.querySelector('.modal-header + div');
            if (tabBar) {
                tabBar.innerHTML = `<div style="display:flex;gap:10px;overflow-x:auto;justify-content:center;">
                    <button class="btn btn-sm ${t === 'main' ? 'btn-primary' : 'btn-secondary'}"
                        style="padding:10px 20px;font-size:13px;font-weight:600;white-space:nowrap;transform:none!important;${t === 'main' ? 'box-shadow:0 3px 10px rgba(124,58,237,0.35);' : ''}"
                        onclick="POS.showSettings('main')">${this.icn('settings', '14px')} ${__('settings.tab.main')}</button>
                    <button class="btn btn-sm ${t === 'help' ? 'btn-primary' : 'btn-secondary'}"
                        style="padding:10px 20px;font-size:13px;font-weight:600;white-space:nowrap;transform:none!important;${t === 'help' ? 'box-shadow:0 3px 10px rgba(124,58,237,0.35);' : ''}"
                        onclick="POS.showSettings('help')">${this.icn('help-circle', '14px')} ${__('settings.tab.help')}</button>
                </div>`;
            }
        } else {
            modal.innerHTML = `
                <div class="modal modal-full">
                    <div class="modal-header"><div class="modal-title">${this.icn('settings', '18px')} ${__('settings.title')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                    <div style="padding:16px 24px 14px;border-bottom:1px solid var(--border-subtle);flex-shrink:0;">
                        <div style="display:flex;gap:10px;overflow-x:auto;justify-content:center;">
                            <button class="btn btn-sm ${t === 'main' ? 'btn-primary' : 'btn-secondary'}"
                                style="padding:10px 20px;font-size:13px;font-weight:600;white-space:nowrap;transform:none!important;${t === 'main' ? 'box-shadow:0 3px 10px rgba(124,58,237,0.35);' : ''}"
                                onclick="POS.showSettings('main')">${this.icn('settings', '14px')} ${__('settings.tab.main')}</button>
                            <button class="btn btn-sm ${t === 'help' ? 'btn-primary' : 'btn-secondary'}"
                                style="padding:10px 20px;font-size:13px;font-weight:600;white-space:nowrap;transform:none!important;${t === 'help' ? 'box-shadow:0 3px 10px rgba(124,58,237,0.35);' : ''}"
                                onclick="POS.showSettings('help')">${this.icn('help-circle', '14px')} ${__('settings.tab.help')}</button>
                        </div>
                    </div>
                    <div class="modal-body" style="flex:1;overflow-y:auto;padding:0;">
                        <div style="max-width:${contentMaxWidth};margin:0 auto;width:100%;padding:24px;${t === 'main' ? 'background:var(--bg-card);border-radius:12px;margin-top:16px;margin-bottom:16px;' : ''}">
                            ${content}
                        </div>
                    </div>
                </div>`;
            overlay.classList.add('active');
        }
    },

    _settingsMainContent() {
        return `
            <div style="margin-bottom: 32px;">
                <h3 style="margin: 0 0 16px 0; font-size: 15px; border-bottom: 2px solid var(--primary-muted); padding-bottom: 6px; color: var(--primary); font-weight: 700;">${__('settings.general')}</h3>
                <div class="form-group">
                    <label class="form-label" style="display:flex;align-items:center;gap:6px;">
                        ${this.icn('user', '14px')} ${__('settings.cashier')}
                    </label>
                    <input type="text" class="form-input" id="set-cashier" value="${this.state.cashierName}">
                </div>
                <div class="form-group">
                    <label class="form-label" style="display:flex;align-items:center;gap:6px;">
                        ${this.icn('file-text', '14px')} ${__('settings.tin')}
                    </label>
                    <input type="text" class="form-input" id="set-tin" value="${this.state.tin}">
                </div>
                <div class="form-group">
                    <label class="form-label" style="display:flex;align-items:center;gap:6px;">
                        ${this.icn('percent', '14px')} ${__('settings.vat.rate')}
                    </label>
                    <input type="number" class="form-input" id="set-vat" value="${this.state.vatRate || 12}" min="0" max="20">
                </div>
            </div>

            <div style="margin-bottom: 32px;">
                <h3 style="margin: 0 0 16px 0; font-size: 15px; border-bottom: 2px solid var(--primary-muted); padding-bottom: 6px; color: var(--primary); font-weight: 700;">${__('settings.vcr.section')}</h3>
                
                <div class="form-group" style="display:flex; align-items:center; gap:8px; margin-bottom: 16px;">
                    <input type="checkbox" id="set-vcr-enabled" ${this.state.vcrEnabled !== false ? 'checked' : ''} style="width:18px; height:18px; cursor:pointer;">
                    <label for="set-vcr-enabled" style="font-weight:600; cursor:pointer; font-size:13px;">${__('settings.vcr.enable')}</label>
                </div>
                <div class="form-group">
                    <label class="form-label" style="display:flex;align-items:center;gap:6px;">
                        ${this.icn('link', '14px')} ${__('settings.vcr.url')}
                    </label>
                    <input type="text" class="form-input" id="set-vcr-url" value="${this.state.vcrUrl || 'http://127.0.0.1:5614'}">
                </div>
                <div class="form-group">
                    <label class="form-label" style="display:flex;align-items:center;gap:6px;">
                        ${this.icn('hash', '14px')} ${__('settings.vcr.termid')}
                    </label>
                    <input type="text" class="form-input" id="set-vcr-termid" value="${this.state.vcrTerminalId || 'LG420211640998'}">
                </div>
            </div>

            <div style="margin-bottom: 32px;">

                <div style="margin-bottom: 18px;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 10px;">
                        ${this.icn('globe', '16px')} ${__('settings.language')}
                    </label>
                    <div style="display: flex; gap: 4px; background: var(--bg-input); padding: 4px; border-radius: var(--radius-sm);">
                        <button class="btn btn-sm ${this.state.language === 'uz' ? 'btn-primary' : 'btn-secondary'}" onclick="POS.changeLanguage('uz')" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.language.uz')}</button>
                        <button class="btn btn-sm ${this.state.language === 'ru' ? 'btn-primary' : 'btn-secondary'}" onclick="POS.changeLanguage('ru')" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.language.ru')}</button>
                    </div>
                </div>

                <div style="margin-bottom: 18px;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 10px;">
                        ${this.icn('type', '16px')} ${__('settings.font.size')}
                    </label>
                    <div style="display: flex; gap: 4px; background: var(--bg-input); padding: 4px; border-radius: var(--radius-sm);">
                        <button class="btn btn-sm ${(this.state.fontSize || 'medium') === 'small' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeFontSize('small')" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.font.small')}</button>
                        <button class="btn btn-sm ${(this.state.fontSize || 'medium') === 'medium' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeFontSize('medium')" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.font.medium')}</button>
                        <button class="btn btn-sm ${(this.state.fontSize || 'medium') === 'large' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeFontSize('large')" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.font.large')}</button>
                    </div>
                </div>

                <div style="margin-bottom: 18px;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 10px;">
                        ${this.icn('printer', '16px')} ${__('settings.printer.receipt')}
                    </label>
                    <select id="printer-select-receipt" class="form-input" style="width:100%;padding:8px 12px;font-size:13px;" onchange="POS._adminChangePrinter(this.value,'receipt')">
                        ${this._printerOptions(this.state.selectedPrinter)}
                    </select>
                </div>

                <div style="margin-bottom: 18px;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin-bottom: 10px;">
                        ${this.icn('printer', '16px')} ${__('settings.printer.kitchen')}
                    </label>
                    <select id="printer-select-kitchen" class="form-input" style="width:100%;padding:8px 12px;font-size:13px;" onchange="POS._adminChangePrinter(this.value,'kitchen')">
                        ${this._printerOptions(this.state.kitchenPrinter || this.state.selectedPrinter)}
                    </select>
                </div>

                <div style="display:flex;gap:6px;margin-bottom:6px;">
                    <button class="btn btn-secondary btn-sm" onclick="POS._adminFindPrinter()" title="${__('settings.printer.find')}" style="flex:1;padding:8px 14px;font-size:13px;">${this.icn('search', '14px')} ${__('settings.printer.find')}</button>
                    <button class="btn btn-secondary btn-sm" onclick="POS._adminTestPrinter()" title="${__('settings.printer.test')}" style="flex:1;padding:8px 14px;font-size:13px;">${this.icn('printer', '14px')} ${__('settings.printer.test')}</button>
                </div>
                <div id="printer-status" style="font-size:12px;color:var(--text-muted);margin-top:6px;"></div>

                <div style="margin-bottom: 18px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin: 0;">
                            ${this.icn('lock', '16px')} ${__('settings.pin.lock')}
                        </label>
                        <label class="switch">
                            <input type="checkbox" id="set-pin-lock-toggle" ${this.state.pinLockEnabled !== false ? 'checked' : ''} onchange="POS._adminTogglePinLock()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div id="pin-lock-time-group" style="display: ${this.state.pinLockEnabled !== false ? 'flex' : 'none'}; gap: 6px; background: var(--bg-input); padding: 4px; border-radius: var(--radius-sm); transition: all 0.3s;">
                        <button class="btn btn-sm ${(this.state.pinLockTime || 30) === 10 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangePinLockTime(10)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.lock.time.10')}</button>
                        <button class="btn btn-sm ${(this.state.pinLockTime || 30) === 20 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangePinLockTime(20)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.lock.time.20')}</button>
                        <button class="btn btn-sm ${(this.state.pinLockTime || 30) === 30 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangePinLockTime(30)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.lock.time.30')}</button>
                        <button class="btn btn-sm ${(this.state.pinLockTime || 30) === 60 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangePinLockTime(60)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.lock.time.60')}</button>
                    </div>
                </div>

                <div style="margin-bottom: 18px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <label class="form-label" style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text-secondary); margin: 0;">
                            ${this.icn('refresh-cw', '16px')} ${__('settings.auto.sync')}
                        </label>
                        <label class="switch">
                            <input type="checkbox" id="set-auto-sync-toggle" ${this.state.autoSyncEnabled !== false ? 'checked' : ''} onchange="POS._adminToggleAutoSync()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div id="auto-sync-time-group" style="display: ${this.state.autoSyncEnabled !== false ? 'flex' : 'none'}; gap: 6px; background: var(--bg-input); padding: 4px; border-radius: var(--radius-sm); transition: all 0.3s;">
                        <button class="btn btn-sm ${(this.state.autoSyncTime || 30) === 1 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeAutoSyncTime(1)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.sync.1')}</button>
                        <button class="btn btn-sm ${(this.state.autoSyncTime || 30) === 5 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeAutoSyncTime(5)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.sync.5')}</button>
                        <button class="btn btn-sm ${(this.state.autoSyncTime || 30) === 10 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeAutoSyncTime(10)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.sync.10')}</button>
                        <button class="btn btn-sm ${(this.state.autoSyncTime || 30) === 30 ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminChangeAutoSyncTime(30)" style="flex: 1; border: none; font-size: 13px; padding: 8px 0;">${__('settings.sync.30')}</button>
                    </div>
                </div>

                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <label class="form-label" style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--text-secondary); margin: 0;">
                            ${this.icn('arrow-up-circle', '14px')} ${__('settings.auto.update')}
                        </label>
                        <label class="switch">
                            <input type="checkbox" id="set-auto-update-toggle" ${this.state.autoUpdateEnabled !== false ? 'checked' : ''} onchange="POS._adminToggleAutoUpdate()">
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
                        ${__('settings.wifi.only')}
                    </div>
                </div>
            </div>

            <div style="border-top: 1px solid var(--border-subtle); padding-top: 20px;">
                <div style="display:flex; gap:12px;">
                    <button class="btn btn-primary" style="flex:1; padding: 12px;" onclick="POS.saveSettings()">${__('settings.save.btn')}</button>
                    <button class="btn btn-secondary" style="padding: 12px;" onclick="POS.testFiscalConnection()" title="${__('settings.test.btn')}">${this.icn('cpu', '16px')} ${__('settings.check.btn')}</button>
                </div>
                <div id="settings-status" style="margin-top:12px;"></div>
            </div>`;
    },

    _settingsHelpContent() {
        const qrPlaceholder = 'https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https%3A%2F%2Ft.me%2Fsupport';
        return `
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;align-items:start;">

                <!-- Column 1: Каналы связи -->
                <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:20px;">
                    <h3 style="margin:0 0 20px 0;font-size:16px;font-weight:700;color:var(--text-primary);">${__('settings.help.contact')}</h3>

                    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('send', '18px')}</div>
                            <span style="font-size:14px;font-weight:600;">Telegram support</span>
                        </div>
                        <img src="${qrPlaceholder}" style="width:64px;height:64px;border-radius:4px;" alt="Telegram QR"/>
                    </div>

                    <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border-subtle);">
                        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('phone', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">+998 71 123 45 67</span>
                    </div>

                    <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border-subtle);">
                        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('mail', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">support@example.com</span>
                    </div>

                    <div style="display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--border-subtle);">
                        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('map-pin', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">166 Muqimiy ko'chasi</span>
                    </div>

                    <h4 style="margin:20px 0 12px 0;font-size:14px;font-weight:700;color:var(--text-primary);">${__('settings.help.responsible')}</h4>

                    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-subtle);">
                        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('user', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">To'lqinov Azizbek</span>
                    </div>

                    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;">
                        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('phone-call', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">+998 90 123 45 67</span>
                    </div>
                </div>

                <!-- Column 2: FAQ -->
                <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:20px;">
                    <h3 style="margin:0 0 20px 0;font-size:16px;font-weight:700;color:var(--text-primary);">${__('settings.help.faq')}</h3>

                    <a href="#" onclick="event.preventDefault();POS._showFaq('turn-on-off')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;color:inherit;">
                        <span style="font-size:14px;font-weight:500;">${__('settings.faq.turn.on.off')}</span>
                        ${this.icn('chevron-right', '18px')}
                    </a>
                    <a href="#" onclick="event.preventDefault();POS._showFaq('receipt-error')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;color:inherit;">
                        <span style="font-size:14px;font-weight:500;">${__('settings.faq.receipt.error')}</span>
                        ${this.icn('chevron-right', '18px')}
                    </a>
                    <a href="#" onclick="event.preventDefault();POS._showFaq('no-internet')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;color:inherit;">
                        <span style="font-size:14px;font-weight:500;">${__('settings.faq.no.internet')}</span>
                        ${this.icn('chevron-right', '18px')}
                    </a>
                    <a href="#" onclick="event.preventDefault();POS._showFaq('update')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;text-decoration:none;color:inherit;">
                        <span style="font-size:14px;font-weight:500;">${__('settings.faq.update')}</span>
                        ${this.icn('chevron-right', '18px')}
                    </a>
                </div>

                <!-- Column 3: Guide -->
                <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:20px;">
                    <h3 style="margin:0 0 20px 0;font-size:16px;font-weight:700;color:var(--text-primary);">${__('settings.help.guide')}</h3>

                    <a href="#" onclick="event.preventDefault();POS._showFaq('video')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;color:inherit;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:36px;height:36px;border-radius:8px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('play', '18px')}</div>
                            <span style="font-size:14px;font-weight:600;">${__('settings.help.video')}</span>
                        </div>
                        ${this.icn('chevron-right', '18px')}
                    </a>

                    <a href="#" onclick="event.preventDefault();POS._showFaq('pdf')" style="display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-bottom:1px solid var(--border-subtle);text-decoration:none;color:inherit;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div style="width:36px;height:36px;border-radius:8px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('file-text', '18px')}</div>
                            <span style="font-size:14px;font-weight:600;">${__('settings.help.pdf.guide')}</span>
                        </div>
                        ${this.icn('chevron-right', '18px')}
                    </a>

                    <h4 style="margin:20px 0 12px 0;font-size:14px;font-weight:700;color:var(--text-primary);">${__('settings.help.support')}</h4>

                    <a href="#" onclick="event.preventDefault();POS._showFaq('remote')" style="display:flex;align-items:center;gap:12px;padding:10px 0;text-decoration:none;color:inherit;">
                        <div style="width:36px;height:36px;border-radius:8px;background:var(--primary-muted);display:flex;align-items:center;justify-content:center;color:var(--primary);">${this.icn('monitor', '18px')}</div>
                        <span style="font-size:14px;font-weight:600;">${__('settings.help.remote')}</span>
                    </a>
                </div>
            </div>`;
    },

    _showFaq(topic) {
        const faqs = {
            'turn-on-off': { title: __('settings.faq.turn.on.off'), text: __('settings.faq.turn.on.off.text') },
            'receipt-error': { title: __('settings.faq.receipt.error'), text: __('settings.faq.receipt.error.text') },
            'no-internet': { title: __('settings.faq.no.internet'), text: __('settings.faq.no.internet.text') },
            'update': { title: __('settings.faq.update'), text: __('settings.faq.update.text') },
            'video': { title: __('settings.faq.video'), text: __('settings.faq.video.text') },
            'pdf': { title: __('settings.faq.pdf'), text: __('settings.faq.pdf.text') },
            'remote': { title: __('settings.faq.remote'), text: __('settings.faq.remote.text') },
        };
        const faq = faqs[topic];
        if (!faq) return;
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = `
            <div class="modal" style="max-width:480px;">
                <div class="modal-header"><div class="modal-title">${this.icn('help-circle', '18px')} ${faq.title}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                <div class="modal-body" style="padding:24px;">
                    <div style="font-size:14px;color:var(--text-primary);line-height:1.6;">${faq.text}</div>
                    <div style="margin-top:20px;display:flex;justify-content:flex-end;">
                        <button class="btn btn-primary" onclick="POS.closeModal()">${__('settings.close')}</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    saveSettings() {
        const cashier = document.getElementById('set-cashier');
        const tin = document.getElementById('set-tin');
        const vat = document.getElementById('set-vat');
        
        const vcrEnabled = document.getElementById('set-vcr-enabled');
        const vcrUrl = document.getElementById('set-vcr-url');
        const vcrUser = document.getElementById('set-vcr-user');
        const vcrPass = document.getElementById('set-vcr-pass');
        const vcrTermId = document.getElementById('set-vcr-termid');

        if (cashier) {
            this.state.cashierName = cashier.value.trim() || 'Администратор';
            if (this.state.currentStaff) this.state.currentStaff.name = this.state.cashierName;
        }
        if (tin) this.state.tin = tin.value.trim() || '123456789';
        if (vat) this.state.vatRate = Math.max(0, parseInt(vat.value, 10) || 12);
        
        if (vcrEnabled) this.state.vcrEnabled = vcrEnabled.checked;
        if (vcrUrl) this.state.vcrUrl = vcrUrl.value.trim();
        if (vcrTermId) this.state.vcrTerminalId = vcrTermId.value.trim();

        this.syncVcrConfig();
        this.saveState();
        this.renderOrder();
        this.closeModal();
        this.checkFiscalStatus();
        this.showToast(__('settings.saved'), 'success');
    },

    changeLanguage(lang) {
        if (typeof I18n !== 'undefined') {
            I18n.setLanguage(lang);
            this.state.language = lang;
            this.saveState();
            this.updateShiftUI();
            this._updateRoleUI();
            this.updateThemeButton();
            if (this.state.loggedIn) {
                this.renderCategories();
                this.renderMenu();
                this.renderOrder();
            }
            this.showSettings();
            this.showToast(__('settings.lang.changed'), 'success');
        }
    },

    toggleTheme() {
        this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.state.theme);
        this.saveState();
        this.updateThemeButton();
    },

    updateThemeButton() {
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            btn.innerHTML = this.state.theme === 'dark' ? this.icn('sun', '18px') : this.icn('moon', '18px');
            btn.title = this.state.theme === 'dark' ? (typeof I18n !== 'undefined' && I18n.t ? I18n.t('theme.btn.light') : 'Включить светлую тему') : (typeof I18n !== 'undefined' && I18n.t ? I18n.t('theme.btn.dark') : 'Включить темную тему');
        }
    },

    async testFiscalConnection() {
        const statusEl = document.getElementById('settings-status');
        if (statusEl) statusEl.innerHTML = '<div style="padding:12px;text-align:center;color:var(--text-muted);font-size:13px;">' + this.icn('refresh-ccw', '14px') + ' ' + __('ui.checking') + '</div>';
        
        const vcrEnabled = document.getElementById('set-vcr-enabled');
        const vcrUrl = document.getElementById('set-vcr-url');
        const vcrUser = document.getElementById('set-vcr-user');
        const vcrPass = document.getElementById('set-vcr-pass');
        const vcrTermId = document.getElementById('set-vcr-termid');

        if (typeof FiscalAPI !== 'undefined') {
            if (vcrUrl) FiscalAPI.config.vcrUrl = vcrUrl.value.trim();
            if (vcrUser) FiscalAPI.config.vcrUsername = vcrUser.value.trim();
            if (vcrPass) FiscalAPI.config.vcrPassword = vcrPass.value.trim();
            if (vcrTermId) FiscalAPI.config.vcrTerminalId = vcrTermId.value.trim();
            if (vcrEnabled) FiscalAPI.config.vcrEnabled = vcrEnabled.checked;
            FiscalAPI.config.mockMode = !FiscalAPI.config.vcrEnabled;
        }

        try {
            if (typeof FiscalAPI === 'undefined') throw new Error('FiscalAPI не загружен');
            const result = await FiscalAPI.checkStatus();
            if (statusEl) {
                statusEl.innerHTML = result.connected
                    ? '<div style="padding:12px;background:var(--primary-muted);border-radius:var(--radius-sm);color:var(--primary);font-size:13px;font-weight:600;">' + this.icn('check', '14px') + ' ВКК подключена! Терминал: ' + (result.terminalId || 'OK') + '</div>'
                    : '<div style="padding:12px;background:var(--danger-muted);border-radius:var(--radius-sm);color:var(--danger);font-size:13px;">' + this.icn('x', '14px') + ' ВКК не отвечает. Убедитесь, что служба ВКК запущена.</div>';
            }
        } catch (err) {
            if (statusEl) statusEl.innerHTML = '<div style="padding:12px;background:var(--danger-muted);border-radius:var(--radius-sm);color:var(--danger);font-size:13px;">' + this.icn('x', '14px') + ' ' + (err.message || 'Ошибка') + '</div>';
        }
        this.checkFiscalStatus();
    },

    /* ======================== ADMIN PANEL ======================== */
    showAdminPanel(tab) {
        if (!this.state.currentStaff || this.state.currentStaff.role !== 'admin') {
            this.showToast(__('admin.only'), 'error');
            return;
        }
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        const t = tab || 'menu';

        const tabs = [
            { id: 'menu', label: this.icn('coffee', '14px') + ' ' + __('admin.tab.menu') },
            { id: 'cats', label: this.icn('folder', '14px') + ' ' + __('admin.tab.cats') },
            { id: 'mods', label: this.icn('plus', '14px') + ' ' + __('admin.tab.mods') },
            { id: 'staff', label: this.icn('users', '14px') + ' ' + __('admin.tab.staff') },
            { id: 'warehouse', label: this.icn('archive', '14px') + ' ' + __('admin.tab.warehouse') },
            { id: 'crm', label: this.icn('heart', '14px') + ' ' + __('admin.tab.crm') },
            { id: 'reports', label: this.icn('bar-chart', '14px') + ' ' + __('admin.tab.reports') },
            { id: 'receipt', label: this.icn('file-text', '14px') + ' ' + __('admin.tab.receipt') },
            { id: 'data', label: this.icn('database', '14px') + ' ' + __('admin.tab.data') },
        ];

        const tabBar = `<div style="display:flex;gap:6px;padding:16px 20px;border-bottom:1px solid var(--border-subtle);overflow-x:auto;flex-shrink:0;">
            ${tabs.map(tab =>
                `<button class="btn ${t === tab.id ? 'btn-primary' : 'btn-secondary'}"
                    style="padding:10px 18px;font-size:13px;font-weight:600;white-space:nowrap;"
                    onclick="POS.showAdminPanel('${tab.id}')">${tab.label}</button>`
            ).join('')}
        </div>`;

        let content = '';
        if (t === 'menu') content = this._adminMenuContent();
        else if (t === 'cats') content = this._adminCatsContent();
        else if (t === 'mods') content = this._adminModsContent();
        else if (t === 'staff') content = this._adminStaffContent();
        else if (t === 'warehouse') content = typeof Warehouse !== 'undefined' ? this._adminWarehouseContent() : '<div>' + __('admin.warehouse.missing') + '</div>';
        else if (t === 'crm') content = typeof CRM !== 'undefined' ? this._adminCRMContent() : '<div>' + __('admin.crm.missing') + '</div>';
        else if (t === 'reports') content = typeof Reports !== 'undefined' ? this._adminReportsContent() : '<div>' + __('admin.reports.missing') + '</div>';
        else if (t === 'receipt') content = this._adminReceiptContent();
        else if (t === 'data') content = this._adminDataContent();

        const existing = modal.querySelector('.modal');
        if (existing) {
            const bodyContainer = existing.querySelector('.modal-body');
            if (bodyContainer) bodyContainer.innerHTML = content;
            const tabBarEl = existing.querySelector('.modal-header + div');
            if (tabBarEl) {
                tabBarEl.innerHTML = tabs.map(tab =>
                    `<button class="btn ${t === tab.id ? 'btn-primary' : 'btn-secondary'}"
                        style="padding:10px 18px;font-size:13px;font-weight:600;white-space:nowrap;"
                        onclick="POS.showAdminPanel('${tab.id}')">${tab.label}</button>`
                ).join('');
            }
        } else {
            modal.innerHTML = `
                <div class="modal modal-full">
                    <div class="modal-header"><div class="modal-title">${this.icn('shield', '18px')} ${__('admin.title')}</div><button class="modal-close" onclick="POS.closeModal()"><span class="icon">${this.icon('x', '18px')}</span></button></div>
                    ${tabBar}
                    <div class="modal-body" style="padding:16px;">${content}</div>
                </div>`;
            overlay.classList.add('active');
        }
        if (t === 'reports') setTimeout(() => this._adminRefreshReport(), 50);
    },

    /* ---- Icon Picker (SVG + Emoji) ---- */
    _showIconPicker(inputId) {
        const popup = document.getElementById('icon-picker-popup');
        if (popup) popup.remove();

        const picker = document.createElement('div');
        picker.id = 'icon-picker-popup';
        picker.innerHTML = `<div class="icon-picker">
            <div class="icon-picker-header">
                <span>${__('admin.icon.picker.title')}</span>
                <button class="icon-picker-close" onclick="this.parentElement.parentElement.remove()">✕</button>
            </div>
            <div class="icon-picker-grid icon-picker-svg-grid" style="padding:8px;">
                ${this.foodSvgIcons.map(name =>
                    `<button class="icon-picker-item icon-picker-svg-item" onclick="POS._pickIcon('${inputId}','${name}')" title="${name}">${this.icn(name, '22px')}</button>`
                ).join('')}
            </div>
        </div>`;
        document.body.appendChild(picker);

        const input = document.getElementById(inputId);
        if (input) {
            const rect = input.getBoundingClientRect();
            picker.style.position = 'fixed';
            picker.style.bottom = (window.innerHeight - rect.top + 8) + 'px';
            picker.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - 360)) + 'px';
            picker.style.zIndex = '9999';
        }

        setTimeout(() => {
            const close = (e) => {
                if (!picker.contains(e.target)) { picker.remove(); document.removeEventListener('click', close); }
            };
            document.addEventListener('click', close);
        }, 10);
    },

    _pickIcon(inputId, value) {
        const input = document.getElementById(inputId);
        if (input) input.value = value;
        const picker = document.getElementById('icon-picker-popup');
        if (picker) picker.remove();
    },

    /* ---- Photo Upload ---- */
    _adminPhotoPreview(input, previewId, hiddenId) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = document.getElementById(previewId);
            const hidden = document.getElementById(hiddenId);
            if (preview) {
                preview.innerHTML = '';
                preview.style.background = `url(${e.target.result}) center/cover no-repeat`;
            }
            if (hidden) hidden.value = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    _adminMenuContent() {
        const categories = this.categories.filter(c => c.id !== 'all');
        const vcrUrl = this.state.vcrUrl || 'http://127.0.0.1:5614';
        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <div style="margin-bottom:16px;position:relative;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${this.icn('search', '14px')}</span>
                <input type="text" class="form-input" placeholder="${__('admin.menu.search')}" oninput="POS._adminFilterList(this,'adm-menu-list')" style="width:100%;padding-left:36px;">
            </div>
            <div id="adm-menu-list" style="flex:1;min-height:0;overflow-y:auto;">
                ${this.menu.map((item, i) => `
                    <div data-name="${item.name.toLowerCase()}" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--bg-card);border-radius:var(--radius-sm);margin-bottom:6px;">
                        <span style="flex:2;font-size:14px;font-weight:600;">${item.name}</span>
                        <span style="flex:1;font-size:13px;color:var(--primary);font-weight:700;">${item.price.toLocaleString()} ${__('currency.sum')}</span>
                        <span style="flex:0.7;font-size:12px;font-weight:700;color:${typeof item.stock === 'number' ? (item.stock <= 3 ? 'var(--danger)' : 'var(--text-primary)') : 'var(--text-muted)'};">${typeof item.stock === 'number' ? `Ост.: ${item.stock}` : '∞'}</span>
                        <span style="flex:1.5;font-size:12px;color:var(--text-muted);line-height:1.3;">
                            ${this.categories.find(c=>c.id===item.category)?.name || item.category}${item.requiresMarking ? '<span style="font-size:10px;background:var(--danger-muted);color:var(--danger);padding:2px 6px;border-radius:3px;font-weight:600;margin-left:4px;">МАРК</span>' : ''}${item.noKitchen ? '<span style="font-size:10px;background:var(--amber-muted);color:var(--amber);padding:2px 6px;border-radius:3px;font-weight:600;margin-left:4px;">БЕЗ КУХНИ</span>' : ''}
                            <br><span style="font-family:monospace;color:var(--primary-hover);font-size:10px;font-weight:600;">${item.mxikCode || '—'}</span>
                            ${item.barcode ? `<br><span style="font-family:monospace;color:var(--text-muted);font-size:9px;">ШК: ${item.barcode}</span>` : ''}
                        </span>
                        <button class="order-item-remove" onclick="POS._adminDeleteItem(${i})" style="width:30px;height:30px;color:var(--danger);" title="Удал.">${this.icn('x', '14px')}</button>
                    </div>
                `).join('')}
            </div>
            </div>`;
    },

    _adminAddItem() {
        const name = document.getElementById('adm-menu-name')?.value.trim();
        const price = parseInt(document.getElementById('adm-menu-price')?.value);
        const cat = document.getElementById('adm-menu-cat')?.value;
        const emoji = 'bowl';
        const mxik = document.getElementById('adm-menu-mxik')?.value.trim();
        
        if (!name || !price) { this.showToast(__('toast.enter.name.price'), 'warning'); return; }
        if (this.menu.some(m => m.name.toLowerCase() === name.toLowerCase())) { this.showToast(`«${name}» уже есть в меню`, 'error'); return; }
        
        const maxId = Math.max(...this.menu.map(m => m.id), 0);
        const finalMxik = mxik || String(maxId + 1).padStart(17, '0');
        
        const marking = document.getElementById('adm-menu-marking-toggle')?.classList.contains('active') || false;
        const noKitchen = document.getElementById('adm-menu-nokitchen-toggle')?.classList.contains('active') || false;
        const photo = document.getElementById('adm-menu-photo')?.value || '';
        this.menu.push({ 
            id: maxId + 1, 
            name, 
            price, 
            category: cat || 'main', 
            mxikCode: finalMxik, 
            emoji,
            requiresMarking: marking,
            noKitchen,
            photo: photo || undefined
        });
        
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('menu'), 50);
        this.renderMenu();
        this.showToast(__('toast.item.added') + ' ' + name, 'success');
    },

    _adminEditItem(idx) {
        const item = this.menu[idx];
        if (!item) return;
        const editDiv = document.getElementById('adm-menu-edit');
        if (!editDiv) return;
        editDiv.innerHTML = `
            <div style="background:var(--bg-elevated);border-radius:var(--radius-md);padding:16px;border:1px solid var(--border-default);">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--text-primary);display:flex;align-items:center;gap:6px;">${this.icn('edit', '16px')} Редактировать: ${item.name}</div>
                <div style="display:grid;grid-template-columns:2fr 0.9fr 0.8fr 1.1fr 1.1fr 70px auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Название</label>
                        <input type="text" class="form-input" id="adm-edit-name" value="${item.name.replace(/"/g, '&quot;')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Цена (сум)</label>
                        <input type="number" class="form-input" id="adm-edit-price" value="${item.price}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);" title="Оставьте пустым, если остаток не отслеживается">Остаток</label>
                        <input type="number" class="form-input" id="adm-edit-stock" placeholder="∞" value="${typeof item.stock === 'number' ? item.stock : ''}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Категория</label>
                        <select class="form-input" id="adm-edit-cat">
                            ${this.categories.filter(c=>c.id!=='all').map(c => `<option value="${c.id}" ${c.id===item.category?'selected':''}>${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">ИКПУ (МХИК)</label>
                        <input type="text" class="form-input" id="adm-edit-mxik" value="${item.mxikCode}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;width:52px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Фото</label>
                        <input type="file" accept="image/*" id="adm-edit-photo-input" style="display:none;" onchange="POS._adminPhotoPreview(this,'adm-edit-photo-preview','adm-edit-photo')">
                        <div id="adm-edit-photo-preview" onclick="document.getElementById('adm-edit-photo-input').click()" style="width:52px;height:52px;border-radius:6px;overflow:hidden;border:1px solid var(--border-subtle);background:var(--bg-base);display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;transition:all 0.2s;${item.photo ? `background:url(${item.photo}) center/cover no-repeat;` : ''}" title="Нажмите чтобы изменить фото">${item.photo ? '' : this.icn('image', '24px')}</div>
                        <input type="hidden" id="adm-edit-photo" value="${item.photo || ''}">
                    </div>
                    <div style="display:flex;gap:6px;align-items:end;">
                        <button class="btn btn-primary" onclick="POS._adminSaveItem(${idx})" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="Сохранить изменения">${this.icn('check', '18px')}</button>
                        <button class="btn btn-ghost" onclick="document.getElementById('adm-menu-edit').innerHTML=''" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="${__('action.cancel')}">${this.icn('x', '18px')}</button>
                    </div>
                </div>
                <div style="margin-top:12px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <div style="display:flex; align-items:center; gap:8px; background:var(--bg-base); padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                        <span style="font-size:12px; font-weight:600; color:var(--text-secondary); user-select:none; cursor:pointer;display:inline-flex;align-items:center;gap:4px;" onclick="document.getElementById('adm-edit-marking-toggle').classList.toggle('active')">${this.icn('search', '12px')} Марк.</span>
                        <div class="toggle ${item.requiresMarking ? 'active' : ''}" onclick="this.classList.toggle('active')" id="adm-edit-marking-toggle" style="flex-shrink:0;">
                            <div class="toggle-dot"></div>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px; background:var(--bg-base); padding:8px 12px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
                        <span style="font-size:12px; font-weight:600; color:var(--text-secondary); user-select:none; cursor:pointer;display:inline-flex;align-items:center;gap:4px;" onclick="document.getElementById('adm-edit-nokitchen-toggle').classList.toggle('active')">${this.icn('x-circle', '12px')} Не на кухню</span>
                        <div class="toggle ${item.noKitchen ? 'active' : ''}" onclick="this.classList.toggle('active')" id="adm-edit-nokitchen-toggle" style="flex-shrink:0;">
                            <div class="toggle-dot"></div>
                        </div>
                    </div>
                    ${item.barcode ? `<span style="font-size:11px;color:var(--text-muted);font-family:monospace;">ШК: ${item.barcode}</span>` : ''}
                    ${item.vvcProductId ? `<span style="font-size:11px;color:var(--text-muted);">ID ВКК: ${item.vvcProductId}</span>` : ''}
                </div>
            </div>`;
    },

    _adminSaveItem(idx) {
        const item = this.menu[idx];
        if (!item) return;
        const name = document.getElementById('adm-edit-name')?.value.trim();
        const price = parseInt(document.getElementById('adm-edit-price')?.value);
        const stockRaw = document.getElementById('adm-edit-stock')?.value;
        const cat = document.getElementById('adm-edit-cat')?.value;
        const mxik = document.getElementById('adm-edit-mxik')?.value.trim();
        const marking = document.getElementById('adm-edit-marking-toggle')?.classList.contains('active') || false;
        const noKitchen = document.getElementById('adm-edit-nokitchen-toggle')?.classList.contains('active') || false;
        const photo = document.getElementById('adm-edit-photo')?.value || '';
        if (!name || !price) { this.showToast(__('toast.enter.name.price'), 'warning'); return; }
        item.name = name;
        item.price = price;
        item.stock = (stockRaw === '' || stockRaw === undefined || stockRaw === null) ? null : Math.max(0, parseFloat(stockRaw));
        item.category = cat || 'main';
        if (mxik) item.mxikCode = mxik;
        item.requiresMarking = marking;
        item.noKitchen = noKitchen;
        item.photo = photo || undefined;
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('menu'), 50);
        this.renderMenu();
        this.showToast(__('toast.item.updated') + ' ' + name, 'success');
    },

    async _adminDeleteItem(idx) {
        const item = this.menu[idx];
        if (!item || !(await this._confirm(`Удалить "${item.name}"?`))) return;
        this.menu.splice(idx, 1);
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('menu'), 50);
        this.renderMenu();
        this.showToast(__('toast.item.deleted'), 'info');
    },

    async _syncMenuFromVVC() {
        this.showToast('Синхронизация с ВКК недоступна. Меню управляется локально.', 'info');
    },

    _vvcCategoryToPos(categoryId, mxikCode) {
        if (!mxikCode) return 'main';
        const prefix = mxikCode.substring(0, 3);
        if (['001', '002', '003', '004', '005'].includes(prefix)) return 'main';
        if (['021', '022', '023', '024', '025', '026', '027', '028', '029'].includes(prefix)) return 'drinks';
        if (prefix === '011') return 'soups';
        if (['012', '013', '014', '015', '016', '017', '018', '019', '020'].includes(prefix)) return 'bakery';
        return 'main';
    },

    _vvcCategoryEmoji(name) {
        const n = (name || '').toLowerCase();
        if (n.includes('напит') || n.includes('drink') || n.includes('water') || n.includes('suv') || n.includes('cola') || n.includes('sok') || n.includes('ichimlik')) return 'drink';
        if (n.includes('суп') || n.includes('soup') || n.includes('sho\'rva') || n.includes('shurva') || n.includes('mastava')) return 'soup';
        if (n.includes('салат') || n.includes('salad') || n.includes('salat')) return 'leaf';
        if (n.includes('десерт') || n.includes('desert') || n.includes('cake') || n.includes('shirin')) return 'cake';
        if (n.includes('хлеб') || n.includes('выпечк') || n.includes('bread') || n.includes('non') || n.includes('samsa') || n.includes('лепёшк')) return 'bread';
        if (n.includes('мясо') || n.includes('meat') || n.includes('go\'sht') || n.includes('шашлык') || n.includes('kabob') || n.includes('kabab')) return 'meat';
        if (n.includes('алкогол') || n.includes('alcohol') || n.includes('spirt') || n.includes('вино') || n.includes('пиво') || n.includes('aroq') || n.includes('pivo')) return 'drink';
        if (n.includes('молочн') || n.includes('milk') || n.includes('sut') || n.includes('айран') || n.includes('smetana')) return 'milk';
        if (n.includes('чай') || n.includes('chay') || n.includes('choy') || n.includes('coffee') || n.includes('qahva') || n.includes('kofe')) return 'hot-drink';
        return 'clipboard';
    },

    async _syncCategoriesFromVVC() {
        this.showToast('Синхронизация с ВКК недоступна. Категории управляются локально.', 'info');
    },

    /* ---- Categories ---- */
    _adminCatsContent() {
        const cats = this.categories.filter(c => c.id !== 'all');
        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <div style="margin-bottom:16px;position:relative;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${this.icn('search', '14px')}</span>
                <input type="text" class="form-input" placeholder="${__('admin.cats.search')}" oninput="POS._adminFilterList(this,'adm-cats-list')" style="width:100%;padding-left:36px;">
            </div>
            <div id="adm-cats-list" style="flex:1;min-height:0;overflow-y:auto;">
                ${cats.map((cat, i) => `
                    <div data-name="${cat.name.toLowerCase()}" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--bg-card);border-radius:var(--radius-sm);margin-bottom:6px;">
                        <span style="flex:1;font-size:14px;font-weight:600;">${cat.name}</span>
                        <span style="font-size:12px;color:var(--text-muted);">id: ${cat.id}</span>
                        <button class="order-item-remove" onclick="POS._adminDeleteCat('${cat.id}')" style="width:30px;height:30px;color:var(--danger);" title="${__('admin.cats.delete.btn')}">${this.icn('x', '14px')}</button>
                    </div>
                `).join('')}
            </div>
            </div>`;
    },

    _adminAddCat() {
        const name = document.getElementById('adm-cat-name')?.value.trim();
        const emoji = document.getElementById('adm-cat-icon')?.value.trim() || '📂';
        if (!name) { this.showToast(__('toast.enter.name'), 'warning'); return; }
        if (this.categories.some(c => c.id !== 'all' && c.name.toLowerCase() === name.toLowerCase())) { this.showToast(__('toast.already.exists') + ' «' + name + '»', 'error'); return; }
        const id = name.toLowerCase().replace(/[^a-zа-яё0-9]/g, '') + '-' + Date.now();
        this.categories.push({ id, name, emoji });
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('cats'), 50);
        this.renderCategories();
        this.showToast(__('toast.cat.added'), 'success');
    },

    async _adminDeleteCat(catId) {
        const hasItems = this.menu.some(m => m.category === catId);
        if (hasItems) { this.showToast(__('toast.cat.has.items'), 'error'); return; }
        if (!(await this._confirm(__('toast.cat.confirm.delete')))) return;
        this.categories = this.categories.filter(c => c.id !== catId);
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('cats'), 50);
        this.renderCategories();
        this.showToast(__('toast.cat.deleted'), 'info');
    },

    /* ---- Modifiers ---- */
    _adminModsContent() {
        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <div style="margin-bottom:16px;position:relative;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${this.icn('search', '14px')}</span>
                <input type="text" class="form-input" placeholder="${__('admin.mods.search')}" oninput="POS._adminFilterList(this,'adm-mods-list')" style="width:100%;padding-left:36px;">
            </div>
            <div style="margin-bottom:16px;display:flex;gap:8px;">
                <input type="text" class="form-input" id="adm-mod-name" placeholder="${__('admin.mods.name')}" style="flex:2;">
                <input type="number" class="form-input" id="adm-mod-price" placeholder="${__('admin.mods.price')}" style="flex:1;" value="0">
                <button class="btn btn-primary" onclick="POS._adminAddMod()">${this.icn('plus', '18px')}</button>
            </div>
            <div id="adm-mods-list" style="flex:1;min-height:0;overflow-y:auto;">
                ${this.modifiers.map((m, i) => `
                    <div data-name="${m.name.toLowerCase()}" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--bg-card);border-radius:var(--radius-sm);margin-bottom:6px;">
                        <span style="flex:1;font-size:14px;font-weight:600;">${m.name}</span>
                        <span style="font-size:13px;color:var(--primary);font-weight:700;">${m.price > 0 ? '+' + m.price.toLocaleString() + ' ' + __('currency.sum') : __('admin.mods.free')}</span>
                        <button class="order-item-remove" onclick="POS._adminDeleteMod(${i})" style="width:30px;height:30px;color:var(--danger);" title="${__('admin.mods.delete.btn')}">${this.icn('x', '14px')}</button>
                    </div>
                `).join('')}
            </div>
            </div>`;
    },

    _adminAddMod() {
        const name = document.getElementById('adm-mod-name')?.value.trim();
        const price = parseInt(document.getElementById('adm-mod-price')?.value) || 0;
        if (!name) { this.showToast(__('toast.mod.enter.name'), 'warning'); return; }
        if (this.modifiers.some(m => m.name.toLowerCase() === name.toLowerCase())) { this.showToast(__('toast.mod.exists') + ' «' + name + '»', 'error'); return; }
        const id = name.toLowerCase().replace(/[^a-zа-яё0-9]/g, '-');
        this.modifiers.push({ id: id + '-' + Date.now(), name, price });
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('mods'), 50);
        this.showToast(__('toast.mod.added') + ' ' + name, 'success');
    },

    async _adminDeleteMod(idx) {
        const m = this.modifiers[idx];
        if (!m || !(await this._confirm(__('toast.mod.confirm.delete') + ' "' + m.name + '"?'))) return;
        this.modifiers.splice(idx, 1);
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('mods'), 50);
        this.showToast(__('toast.mod.deleted'), 'info');
    },

    /* ---- Staff ---- */
    _adminStaffContent() {
        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <div style="margin-bottom:16px;position:relative;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${this.icn('search', '14px')}</span>
                <input type="text" class="form-input" placeholder="${__('admin.staff.search')}" oninput="POS._adminFilterList(this,'adm-staff-list')" style="width:100%;padding-left:36px;">
            </div>
            <div style="margin-bottom:16px;display:flex;gap:8px;flex-wrap:wrap;">
                <input type="text" class="form-input" id="adm-staff-name" placeholder="${__('admin.staff.name')}" style="flex:2;min-width:120px;">
                <input type="text" class="form-input" id="adm-staff-pin" placeholder="${__('admin.staff.pin')}" style="flex:1;min-width:80px;" maxlength="4">
                <select class="form-input" id="adm-staff-role" style="flex:1;min-width:100px;">
                    <option value="waiter">${__('admin.staff.role.display.waiter')}</option>
                    <option value="cashier">${__('admin.staff.role.display.cashier')}</option>
                    <option value="admin">${__('admin.staff.role.display.admin')}</option>
                </select>
                <button class="btn btn-primary" onclick="POS._adminAddStaff()">${this.icn('plus', '18px')}</button>
            </div>
            <div id="adm-staff-list" style="flex:1;min-height:0;overflow-y:auto;">
                ${this.staff.map((s, i) => `
                    <div data-name="${s.name.toLowerCase()}" style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:var(--bg-card);border-radius:var(--radius-sm);margin-bottom:6px;">
                        <span style="flex:1;font-size:14px;font-weight:600;">${s.name}</span>
                        <span style="font-size:12px;padding:4px 10px;border-radius:var(--radius-full);background:${s.role === 'admin' ? 'var(--primary-muted)' : s.role === 'cashier' ? 'var(--amber-muted)' : 'var(--blue-muted)'};color:${s.role === 'admin' ? 'var(--primary)' : s.role === 'cashier' ? 'var(--amber)' : 'var(--blue)'};">${s.role}</span>
                        <span style="font-size:12px;color:var(--text-muted);">PIN: ${s.pin}</span>
                        <button class="order-item-remove" onclick="POS._adminDeleteStaff(${i})" style="width:30px;height:30px;color:var(--danger);" title="${__('admin.staff.delete.btn')}">${this.icn('x', '14px')}</button>
                    </div>
                `).join('')}
            </div>
            </div>`;
    },

    _adminAddStaff() {
        const name = document.getElementById('adm-staff-name')?.value.trim();
        const pin = document.getElementById('adm-staff-pin')?.value.trim();
        const role = document.getElementById('adm-staff-role')?.value || 'waiter';
        if (!name) { this.showToast(__('toast.staff.enter.name'), 'warning'); return; }
        if (!pin || pin.length !== 4 || !/^\d{4}$/.test(pin)) { this.showToast(__('toast.enter.pin'), 'warning'); return; }
        if (this.staff.some(s => s.name.toLowerCase() === name.toLowerCase())) { this.showToast(__('toast.already.exists') + ' «' + name + '»', 'error'); return; }
        const maxId = Math.max(...this.staff.map(s => s.id), 0);
        this.staff.push({ id: maxId + 1, name, pin, role });
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('staff'), 50);
        this.showToast(__('toast.staff.added') + ' ' + name, 'success');
    },

    async _adminDeleteStaff(idx) {
        const s = this.staff[idx];
        if (!s) return;
        if (s.role === 'admin' && this.staff.filter(x => x.role === 'admin').length <= 1) {
            this.showToast(__('toast.at.least.one.admin'), 'error');
            return;
        }
        if (!(await this._confirm(__('toast.staff.confirm.delete') + ' "' + s.name + '"?'))) return;
        this.staff.splice(idx, 1);
        this._saveMenuData();
        this.closeModal();
        setTimeout(() => this.showAdminPanel('staff'), 50);
        this.showToast(__('toast.staff.deleted'), 'info');
    },

    /* ---- Receipt Settings ---- */
    /* ---- Receipt Settings ---- */
    _adminReceiptContent() {
        const co = this.state.receiptCompany || 'Soliq servis';
        const ad = this.state.receiptAddress || 'Muqimiy Ko\'chasi, 166.';
        const phone = this.state.receiptPhone || '+998 90 123 45 67';
        const footer = this.state.receiptFooter || 'Спасибо! Ждём вас снова.';
        const inn = this.state.tin || '200200200';
        const logo = this.state.receiptLogo || 'assets/img/217844580_108833764807015_1720829239842915183_n.png';
        const logoHTML = `<img src="${logo}" style="max-width: 60px; max-height: 60px; border-radius: 50%; margin: 0 auto 6px; display: block; border: 1px solid #ddd;"/>`;

        return `
        <div class="admin-settings-container" style="display: flex; flex-direction: column; gap: 20px; align-items: stretch; width: 100%; max-width: 520px; margin: 0 auto; box-sizing: border-box;">
            <!-- Section 1: Настройки чека -->
            <div class="settings-card" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; display: flex; flex-direction: column; gap: 16px;">
                <h3 style="margin: 0; font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; color: var(--text-primary);">
                    ${this.icn('file-text', '18px')} ${__('admin.receipt.section.title')}
                </h3>

                <!-- Загрузка логотипа -->
                <div>
                    <label class="form-label" style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px;">
                        ${this.icn('image', '14px')} ${__('admin.receipt.logo.label')}
                    </label>
                    <input type="file" id="adm-logo-input" accept="image/*" style="display: none;" onchange="POS._adminLogoUpload(event)">
                    <div class="adm-logo-upload-box" onclick="document.getElementById('adm-logo-input').click()" style="border: 2px dashed var(--border-default); border-radius: var(--radius-md); padding: 20px; text-align: center; cursor: pointer; background: var(--bg-input); transition: all 0.2s;">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary); margin: 0 auto 8px; display: block;">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                            <line x1="12" y1="5" x2="12" y2="13" stroke-width="2.5"/>
                            <line x1="8" y1="9" x2="16" y2="9" stroke-width="2.5"/>
                        </svg>
                        <span style="font-size: 12px; font-weight: 700; color: var(--text-secondary);">${__('admin.receipt.logo.upload')}</span>
                    </div>
                </div>

                <!-- Название магазина -->
                <div class="form-group" style="margin: 0;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 6px;">
                        ${this.icn('edit-2', '14px')} ${__('admin.receipt.company')}
                    </label>
                    <input type="text" class="form-input" id="adm-receipt-company" value="${co}" oninput="document.getElementById('prev-company').textContent = this.value || 'Soliq servis'">
                </div>

                <!-- Адрес магазина -->
                <div class="form-group" style="margin: 0;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 6px;">
                        ${this.icn('edit-2', '14px')} ${__('admin.receipt.address')}
                    </label>
                    <input type="text" class="form-input" id="adm-receipt-address" value="${ad}" oninput="document.getElementById('prev-address').textContent = this.value || 'Manzil'">
                </div>

                <!-- Номер телефона -->
                <div class="form-group" style="margin: 0;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 6px;">
                        ${this.icn('edit-2', '14px')} ${__('admin.receipt.phone')}
                    </label>
                    <input type="text" class="form-input" id="adm-receipt-phone" value="${phone}" oninput="document.getElementById('prev-phone').textContent = this.value || ''">
                </div>

                <!-- Нижний текст -->
                <div class="form-group" style="margin: 0;">
                    <label class="form-label" style="display: flex; align-items: center; gap: 6px;">
                        ${this.icn('edit-2', '14px')} ${__('admin.receipt.footer')}
                    </label>
                    <input type="text" class="form-input" id="adm-receipt-footer" value="${footer}" oninput="document.getElementById('prev-footer').textContent = this.value || ''">
                </div>

                <div style="display:flex;gap:8px;margin-top:8px;">
                    <button class="btn btn-ghost" onclick="POS._adminResetReceiptDefaults()" style="flex:1;font-weight:600;padding:12px;">${this.icn('rotate-ccw', '16px')} ${__('admin.receipt.reset')}</button>
                    <button class="btn btn-primary btn-lg" onclick="POS._adminSaveReceipt()" style="flex:1;font-weight:700;padding:12px;">${__('admin.receipt.save')}</button>
                </div>
            </div>

            <!-- Section 2: Live Preview (Chek) -->
            <div style="display: flex; flex-direction: column; align-items: center;">
                <div class="receipt-paper" style="box-shadow: 0 4px 20px rgba(0,0,0,0.15); border: 1px solid #e5e7eb;">
                    <div id="prev-logo-container" style="text-align: center; margin-bottom: 6px;">
                        ${logoHTML}
                    </div>
                    
                    <div class="r-header" style="text-align: center; font-size: 10px; color: #444;">
                        <div class="r-header-name" id="prev-company" style="font-size: 14px; font-weight: 700; text-transform: uppercase; color: #000; margin-bottom: 2px;">${co}</div>
                        <div id="prev-address" style="font-size: 10px;">${ad}</div>
                        <div id="prev-phone" style="font-size: 10px; color: #555;">${phone}</div>
                    </div>
                    
                    <div class="r-dashed" style="border-top: 1px dashed #444; margin: 8px 0;"></div>
                    
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="font-weight: 700;">${__('receipt.inn.label')}</span><span style="font-weight: 700;">${inn}</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>Дата: 13.08.2025</span><span>Время: 11:44:20</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="font-weight: 700;">${__('receipt.check.num')}</span><span style="font-weight: 700;">№ 12</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="font-weight: 700;">${__('receipt.cashier.label')}</span><span style="font-weight: 700;">Р. Султонов</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>${__('receipt.shift.label')}</span><span>002</span></div>
                    
                    <div class="r-solid" style="border-top: 1px solid #111; margin: 8px 0;"></div>
                    
                    <div class="r-item-block">
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;">
                            <span style="font-weight: 700;">Salqin ichimlik 1 L</span>
                            <span style="font-weight: 700;">1 D.</span>
                            <span style="font-weight: 700;">10 000 so'm</span>
                        </div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">в т.ч. НДС 12%</span><span>1 200 so'm</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">MXIK:</span><span>0123456789123456</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">${__('receipt.inn.label')} комитента:</span><span>307101399</span></div>
                    </div>
                    
                    <div class="r-item-block">
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;">
                            <span style="font-weight: 700;">Salqin ichimlik 1 L</span>
                            <span style="font-weight: 700;">1 D.</span>
                            <span style="font-weight: 700;">10 000 so'm</span>
                        </div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">в т.ч. НДС 12%</span><span>1 200 so'm</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">MXIK:</span><span>0123456789123456</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">${__('receipt.inn.label')} комитента:</span><span>307101399</span></div>
                    </div>
                    
                    <div class="r-item-block">
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;">
                            <span style="font-weight: 700;">Salqin ichimlik 1 L</span>
                            <span style="font-weight: 700;">1 D.</span>
                            <span style="font-weight: 700;">10 000 so'm</span>
                        </div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">в т.ч. НДС 12%</span><span>1 200 so'm</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">MXIK:</span><span>0123456789123456</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="color: #555;">${__('receipt.inn.label')} комитента:</span><span>307101399</span></div>
                    </div>
                    
                    <div class="r-solid" style="border-top: 1px solid #111; margin: 8px 0;"></div>
                    
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="font-weight: 700;">ИТОГО</span><span style="font-weight: 700;">30 000 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>в т.ч. НДС 12%</span><span>3 600,00</span></div>
                    
                    <div class="r-solid" style="border-top: 1px solid #111; margin: 8px 0;"></div>
                    
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span style="font-weight: 700;">${__('receipt.form.payment')}</span><span style="font-weight: 700;">30 000 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>${__('payment.cash')}</span><span>15 000 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>${__('payment.card')}</span><span>15 000 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>Дисконт</span><span>0 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>Скидка</span><span>0 so'm</span></div>
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;"><span>Сдача</span><span>0 so'm</span></div>
                    
                    <div class="r-solid" style="border-top: 1px solid #111; margin: 8px 0;"></div>
                    
                    <div class="r-line" style="display: flex; justify-content: space-between; font-size: 10px; margin: 3px 0;">
                        <span>Тип чека</span>
                        <span class="r-type-option active" style="color: #111; font-weight: 700; margin-left: auto;">Покупка</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
                        <span class="r-type-option" style="font-size: 9.5px; color: #444; font-weight: 600;">Возврат</span>
                        <span class="r-type-option" style="font-size: 9.5px; color: #d97706; font-weight: 600;">Кредит</span>
                        <span class="r-type-option" style="font-size: 9.5px; color: #dc2626; font-weight: 600;">Аванс</span>
                    </div>
                    
                    <div class="r-solid" style="border-top: 1px solid #111; margin: 8px 0;"></div>
                    
                    <div style="font-size: 10px; margin: 4px 0;">
                        <div style="font-weight: 700; margin-bottom: 4px;">${__('receipt.fiscal.data')}</div>
                        <div class="r-line" style="display: flex; justify-content: space-between; margin: 2px 0;"><span>Terminal ID:</span><span>${this.state.vcrTerminalId || 'LG420211640998'}</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; margin: 2px 0;"><span>${__('receipt.fiscal.sign.label')}</span><span>123456789012</span></div>
                        <div class="r-line" style="display: flex; justify-content: space-between; margin: 2px 0;"><span>Litsenziya ID:</span><span>1E73D9F3D1B844AAB405FE8560E1D45D</span></div>
                    </div>
                    
                    <div style="text-align: center; margin: 12px 0 6px;">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=https%3A%2F%2Fofd.soliq.uz%2Fcheck%3Ft%3D${this.state.vcrTerminalId || 'LG420211640998'}" alt="QR" style="width: 110px; height: 110px; display: block; margin: 0 auto;"/>
                    </div>
                    
                    <div id="prev-footer" style="text-align: center; font-size: 10px; font-weight: 700; color: #333; margin-top: 8px;">
                        ${footer}
                    </div>
                </div>
            </div>
        </div>`;
    },

    _adminSaveReceipt() {
        const company = document.getElementById('adm-receipt-company')?.value.trim();
        const address = document.getElementById('adm-receipt-address')?.value.trim();
        const phone = document.getElementById('adm-receipt-phone')?.value.trim();
        const footer = document.getElementById('adm-receipt-footer')?.value.trim();

        if (company) this.state.receiptCompany = company;
        if (address) this.state.receiptAddress = address;
        if (phone) this.state.receiptPhone = phone;
        if (footer) this.state.receiptFooter = footer;

        this.saveState();
        this.showToast(__('settings.saved'), 'success');
        this.showAdminPanel('receipt');
    },

    async _adminResetReceiptDefaults() {
        if (!(await this._confirm('Сбросить настройки чека на значения по умолчанию?'))) return;
        this.state.receiptLogo = 'assets/img/217844580_108833764807015_1720829239842915183_n.png';
        this.state.receiptCompany = 'Soliq servis';
        this.state.receiptAddress = 'Muqimiy Ko\'chasi, 166.';
        this.state.receiptPhone = '+998 90 123 45 67';
        this.state.receiptFooter = 'Спасибо! Ждём вас снова.';
        this.saveState();
        this.showToast('Настройки чека сброшены на стандартные', 'success');
        this.showAdminPanel('receipt');
    },

    _adminChangeFontSize(size) {
        this.state.fontSize = size;
        this.saveState();
        this._applyFontSize(size);
        this.showSettings();
    },

    _applyFontSize(size) {
        const scale = { small: 0.85, medium: 1, large: 1.15 }[size] || 1;
        this._fontScale = scale;
        this._scaleAllFonts();
        if (!this._fontObserver) {
            this._fontObserver = new MutationObserver(() => {
                if (this._fontScalingGuard) return;
                this._scaleAllFonts();
            });
            this._fontObserver.observe(document.body, { childList: true, subtree: true });
        }
    },

    _scaleAllFonts() {
        this._fontScalingGuard = true;
        const scale = this._fontScale || 1;
        const sel = '#modal-overlay [style*="font-size"], .pos-container [style*="font-size"]';
        document.querySelectorAll(sel).forEach(el => {
            const inline = el.style.fontSize;
            if (!inline || !inline.endsWith('px')) return;
            if (!el._origFs) el._origFs = parseInt(inline);
            el.style.fontSize = Math.round(el._origFs * scale) + 'px';
        });
        this._fontScalingGuard = false;
    },

    _printerOptions(selected, allowEmpty) {
        const printers = this.state.printers || ['EPSON TM-T20II (USB)', 'XP-80 (LAN)', 'System Print'];
        let html = '';
        if (allowEmpty) {
            html += '<option value="">' + __('settings.printer.same') + '</option>';
        }
        printers.forEach(p => {
            html += '<option value="' + p.replace(/"/g, '&quot;') + '"' + (p === selected ? ' selected' : '') + '>' + p + '</option>';
        });
        return html;
    },

    _refreshPrinterSelects() {
        const receipt = document.getElementById('printer-select-receipt');
        if (receipt) receipt.innerHTML = this._printerOptions(this.state.selectedPrinter);
        const kitchen = document.getElementById('printer-select-kitchen');
        if (kitchen) kitchen.innerHTML = this._printerOptions(this.state.kitchenPrinter || this.state.selectedPrinter);
    },

    _adminChangePrinter(printer, type) {
        if (type === 'kitchen') {
            this.state.kitchenPrinter = printer;
        } else {
            this.state.selectedPrinter = printer;
        }
        this.saveState();
        const sel = document.getElementById('printer-select-' + type);
        if (sel) sel.value = printer;
    },

    _adminTogglePinLock() {
        const chk = document.getElementById('set-pin-lock-toggle');
        this.state.pinLockEnabled = chk ? chk.checked : true;
        this.saveState();
        const grp = document.getElementById('pin-lock-time-group');
        if (grp) grp.style.display = this.state.pinLockEnabled ? 'flex' : 'none';
    },

    _adminChangePinLockTime(time) {
        this.state.pinLockTime = time;
        this.saveState();
        this.showSettings();
    },

    _startAutoSync() {
        if (this._autoSyncInterval) {
            clearInterval(this._autoSyncInterval);
            this._autoSyncInterval = null;
        }
        if (this.state.autoSyncEnabled && this.state.currentStaff) {
            const minutes = this.state.autoSyncTime || 30;
            this._autoSyncInterval = setInterval(() => this.syncData(), minutes * 60 * 1000);
        }
    },

    _adminToggleAutoSync() {
        const chk = document.getElementById('set-auto-sync-toggle');
        this.state.autoSyncEnabled = chk ? chk.checked : true;
        this.saveState();
        const grp = document.getElementById('auto-sync-time-group');
        if (grp) grp.style.display = this.state.autoSyncEnabled ? 'flex' : 'none';
        this._startAutoSync();
    },

    _adminChangeAutoSyncTime(time) {
        this.state.autoSyncTime = time;
        this.saveState();
        this._startAutoSync();
        this.showSettings();
    },

    _adminToggleAutoUpdate() {
        const chk = document.getElementById('set-auto-update-toggle');
        this.state.autoUpdateEnabled = chk ? chk.checked : true;
        this.saveState();
    },

    _adminLogoUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const base64 = evt.target.result;
            this.state.receiptLogo = base64;
            this.saveState();
            const container = document.getElementById('prev-logo-container');
            if (container) {
                container.innerHTML = `<img src="${base64}" style="max-width: 60px; max-height: 60px; border-radius: 50%; margin: 0 auto 6px; display: block; border: 1px solid #ddd;"/>`;
            }
            this.showToast('Логотип успешно загружен', 'success');
        };
        reader.readAsDataURL(file);
    },

    _adminFindPrinter() {
        const statusEl = document.getElementById('printer-status');
        if (!statusEl) return;
        if (typeof navigator.usb === 'undefined') {
            statusEl.textContent = __('webusb.not.supported');
            statusEl.style.color = 'var(--danger)';
            return;
        }
        statusEl.textContent = __('webusb.searching');
        statusEl.style.color = 'var(--text-muted)';
        navigator.usb.requestDevice({ filters: [] })
            .then(device => {
                this.state.usbDevice = device;
                const name = device.productName || 'USB Printer';
                if (!this.state.printers) this.state.printers = ['EPSON TM-T20II (USB)', 'XP-80 (LAN)', 'System Print'];
                if (!this.state.printers.includes(name)) {
                    this.state.printers.push(name);
                }
                this.state.selectedPrinter = name;
                this.saveState();
                this._refreshPrinterSelects();
                statusEl.innerHTML = `${this.icn('check', '12px')} ${__('webusb.found')} ${device.productName || 'USB Printer'}`;
                statusEl.style.color = 'var(--primary)';
            })
            .catch(err => {
                if (err.name === 'NotFoundError') {
                    statusEl.textContent = __('webusb.cancelled');
                    statusEl.style.color = 'var(--text-muted)';
                } else {
                    statusEl.textContent = 'Ошибка: ' + err.message;
                    statusEl.style.color = 'var(--danger)';
                }
            });
    },

    _adminTestPrinter() {
        const win = window.open('', 'test_print', 'width=350,height=400,menubar=no,toolbar=no');
        if (!win) { this.showToast(__('webusb.allow.popup'), 'error'); return; }
        win.document.write(`<html><head><title>Тестовый чек</title>
            <style>
                @page { size: 58mm 150mm; margin: 0; }
                body{font-family:'Courier New',monospace;font-size:14px;padding:20px;text-align:center;width:48mm;margin:0 auto;}
                h2{border-bottom:2px dashed #000;padding-bottom:8px;margin-bottom:16px;}
                .line{border-top:1px dashed #000;margin:12px 0;}
                .footer{border-top:2px dashed #000;padding-top:8px;margin-top:12px;font-size:12px;color:#666;}
            </style></head>
            <body>
                <h2>${__('print.test.title')}</h2>
                <div>Дата: ${new Date().toLocaleString('ru-RU')}</div>
                <div>Принтер: ${this.state.selectedPrinter || '—'}</div>
                <div class="line"></div>
                <div style="font-size:16px;font-weight:bold;">${__('print.test.success')}</div>
                <div style="font-size:12px;color:#666;margin-top:4px;">${__('print.test.working')}</div>
                <div class="footer">${__('print.test.label')}</div>
                <script>setTimeout(() => window.print(), 300);</script>
            </body></html>`);
        win.document.close();
    },

    _initInactivityLock() {
        if (this._inactivityTimer) return;
        const reset = () => { this.state._lastActivity = Date.now(); };
        document.addEventListener('click', reset);
        document.addEventListener('keydown', reset);
        document.addEventListener('touchstart', reset);
        document.addEventListener('mousemove', reset);
        this._inactivityTimer = setInterval(() => {
            if (!this.state.pinLockEnabled || !this.state._lastActivity) return;
            if (!this.state.currentStaff) return;
            const minutes = (Date.now() - this.state._lastActivity) / 60000;
            const limit = this.state.pinLockTime || 30;
            if (minutes >= limit) {
                this._showPinLockScreen();
            }
        }, 30000);
    },

    _showPinLockScreen() {
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        this._lockPin = '';
        modal.innerHTML = `
            <div class="modal" style="max-width:360px;">
                <div class="modal-header"><div class="modal-title">${this.icn('lock', '18px')} ${__('pin.lock.title')}</div></div>
                <div class="modal-body" style="padding:24px;text-align:center;">
                    <div style="margin-bottom:20px;font-size:14px;color:var(--text-secondary);">${__('pin.lock.enter')}</div>
                    <div style="display:flex;justify-content:center;gap:8px;margin-bottom:16px;" id="lock-dots">
                        ${'<span class="login-pin-dot" style="width:16px;height:16px;"></span>'.repeat(4)}
                    </div>
                    <div class="login-error" id="lock-error" style="display:none;color:var(--danger);font-size:13px;margin-bottom:8px;">${__('login.pin.error')}</div>
                    <div class="numpad" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:240px;margin:0 auto;">
                        ${[1,2,3,4,5,6,7,8,9].map(n => `<button class="numpad-btn" onclick="POS._lockNumpad('${n}')" style="padding:14px;font-size:20px;">${n}</button>`).join('')}
                        <button class="numpad-btn" onclick="POS._lockNumpad('clear')" style="padding:14px;font-size:16px;">C</button>
                        <button class="numpad-btn" onclick="POS._lockNumpad('0')" style="padding:14px;font-size:20px;">0</button>
                        <button class="numpad-btn" onclick="POS._lockNumpad('back')" style="padding:14px;font-size:16px;">⌫</button>
                    </div>
                </div>
            </div>`;
        overlay.classList.add('active');
    },

    _lockNumpad(val) {
        if (val === 'clear') { this._lockPin = ''; }
        else if (val === 'back') { this._lockPin = this._lockPin.slice(0, -1); }
        else { if (this._lockPin.length >= 4) return; this._lockPin += val; }
        const dots = document.querySelectorAll('#lock-dots .login-pin-dot');
        const errorEl = document.getElementById('lock-error');
        if (errorEl) errorEl.style.display = 'none';
        dots.forEach((dot, i) => {
            dot.className = 'login-pin-dot' + (i < this._lockPin.length ? ' filled' : '');
        });
        if (this._lockPin.length === 4) {
            const staff = this.state.currentStaff;
            if (staff && staff.pin === this._lockPin) {
                this.state._lastActivity = Date.now();
                this.closeModal();
            } else {
                dots.forEach(d => d.classList.add('error'));
                if (errorEl) errorEl.style.display = 'block';
                setTimeout(() => {
                    dots.forEach(d => d.classList.remove('error', 'filled'));
                    this._lockPin = '';
                }, 600);
            }
        }
    },


    /* ---- Warehouse ---- */
    _warehouseActiveSubtab: 'stock',
    _editingIngredientId: null,
    _recipeSelectedMenuItemId: null,
    _editingSupplierId: null,
    _movementDraftItems: [],

    _adminWarehouseContent() {
        if (typeof Warehouse === 'undefined') return __('admin.warehouse.missing');
        const subtab = this._warehouseActiveSubtab || 'stock';

        const tabHeader = `
            <div style="display:flex;gap:8px;margin-bottom:16px;border-bottom:1px solid var(--border-subtle);padding-bottom:8px;">
                <button class="btn btn-sm ${subtab === 'stock' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminWarehouseSubtab('stock')">${this.icn('archive', '14px')} ${__('admin.warehouse.subtab.stock')}</button>
                <button class="btn btn-sm ${subtab === 'recipes' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminWarehouseSubtab('recipes')">${this.icn('file-text', '14px')} ${__('admin.warehouse.subtab.recipes')}</button>
                <button class="btn btn-sm ${subtab === 'suppliers' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminWarehouseSubtab('suppliers')">${this.icn('heart', '14px')} ${__('admin.warehouse.subtab.suppliers')}</button>
                <button class="btn btn-sm ${subtab === 'movements' ? 'btn-primary' : 'btn-secondary'}" onclick="POS._adminWarehouseSubtab('movements')">${this.icn('truck', '14px')} ${__('admin.warehouse.subtab.movements')}</button>
            </div>
        `;

        if (subtab === 'stock') {
            return tabHeader + this._adminWarehouseStockContent();
        }
        if (subtab === 'recipes') {
            return tabHeader + this._adminWarehouseRecipesContent();
        }
        if (subtab === 'suppliers') {
            return tabHeader + this._adminWarehouseSuppliersContent();
        }
        return tabHeader + this._adminWarehouseMovementsContent();
    },

    _adminWarehouseSubtab(tab) {
        this._warehouseActiveSubtab = tab;
        this._editingIngredientId = null;
        this._editingSupplierId = null;
        this.showAdminPanel('warehouse');
    },

    _adminWarehouseStockContent() {
        return `
            <div>
            <!-- Добавить новый ингредиент -->
            <div style="background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--text-primary);">${this.icn('plus', '14px')} ${__('admin.warehouse.stock.add')}</div>
                <div style="display:grid;grid-template-columns:2.5fr 1fr 1.2fr 1fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Название</label>
                        <input type="text" class="form-input" id="adm-ing-name" placeholder="${__('admin.warehouse.stock.name.placeholder')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Ед. изм.</label>
                        <select class="form-input" id="adm-ing-unit">
                            <option value="кг">кг</option>
                            <option value="л">литр</option>
                            <option value="шт">штука</option>
                            <option value="гр">грамм</option>
                            <option value="мл">мл</option>
                            <option value="порц">порция</option>
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('admin.warehouse.stock.cost')}</label>
                        <input type="number" class="form-input" id="adm-ing-cost" placeholder="${__('admin.warehouse.stock.cost.placeholder')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('admin.warehouse.stock.init')}</label>
                        <input type="number" class="form-input" id="adm-ing-stock" placeholder="0" value="0">
                    </div>
                    <button class="btn btn-primary" onclick="POS._adminAddIngredient()" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;">${this.icn('plus', '18px')}</button>
                </div>
            </div>

            <!-- Редактирование выбранного ингредиента -->
            <div id="adm-ing-edit-section"></div>

            <!-- Таблица остатков -->
            <div style="font-weight:700;margin-bottom:8px;font-size:14px;display:flex;justify-content:space-between;align-items:center;">
                <span>${this.icn('archive', '16px')} ${__('admin.warehouse.stock.title')}</span>
                <span style="font-size:11px;font-weight:normal;color:var(--text-muted);">${__('admin.warehouse.stock.total')} ${Warehouse.ingredients.length}</span>
            </div>
            <div style="position:relative;margin-bottom:8px;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${this.icn('search', '14px')}</span>
                <input type="text" id="adm-ing-search" placeholder="${__('admin.warehouse.stock.search')}" oninput="POS._adminFilterList(this, 'adm-ing-tbody')" style="width:100%;padding:10px 14px 10px 36px;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);color:var(--text-primary);font-family:inherit;font-size:13px;outline:none;box-sizing:border-box;">
            </div>
            <div style="border:1px solid var(--border-subtle);border-radius:var(--radius-sm);">
                <table style="width:100%;text-align:left;border-collapse:collapse;font-size:13px;">
                    <thead style="background:var(--bg-elevated);position:sticky;top:0;z-index:1;">
                        <tr style="border-bottom:1px solid var(--border-subtle);"><th style="padding:12px 16px;">${__('admin.warehouse.stock.th.ingredient')}</th><th style="padding:12px 16px;">${__('admin.warehouse.stock.th.stock')}</th><th style="padding:12px 16px;">${__('admin.warehouse.stock.th.unit')}</th><th style="padding:12px 16px;">${__('admin.warehouse.stock.th.cost')}</th><th style="padding:12px 16px;text-align:right;">${__('admin.warehouse.stock.th.actions')}</th></tr>
                    </thead>
                    <tbody id="adm-ing-tbody">
                        ${Warehouse.ingredients.map(ing => `
                            <tr data-name="${ing.name.toLowerCase()}" data-display="table-row" style="border-bottom:1px solid var(--border-subtle);background:var(--bg-card);">
                                <td style="padding:12px 16px;font-weight:600;">${ing.name}</td>
                                <td style="padding:12px 16px;font-weight:bold;color:${ing.stock < 10 ? 'var(--danger)' : 'var(--success)'}">${ing.stock.toFixed(2)}</td>
                                <td style="padding:12px 16px;color:var(--text-secondary);">${ing.unit}</td>
                                <td style="padding:12px 16px;font-weight:600;">${ing.cost.toLocaleString()} ${__('currency.sum')}</td>
                                <td style="padding:12px 16px;text-align:right;white-space:nowrap;">
                                    <div style="display:inline-flex;gap:10px;justify-content:flex-end;align-items:center;vertical-align:middle;">
                                        <button class="order-item-remove" onclick="POS._adminEditIngredient(${ing.id})" style="width:30px;height:30px;margin:0;" title="${__('action.edit')}">${this.icn('edit', '14px')}</button>
                                        <button class="order-item-remove" onclick="POS._adminDeleteIngredient(${ing.id})" style="width:30px;height:30px;color:var(--danger);margin:0;" title="${__('item.remove.btn')}">${this.icn('x', '14px')}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        ${Warehouse.ingredients.length === 0 ? '<tr><td colspan="5" style="padding:20px;text-align:center;color:var(--text-muted);">' + __('admin.warehouse.stock.empty') + '</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
            </div>
        `;
    },

    async _adminAddIngredient() {
        const name = document.getElementById('adm-ing-name')?.value.trim();
        const unit = document.getElementById('adm-ing-unit')?.value;
        const cost = parseInt(document.getElementById('adm-ing-cost')?.value);
        const stock = parseFloat(document.getElementById('adm-ing-stock')?.value || 0);

        if (!name || isNaN(cost)) {
            this.showToast(__('toast.ing.validate'), 'warning');
            return;
        }

        if (Warehouse.ingredients.some(i => i.name.toLowerCase() === name.toLowerCase())) {
            this.showToast(`«${name}» ${__('admin.warehouse.stock.exists')}`, 'error');
            return;
        }

        const newIng = {
            id: Date.now(),
            name,
            unit,
            cost,
            stock
        };

        try {
            await DB.put('ingredients', newIng);
            await Warehouse.init();
            this.showToast(__('toast.ing.add.success'), 'success');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.ing.add.error'), 'error');
        }
    },

    _adminEditIngredient(id) {
        const ing = Warehouse.ingredients.find(i => i.id === id);
        if (!ing) return;

        const editSection = document.getElementById('adm-ing-edit-section');
        if (!editSection) return;

        editSection.innerHTML = `
            <div style="background:var(--bg-elevated);border:1.5px solid var(--primary);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--primary);display:flex;align-items:center;gap:6px;">${POS.icn('edit', '16px')} Редактирование: ${ing.name}</div>
                <div style="display:grid;grid-template-columns:2.5fr 1fr 1.2fr 1fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Название</label>
                        <input type="text" class="form-input" id="adm-edit-ing-name" value="${ing.name}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Ед. изм.</label>
                        <select class="form-input" id="adm-edit-ing-unit">
                            ${['кг', 'л', 'шт', 'гр', 'мл', 'порц'].map(u => `<option value="${u}" ${ing.unit === u ? 'selected' : ''}>${u}</option>`).join('')}
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Себестоимость</label>
                        <input type="number" class="form-input" id="adm-edit-ing-cost" value="${ing.cost}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Запас на складе</label>
                        <input type="number" step="0.01" class="form-input" id="adm-edit-ing-stock" value="${ing.stock}">
                    </div>
                    <div style="display:flex;gap:6px;align-items:end;">
                        <button class="btn btn-primary" onclick="POS._adminSaveIngredient(${ing.id})" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="Сохранить изменения">${POS.icn('check', '18px')}</button>
                        <button class="btn btn-ghost" onclick="document.getElementById('adm-ing-edit-section').innerHTML=''" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="${__('action.cancel')}">${POS.icn('x', '18px')}</button>
                    </div>
                </div>
            </div>
        `;
        editSection.scrollIntoView({ behavior: 'smooth' });
    },

    async _adminSaveIngredient(id) {
        const name = document.getElementById('adm-edit-ing-name')?.value.trim();
        const unit = document.getElementById('adm-edit-ing-unit')?.value;
        const cost = parseInt(document.getElementById('adm-edit-ing-cost')?.value);
        const stock = parseFloat(document.getElementById('adm-edit-ing-stock')?.value || 0);

        if (!name || isNaN(cost)) {
            this.showToast('Заполните все поля корректно!', 'warning');
            return;
        }

        const updatedIng = {
            id,
            name,
            unit,
            cost,
            stock
        };

        try {
            await DB.put('ingredients', updatedIng);
            await Warehouse.init();
            this.showToast(__('toast.ing.save.success'), 'success');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.ing.save.error'), 'error');
        }
    },

    async _adminDeleteIngredient(id) {
        const ing = Warehouse.ingredients.find(i => i.id === id);
        if (!ing) return;

        if (!(await this._confirm(`Удалить ингредиент «${ing.name}» из склада? Рецепты, использующие его, также могут пострадать.`))) return;

        try {
            await DB.delete('ingredients', id);
            await Warehouse.init();
            this.showToast(__('toast.ing.delete.success'), 'info');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.ing.delete.error'), 'error');
        }
    },

    /* ---- Recipe / Tech Cards Editor ---- */
    _adminWarehouseRecipesContent() {
        return `
            <div style="display:flex;flex-direction:column;gap:8px;">
                ${this.menu.map(m => {
                    const card = Warehouse.techCards.find(tc => tc.menuItemId === m.id);
                    const count = card ? card.ingredients.length : 0;
                    return `
                        <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);">
                            <span style="flex:2;font-size:14px;font-weight:600;">${m.name}</span>
                            <span style="flex:1.4;font-size:12px;color:${count > 0 ? 'var(--success)' : 'var(--text-muted)'};">${count > 0 ? __('admin.warehouse.recipe.has.ingredients') : __('admin.warehouse.recipe.no.ingredients')}</span>
                            <span style="flex:1;font-size:12.5px;font-weight:700;color:var(--primary);white-space:nowrap;">${Warehouse.getFoodCost(m.id).toLocaleString()} ${__('currency.sum')}</span>
                            <button class="btn btn-sm btn-secondary" onclick="POS._adminOpenRecipeModal(${m.id})" title="${__('admin.warehouse.recipe.open.btn')}" style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
                                ${POS.icn('file-text', '16px')} ${__('admin.warehouse.recipe.open.btn')}
                            </button>
                        </div>
                    `;
                }).join('')}
                ${this.menu.length === 0 ? `<div style="text-align:center;padding:50px 20px;color:var(--text-muted);font-size:13px;">${__('admin.warehouse.recipe.help')}</div>` : ''}
            </div>
        `;
    },

    /* Renders the tech-card (recipe) editor for a single dish inside a popup modal window */
    _adminRecipeModalContent(menuItemId) {
        const selectedItem = this.menu.find(m => m.id === menuItemId);
        if (!selectedItem) return '';
        const currentRecipe = Warehouse.techCards.find(tc => tc.menuItemId === menuItemId);

        return `
            <div class="modal" style="max-width:560px;display:flex;flex-direction:column;">
                <div class="modal-header">
                    <div class="modal-title">${POS.icn('file-text', '18px')} ${__('admin.warehouse.recipe.modal.title')} ${selectedItem.name}</div>
                    <button class="modal-close" onclick="POS._adminCloseRecipeModal()"><span class="icon">${POS.icon('x', '18px')}</span></button>
                </div>
                <div class="modal-body" id="adm-recipe-modal-body" style="display:flex;flex-direction:column;">
                    <div style="font-size:11px;color:var(--text-muted);margin-bottom:16px;">${__('admin.warehouse.recipe.cost')} <strong style="color:var(--primary);font-size:12.5px;">${Warehouse.getFoodCost(selectedItem.id).toLocaleString()} ${__('currency.sum')}</strong> (${__('admin.warehouse.recipe.sale')} ${selectedItem.price.toLocaleString()} ${__('currency.sum')})</div>

                    <!-- Список ингредиентов в рецепте -->
                    <div style="margin-bottom:16px;background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:10px;">
                        <div style="font-weight:600;font-size:12px;margin-bottom:8px;color:var(--text-secondary);">${POS.icn('file-text', '14px')} ${__('admin.warehouse.recipe.composition')}</div>
                        <div style="display:flex;flex-direction:column;gap:6px;" id="adm-recipe-ingredients-list">
                            ${currentRecipe && currentRecipe.ingredients.length > 0 ? currentRecipe.ingredients.map(req => {
                                const ing = Warehouse.ingredients.find(i => i.id === req.ingredientId);
                                if (!ing) return '';
                                return `
                                    <div style="display:flex;align-items:center;justify-content:space-between;font-size:12.5px;background:var(--bg-base);padding:6px 10px;border-radius:4px;border:1px solid var(--border-subtle);">
                                        <span style="font-weight:600;">${ing.name}</span>
                                        <div style="display:flex;align-items:center;gap:8px;">
                                            <input type="number" step="0.001" style="width:70px;text-align:center;padding:2px 4px;font-size:12px;"
                                                class="form-input adm-recipe-qty-input" data-ing-id="${ing.id}" value="${req.amount}"
                                                onchange="POS._adminUpdateRecipeQty(${selectedItem.id}, ${ing.id}, this.value)">
                                            <span style="color:var(--text-secondary);font-size:11px;width:30px;">${ing.unit}</span>
                                            <button class="order-item-remove" onclick="POS._adminDeleteRecipeIngredient(${selectedItem.id}, ${ing.id})"
                                                style="width:20px;height:20px;font-size:10px;color:var(--danger);" title="${__('item.remove.btn')}">✕</button>
                                        </div>
                                    </div>
                                `;
                            }).join('') : '<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:12px 0;">' + __('admin.warehouse.recipe.empty') + '</div>'}
                        </div>
                    </div>

                    <!-- Добавить ингредиент в рецепт -->
                    <div style="background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:12px;margin-bottom:16px;">
                        <div style="font-weight:600;font-size:11px;margin-bottom:8px;color:var(--text-secondary);">${POS.icn('plus', '12px')} ${__('admin.warehouse.recipe.add')}</div>
                        <div style="display:grid;grid-template-columns:2fr 1fr auto;gap:8px;align-items:end;">
                            <div style="display:flex;flex-direction:column;gap:4px;">
                                <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">Ингредиент</label>
                                <select class="form-input" id="adm-recipe-new-ing" style="font-size:12px;height:34px;">
                                    ${Warehouse.ingredients
                                        .filter(i => !currentRecipe || !currentRecipe.ingredients.some(req => req.ingredientId === i.id))
                                        .map(i => `<option value="${i.id}">${i.name} (${i.unit})</option>`).join('')}
                                </select>
                            </div>
                            <div style="display:flex;flex-direction:column;gap:4px;">
                                <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">Расход</label>
                                <input type="number" step="0.001" class="form-input" id="adm-recipe-new-qty" placeholder="0.1" value="0.1" style="font-size:12px;height:34px;">
                            </div>
                            <button class="btn btn-sm btn-primary" onclick="POS._adminAddRecipeIngredient(${selectedItem.id})" style="height:34px;">${POS.icn('plus', '14px')} Добавить</button>
                        </div>
                    </div>

                    <!-- Кнопка сохранения -->
                    <button class="btn btn-primary" onclick="POS._adminSaveRecipe(${selectedItem.id})" style="width:100%;">${POS.icn('check', '14px')} ${__('admin.warehouse.recipe.save.btn')}</button>
                </div>
            </div>
        `;
    },

    _adminOpenRecipeModal(menuItemId) {
        this._recipeSelectedMenuItemId = menuItemId;
        const overlay = document.getElementById('modal-overlay');
        const modal = document.getElementById('modal-content');
        if (!overlay || !modal) return;
        modal.innerHTML = this._adminRecipeModalContent(menuItemId);
        overlay.classList.add('active');
    },

    _adminRefreshRecipeModal() {
        if (!this._recipeSelectedMenuItemId) return;
        const modal = document.getElementById('modal-content');
        if (!modal) return;
        modal.innerHTML = this._adminRecipeModalContent(this._recipeSelectedMenuItemId);
    },

    _adminCloseRecipeModal() {
        this._recipeSelectedMenuItemId = null;
        const modal = document.getElementById('modal-content');
        if (modal) modal.innerHTML = '';
        this.showAdminPanel('warehouse');
    },

    _adminAddRecipeIngredient(menuItemId) {
        const ingId = parseInt(document.getElementById('adm-recipe-new-ing')?.value);
        const qty = parseFloat(document.getElementById('adm-recipe-new-qty')?.value);

        if (isNaN(ingId) || isNaN(qty) || qty <= 0) {
            this.showToast(__('toast.recipe.qty'), 'warning');
            return;
        }

        let card = Warehouse.techCards.find(tc => tc.menuItemId === menuItemId);
        if (!card) {
            card = { menuItemId: menuItemId, ingredients: [] };
            Warehouse.techCards.push(card);
        }

        card.ingredients.push({ ingredientId: ingId, amount: qty });
        this._adminRefreshRecipeModal();
        this.showToast(__('toast.recipe.added'), 'info');
    },

    _adminUpdateRecipeQty(menuItemId, ingredientId, value) {
        const qty = parseFloat(value);
        if (isNaN(qty) || qty <= 0) {
            this.showToast(__('toast.recipe.qty.gt.zero'), 'warning');
            return;
        }
        const card = Warehouse.techCards.find(tc => tc.menuItemId === menuItemId);
        if (card) {
            const req = card.ingredients.find(r => r.ingredientId === ingredientId);
            if (req) {
                req.amount = qty;
            }
        }
    },

    _adminDeleteRecipeIngredient(menuItemId, ingredientId) {
        const card = Warehouse.techCards.find(tc => tc.menuItemId === menuItemId);
        if (card) {
            card.ingredients = card.ingredients.filter(r => r.ingredientId !== ingredientId);
            this._adminRefreshRecipeModal();
            this.showToast(__('toast.recipe.deleted'), 'info');
        }
    },

    async _adminSaveRecipe(menuItemId) {
        const card = Warehouse.techCards.find(tc => tc.menuItemId === menuItemId);
        const recipePayload = card ? card : { menuItemId: menuItemId, ingredients: [] };

        try {
            await DB.put('tech_cards', recipePayload);
            await Warehouse.init();
            this.showToast(__('toast.recipe.saved'), 'success');
            this._adminRefreshRecipeModal();
        } catch (e) {
            this.showToast(__('toast.recipe.failed'), 'error');
        }
    },

    _movementDraftMeta: { type: 'receipt', supplierId: '', fromLocation: '', toLocation: '', note: '' },

    _adminWarehouseSuppliersContent() {
        const suppliers = Array.isArray(Warehouse.suppliers) ? Warehouse.suppliers : [];

        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <div style="background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--text-primary);">${POS.icn('plus', '14px')} ${__('admin.warehouse.supplier.add')}</div>
                <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1.5fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Название</label>
                        <input type="text" class="form-input" id="adm-sup-name" placeholder="${__('admin.warehouse.supplier.name.placeholder')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Телефон</label>
                        <input type="text" class="form-input" id="adm-sup-phone" placeholder="+998...">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('receipt.inn.label')}</label>
                        <input type="text" class="form-input" id="adm-sup-inn" placeholder="${__('receipt.inn.label')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Адрес</label>
                        <input type="text" class="form-input" id="adm-sup-address" placeholder="${__('admin.warehouse.supplier.address.placeholder')}">
                    </div>
                    <button class="btn btn-primary" onclick="POS._adminAddSupplier()" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;">${POS.icn('plus', '18px')}</button>
                </div>
            </div>

            <div id="adm-sup-edit-section"></div>

            <div style="font-weight:700;margin-bottom:12px;font-size:14px;display:flex;justify-content:space-between;align-items:center;">
                <span>${POS.icn('users', '16px')} ${__('admin.warehouse.supplier.title')}</span>
                <span style="font-size:11px;font-weight:normal;color:var(--text-muted);">Всего: ${suppliers.length}</span>
            </div>
            <div style="flex:1;min-height:0;overflow-y:auto;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);">
                <table style="width:100%;text-align:left;border-collapse:collapse;font-size:13px;">
                    <thead style="background:var(--bg-elevated);position:sticky;top:0;z-index:1;">
                        <tr style="border-bottom:1px solid var(--border-subtle);">
                            <th style="padding:12px 16px;">Название</th>
                            <th style="padding:12px 16px;">Телефон</th>
                            <th style="padding:12px 16px;">${__('receipt.inn.label')}</th>
                            <th style="padding:12px 16px;">Адрес</th>
                            <th style="padding:12px 16px;text-align:right;">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${suppliers.map(s => `
                            <tr style="border-bottom:1px solid var(--border-subtle);background:var(--bg-card);">
                                <td style="padding:12px 16px;font-weight:600;">${s.name || ''}</td>
                                <td style="padding:12px 16px;color:var(--text-secondary);">${s.phone || '—'}</td>
                                <td style="padding:12px 16px;color:var(--text-secondary);">${s.inn || '—'}</td>
                                <td style="padding:12px 16px;color:var(--text-secondary);">${s.address || '—'}</td>
                                <td style="padding:12px 16px;text-align:right;white-space:nowrap;">
                                    <div style="display:inline-flex;gap:10px;justify-content:flex-end;align-items:center;">
                                        <button class="order-item-remove" onclick="POS._adminEditSupplier('${s.id}')" style="width:30px;height:30px;margin:0;" title="${__('action.edit')}">${POS.icn('edit', '16px')}</button>
                                        <button class="order-item-remove" onclick="POS._adminDeleteSupplier('${s.id}')" style="width:30px;height:30px;color:var(--danger);margin:0;" title="${__('item.remove.btn')}">${POS.icn('x', '16px')}</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        ${suppliers.length === 0 ? '<tr><td colspan="5" style="padding:20px;text-align:center;color:var(--text-muted);">' + __('admin.warehouse.supplier.empty') + '</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
            </div>
        `;
    },

    async _adminAddSupplier() {
        const name = document.getElementById('adm-sup-name')?.value.trim();
        const phone = document.getElementById('adm-sup-phone')?.value.trim();
        const inn = document.getElementById('adm-sup-inn')?.value.trim();
        const address = document.getElementById('adm-sup-address')?.value.trim();

        if (!name) {
            this.showToast(__('toast.sup.validate'), 'warning');
            return;
        }
        if (Warehouse.suppliers.some(s => (s.name || '').toLowerCase() === name.toLowerCase())) {
            this.showToast(__('toast.sup.exists'), 'error');
            return;
        }

        const supplier = {
            id: 'SUP-' + Date.now() + '-' + Math.random().toString(16).slice(2, 6),
            name,
            phone,
            inn,
            address
        };

        try {
            await DB.put('suppliers', supplier);
            await Warehouse.init();
            this.showToast(__('toast.sup.add.success'), 'success');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.sup.add.error'), 'error');
        }
    },

    _adminEditSupplier(id) {
        const sup = Warehouse.suppliers.find(s => s.id === id);
        if (!sup) return;
        const editSection = document.getElementById('adm-sup-edit-section');
        if (!editSection) return;

        editSection.innerHTML = `
            <div style="background:var(--bg-elevated);border:1.5px solid var(--primary);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--primary);display:flex;align-items:center;gap:6px;">${POS.icn('edit', '16px')} Редактирование: ${sup.name}</div>
                <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1.5fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Название</label>
                        <input type="text" class="form-input" id="adm-edit-sup-name" value="${sup.name || ''}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Телефон</label>
                        <input type="text" class="form-input" id="adm-edit-sup-phone" value="${sup.phone || ''}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('receipt.inn.label')}</label>
                        <input type="text" class="form-input" id="adm-edit-sup-inn" value="${sup.inn || ''}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Адрес</label>
                        <input type="text" class="form-input" id="adm-edit-sup-address" value="${sup.address || ''}">
                    </div>
                    <div style="display:flex;gap:6px;align-items:end;">
                        <button class="btn btn-primary" onclick="POS._adminSaveSupplier('${sup.id}')" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="Сохранить изменения">${POS.icn('check', '18px')}</button>
                        <button class="btn btn-ghost" onclick="document.getElementById('adm-sup-edit-section').innerHTML=''" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="${__('action.cancel')}">${POS.icn('x', '18px')}</button>
                    </div>
                </div>
            </div>
        `;
        editSection.scrollIntoView({ behavior: 'smooth' });
    },

    async _adminSaveSupplier(id) {
        const name = document.getElementById('adm-edit-sup-name')?.value.trim();
        const phone = document.getElementById('adm-edit-sup-phone')?.value.trim();
        const inn = document.getElementById('adm-edit-sup-inn')?.value.trim();
        const address = document.getElementById('adm-edit-sup-address')?.value.trim();

        if (!name) {
            this.showToast(__('toast.sup.validate'), 'warning');
            return;
        }

        try {
            await DB.put('suppliers', { id, name, phone, inn, address });
            await Warehouse.init();
            this.showToast(__('toast.sup.save.success'), 'success');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.sup.save.error'), 'error');
        }
    },

    async _adminDeleteSupplier(id) {
        const sup = Warehouse.suppliers.find(s => s.id === id);
        if (!sup) return;
        if (!(await this._confirm(`Удалить поставщика «${sup.name}»?`))) return;

        try {
            await DB.delete('suppliers', id);
            await Warehouse.init();
            this.showToast(__('toast.sup.delete.success'), 'info');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast(__('toast.sup.delete.error'), 'error');
        }
    },

    _adminUpdateMovementMeta(key, value) {
        this._movementDraftMeta = { ...this._movementDraftMeta, [key]: value };
    },

    _adminWarehouseMovementsContent() {
        const ingredients = Array.isArray(Warehouse.ingredients) ? Warehouse.ingredients : [];
        const suppliers = Array.isArray(Warehouse.suppliers) ? Warehouse.suppliers : [];
        const movements = Array.isArray(Warehouse.stockMovements) ? [...Warehouse.stockMovements] : [];
        movements.sort((a, b) => new Date(b.created_at || b.createdAt || 0) - new Date(a.created_at || a.createdAt || 0));

        const draftItems = this._movementDraftItems || [];
        const meta = this._movementDraftMeta || { type: 'receipt', supplierId: '', fromLocation: '', toLocation: '', note: '' };

        return `
            <div style="background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--text-primary);">${POS.icn('truck', '14px')} ${__('admin.warehouse.movement.new')}</div>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;align-items:end;margin-bottom:10px;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Тип</label>
                        <select class="form-input" id="adm-mov-type" onchange="POS._adminUpdateMovementMeta('type', this.value)">
                            <option value="receipt" ${meta.type === 'receipt' ? 'selected' : ''}>${__('admin.warehouse.movement.type.receipt')}</option>
                            <option value="inventory" ${meta.type === 'inventory' ? 'selected' : ''}>${__('admin.warehouse.movement.type.inventory')}</option>
                            <option value="transfer" ${meta.type === 'transfer' ? 'selected' : ''}>${__('admin.warehouse.movement.type.transfer')}</option>
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('admin.warehouse.movement.supplier')}</label>
                        <select class="form-input" id="adm-mov-supplier" onchange="POS._adminUpdateMovementMeta('supplierId', this.value)">
                            <option value="">—</option>
                            ${suppliers.map(s => `<option value="${s.id}" ${meta.supplierId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Откуда</label>
                        <input type="text" class="form-input" id="adm-mov-from" value="${meta.fromLocation || ''}" oninput="POS._adminUpdateMovementMeta('fromLocation', this.value)" placeholder="main">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Куда</label>
                        <input type="text" class="form-input" id="adm-mov-to" value="${meta.toLocation || ''}" oninput="POS._adminUpdateMovementMeta('toLocation', this.value)" placeholder="branch-2">
                    </div>
                </div>
                <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:12px;">
                    <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Комментарий</label>
                    <input type="text" class="form-input" id="adm-mov-note" value="${meta.note || ''}" oninput="POS._adminUpdateMovementMeta('note', this.value)" placeholder="${__('admin.warehouse.movement.note.placeholder')}">
                </div>

                <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-sm);padding:12px;margin-bottom:12px;">
                    <div style="font-weight:600;font-size:11px;margin-bottom:8px;color:var(--text-secondary);">${POS.icn('plus', '12px')} ${__('admin.warehouse.movement.add.item')}</div>
                    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr auto;gap:8px;align-items:end;">
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">Ингредиент</label>
                            <select class="form-input" id="adm-mov-ing">
                                ${ingredients.map(i => `<option value="${i.id}">${i.name} (${i.unit})</option>`).join('')}
                            </select>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">Кол-во</label>
                            <input type="number" step="0.01" class="form-input" id="adm-mov-qty" placeholder="0">
                        </div>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">Себестоимость</label>
                            <input type="number" class="form-input" id="adm-mov-cost" placeholder="${__('admin.warehouse.movement.item.cost.placeholder')}">
                        </div>
                        <div style="display:flex;flex-direction:column;gap:4px;">
                            <label style="font-size:10px;font-weight:600;color:var(--text-secondary);">${__('admin.warehouse.movement.item.actual')}</label>
                            <input type="number" step="0.01" class="form-input" id="adm-mov-actual" placeholder="${__('admin.warehouse.movement.item.actual.placeholder')}">
                        </div>
                        <button class="btn btn-sm btn-primary" onclick="POS._adminAddMovementItem()" style="height:34px;">${POS.icn('plus', '14px')} Добавить</button>
                    </div>
                    <div style="margin-top:8px;font-size:11px;color:var(--text-muted);">${__('admin.warehouse.movement.help')}</div>
                </div>

                <div style="margin-bottom:12px;">
                    <div style="font-weight:600;font-size:12px;margin-bottom:6px;color:var(--text-secondary);">${__('admin.warehouse.movement.draft.title')}</div>
                    <div style="display:flex;flex-direction:column;gap:6px;">
                        ${draftItems.length > 0 ? draftItems.map((it, idx) => `
                            <div style="display:flex;align-items:center;justify-content:space-between;font-size:12.5px;background:var(--bg-base);padding:6px 10px;border-radius:4px;border:1px solid var(--border-subtle);">
                                <span style="font-weight:600;">${it.name}</span>
                                <div style="display:flex;align-items:center;gap:10px;">
                                    ${it.quantity !== undefined ? `<span>${it.quantity} ${it.unit}</span>` : ''}
                                    ${it.actualQty !== undefined ? `<span>Факт: ${it.actualQty} ${it.unit}</span>` : ''}
                                    ${it.cost !== undefined ? `<span>${it.cost} сум</span>` : ''}
                                    <button class="order-item-remove" onclick="POS._adminRemoveMovementItem(${idx})" style="width:20px;height:20px;font-size:10px;color:var(--danger);" title="${__('item.remove.btn')}">✕</button>
                                </div>
                            </div>
                        `).join('') : `<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:8px 0;">${__('admin.warehouse.movement.draft.empty')}</div>`}
                    </div>
                </div>

                <div style="display:flex;gap:8px;">
                    <button class="btn btn-primary" onclick="POS._adminSaveMovement()">${POS.icn('check', '14px')} ${__('admin.warehouse.movement.save.btn')}</button>
                    <button class="btn btn-secondary" onclick="POS._adminClearMovementDraft()">Очистить</button>
                </div>
            </div>

            <div style="font-weight:700;margin-bottom:12px;font-size:14px;">${POS.icn('file-text', '16px')} ${__('admin.warehouse.movement.history')}</div>
            <div style="max-height:260px;overflow-y:auto;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);">
                <table style="width:100%;text-align:left;border-collapse:collapse;font-size:12.5px;">
                    <thead style="background:var(--bg-elevated);position:sticky;top:0;z-index:1;">
                        <tr style="border-bottom:1px solid var(--border-subtle);">
                            <th style="padding:10px 12px;">Дата</th>
                            <th style="padding:10px 12px;">Тип</th>
                            <th style="padding:10px 12px;">Позиции</th>
                            <th style="padding:10px 12px;">Комментарий</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${movements.slice(0, 20).map(m => {
                            const createdAt = m.created_at || m.createdAt;
                            const items = Array.isArray(m.items) ? m.items : [];
                            const typeMap = { receipt: __('admin.warehouse.movement.type.receipt'), inventory: __('admin.warehouse.movement.type.inventory'), transfer: __('admin.warehouse.movement.type.transfer') };
                            const itemsLabel = items.map(it => {
                                const qty = it.quantity ?? it.actualQty ?? it.actual ?? it.amount;
                                const ingId = it.ingredientId || it.id;
                                const ingName = ingredients.find(i => i.id === ingId)?.name || ingId;
                                return `${ingName} × ${qty}`;
                            }).join(', ');
                            return `
                                <tr style="border-bottom:1px solid var(--border-subtle);background:var(--bg-card);">
                                    <td style="padding:10px 12px;">${createdAt ? new Date(createdAt).toLocaleString('ru-RU') : '—'}</td>
                                    <td style="padding:10px 12px;">${typeMap[m.type] || m.type || '—'}</td>
                                    <td style="padding:10px 12px;color:var(--text-secondary);">${itemsLabel || '—'}</td>
                                    <td style="padding:10px 12px;color:var(--text-secondary);">${m.note || '—'}</td>
                                </tr>
                            `;
                        }).join('')}
                        ${movements.length === 0 ? '<tr><td colspan="4" style="padding:20px;text-align:center;color:var(--text-muted);">' + __('admin.warehouse.movement.history.empty') + '</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    },

    _adminAddMovementItem() {
        const type = this._movementDraftMeta?.type || 'receipt';
        const ingId = parseInt(document.getElementById('adm-mov-ing')?.value);
        const qty = parseFloat(document.getElementById('adm-mov-qty')?.value);
        const cost = parseInt(document.getElementById('adm-mov-cost')?.value);
        const actual = parseFloat(document.getElementById('adm-mov-actual')?.value);

        const ing = Warehouse.ingredients.find(i => i.id === ingId);
        if (!ing) {
            this.showToast(__('toast.mov.select.ing'), 'warning');
            return;
        }

        if (type === 'inventory') {
            if (isNaN(actual) || actual < 0) {
                this.showToast(__('toast.mov.enter.fact'), 'warning');
                return;
            }
            this._movementDraftItems.push({
                ingredientId: ing.id,
                name: ing.name,
                unit: ing.unit,
                actualQty: actual
            });
        } else {
            if (isNaN(qty) || qty <= 0) {
                this.showToast(__('toast.mov.enter.qty'), 'warning');
                return;
            }
            const itemCost = Number.isFinite(cost) ? cost : ing.cost;
            this._movementDraftItems.push({
                ingredientId: ing.id,
                name: ing.name,
                unit: ing.unit,
                quantity: qty,
                cost: type === 'receipt' ? itemCost : undefined
            });
        }
        this.showAdminPanel('warehouse');
    },

    _adminRemoveMovementItem(index) {
        this._movementDraftItems.splice(index, 1);
        this.showAdminPanel('warehouse');
    },

    _adminClearMovementDraft() {
        this._movementDraftItems = [];
        this.showAdminPanel('warehouse');
    },

    async _adminSaveMovement() {
        const meta = this._movementDraftMeta || { type: 'receipt', supplierId: '', fromLocation: '', toLocation: '', note: '' };
        const type = meta.type || 'receipt';
        const items = this._movementDraftItems || [];

        if (!items.length) {
            this.showToast('Добавьте позиции в движение', 'warning');
            return;
        }

        const movementId = 'MOV-' + Date.now() + '-' + Math.random().toString(16).slice(2, 6);
        const payloadItems = items.map(it => {
            if (type === 'inventory') {
                return { ingredientId: it.ingredientId, actualQty: it.actualQty };
            }
            const base = { ingredientId: it.ingredientId, quantity: it.quantity };
            if (type === 'receipt') base.cost = it.cost;
            return base;
        });

        try {
            await DB.put('stock_movements', {
                id: movementId,
                type,
                supplierId: meta.supplierId || null,
                fromLocation: meta.fromLocation || null,
                toLocation: meta.toLocation || null,
                items: payloadItems,
                note: meta.note || null,
                createdBy: this.state.cashierName,
                createdAt: new Date().toISOString()
            });
            for (const item of items) {
                const ing = Warehouse.ingredients.find(i => i.id === item.ingredientId);
                if (!ing) continue;
                if (type === 'receipt') {
                    ing.stock += item.quantity;
                } else if (type === 'inventory') {
                    ing.stock = item.actualQty;
                } else if (type === 'transfer') {
                    ing.stock -= item.quantity;
                }
                await DB.put('ingredients', ing);
            }
            await Warehouse.init();
            this._movementDraftItems = [];
            this.showToast('Движение сохранено', 'success');
            this.showAdminPanel('warehouse');
        } catch (e) {
            this.showToast('Не удалось сохранить движение', 'error');
        }
    },

    /* ---- CRM (Guests Database) ---- */
    _editingGuestPhone: null,

    _adminCRMContent() {
        if (typeof CRM === 'undefined') return __('admin.crm.missing');
        const editingPhone = this._editingGuestPhone;

        return `
            <div style="display:flex;flex-direction:column;height:100%;">
            <!-- Регистрация нового гостя -->
            <div style="background:var(--bg-elevated);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--text-primary);">${POS.icn('user-plus', '16px')} ${__('admin.crm.guest.add')}</div>
                <div style="display:grid;grid-template-columns:1.5fr 1.5fr 1fr 1fr 1fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Телефон</label>
                        <input type="text" class="form-input" id="adm-gst-phone" placeholder="${__('admin.crm.guest.phone.placeholder')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Имя</label>
                        <input type="text" class="form-input" id="adm-gst-name" placeholder="${__('admin.crm.guest.name.placeholder')}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Статус</label>
                        <select class="form-input" id="adm-gst-tier">
                            <option value="basic">Basic (3%)</option>
                            <option value="silver">Silver (5%)</option>
                            <option value="gold">Gold (10%)</option>
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('admin.crm.guest.points')}</label>
                        <input type="number" class="form-input" id="adm-gst-points" placeholder="0" value="0">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">${__('admin.crm.guest.spent')}</label>
                        <input type="number" class="form-input" id="adm-gst-spent" placeholder="0" value="0">
                    </div>
                    <button class="btn btn-primary" onclick="POS._adminAddGuest()" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;">${POS.icn('plus', '18px')}</button>
                </div>
            </div>

            <!-- Раздел редактирования гостя -->
            <div id="adm-gst-edit-section"></div>

            <!-- Поиск гостей -->
            <div style="margin-bottom:12px;position:relative;">
                <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--text-muted);pointer-events:none;display:flex;">${POS.icn('search', '14px')}</span>
                <input type="text" class="form-input" placeholder="${__('admin.crm.guest.search')}" 
                    oninput="POS._adminFilterList(this, 'adm-crm-list')" style="width:100%;padding-left:36px;">
            </div>

            <!-- Список гостей -->
            <div style="font-weight:700;margin-bottom:12px;font-size:14px;display:flex;justify-content:space-between;align-items:center;">
                <span>${POS.icn('users', '16px')} ${__('admin.crm.guests.title')}</span>
                <span style="font-size:11px;font-weight:normal;color:var(--text-muted);">${__('admin.crm.guests.total')} ${CRM.guests.length}</span>
            </div>
            
            <div style="flex:1;min-height:0;overflow-y:auto;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);">
                <table style="width:100%;text-align:left;border-collapse:collapse;font-size:13px;">
                    <thead style="background:var(--bg-elevated);position:sticky;top:0;z-index:1;">
                        <tr style="border-bottom:1px solid var(--border-subtle);"><th style="padding:12px 16px;">${__('admin.crm.guests.th.name')}</th><th style="padding:12px 16px;">${__('admin.crm.guests.th.phone')}</th><th style="padding:12px 16px;">${__('admin.crm.guests.th.tier')}</th><th style="padding:12px 16px;">${__('admin.crm.guests.th.points')}</th><th style="padding:12px 16px;">${__('admin.crm.guests.th.spent')}</th><th style="padding:12px 16px;text-align:right;">${__('admin.crm.guests.th.actions')}</th></tr>
                    </thead>
                    <tbody id="adm-crm-list">
                        ${CRM.guests.map(guest => {
                            let tierBadge = `<span style="background:var(--border-subtle);color:var(--text-secondary);padding:4px 10px;border-radius:10px;font-size:12px;font-weight:600;">Basic</span>`;
                            if (guest.tier === 'silver') tierBadge = `<span style="background:#e5e7eb;color:#374151;padding:4px 10px;border-radius:10px;font-size:12px;font-weight:600;border:1px solid #d1d5db;">Silver</span>`;
                            if (guest.tier === 'gold') tierBadge = `<span style="background:#fef3c7;color:#b45309;padding:4px 10px;border-radius:10px;font-size:12px;font-weight:600;border:1px solid #fde68a;">Gold</span>`;

                            return `
                                <tr data-name="${guest.name.toLowerCase()}" data-phone="${guest.phone}" style="border-bottom:1px solid var(--border-subtle);background:var(--bg-card);">
                                    <td style="padding:12px 16px;font-weight:600;">${guest.name}</td>
                                    <td style="padding:12px 16px;font-family:monospace;">${guest.phone}</td>
                                    <td style="padding:12px 16px;">${tierBadge}</td>
                                    <td style="padding:12px 16px;font-weight:bold;color:var(--primary);">${guest.points.toLocaleString()}</td>
                                    <td style="padding:12px 16px;">${guest.totalSpent.toLocaleString()} ${__('currency.sum')}</td>
                                    <td style="padding:12px 16px;text-align:right;white-space:nowrap;">
                                        <div style="display:inline-flex;gap:10px;justify-content:flex-end;align-items:center;vertical-align:middle;">
                                            <button class="order-item-remove" onclick="POS._adminEditGuest('${guest.phone}')" style="width:30px;height:30px;margin:0;" title="${__('action.edit')}">${POS.icn('edit', '16px')}</button>
                                            <button class="order-item-remove" onclick="POS._adminDeleteGuest('${guest.phone}')" style="width:30px;height:30px;color:var(--danger);margin:0;" title="${__('item.remove.btn')}">${POS.icn('x', '16px')}</button>
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                        ${CRM.guests.length === 0 ? '<tr><td colspan="6" style="padding:20px;text-align:center;color:var(--text-muted);">' + __('admin.crm.guests.empty') + '</td></tr>' : ''}
                    </tbody>
                </table>
            </div>
        `;
    },

    async _adminAddGuest() {
        const phone = document.getElementById('adm-gst-phone')?.value.trim();
        const name = document.getElementById('adm-gst-name')?.value.trim();
        const tier = document.getElementById('adm-gst-tier')?.value;
        const points = parseInt(document.getElementById('adm-gst-points')?.value || 0);
        const spent = parseInt(document.getElementById('adm-gst-spent')?.value || 0);

        if (!phone || !name) {
            this.showToast(__('admin.crm.guest.add.validate'), 'warning');
            return;
        }

        if (CRM.guests.some(g => g.phone === phone)) {
            this.showToast(`Гость с номером ${phone} ${__('admin.crm.guest.exists')}`, 'error');
            return;
        }

        const newGuest = {
            phone,
            name,
            tier,
            points,
            totalSpent: spent
        };

        try {
            await DB.put('guests', newGuest);
            await CRM.init();
            this.showToast(__('admin.crm.guest.add.success'), 'success');
            this.showAdminPanel('crm');
        } catch (e) {
            this.showToast(__('admin.crm.guest.add.error'), 'error');
        }
    },

    _adminEditGuest(phone) {
        const guest = CRM.guests.find(g => g.phone === phone);
        if (!guest) return;

        const editSection = document.getElementById('adm-gst-edit-section');
        if (!editSection) return;

        editSection.innerHTML = `
            <div style="background:var(--bg-elevated);border:1.5px solid var(--primary);border-radius:var(--radius-md);padding:16px;margin-bottom:16px;">
                <div style="font-weight:700;margin-bottom:12px;font-size:13px;color:var(--primary);display:flex;align-items:center;gap:6px;">${POS.icn('edit', '16px')} Редактирование гостя: ${guest.name} (${guest.phone})</div>
                <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr auto;gap:8px;align-items:end;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Имя</label>
                        <input type="text" class="form-input" id="adm-edit-gst-name" value="${guest.name}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Уровень трат</label>
                        <select class="form-input" id="adm-edit-gst-tier">
                            <option value="basic" ${guest.tier === 'basic' ? 'selected' : ''}>Basic (3%)</option>
                            <option value="silver" ${guest.tier === 'silver' ? 'selected' : ''}>Silver (5%)</option>
                            <option value="gold" ${guest.tier === 'gold' ? 'selected' : ''}>Gold (10%)</option>
                        </select>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Бонусные баллы</label>
                        <input type="number" class="form-input" id="adm-edit-gst-points" value="${guest.points}">
                    </div>
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <label style="font-size:11px;font-weight:600;color:var(--text-secondary);">Сумма покупок</label>
                        <input type="number" class="form-input" id="adm-edit-gst-spent" value="${guest.totalSpent}">
                    </div>
                    <div style="display:flex;gap:6px;align-items:end;">
                        <button class="btn btn-primary" onclick="POS._adminSaveGuest('${guest.phone}')" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="Сохранить изменения">${POS.icn('check', '18px')}</button>
                        <button class="btn btn-ghost" onclick="document.getElementById('adm-gst-edit-section').innerHTML=''" style="height:42px;width:42px;display:flex;align-items:center;justify-content:center;" title="${__('action.cancel')}">${POS.icn('x', '18px')}</button>
                    </div>
                </div>
            </div>
        `;
        editSection.scrollIntoView({ behavior: 'smooth' });
    },

    async _adminSaveGuest(phone) {
        const name = document.getElementById('adm-edit-gst-name')?.value.trim();
        const tier = document.getElementById('adm-edit-gst-tier')?.value;
        const points = parseInt(document.getElementById('adm-edit-gst-points')?.value || 0);
        const spent = parseInt(document.getElementById('adm-edit-gst-spent')?.value || 0);

        if (!name || isNaN(points) || isNaN(spent)) {
            this.showToast(__('admin.crm.guest.edit.validate'), 'warning');
            return;
        }

        const updatedGuest = {
            phone,
            name,
            tier,
            points,
            totalSpent: spent
        };

        try {
            await DB.put('guests', updatedGuest);
            await CRM.init();
            this.showToast(__('admin.crm.guest.edit.success'), 'success');
            this.showAdminPanel('crm');
        } catch (e) {
            this.showToast(__('admin.crm.guest.edit.error'), 'error');
        }
    },

    async _adminDeleteGuest(phone) {
        const guest = CRM.guests.find(g => g.phone === phone);
        if (!guest) return;

        if (!(await this._confirm(`Вы действительно хотите удалить гостя «${guest.name}» (${guest.phone}) из базы данных?`))) return;

        try {
            await DB.delete('guests', phone);
            await CRM.init();
            this.showToast(__('admin.crm.guest.delete.success'), 'info');
            this.showAdminPanel('crm');
        } catch (e) {
            this.showToast(__('admin.crm.guest.delete.error'), 'error');
        }
    },

    /* ---- Reports ---- */
    _adminReportsContent() {
        const today = new Date().toISOString().slice(0, 10);
        const weekAgo = new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10);
        const startDate = this._reportStartDate || weekAgo;
        const endDate = this._reportEndDate || today;
        return `
            <div style="max-width:900px;margin:0 auto;width:100%;">
                <div style="display:flex;gap:12px;align-items:center;margin-bottom:20px;flex-wrap:wrap;">
                    <span style="font-weight:600;font-size:14px;display:inline-flex;align-items:center;gap:4px;">${this.icn('calendar', '14px')} ${__('reports.period')}:</span>
                    <input type="date" id="rpt-start" value="${startDate}" onchange="POS._reportDateChanged()" style="padding:8px 12px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-size:13px;">
                    <span style="color:var(--text-muted);">—</span>
                    <input type="date" id="rpt-end" value="${endDate}" onchange="POS._reportDateChanged()" style="padding:8px 12px;border:1px solid var(--border-subtle);border-radius:var(--radius-sm);background:var(--bg-card);color:var(--text-primary);font-size:13px;">
                    <button class="btn btn-primary" onclick="POS._adminRefreshReport()" style="padding:8px 18px;">${this.icn('refresh-ccw', '14px')} ${__('reports.update')}</button>
                    <button class="btn btn-secondary" onclick="POS._adminExportReportExcel()" style="padding:8px 18px;">${this.icn('file-text', '14px')} Excel</button>
                    <button class="btn btn-secondary" onclick="POS._adminPrintReport()" style="padding:8px 18px;">${this.icn('printer', '14px')} ${__('reports.print')}</button>
                </div>
                <div id="rpt-content" style="min-height:200px;">
                    <div style="text-align:center;padding:40px;color:var(--text-muted);">${this.icn('bar-chart', '24px')}<br>${__('reports.loading')}</div>
                </div>
            </div>`;
    },

    _reportDateChanged() {
        this._reportStartDate = document.getElementById('rpt-start')?.value || '';
        this._reportEndDate = document.getElementById('rpt-end')?.value || '';
    },

    async _adminRefreshReport() {
        const start = document.getElementById('rpt-start')?.value;
        const end = document.getElementById('rpt-end')?.value;
        if (!start || !end) return;
        this._reportStartDate = start;
        this._reportEndDate = end;
        const container = document.getElementById('rpt-content');
        if (!container) return;
        container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">' + this.icn('bar-chart', '24px') + '<br>' + __('reports.loading') + '</div>';
        try {
            const r = await Reports.generateXReport(start, end);
            const fmt = n => (n || 0).toLocaleString() + ' ' + __('currency.sum');
            container.innerHTML = 
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px;">' +
                    '<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;">' +
                        '<h3 style="margin:0 0 12px;font-size:14px;font-weight:700;color:var(--primary);border-bottom:2px solid var(--primary-muted);padding-bottom:8px;display:flex;align-items:center;gap:6px;">' + this.icn('trending-up', '14px') + ' ' + __('reports.sales') + '</h3>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.cash') + '</span><span style="font-weight:600;font-size:13px;">' + fmt(r.cashRevenue + r.refundCash) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border-subtle);"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.terminal') + '</span><span style="font-weight:600;font-size:13px;">' + fmt(r.cardRevenue + r.refundCard) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border-subtle);"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.mobile') + '</span><span style="font-weight:600;font-size:13px;">' + fmt(r.mobileRevenue + r.refundMobile) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border-subtle);"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.vat') + ' (' + r.vatRate + '%)</span><span style="font-weight:600;font-size:13px;">' + fmt(r.salesVat) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:8px 0;margin-top:6px;border-top:2px solid var(--primary-muted);font-weight:700;"><span>' + __('reports.total') + ':</span><span style="color:var(--primary);">' + fmt(r.totalRevenue + r.refundTotal) + '</span></div>' +
                    '</div>' +
                    '<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;">' +
                        '<h3 style="margin:0 0 12px;font-size:14px;font-weight:700;color:var(--danger);border-bottom:2px solid var(--danger-muted);padding-bottom:8px;display:flex;align-items:center;gap:6px;">' + this.icn('corner-up-left', '14px') + ' ' + __('reports.refunds') + '</h3>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.cash') + '</span><span style="font-weight:600;font-size:13px;color:var(--danger);">' + fmt(r.refundCash) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border-subtle);"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.terminal') + '</span><span style="font-weight:600;font-size:13px;color:var(--danger);">' + fmt(r.refundCard) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:6px 0;border-top:1px solid var(--border-subtle);"><span style="color:var(--text-secondary);font-size:13px;">' + __('reports.mobile') + '</span><span style="font-weight:600;font-size:13px;color:var(--danger);">' + fmt(r.refundMobile) + '</span></div>' +
                        '<div style="display:flex;justify-content:space-between;padding:8px 0;margin-top:6px;border-top:2px solid var(--danger-muted);font-weight:700;"><span>' + __('reports.total') + ':</span><span style="color:var(--danger);">' + fmt(r.refundTotal) + '</span></div>' +
                    '</div>' +
                '</div>' +
                '<div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);overflow:hidden;">' +
                    '<div style="padding:14px 16px;font-weight:700;font-size:14px;border-bottom:1px solid var(--border-subtle);background:var(--bg-elevated);display:flex;align-items:center;gap:6px;">' + this.icn('info', '14px') + ' ' + __('reports.xinfo') + '</div>' +
                    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--border-subtle);">' +
                        [
                            [__('reports.open.time'), r.openTime],
                            [__('reports.close.time'), r.closeTime],
                            [__('reports.order.count'), r.orderCount],
                            [__('reports.total.revenue'), fmt(r.totalRevenue)],
                            [__('reports.cash.revenue'), fmt(r.cashRevenue)],
                            [__('reports.noncash.revenue'), fmt(r.cardRevenue + r.mobileRevenue)],
                            [__('reports.refunded'), fmt(r.refundTotal)],
                            [__('reports.vat.amount'), fmt(r.salesVat)],
                        ].map(([k,v]) => '<div style="padding:10px 16px;background:var(--bg-card);font-size:13px;"><span style="color:var(--text-secondary);">' + k + '</span><br><span style="font-weight:600;">' + v + '</span></div>').join('') +
                    '</div>' +
                '</div>' +
                '<div id="rpt-history" style="margin-top:20px;"></div>';
            this._renderReportHistory(start, end);
        } catch(e) {
            container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--danger);">' + __('reports.error') + ': ' + e.message + '</div>';
        }
    },

    async _renderReportHistory(start, end) {
        const container = document.getElementById('rpt-history');
        if (!container) return;
        const days = await Reports.getXReportsHistory();
        const filtered = days.filter(([day]) => day >= start && day <= end);
        if (filtered.length === 0) {
            container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px;">' + __('reports.no.data') + '</div>';
            return;
        }
        const page = this._reportPage || 1;
        const perPage = 7;
        const totalPages = Math.ceil(filtered.length / perPage);
        const paged = filtered.slice((page - 1) * perPage, page * perPage);
        let html = '<div style="font-weight:700;font-size:14px;margin-bottom:10px;display:flex;align-items:center;gap:6px;">' + this.icn('calendar', '14px') + ' ' + __('reports.daily') + '</div>';
        html += '<div style="overflow-x:auto;border:1px solid var(--border-subtle);border-radius:var(--radius-md);">';
        html += '<table style="width:100%;border-collapse:collapse;font-size:13px;min-width:600px;">';
        html += '<thead><tr style="background:var(--bg-elevated);">';
        [__('reports.date'),__('reports.checks'),__('reports.total'),__('reports.cash'),__('reports.card'),__('reports.mobile'),__('reports.refund')].forEach(h => {
            html += '<th style="padding:10px 14px;text-align:left;border-bottom:2px solid var(--border-subtle);font-weight:700;color:var(--text-muted);">' + h + '</th>';
        });
        html += '</tr></thead><tbody>';
        paged.forEach(([day, data]) => {
            const total = data.orders.reduce((s, o) => s + (o.total || 0), 0);
            const cash = data.orders.reduce((s, o) => s + ((o.paymentType === 1 || o.paymentMethod === 'cash') ? (o.total || 0) : 0), 0);
            const card = data.orders.reduce((s, o) => s + ((o.paymentType === 2 || o.paymentMethod === 'card') ? (o.total || 0) : 0), 0);
            const mobile = data.orders.reduce((s, o) => s + ((o.paymentType === 5 || o.paymentMethod === 'mobile') ? (o.total || 0) : 0), 0);
            const refunds = data.returns.reduce((s, r) => s + (r.amount || 0), 0);
            html += '<tr style="border-bottom:1px solid var(--border-subtle);background:var(--bg-card);">' +
                '<td style="padding:10px 14px;font-weight:600;">' + day + '</td>' +
                '<td style="padding:10px 14px;">' + data.orders.length + '</td>' +
                '<td style="padding:10px 14px;font-weight:600;">' + (total - refunds).toLocaleString() + '</td>' +
                '<td style="padding:10px 14px;">' + cash.toLocaleString() + '</td>' +
                '<td style="padding:10px 14px;">' + card.toLocaleString() + '</td>' +
                '<td style="padding:10px 14px;">' + mobile.toLocaleString() + '</td>' +
                '<td style="padding:10px 14px;color:var(--danger);">' + refunds.toLocaleString() + '</td>' +
            '</tr>';
        });
        html += '</tbody></table></div>';
        if (totalPages > 1) {
            html += '<div style="display:flex;gap:6px;justify-content:center;margin-top:12px;">';
            for (let i = 1; i <= totalPages; i++) {
                html += '<button class="btn btn-sm ' + (i === page ? 'btn-primary' : 'btn-secondary') + '" onclick="POS._reportPage=' + i + ';POS._adminRefreshReport()" style="padding:6px 12px;min-width:32px;">' + i + '</button>';
            }
            html += '</div>';
        }
        container.innerHTML = html;
    },

    async _adminPrintReport() {
        const start = document.getElementById('rpt-start')?.value;
        const end = document.getElementById('rpt-end')?.value;
        if (!start || !end) return;
        try {
            const r = await Reports.generateXReport(start, end);
            Reports.printReport(r);
        } catch(e) {
            this.showToast(__('reports.error') + ': ' + e.message, 'error');
        }
    },

    async _adminExportReportExcel() {
        const start = document.getElementById('rpt-start')?.value;
        const end = document.getElementById('rpt-end')?.value;
        if (!start || !end) return;
        try {
            const r = await Reports.generateXReport(start, end);
            const days = await Reports.getXReportsHistory();
            const filtered = days.filter(([day]) => day >= start && day <= end);
            const dateStr = new Date().toLocaleDateString('ru-RU');
            let xlsHTML = `
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">
<style>
table { border-collapse: collapse; width: 100%; font-family: Calibri, Arial, sans-serif; font-size: 12px; }
th { background-color: #6b21a8; color: white; font-weight: bold; border: 1px solid #ddd; padding: 7px; text-align: left; }
td { border: 1px solid #ddd; padding: 6px; }
.heading { font-size: 16px; font-weight: bold; color: #6b21a8; margin: 12px 0 4px; }
.subhead { font-size: 13px; color: #666; margin: 0 0 8px; }
.section-title { background-color: #f3e8ff; font-weight: bold; }
.total-row { background-color: #faf5ff; font-weight: bold; }
.num { text-align: right; }
</style>
</head>
<body>
<h2 style="color:#6b21a8;">${__('reports.xreport')}</h2>
<p style="color:#666;">${__('reports.period')}: ${start} - ${end} | ${__('reports.generated')}: ${dateStr}</p>

<table>
<tr><th colspan="2" style="background-color:#7c3aed;">${__('reports.sales')}</th></tr>
<tr><td class="section-title">${__('reports.cash')}</td><td class="num">${(r.cashRevenue + r.refundCash).toLocaleString()}</td></tr>
<tr><td class="section-title">${__('reports.terminal')}</td><td class="num">${(r.cardRevenue + r.refundCard).toLocaleString()}</td></tr>
<tr><td class="section-title">${__('reports.mobile')}</td><td class="num">${(r.mobileRevenue + r.refundMobile).toLocaleString()}</td></tr>
<tr><td class="section-title">${__('reports.vat')}</td><td class="num">${r.salesVat.toLocaleString()}</td></tr>
<tr class="total-row"><td>${__('reports.total')}</td><td class="num">${(r.totalRevenue + r.refundTotal).toLocaleString()}</td></tr>
</table>
<br/>

<table>
<tr><th colspan="2" style="background-color:#7c3aed;">${__('reports.refunds')}</th></tr>
<tr><td class="section-title">${__('reports.cash')}</td><td class="num">${r.refundCash.toLocaleString()}</td></tr>
<tr><td class="section-title">${__('reports.terminal')}</td><td class="num">${r.refundCard.toLocaleString()}</td></tr>
<tr><td class="section-title">${__('reports.mobile')}</td><td class="num">${r.refundMobile.toLocaleString()}</td></tr>
<tr class="total-row"><td>${__('reports.total')}</td><td class="num">${r.refundTotal.toLocaleString()}</td></tr>
</table>
<br/>
`;
            if (filtered.length) {
                xlsHTML += '<table><tr><th>' + __('reports.date') + '</th><th>' + __('reports.checks') + '</th><th>' + __('reports.total') + '</th><th>' + __('reports.cash') + '</th><th>' + __('reports.card') + '</th><th>' + __('reports.mobile') + '</th><th>' + __('reports.refund') + '</th></tr>';
                filtered.forEach(([day, data]) => {
                    const total = data.orders.reduce((s, o) => s + (o.total || 0), 0);
                    const cash = data.orders.reduce((s, o) => s + ((o.paymentType === 1 || o.paymentMethod === 'cash') ? (o.total || 0) : 0), 0);
                    const card = data.orders.reduce((s, o) => s + ((o.paymentType === 2 || o.paymentMethod === 'card') ? (o.total || 0) : 0), 0);
                    const mobile = data.orders.reduce((s, o) => s + ((o.paymentType === 5 || o.paymentMethod === 'mobile') ? (o.total || 0) : 0), 0);
                    const refunds = data.returns.reduce((s, r) => s + (r.amount || 0), 0);
                    xlsHTML += '<tr><td>' + day + '</td><td class="num">' + data.orders.length + '</td><td class="num">' + (total - refunds).toLocaleString() + '</td><td class="num">' + cash.toLocaleString() + '</td><td class="num">' + card.toLocaleString() + '</td><td class="num">' + mobile.toLocaleString() + '</td><td class="num">' + refunds.toLocaleString() + '</td></tr>';
                });
                xlsHTML += '</table>';
            }
            xlsHTML += '</body></html>';
            const blob = new Blob(['\uFEFF' + xlsHTML], { type: 'application/vnd.ms-excel;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'x-report-' + start + '_' + end + '.xls';
            a.click();
            URL.revokeObjectURL(url);
            this.showToast(__('reports.exported'), 'success');
        } catch(e) {
            this.showToast(__('reports.error') + ': ' + e.message, 'error');
        }
    },

    /* ---- Data ---- */
    _adminDataContent() {
        return `
            <div style="max-width:600px;margin:0 auto;width:100%;">
                <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px;">${__('admin.data.title')}</p>
                <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
                    <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                        <div style="flex:1;min-width:200px;">
                            <div style="font-weight:600;font-size:13px;margin-bottom:4px;">${this.icn('download', '14px')} ${__('admin.data.export')}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${__('admin.data.export.desc')}</div>
                        </div>
                        <button class="btn btn-secondary" onclick="POS._adminExportData()" style="flex-shrink:0;">${this.icn('download', '14px')} JSON</button>
                    </div>
                    <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                        <div style="flex:1;min-width:200px;">
                            <div style="font-weight:600;font-size:13px;margin-bottom:4px;">${this.icn('archive', '14px')} ${__('admin.data.zip')}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${__('admin.data.zip.desc')}</div>
                        </div>
                        <button class="btn btn-primary" onclick="POS._adminExportZip()" style="flex-shrink:0;">${this.icn('archive', '14px')} ZIP</button>
                    </div>
                    <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-md);padding:16px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
                        <div style="flex:1;min-width:200px;">
                            <div style="font-weight:600;font-size:13px;margin-bottom:4px;">${this.icn('upload', '14px')} ${__('admin.data.import')}</div>
                            <div style="font-size:12px;color:var(--text-muted);">${__('admin.data.import.desc')}</div>
                        </div>
                        <button class="btn btn-secondary" onclick="document.getElementById('adm-import-file').click()" style="flex-shrink:0;">${this.icn('upload', '14px')} JSON</button>
                        <input type="file" id="adm-import-file" accept=".json" style="display:none;" onchange="POS._adminImportData(event)">
                    </div>
                </div>
                <div style="padding:16px;background:var(--danger-muted);border:1px solid var(--danger);border-radius:var(--radius-md);">
                    <div style="font-size:13px;font-weight:700;color:var(--danger);margin-bottom:8px;">${this.icn('alert-triangle', '14px')} ${__('admin.data.danger')}</div>
                    <div style="font-size:12px;color:var(--text-muted);margin-bottom:12px;">${__('admin.data.reset.desc')}</div>
                    <button class="btn btn-sm btn-danger" onclick="POS._adminResetAll()">${this.icn('trash-2', '14px')} ${__('admin.data.reset')}</button>
                </div>
                <div id="adm-data-status" style="margin-top:12px;"></div>
            </div>`;
    },

    _adminExportData() {
        const data = {
            menu: this.menu,
            categories: this.categories,
            modifiers: this.modifiers,
            staff: this.staff,
            tables: this.tables,
            state: this._exportState()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pos-backup-' + new Date().toISOString().slice(0, 10) + '.json';
        a.click();
        URL.revokeObjectURL(url);
        this.showToast(__('admin.data.exported'), 'success');
    },

    _adminExportZip() {
        if (typeof JSZip === 'undefined') { this.showToast(__('toast.shift.jszip.missing'), 'error'); return; }
        const zip = new JSZip();
        const dateStr = new Date().toISOString().slice(0, 10);
        const root = zip.folder('pos-export-' + dateStr);

        /* Settings & Staff */
        root.file('settings.txt', JSON.stringify({
            tin: this.state.tin, apiKey: this.state.apiKey,
            receiptCompany: this.state.receiptCompany,
            receiptAddress: this.state.receiptAddress,
            orderNumber: this.state.orderNumber,
            shiftOpen: this.state.shiftOpen,
            cashierName: this.state.cashierName,
        }, null, 2));
        root.file('staff.txt', JSON.stringify(this.staff, null, 2));
        root.file('tables.txt', JSON.stringify(this.tables, null, 2));

        /* Menu */
        const menu = root.folder('menu');
        menu.file('items.txt', JSON.stringify(this.menu, null, 2));
        menu.file('categories.txt', JSON.stringify(this.categories, null, 2));
        menu.file('modifiers.txt', JSON.stringify(this.modifiers, null, 2));

        /* Orders */
        const history = this.state.orderHistory || [];
        const orders = root.folder('orders');
        orders.file('all.txt', JSON.stringify(history, null, 2));

        const daily = {};
        history.forEach(o => {
            const day = new Date(o.date).toISOString().slice(0, 10);
            if (!daily[day]) daily[day] = [];
            daily[day].push(o);
        });
        const dailyFolder = orders.folder('daily');
        Object.keys(daily).forEach(day => {
            dailyFolder.file(day + '.txt', JSON.stringify(daily[day], null, 2));
        });

        /* Reports */
        const summary = {
            exportedAt: new Date().toISOString(),
            totalOrders: history.length,
            totalRevenue: history.reduce((s, o) => s + o.total, 0),
            days: Object.keys(daily).length,
            byDay: Object.keys(daily).map(day => ({
                date: day,
                orders: daily[day].length,
                revenue: daily[day].reduce((s, o) => s + o.total, 0),
                cash: daily[day].reduce((sum, o) => {
                    if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 1).reduce((s, p) => s + (p.amount || 0), 0);
                    return sum + (o.paymentType === 1 ? o.total : 0);
                }, 0),
                card: daily[day].reduce((sum, o) => {
                    if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 2).reduce((s, p) => s + (p.amount || 0), 0);
                    return sum + (o.paymentType === 2 ? o.total : 0);
                }, 0),
                mobile: daily[day].reduce((sum, o) => {
                    if (o.splitPayments) return sum + o.splitPayments.filter(p => p.type === 5).reduce((s, p) => s + (p.amount || 0), 0);
                    return sum + (o.paymentType === 5 ? o.total : 0);
                }, 0),
            })),
        };
        root.folder('reports').file('summary.txt', JSON.stringify(summary, null, 2));

        root.file('README.txt', `ЭКСПОРТ POS ТЕРМИНАЛА
Дата: ${new Date().toLocaleString('ru-RU')}
Заказов: ${history.length} · Выручка: ${summary.totalRevenue.toLocaleString()} ${__('currency.sum')}

Папки:
  settings.txt, staff.txt, tables.txt — настройки
  menu/ — блюда, категории, модификаторы
  orders/all.txt — все заказы
  orders/daily/*.txt — по дням
  reports/summary.txt — сводка
`);

        zip.generateAsync({ type: 'blob' }).then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'pos-export-' + dateStr + '.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            this.showToast('ZIP сохранён в Загрузки', 'success');
        }).catch(err => {
            this.showToast('Ошибка ZIP: ' + err.message, 'error');
        });
    },

    _adminImportData(event) {
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (Array.isArray(data.menu) && data.menu.length > 0) this.menu = data.menu;
                if (Array.isArray(data.categories) && data.categories.length > 0) this.categories = data.categories;
                if (Array.isArray(data.modifiers)) this.modifiers = data.modifiers;
                if (Array.isArray(data.staff) && data.staff.length > 0) this.staff = data.staff;
                if (Array.isArray(data.tables)) this.tables = data.tables;
                if (data.state) {
                    Object.keys(data.state).forEach(k => {
                        if (k === 'tables') { if (Array.isArray(data.state.tables)) this.tables = data.state.tables; return; }
                        if (data.state[k] !== undefined && data.state[k] !== null) this.state[k] = data.state[k];
                    });
                }
                this._saveMenuData();
                this.saveState();
                this.closeModal();
                this.renderMenu();
                this.renderCategories();
                this.showToast('Данные импортированы', 'success');
            } catch (err) {
                this.showToast('Ошибка импорта: ' + err.message, 'error');
            }
        };
        reader.readAsText(file);
        event.target.value = '';
    },

    async _adminResetAll() {
        if (!(await this._confirm('Это удалит все данные: меню, историю, настройки. Продолжить?'))) return;
        if (!(await this._confirm('Вы уверены? Все данные будут потеряны!'))) return;
        localStorage.removeItem('pos_state');
        location.reload();
    },

    _loadMenuData() {
        try {
            const saved = localStorage.getItem('pos_menu_data');
            if (saved) {
                const d = JSON.parse(saved);
            if (Array.isArray(d.menu) && d.menu.length > 0) this.menu = d.menu;
            if (Array.isArray(d.categories) && d.categories.length > 0) this.categories = d.categories;
            if (Array.isArray(d.modifiers)) this.modifiers = d.modifiers;
            if (Array.isArray(d.staff) && d.staff.length > 0) this.staff = d.staff;
            if (Array.isArray(d.tables)) this.tables = d.tables;
            }
            // Deduplicate menu by id
            if (Array.isArray(this.menu)) {
                const menuSeen = new Set();
                this.menu = this.menu.filter(m => {
                    if (!m.id || menuSeen.has(m.id)) return false;
                    menuSeen.add(m.id);
                    return true;
                });
            }
            // Deduplicate categories by id
            if (Array.isArray(this.categories)) {
                const catSeen = new Set();
                this.categories = this.categories.filter(c => {
                    if (!c.id || catSeen.has(c.id)) return false;
                    catSeen.add(c.id);
                    return true;
                });
                if (!this.categories.find(c => c.id === 'all')) {
                    this.categories.unshift({ id: 'all', name: 'Всё', emoji: 'clipboard' });
                }
            }
            this._migrateOldIcons();
        } catch (_) {}
    },

    _migrateOldIcons() {
        let changed = false;
        (this.categories || []).forEach(c => {
            const svg = this._emojiToSvg[c.emoji];
            if (svg) { c.emoji = svg; changed = true; }
        });
        (this.menu || []).forEach(m => {
            const svg = this._emojiToSvg[m.emoji];
            if (svg) { m.emoji = svg; changed = true; }
        });
        if (changed) this._saveMenuData();
    },

    _saveMenuData() {
        try {
            localStorage.setItem('pos_menu_data', JSON.stringify({
                menu: this.menu,
                categories: this.categories,
                modifiers: this.modifiers,
                staff: this.staff,
                tables: this.tables,
            }));
        } catch (_) {}
    },

    /* ======================== LOGOUT ======================== */
    async logout() {
        if (!(await this._confirm(__('toast.logout.confirm')))) return;
        this.state.loggedIn = false;
        this.state.vcrUsername = '';
        this.state.vcrPassword = '';
        this.saveState();
        this._showLoading();
        this._runLoadingSequence();
    },

    _switchRole() {
        this.state.loggedIn = false;
        this.saveState();
        this.showLogin();
    },

    /* ======================== MOBILE SUPPORT ======================== */
    _initMobileSupport() {
        this._populateSidebar();
        const orderPanel = document.getElementById('order-panel');
        if (!orderPanel) return;

        const dragHandle = orderPanel.querySelector('.order-drag-handle');
        if (dragHandle) {
            let startY = 0, currentY = 0, isDragging = false;
            const onStart = (e) => {
                if (!orderPanel.classList.contains('open')) return;
                startY = e.touches ? e.touches[0].clientY : e.clientY;
                isDragging = true;
                orderPanel.style.transition = 'none';
            };
            const onMove = (e) => {
                if (!isDragging) return;
                currentY = e.touches ? e.touches[0].clientY : e.clientY;
                const diff = currentY - startY;
                if (diff > 0) {
                    const height = orderPanel.offsetHeight;
                    const translate = Math.min(diff, height * 0.6);
                    orderPanel.style.transform = `translateY(${translate}px)`;
                }
            };
            const onEnd = () => {
                if (!isDragging) return;
                isDragging = false;
                orderPanel.style.transition = '';
                orderPanel.style.transform = '';
                const diff = currentY - startY;
                if (diff > 80) this.toggleOrderPanel();
            };
            dragHandle.addEventListener('touchstart', onStart, { passive: true });
            dragHandle.addEventListener('mousedown', onStart);
            document.addEventListener('touchmove', onMove, { passive: true });
            document.addEventListener('mousemove', onMove);
            document.addEventListener('touchend', onEnd);
            document.addEventListener('mouseup', onEnd);
        }

        document.addEventListener('click', (e) => {
            if (orderPanel.classList.contains('open') && window.innerWidth <= 768) {
                const cartBadge = document.querySelector('.mobile-cart-badge');
                if (cartBadge && cartBadge.contains(e.target)) return;
                if (orderPanel.contains(e.target)) return;
                this.toggleOrderPanel(false);
            }
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            const drawer = document.getElementById('sidebar-drawer');
            const btn = document.querySelector('.mobile-menu-btn');
            if (!drawer || !btn) return;
            if (drawer.classList.contains('open') && !drawer.contains(e.target) && !btn.contains(e.target)) {
                POS.closeMobileMenu();
            }
        });

        // Close sidebar on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') POS.closeMobileMenu();
        });
    },

    _sidebarLabel(onclick) {
        if (!onclick) return '';
        if (onclick.includes('showParkedOrders')) return __('sidebar.park');
        if (onclick.includes('showDiscountModal')) return __('sidebar.discount');
        if (onclick.includes('showServiceChargeModal')) return __('sidebar.service');
        if (onclick.includes('showAvailabilityManager')) return __('sidebar.availability');
        if (onclick.includes('showOrderHistory')) return __('sidebar.history');
        if (onclick.includes('showAdminPanel')) return __('sidebar.admin');
        if (onclick.includes('showSettings')) return __('sidebar.settings');
        if (onclick.includes('syncData')) return __('sidebar.sync');
        if (onclick.includes('toggleTheme')) return __('sidebar.theme');
        return '';
    },

    _populateSidebar() {
        const body = document.getElementById('sidebar-body');
        if (!body) return;
        body.innerHTML = '';
        const headerBtns = document.querySelectorAll('.header-right > .header-btn, .header-right > .header-icon-btn');
        headerBtns.forEach(btn => {
            if (btn.style.display === 'none') return;
            const item = document.createElement('button');
            item.className = 'sidebar-item';
            const iconHtml = btn.innerHTML;
            const onclickAttr = btn.getAttribute('onclick') || '';
            const label = this._sidebarLabel(onclickAttr) || btn.getAttribute('title') || '';
            item.innerHTML = `<span class="sidebar-item-icon">${iconHtml}</span><span>${label}</span>`;
            if (onclickAttr) {
                item.setAttribute('onclick', onclickAttr.replace(/;$/, '') + '; POS.closeMobileMenu()');
            }
            body.appendChild(item);
        });
        const switchItem = document.createElement('button');
        switchItem.className = 'sidebar-item';
        switchItem.innerHTML = `<span class="sidebar-item-icon"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span><span>${__('login.switch.role') || 'Сменить роль'}</span>`;
        switchItem.onclick = () => { POS._switchRole(); POS.closeMobileMenu(); };
        body.appendChild(switchItem);
        const statusIndicator = document.querySelector('.header-right > .status-indicator');
        if (statusIndicator) {
            const item = document.createElement('div');
            item.className = 'sidebar-item sidebar-item-status';
            const dot = statusIndicator.querySelector('.status-dot');
            const label = statusIndicator.querySelector('.status-label');
            item.innerHTML = `<span class="sidebar-item-icon">${dot ? dot.outerHTML : ''}</span><span>${label ? label.textContent : __('fiscal.offline')}</span>`;
            body.appendChild(item);
        }
        const sidebarUser = document.getElementById('sidebar-user');
        if (sidebarUser) {
            const headerUser = document.querySelector('.header-user');
            if (headerUser) {
                const avatar = headerUser.querySelector('.user-avatar');
                const name = headerUser.querySelector('.user-name');
                const role = headerUser.querySelector('.user-role');
                sidebarUser.innerHTML = `
                    <div class="sidebar-user-avatar">${avatar ? avatar.textContent : 'U'}</div>
                    <div class="sidebar-user-info">
                        <div class="sidebar-user-name">${name ? name.textContent : 'User'}</div>
                        <div class="sidebar-user-role">${role ? role.textContent : ''}</div>
                    </div>
                `;
            }
        }
    },

    toggleMobileMenu() {
        const drawer = document.getElementById('sidebar-drawer');
        const overlay = document.getElementById('sidebar-overlay');
        if (!drawer || !overlay) return;

        this._populateSidebar();

        const isOpen = drawer.classList.toggle('open');
        overlay.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    closeMobileMenu() {
        const drawer = document.getElementById('sidebar-drawer');
        const overlay = document.getElementById('sidebar-overlay');
        if (drawer) drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    },

    toggleOrderPanel(forceState) {
        const panel = document.getElementById('order-panel');
        const badge = document.querySelector('.mobile-cart-badge');
        if (!panel) return;
        const isOpen = forceState !== undefined ? forceState : !panel.classList.contains('open');
        panel.classList.toggle('open', isOpen);
        if (badge) badge.classList.toggle('hidden', isOpen);
    },

    _updateMobileCart() {
        const badge = document.querySelector('.mobile-cart-badge');
        if (!badge) return;
        const count = this.state.order.reduce((s, i) => s + i.quantity, 0);
        const total = this.getTotal();
        const countEl = badge.querySelector('.cart-count');
        const textEl = badge.querySelector('.cart-text');
        if (countEl) countEl.textContent = count;
        if (textEl) textEl.textContent = count > 0 ? ` ${total.toLocaleString()} ${__('currency.sum')}` : ' 0 ' + __('currency.sum');
    },
};

document.addEventListener('DOMContentLoaded', () => POS.init());



