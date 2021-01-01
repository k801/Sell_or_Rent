

$(".myselect").appendTo('.setting');
$(".select-social").appendTo('.social');

$(window).scroll(function(){


$topscroll=$(window).scrollTop();  

$categories=$('#p1').offset().top;

// console.log($topscroll);
// console.log($categories);

// if($topscroll>$categories)
// {

//     $('#search').css({
        
//         'position':'fixed',
//         'top':'-30px',
//         'width':"100%"

// });
// }

if($topscroll>$categories)
{
    $('#search').css({
        
        'position':'fixed',
        'top':'0px',
        'width':"100%"
    });
   
 
       
}else{

    $('#search').css({
        'position':'initial',

        ' top':'375px'
    })



}



})






// $('.play').click(function(e){

// $('.banner').fadeIn(400,function(){
    
//     $('body').css({'overflow':'hidden'})



// });

// })


// $('.closeBtn').click(function(e){

    
//     $('.banner').fadeOut(400,function(){

//         $('body').css({'overflow-y':'auto'})

    
//     });
    
//     })
    
    

