var Handlebars = require('handlebars');

Handlebars.registerHelper("startAtOne", function(value, options)
{
    return parseInt(value) + 1;
});