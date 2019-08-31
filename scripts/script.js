let hoverItem = $('.product-item');
hoverItem.on('mouseover', function() {
    $(this).find("img").addClass('brightDown');
    $(this).find("button").addClass('color-change');
});
hoverItem.on('mouseout', function() {
    $(this).find("img").removeClass('brightDown');
    $(this).find("button").removeClass('color-change');

});

let hoverProduct = $('.products__item');
hoverProduct.on('mouseover', function() {
    $(this).find("img").addClass('brightDown');
    $(this).find("button").addClass('block');
    $(this).find(".plus").addClass('block');
});
hoverProduct.on('mouseout', function() {
    $(this).find("img").removeClass('brightDown');
    $(this).find("button").removeClass('block');
    $(this).find(".plus").removeClass('block');
});





