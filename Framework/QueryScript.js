(function ($, pubsub, util, data, renderEngine) {
    var setup = function (args) {
            args.newData.data.query = { name: 'Query', data: '', isPermanent: true };
            args.newData.metadata.plugins.query = {}; 
        },
        build = function(args) {
            args.panel.html('<div class="glimpse-header">Input</div><div class="glimpse-header-content"><textarea class="glimpse-query-input"></textarea><input type="button" class="glimpse-query-submit" value="Query?"></div><div class="glimpse-header">Output</div><div class="glimpse-query-output"><div class="glimpse-header-content"><em>No results currently found...</em></div></div>');
        };
    
    pubsub.subscribe('action.panel.rendered.query', build);
    pubsub.subscribe('action.data.initial.changed', setup); 
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.data, glimpse.render.engine);