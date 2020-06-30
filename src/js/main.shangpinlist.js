require.config({
    paths:{
        jquery:'./jquery-3.2.1.min',
        shangpinlist:'./lib/shangpinlist'
    }
});

require(['shangpinlist'],function(shangpinlist){
    shangpinlist.render();
});