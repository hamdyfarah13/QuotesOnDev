(function ($) {

  var endpoint = api_vars.root_url + 'wp/v2/posts';

  $('#new-quote-button').on('click', function (event) {
    event.preventDefault();
    $('.entry-content').empty();
    $('.entry-meta').empty();
    $.ajax({
      method: 'get',
      url: endpoint,
      data: {
        comment_status: 'closed'
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce); 
      }
    })
      .done(function (data) {
        function randQuote() {
          var num = data.length;
          var random = Math.floor(Math.random() * num);

          var content = [];

          content += '<p class="quote">' + data[random].excerpt.rendered + '</p>';
          content += '<p class="source">' + data[random]._qod_quote_source + '</p>';
          content += '<h2 class="author">' + data[random].title.rendered + '</h2>';

          return content;
        }

        $('.entry-content').append(randQuote());


      })
      .fail(function () {
        console.log('fail')
      })
      .always(function () {
        console.log('always')

      });
  });




  // Post Request Starts Here 


  $('.submit').on('click', function (event) {
    event.preventDefault();
      var author =  $('#quote-author').val();
      var quoteText =  $('#quote-content').val();
      var quoteSource =  $('#quote-source').val();
      var quoteSourceUrl =  $('#quote-source-url').val();

    
    $.ajax({
      method: 'post',
      url: endpoint,
      data: {
        title : author,
        content : quoteText,
        _qod_quote_source : quoteSource,
        _qod_quote_source_url : quoteSourceUrl,
        status : 'publish'
        },
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce); 
        }
      })
      .done(function () {
        console.log('Data successfully sent!')
        window.location.reload(true);
      })
      .fail(function () {
        console.log('fail')
      })
      .always(function () {
        console.log('always')

      });
  });


})(jQuery);