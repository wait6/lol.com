require.config({
    paths:{
        jquery:'./jquery-3.2.1.min',
        shangpindetails:'./lib/shangpindetails'
    },
    shim:{}
});

require(['shangpindetails'],function(shangpindetails){
    shangpindetails.render();
});