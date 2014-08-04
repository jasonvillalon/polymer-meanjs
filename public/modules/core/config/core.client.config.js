'use strict';

// Core module config
angular.module('core').run(['Menus',
	function(Menus) {
        Menus.addMenuItem('categories', 'Social', 'systemlist/social', 'dropdown', '/system(/create)?', false, ['authenticated', 'admin'], 'accessibility');
        Menus.addMenuItem('categories', 'Shopping', 'systemlist/shopping', 'dropdown', '/system(/create)?', false, ['authenticated', 'admin'], 'add-shopping-cart');
        Menus.addMenuItem('categories', 'Inventory', 'systemlist/inventory', 'dropdown', '/system(/create)?', false, ['authenticated', 'admin'], 'work');
        Menus.addMenuItem('categories', 'Health', 'systemlist/health', 'dropdown', '/system(/create)?', false, ['authenticated', 'admin'], 'event');
//        Menus.addSubMenuItem('categories', 'members', local.menuMembers[lang], 'members', undefined, false, 10);
    }
]);