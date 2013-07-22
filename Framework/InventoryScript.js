(function ($, pubsub, util, data, renderEngine) {
    var generateAddress = function (albumId) {
            var currentMetadata = data.currentMetadata();
            return util.uriTemplate(currentMetadata.resources.mvcmusicstore_framework_inventoryresource, { 'albumId': albumId });
        },
        setup = function (args) {
            args.newData.data.inventory = { name: 'Inventory', data: '', isPermanent: true };
            args.newData.metadata.plugins.inventory = {};
        },
        build = function (args) { 
            var targets = $('[data-albumId]');
            if (targets.length > 0) {
                targets.mouseenter(function() { 
                    request(args.panel, $(this).attr('data-albumId')); 
                });
            } 
        },
        request = function (panel, albumId) {
            $.ajax({
                url: generateAddress(albumId),
                type: 'GET',
                contentType: 'application/json',
                success: function (result) {
                    layout(panel, result);
                }
            }); 
        },
        layout = function (panel, result) {
            renderEngine.insert(panel, result, { "keysHeadings": true });
        };

    pubsub.subscribe('action.data.initial.changed', setup);
    pubsub.subscribe('action.panel.rendered.inventory', build);
})(jQueryGlimpse, glimpse.pubsub, glimpse.util, glimpse.data, glimpse.render.engine);