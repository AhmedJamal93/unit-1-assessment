$(document).ready(function(){
  let total_value = $('.total')
  $('.add').click(function(){
    let total_num = parseInt(total_value.html())
    let value_change = $('input').val();
    let value_num = parseInt(value_change)
    $('.total').html(total_num + value_num)
    if(parseInt($('.total').html())<0){
      $('.total').addClass('red')
    }
    if(parseInt($('.total').html())>=0){
      $('.total').removeClass('red')
    }
  })
  $('.minus').click(function(){
    let total_num = parseInt(total_value.html())
    let value_change = $('input').val();
    let value_num = parseInt(value_change)
    $('.total').html(total_num - value_num)
    if(parseInt($('.total').html())<0){
      $('.total').addClass('red')
    }
    if(parseInt($('.total').html())>=0){
      $('.total').removeClass('red')
    }
  })
})
