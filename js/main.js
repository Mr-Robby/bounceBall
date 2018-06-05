$(function() {
    var cache = {
        $bounceBtn: $('.js-bounce'),
        $bounceBlock: $('.js-bounce-block'),
        iteration: 0,
        animationStop: false
    };

    cache.$bounceBtn.on('click', function () {
        var $block = cache.$bounceBlock;
        if(!$block.hasClass('bounce')) {
            cache.iteration = 0;
            $block.addClass('bounce')
        } else {
           cache.animationStop = true;
        }
    });

    cache.$bounceBlock.on('animationiteration', function() {
        cache.iteration++;
        if(cache.iteration % 2 === 0 && cache.animationStop) {
            cache.animationStop = false;
            cache.$bounceBlock.removeClass('bounce')
        }
    });
});