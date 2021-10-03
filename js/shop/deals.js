// shop/deals.js

$(document).ready(function(){

  let searchParams = new URLSearchParams(window.location.search);

  if( searchParams.has('rurl') ) {

    let r_url = searchParams.get('rurl');
    console.log(r_url);

    $(location).prop('href', r_url)

  }

})

