(function ($, pubsub, util, data, renderEngine) {
    var setup = function (args) {
            args.newData.data.query = { name: 'Query', data: '', isPermanent: true };
            args.newData.metadata.plugins.query = {}; 
        };
    
    pubsub.subscribe('action.data.initial.changed', setup); 
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.data, glimpse.render.engine);