$('#get-gif-form').on('submit', function(e){
    e.preventDefault();
    getGifPromiseStyle(this['gif-search'].value);
})

function getGifCallback(query){
    $.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`, update)
}

function getGifPromiseStyle(query){
    var url = "https://bcw-getter.herokuapp.com/?url=";
    var apiUrl = url + encodeURIComponent('http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC');
    var gettingData = $.get(apiUrl)
        console.log(gettingData)
        gettingData.then(update)
        gettingData.fail(function(res){
            console.log(res)
        })
}

function getGifAjaxStyle(query){
    $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`,
        method: 'GET',
        success: update,
        error: function(res){
            console.log(res)
        }
    })
        
}




function update(res){
    res = JSON.parse(res)
    var gifs = res.data;
    var randI = Math.floor(Math.random()* gifs.length - 1)
    var gif = gifs[randI].embed_url

    $('#gif').html(`
        <iframe height="200" width="200" src="${gif}" />
    `)


}



// function get(url, successCb, errorCb, timeoutCb){
//     console.log('getting data from ' + url)
//     var thenCB
//     var promise = {
//         then: function(promiseCB){
//             thenCB = promiseCB
//         }
//     }

//     setTimeout(function(){
//         var data = 'We\'ve got the data'
//         if(cb){
//             return cb(data)
//         }else if(thenCB){
//             return thenCB(data)
//         }
//     }, 3000)

//     return promise
// }

// var x = get('codeworks.com', function(){}, function(){}, function(){});
// x.then(function(data){console.log(data)}).fail(function(){}).timeout(function(){})






















